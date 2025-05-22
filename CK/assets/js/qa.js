// assets/js/qa.js

document.addEventListener('DOMContentLoaded', () => {
    loadQuestions();
    setupQASearch();
    setupAskQuestionModal();
});

async function loadQuestions() {
    const questionListDiv = document.getElementById('questionList');
    if (!questionListDiv) return;

    questionListDiv.innerHTML = '<p>Đang tải câu hỏi...</p>';

    try {
        const questions = await fetchMockQuestions(); // from api.js

        if (questions.length === 0) {
            questionListDiv.innerHTML = '<p>Chưa có câu hỏi nào. Hãy là người đầu tiên đặt câu hỏi!</p>';
            return;
        }

        displayQuestions(questions);

    } catch (error) {
        console.error('Error loading questions:', error);
        questionListDiv.innerHTML = '<p class="error">Không thể tải câu hỏi. Vui lòng thử lại sau.</p>';
    }
}

function displayQuestions(questionsToDisplay) {
    const questionListDiv = document.getElementById('questionList');
    questionListDiv.innerHTML = ''; 

    if (questionsToDisplay.length === 0) {
        questionListDiv.innerHTML = '<p>Không tìm thấy câu hỏi nào phù hợp.</p>';
        return;
    }

    questionsToDisplay.forEach(q => {
        const questionItem = document.createElement('div');
        questionItem.classList.add('question-item');
        questionItem.innerHTML = `
            <h3>${q.title}</h3>
            <p>${q.content.substring(0, 200)}...</p>
            <div class="meta-info">
                <span>Người hỏi: ${q.author}</span> | <span>Ngày: ${q.date}</span> | <span class="answer-count">Trả lời: ${q.answers.length}</span>
            </div>
            <a href="#" class="btn btn-primary btn-small">Xem chi tiết & Trả lời</a>
        `;
        questionListDiv.appendChild(questionItem);
    });
}

function setupQASearch() {
    const qaSearchInput = document.getElementById('qaSearchInput');
    const qaSearchBtn = document.getElementById('qaSearchBtn');

    if (qaSearchBtn) {
        qaSearchBtn.addEventListener('click', async () => {
            const query = qaSearchInput.value.toLowerCase().trim();
            const allQuestions = await fetchMockQuestions();
            const filteredQuestions = allQuestions.filter(q =>
                q.title.toLowerCase().includes(query) ||
                q.content.toLowerCase().includes(query) ||
                q.answers.some(a => a.content.toLowerCase().includes(query))
            );
            displayQuestions(filteredQuestions);

            if (query.length > 5) { 
                getGeminiResponse(`Tóm tắt nội dung về "${query}" từ các câu hỏi và câu trả lời trong diễn đàn của PrepGenius.`).then(response => {
                    console.log("Gemini AI Summary:", response);
                }).catch(err => console.error(err));

                getDeepseekResponse(`Đề xuất các từ khóa liên quan đến "${query}" trong ngữ cảnh học tập.`).then(response => {
                    console.log("Deepseek AI Keywords:", response);
                }).catch(err => console.error(err));
            }
        });
    }
}

function setupAskQuestionModal() {
    const askQuestionBtn = document.getElementById('askQuestionBtn');
    const modal = document.getElementById('askQuestionModal');
    const closeBtn = modal.querySelector('.close-button');
    const newQuestionForm = document.getElementById('newQuestionForm');

    if (askQuestionBtn) {
        askQuestionBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    if (newQuestionForm) {
        newQuestionForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const title = document.getElementById('questionTitle').value.trim();
            const content = document.getElementById('questionContent').value.trim();
            const currentUser = await getCurrentUserMock(); 

            if (!currentUser) {
                alert('Bạn cần đăng nhập để đặt câu hỏi.');
                window.location.href = 'login.html';
                return;
            }

            if (title && content) {
                const newQuestion = {
                    id: `q${mockQuestions.length + 1}`,
                    title: title,
                    content: content,
                    author: currentUser.name, 
                    date: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
                    answers: []
                };
                mockQuestions.unshift(newQuestion); 
                alert('Câu hỏi của bạn đã được gửi thành công!');
                newQuestionForm.reset();
                modal.style.display = 'none';
                loadQuestions(); 
            } else {
                alert('Vui lòng điền đầy đủ tiêu đề và nội dung câu hỏi.');
            }
        });
    }
}