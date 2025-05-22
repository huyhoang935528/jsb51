// assets/js/courses.js

document.addEventListener('DOMContentLoaded', () => {
    loadAllCourses();
    setupCourseFilters();
});

async function loadAllCourses() {
    const allCoursesDiv = document.getElementById('allCourses');
    if (!allCoursesDiv) return;

    allCoursesDiv.innerHTML = '<p>Đang tải danh sách khóa học...</p>';

    try {
        const courses = await fetchMockCourses(); // from api.js

        if (courses.length === 0) {
            allCoursesDiv.innerHTML = '<p>Không có khóa học nào được tìm thấy.</p>';
            return;
        }

        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search');
        if (searchQuery) {
            document.getElementById('courseSearch').value = decodeURIComponent(searchQuery);
            filterCourses(courses, '', '', decodeURIComponent(searchQuery)); 
        } else {
            displayCourses(courses);
        }

    } catch (error) {
        console.error('Error loading all courses:', error);
        allCoursesDiv.innerHTML = '<p class="error">Không thể tải danh sách khóa học. Vui lòng thử lại sau.</p>';
    }
}

function displayCourses(coursesToDisplay) {
    const allCoursesDiv = document.getElementById('allCourses');
    allCoursesDiv.innerHTML = ''; 

    if (coursesToDisplay.length === 0) {
        allCoursesDiv.innerHTML = '<p>Không tìm thấy khóa học nào phù hợp với tiêu chí của bạn.</p>';
        return;
    }

    coursesToDisplay.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('course-item');
        courseItem.innerHTML = `
            <img src="${course.image}" alt="${course.title}">
            <div class="course-content">
                <h3>${course.title}</h3>
                <p>${course.description.substring(0, 150)}...</p>
                <p class="price">${course.price} VNĐ</p>
                <a href="course_detail.html?id=${course.id}" class="btn btn-primary">Xem chi tiết</a>
            </div>
        `;
        allCoursesDiv.appendChild(courseItem);
    });
}

function setupCourseFilters() {
    const gradeFilter = document.getElementById('gradeFilter');
    const subjectFilter = document.getElementById('subjectFilter');
    const courseSearch = document.getElementById('courseSearch');
    const applyFiltersBtn = document.getElementById('applyFilters');

    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', async () => {
            const selectedGrade = gradeFilter.value;
            const selectedSubject = subjectFilter.value;
            const searchText = courseSearch.value.toLowerCase();

            const allCourses = await fetchMockCourses(); 

            filterCourses(allCourses, selectedGrade, selectedSubject, searchText);
        });
    }
}

function filterCourses(courses, grade, subject, searchText) {
    const filtered = courses.filter(course => {
        const matchesGrade = (grade === '' || course.grade == grade || course.grade === 'all'); 
        const matchesSubject = (subject === '' || course.subject === subject);
        const matchesSearch = (searchText === '' || course.title.toLowerCase().includes(searchText) || course.description.toLowerCase().includes(searchText));
        return matchesGrade && matchesSubject && matchesSearch;
    });
    displayCourses(filtered);
}