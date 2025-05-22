// assets/js/api.js

// --- Mock Data ---
// In a real application, this data would come from your backend APIs.
const mockCourses = [
    {
        id: 'c001',
        title: 'Khóa học Toán 12: Luyện thi THPT Quốc gia',
        description: 'Khóa học tổng ôn toàn bộ kiến thức Toán 12, luyện giải đề thi THPT Quốc gia các năm. Phù hợp cho học sinh muốn đạt điểm cao.',
        image: 'https://via.placeholder.com/300x200?text=Toan12',
        price: '2.500.000',
        grade: 12,
        subject: 'toan',
        isFeatured: true,
        lessons: [
            { id: 'l001', title: 'Chuyên đề Hàm số', content: 'Nội dung chi tiết về hàm số...', exercises: ['bt001', 'bt002'] },
            { id: 'l002', title: 'Chuyên đề Mũ - Logarit', content: 'Nội dung chi tiết về mũ logarit...', exercises: ['bt003'] },
        ],
        exercises: [
            { id: 'bt001', title: 'Bài tập hàm số cơ bản', content: 'Câu 1: ...', solution: 'Giải: ...' },
            { id: 'bt002', title: 'Bài tập cực trị hàm số', content: 'Câu 1: ...', solution: 'Giải: ...' },
            { id: 'bt003', title: 'Bài tập mũ logarit nâng cao', content: 'Câu 1: ...', solution: 'Giải: ...' },
        ]
    },
    {
        id: 'c002',
        title: 'Khóa học Lý 11: Điện học và Từ trường',
        description: 'Học chắc kiến thức điện học và từ trường lớp 11, chuẩn bị cho các kỳ thi học kỳ và Olympic.',
        image: 'https://via.placeholder.com/300x200?text=Ly11',
        price: '1.800.000',
        grade: 11,
        subject: 'ly',
        isFeatured: false,
        lessons: [],
        exercises: []
    },
    {
        id: 'c003',
        title: 'Khóa học Hóa 12: Hữu cơ và Vô cơ',
        description: 'Tổng hợp kiến thức hóa hữu cơ và vô cơ trọng tâm lớp 12, ôn luyện cho kỳ thi THPT Quốc gia.',
        image: 'https://via.placeholder.com/300x200?text=Hoa12',
        price: '2.200.000',
        grade: 12,
        subject: 'hoa',
        isFeatured: true,
        lessons: [],
        exercises: []
    },
    {
        id: 'c004',
        title: 'Khóa Toán Thực tế và Tư duy',
        description: 'Phát triển kỹ năng giải quyết bài toán thực tế và tư duy logic, không chỉ bó hẹp trong chương trình sách giáo khoa.',
        image: 'https://via.placeholder.com/300x200?text=ToanTT',
        price: '1.500.000',
        grade: 'all', // For all grades
        subject: 'toan',
        isFeatured: true,
        lessons: [],
        exercises: []
    },
    {
        id: 'c005',
        title: 'Khóa Tăng tốc Tiếng Anh Thi Đại học',
        description: 'Ôn luyện cấp tốc các dạng bài thi tiếng Anh THPT Quốc gia, nâng cao band điểm trong thời gian ngắn.',
        image: 'https://via.placeholder.com/300x200?text=AnhTD',
        price: '2.000.000',
        grade: 12,
        subject: 'anh',
        isFeatured: false,
        lessons: [],
        exercises: []
    },
];

const mockQuestions = [
    {
        id: 'q001',
        title: 'Giải thích định lý Lagrange trong Giải tích',
        content: 'Em chưa hiểu rõ về điều kiện và ý nghĩa hình học của định lý Lagrange. Thầy/cô và các bạn có thể giải thích chi tiết hơn được không ạ?',
        author: 'Nguyễn Văn A',
        date: '2024-05-20',
        answers: [
            { id: 'a001', author: 'Lê Thị B', content: 'Định lý Lagrange là một trường hợp đặc biệt của định lý Rolle, áp dụng cho hàm số liên tục trên [a,b] và khả vi trên (a,b). Nó khẳng định tồn tại ít nhất một điểm c thuộc (a,b) sao cho đạo hàm tại c bằng hệ số góc của dây cung nối hai điểm đầu mút.' },
            { id: 'a002', author: 'Admin PrepGenius', content: 'Chào bạn, định lý Lagrange còn gọi là định lý giá trị trung bình. Về mặt hình học, nó có nghĩa là trên cung đồ thị nối hai điểm A và B, luôn tồn tại ít nhất một điểm mà tại đó tiếp tuyến song song với dây cung AB.' }
        ]
    },
    {
        id: 'q002',
        title: 'Công thức tính chu kỳ dao động của con lắc đơn?',
        content: 'Em hay bị nhầm công thức tính chu kỳ T của con lắc đơn. Có cách nào để dễ nhớ hơn không ạ?',
        author: 'Trần Thị C',
        date: '2024-05-18',
        answers: [
            { id: 'a003', author: 'Vật Lý Gia', content: 'Công thức là $T = 2\\pi \\sqrt{\\frac{L}{g}}$. Bạn có thể nhớ là "Hai pi căn le gà" (L/g).' }
        ]
    }
];

const mockExams = [
    {
        id: 'e001',
        title: 'Đề thi thử THPT Quốc gia 2025 môn Toán',
        description: 'Đề thi gồm 50 câu trắc nghiệm, thời gian 90 phút. Cấu trúc bám sát đề minh họa của Bộ GD&ĐT.',
        duration: '90 phút',
        numQuestions: 50,
        date: '2025-06-01',
        available: true
    },
    {
        id: 'e002',
        title: 'Kiểm tra giữa kỳ II môn Hóa học 11',
        description: 'Kiểm tra kiến thức chương Điện ly và Phi kim. Gồm 30 câu trắc nghiệm và 2 bài tự luận.',
        duration: '45 phút',
        numQuestions: 32,
        date: '2025-05-25',
        available: true
    },
    {
        id: 'e003',
        title: 'Đề thi thử THPT Quốc gia 2024 môn Vật lý',
        description: 'Đề thi năm ngoái, giúp học sinh làm quen với các dạng bài khó.',
        duration: '90 phút',
        numQuestions: 40,
        date: '2024-06-15',
        available: false // Example: old exam, not actively available
    }
];

const mockUsers = [
    { id: 'u001', name: 'Nguyễn Văn A', email: 'nguyenvana@example.com', password: 'password123', registeredCourses: ['c001'], examHistory: [{ examId: 'e001', score: 8.5, date: '2025-06-01' }] },
    { id: 'u002', name: 'Trần Thị B', email: 'tranthib@example.com', password: 'password123', registeredCourses: ['c002', 'c005'], examHistory: [] }
];

// Simple in-memory "session" for current user
let currentUser = null; // Will store user ID if logged in

// --- Mock API Functions ---

/**
 * Fetches mock courses.
 * @returns {Promise<Array>} A promise that resolves with an array of course objects.
 */
async function fetchMockCourses() {
    return new Promise(resolve => setTimeout(() => resolve(mockCourses), 500));
}

/**
 * Fetches a single mock course by ID.
 * @param {string} id
 * @returns {Promise<Object|null>} A promise that resolves with the course object or null.
 */
async function fetchMockCourseById(id) {
    return new Promise(resolve => setTimeout(() => resolve(mockCourses.find(c => c.id === id)), 300));
}

/**
 * Fetches mock questions.
 * @returns {Promise<Array>} A promise that resolves with an array of question objects.
 */
async function fetchMockQuestions() {
    return new Promise(resolve => setTimeout(() => resolve(mockQuestions), 500));
}

/**
 * Fetches mock exams.
 * @returns {Promise<Array>} A promise that resolves with an array of exam objects.
 */
async function fetchMockExams() {
    return new Promise(resolve => setTimeout(() => resolve(mockExams), 500));
}

/**
 * Registers a new user (mock API).
 * @param {string} name
 * @param {string} email
 * @param {string} password
 * @returns {Promise<Object>} A promise that resolves with the new user object or an error.
 */
async function registerUserMock(name, email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mockUsers.find(u => u.email === email)) {
                reject({ message: 'Email đã tồn tại.' });
            } else {
                const newUser = {
                    id: `u${mockUsers.length + 1}`,
                    name,
                    email,
                    password, // In real app: hash password
                    registeredCourses: [],
                    examHistory: []
                };
                mockUsers.push(newUser);
                resolve({ success: true, user: newUser });
            }
        }, 500);
    });
}

/**
 * Logs in a user (mock API).
 * @param {string} email
 * @param {string} password
 * @returns {Promise<Object>} A promise that resolves with the user object or an error.
 */
async function loginUserMock(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = mockUsers.find(u => u.email === email && u.password === password);
            if (user) {
                currentUser = user.id; // Set current user
                localStorage.setItem('loggedInUserId', user.id); // Persist login
                resolve({ success: true, user });
            } else {
                reject({ message: 'Email hoặc mật khẩu không đúng.' });
            }
        }, 500);
    });
}

/**
 * Gets current logged-in user (mock API).
 * @returns {Promise<Object|null>}
 */
async function getCurrentUserMock() {
    return new Promise(resolve => {
        setTimeout(() => {
            if (currentUser) {
                resolve(mockUsers.find(u => u.id === currentUser));
            } else {
                const storedUserId = localStorage.getItem('loggedInUserId');
                if (storedUserId) {
                    currentUser = storedUserId;
                    resolve(mockUsers.find(u => u.id === storedUserId));
                } else {
                    resolve(null);
                }
            }
        }, 100);
    });
}

/**
 * Logs out the current user (mock API).
 */
function logoutUserMock() {
    currentUser = null;
    localStorage.removeItem('loggedInUserId');
}


// --- API Integration (Conceptual) ---

// Replace with your actual API Keys
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY';
const DEEPSEEK_API_KEY = 'YOUR_DEEPSEEK_API_KEY';
const RAPIDAPI_HOST = 'YOUR_RAPIDAPI_HOST'; // e.g., 'jokeapi.p.rapidapi.com'
const RAPIDAPI_KEY = 'YOUR_RAPIDAPI_KEY';

/**
 * Example function to interact with Gemini API
 * (Requires a CORS proxy or backend for secure key handling in production)
 * @param {string} prompt
 * @returns {Promise<string>} Gemini's response
 */
async function getGeminiResponse(prompt) {
    if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY') {
        console.warn('Gemini API Key not set. Using mock response.');
        return Promise.resolve("Đây là câu trả lời mô phỏng từ Gemini: " + prompt);
    }

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Gemini API Error:', errorData);
            throw new Error(`Gemini API responded with status ${response.status}: ${errorData.error.message}`);
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        return "Không thể kết nối tới Gemini API. Vui lòng thử lại sau.";
    }
}

/**
 * Example function to interact with Deepseek API
 * (Requires a CORS proxy or backend for secure key handling in production)
 * @param {string} prompt
 * @returns {Promise<string>} Deepseek's response
 */
async function getDeepseekResponse(prompt) {
    if (!DEEPSEEK_API_KEY || DEEPSEEK_API_KEY === 'YOUR_DEEPSEEK_API_KEY') {
        console.warn('Deepseek API Key not set. Using mock response.');
        return Promise.resolve("Đây là câu trả lời mô phỏng từ Deepseek: " + prompt);
    }

    try {
        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
                model: "deepseek-chat", // Or deepseek-coder
                messages: [{ role: "user", content: prompt }],
                stream: false
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Deepseek API Error:', errorData);
            throw new Error(`Deepseek API responded with status ${response.status}: ${errorData.error.message}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('Error calling Deepseek API:', error);
        return "Không thể kết nối tới Deepseek API. Vui lòng thử lại sau.";
    }
}

/**
 * Example function to interact with a RapidAPI endpoint
 * (Requires a CORS proxy or backend for secure key handling in production)
 * @param {string} endpoint - The specific API endpoint (e.g., '/random_joke')
 * @returns {Promise<Object>} The API response data
 */
async function callRapidApi(endpoint) {
    if (!RAPIDAPI_KEY || RAPIDAPI_KEY === 'YOUR_RAPIDAPI_KEY' || !RAPIDAPI_HOST || RAPIDAPI_HOST === 'YOUR_RAPIDAPI_HOST') {
        console.warn('RapidAPI Key or Host not set. Using mock response.');
        return Promise.resolve({ mockData: "Đây là dữ liệu mô phỏng từ RapidAPI" });
    }

    try {
        const response = await fetch(`https://${RAPIDAPI_HOST}${endpoint}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': RAPIDAPI_HOST,
                'X-RapidAPI-Key': RAPIDAPI_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`RapidAPI responded with status ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error calling RapidAPI:', error);
        return { error: 'Không thể kết nối tới RapidAPI. Vui lòng thử lại sau.' };
    }
}