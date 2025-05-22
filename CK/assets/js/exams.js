// assets/js/exams.js

document.addEventListener('DOMContentLoaded', () => {
    loadExams();
});

async function loadExams() {
    const examListDiv = document.getElementById('examList');
    if (!examListDiv) return;

    examListDiv.innerHTML = '<p>Đang tải danh sách kỳ thi và kiểm tra...</p>';

    try {
        const exams = await fetchMockExams(); // from api.js

        if (exams.length === 0) {
            examListDiv.innerHTML = '<p>Hiện chưa có kỳ thi hoặc kiểm tra nào.</p>';
            return;
        }

        examListDiv.innerHTML = ''; 
        exams.forEach(exam => {
            const examItem = document.createElement('div');
            examItem.classList.add('exam-item');
            examItem.innerHTML = `
                <h3>${exam.title}</h3>
                <p>${exam.description}</p>
                <div class="exam-meta">
                    <span>Thời lượng: ${exam.duration}</span> | <span>Số câu: ${exam.numQuestions}</span> | <span>Ngày: ${exam.date}</span>
                </div>
                ${exam.available ? `<a href="#" class="btn btn-primary btn-small">Làm bài ngay</a>` : `<span class="btn btn-secondary btn-small disabled">Đã hết hạn</span>`}
            `;
            examListDiv.appendChild(examItem);
        });

    } catch (error) {
        console.error('Error loading exams:', error);
        examListDiv.innerHTML = '<p class="error">Không thể tải danh sách kỳ thi. Vui lòng thử lại sau.</p>';
    }
}