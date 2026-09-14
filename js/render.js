import { quizData } from './config.js';

let flattenedQuestions = [];

export function flattenAndRenderQuiz() {
  flattenedQuestions = [];
  
  quizData.forEach(topic => {
    topic.questions.forEach(question => {
      flattenedQuestions.push({
        topicId: topic.id,
        topicTitle: topic.title,
        questionId: question.id,
        text: question.text,
        options: question.options
      });
    });
  });
  
  renderFlattenedQuiz();
}

export function renderFlattenedQuiz() {
  const container = document.getElementById('quizContainer');
  container.innerHTML = '';
  
  flattenedQuestions.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    
    card.innerHTML = `
      <div class="question-header" onclick="window.toggleQuestion(this)">
        <span class="question-text-preview">${item.text}</span>
        <span class="toggle-icon">+</span>
      </div>
      <div class="question-content">
        <div class="options-group" data-topic="${item.topicId}" data-qid="${item.questionId}">
          ${item.options.map(opt => `
            <label class="option-label">
              <input type="radio" name="${item.topicId}_${item.questionId}" value="${opt.score}"> ${opt.text}
            </label>
          `).join('')}
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
  
  // Add submit button
  const submitBtn = document.createElement('button');
  submitBtn.className = 'submit-btn';
  submitBtn.onclick = window.submitQuiz;
  submitBtn.textContent = 'Submit Answers';
  container.appendChild(submitBtn);
}

export function getFlattenedQuestions() {
  return flattenedQuestions;
}
