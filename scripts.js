function showDashboard() {
    const dashboard = document.getElementById('dashboard');
    dashboard.classList.toggle('d-none');
}

function createQuiz() {
    const quizForm = document.getElementById('quizForm');
    quizForm.classList.toggle('d-none');
    const quizFormContent = document.getElementById('quizFormContent');
    quizFormContent.innerHTML = `
        <div class="form-group">
            <label for="quizTitle">Quiz Title</label>
            <input type="text" class="form-control" id="quizTitle" placeholder="Enter quiz title">
        </div>
        <div class="form-group">
            <label for="questionType">Question Type</label>
            <select class="form-control" id="questionType" onchange="addQuestionForm()">
                <option value="" disabled selected>Select question type</option>
                <option value="multipleChoice">Multiple Choice</option>
                <option value="trueFalse">True/False</option>
                <option value="shortAnswer">Short Answer</option>
                <option value="matching">Matching</option>
                <option value="longAnswer">Long Answer</option>
            </select>
        </div>
        <div id="questionForm">
            <!-- Question form content will be dynamically added here -->
        </div>
    `;
}

function addQuestionForm() {
    const questionType = document.getElementById('questionType').value;
    const questionForm = document.getElementById('questionForm');
    let formContent = '';

    switch (questionType) {
        case 'multipleChoice':
            formContent = `
                <div class="form-group">
                    <label for="question">Question</label>
                    <input type="text" class="form-control" id="question" placeholder="Enter question">
                </div>
                <div class="form-group">
                    <label for="options">Options</label>
                    <input type="text" class="form-control" id="options" placeholder="Enter options separated by commas">
                </div>
                <div class="form-group">
                    <label for="correctOption">Correct Option</label>
                    <input type="text" class="form-control" id="correctOption" placeholder="Enter correct option">
                </div>
            `;
            break;
        case 'trueFalse':
            formContent = `
                <div class="form-group">
                    <label for="question">Question</label>
                    <input type="text" class="form-control" id="question" placeholder="Enter question">
                </div>
                <div class="form-group">
                    <label for="correctOption">Correct Option</label>
                    <select class="form-control" id="correctOption">
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
            `;
            break;
        case 'shortAnswer':
            formContent = `
                <div class="form-group">
                    <label for="question">Question</label>
                    <input type="text" class="form-control" id="question" placeholder="Enter question">
                </div>
                <div class="form-group">
                    <label for="answer">Answer</label>
                    <input type="text" class="form-control" id="answer" placeholder="Enter answer">
                </div>
            `;
            break;
        case 'matching':
            formContent = `
                <div class="form-group">
                    <label for="question">Question</label>
                    <input type="text" class="form-control" id="question" placeholder="Enter question">
                </div>
                <div class="form-group">
                    <label for="pairs">Pairs</label>
                    <input type="text" class="form-control" id="pairs" placeholder="Enter pairs separated by commas (e.g., A1:B1, A2:B2)">
                </div>
            `;
            break;
        case 'longAnswer':
            formContent = `
                <div class="form-group">
                    <label for="question">Question</label>
                    <input type="text" class="form-control" id="question" placeholder="Enter question">
                </div>
                <div class="form-group">
                    <label for="answer">Answer</label>
                    <textarea class="form-control" id="answer" rows="4" placeholder="Enter answer"></textarea>
                </div>
            `;
            break;
    }

    questionForm.innerHTML = formContent;
}

function submitQuiz() {
    const quizTitle = document.getElementById('quizTitle').value;
    const question = document.getElementById('question').value;
    const questionType = document.getElementById('questionType').value;
    let options = null;
    let correctOption = null;

    if (questionType === 'multipleChoice') {
        options = document.getElementById('options').value.split(',');
        correctOption = document.getElementById('correctOption').value;
    } else if (questionType === 'trueFalse') {
        correctOption = document.getElementById('correctOption').value;
    } else if (questionType === 'shortAnswer') {
        correctOption = document.getElementById('answer').value;
    } else if (questionType === 'matching') {
        options = document.getElementById('pairs').value.split(',');
    } else if (questionType === 'longAnswer') {
        correctOption = document.getElementById('answer').value;
    }

    const quiz = {
        title: quizTitle,
        question: question,
        questionType: questionType,
        options: options,
        correctOption: correctOption
    };

    console.log('Quiz submitted:', quiz);
    alert('Quiz submitted successfully!');
}

document.addEventListener("DOMContentLoaded", function() {
    const existingDashboard = document.getElementById('dashboard');
    if (existingDashboard) {
        showDashboard();
    }
});
