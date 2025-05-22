
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedCourses();
    setupMainSearchBar();
});

async function loadFeaturedCourses() {
    const featuredCoursesDiv = document.getElementById('featuredCourses');
    if (!featuredCoursesDiv) return;

    featuredCoursesDiv.innerHTML = '<p>Đang tải khóa học nổi bật...</p>';

    try {
        const courses = await fetchMockCourses(); 
        const featured = courses.filter(course => course.isFeatured).slice(0, 3); 

        if (featured.length === 0) {
            featuredCoursesDiv.innerHTML = '<p>Không có khóa học nổi bật nào.</p>';
            return;
        }

        featuredCoursesDiv.innerHTML = ''; 
        featured.forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.classList.add('course-item');
            courseItem.innerHTML = `
                <img src="${course.image}" alt="${course.title}">
                <div class="course-content">
                    <h3>${course.title}</h3>
                    <p>${course.description.substring(0, 100)}...</p>
                    <p class="price">${course.price} VNĐ</p>
                    <a href="courses.html?id=${course.id}" class="btn btn-primary">Xem chi tiết</a>
                </div>
            `;
            featuredCoursesDiv.appendChild(courseItem);
        });

    } catch (error) {
        console.error('Error loading featured courses:', error);
        featuredCoursesDiv.innerHTML = '<p class="error">Không thể tải khóa học nổi bật. Vui lòng thử lại sau.</p>';
    }
}

function setupMainSearchBar() {
    const searchBar = document.getElementById('mainSearchBar');
    const searchButton = document.getElementById('searchButton');

    if (searchBar && searchButton) {
        searchButton.addEventListener('click', () => {
            const query = searchBar.value.trim();
            if (query) {
                window.location.href = `courses.html?search=${encodeURIComponent(query)}`;
            } else {
                alert('Vui lòng nhập từ khóa tìm kiếm.');
            }
        });

        searchBar.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const subject = document.getElementById('contactSubject').value;
        const message = document.getElementById('contactMessage').value;

        try {
            console.log('Sending contact message:', { name, email, subject, message });
            alert('Tin nhắn của bạn đã được gửi thành công! Chúng tôi sẽ phản hồi sớm nhất có thể.');
            contactForm.reset();
        } catch (error) {
            console.error('Error sending contact message:', error);
            alert('Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại.');
        }
    });
}