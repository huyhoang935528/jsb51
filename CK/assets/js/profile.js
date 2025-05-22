// assets/js/profile.js

document.addEventListener('DOMContentLoaded', () => {
    loadUserProfile();
});

async function loadUserProfile() {
    const profileNameSpan = document.getElementById('profileName');
    const profileEmailSpan = document.getElementById('profileEmail');
    const registeredCoursesDiv = document.getElementById('registeredCourses');
    const examHistoryDiv = document.getElementById('examHistory');

    const currentUser = await getCurrentUserMock(); // from api.js

    if (!currentUser) {
        
        if (profileNameSpan) profileNameSpan.textContent = 'Vui lòng đăng nhập.';
        return;
    }

    if (profileNameSpan) profileNameSpan.textContent = currentUser.name;
    if (profileEmailSpan) profileEmailSpan.textContent = currentUser.email;

    if (registeredCoursesDiv) {
        registeredCoursesDiv.innerHTML = '<h3>Khóa học đã đăng ký</h3>';
        if (currentUser.registeredCourses && currentUser.registeredCourses.length > 0) {
            for (const courseId of currentUser.registeredCourses) {
                const course = await fetchMockCourseById(courseId); // from api.js
                if (course) {
                    const courseCard = document.createElement('div');
                    courseCard.classList.add('course-card-small');
                    courseCard.innerHTML = `
                        <h4>${course.title}</h4>
                        <p>${course.description.substring(0, 80)}...</p>
                        <a href="courses.html?id=${course.id}">Xem khóa học</a>
                    `;
                    registeredCoursesDiv.appendChild(courseCard);
                }
            }
        } else {
            registeredCoursesDiv.innerHTML += '<p>Bạn chưa đăng ký khóa học nào.</p>';
        }
    }

    // Load exam history
    if (examHistoryDiv) {
        examHistoryDiv.innerHTML = '<h3>Lịch sử kiểm tra</h3>';
        if (currentUser.examHistory && currentUser.examHistory.length > 0) {
            for (const examRecord of currentUser.examHistory) {
                const exam = mockExams.find(e => e.id === examRecord.examId); 
                if (exam) {
                    const examItem = document.createElement('div');
                    examItem.classList.add('exam-record');
                    examItem.innerHTML = `
                        <h4>${exam.title}</h4>
                        <p>Điểm số: <strong>${examRecord.score}</strong> | Ngày: ${examRecord.date}</p>
                    `;
                    examHistoryDiv.appendChild(examItem);
                }
            }
        } else {
            examHistoryDiv.innerHTML += '<p>Bạn chưa làm bài kiểm tra nào.</p>';
        }
    }

    // Edit Profile Button (conceptual)
    const editProfileBtn = document.getElementById('editProfileBtn');
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', () => {
            alert('Tính năng chỉnh sửa hồ sơ đang được phát triển!');
        });
    }
}