// ===========================
// QUIZ DATA CONFIGURATION
// Add/edit questions here
// ===========================
const quizData = [
  {
    id: 'topic1',
    title: 'Topic 1',
    question: 'What is your name?',
    options: {
      1: 'Bob',
      2: 'Joe',
      3: 'Arthur, King of the Britons'
    }
  },
  {
    id: 'topic2',
    title: 'Topic 2',
    question: 'What is your quest?',
    options: {
      1: 'Nothing, really',
      2: 'To find the Holy Grail',
      3: 'I don\'t know'
    }
  },
  // Add more topics here...
  {
    id: 'topic3',
    title: 'Topic 3',
    question: 'What is your favorite color?',
    options: {
      1: 'Blue',
      2: 'Green',
      3: 'Red'
    }
  }
];

// Store user responses
let topicResults = {};

// ===========================
// DOM GENERATION FUNCTIONS
// ===========================

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
  renderQuiz();
});

// Render all question cards dynamically
function renderQuiz() {
  const container = document.getElementById('quizContainer');
  
  // Clear existing content except the submit button
  container.innerHTML = '';
  
  quizData.forEach((topic, index) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    
    card.innerHTML = `
      <div class="question-header" onclick="toggleQuestion(this)">
        <span class="question-title">${topic.title}: ${topic.question}</span>
        <span class="toggle-icon">▼</span>
      </div>
      <div class="question-content">
        <div class="options-group" data-topic="${topic.id}">
          ${Object.entries(topic.options).map(([value, text]) => `
            <label class="option-label">
              <input type="radio" name="${topic.id}" value="${value}"> ${text}
            </label>
          `).join('')}
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
  
  // Re-add submit button
  const submitBtn = document.createElement('button');
  submitBtn.className = 'submit-btn';
  submitBtn.onclick = submitQuiz;
  submitBtn.textContent = 'Submit Answers';
  container.appendChild(submitBtn);
}

// ===========================
// INTERACTION FUNCTIONS
// ===========================

function toggleQuestion(header) {
  header.parentElement.classList.toggle('active');
}

function calculateScores(results) {
  const scores = {};
  
  // Your proprietary scoring logic goes here
  // Currently simple: use selected answer value as score
  for (const [topicId, answerValue] of Object.entries(results)) {
    const topic = quizData.find(t => t.id === topicId);
    scores[topic ? `${topic.title}` : topicId] = parseInt(answerValue) || 0;
  }
  
  return scores;
}

function collectResponses() {
  const responses = {};
  
  quizData.forEach(topic => {
    const selected = document.querySelector(`input[name="${topic.id}"]:checked`);
    responses[topic.id] = selected ? selected.value : 0;
  });
  
  return responses;
}

function submitQuiz() {
  topicResults = collectResponses();
  const scores = calculateScores(topicResults);
  
  // Build results table
  const tbody = document.getElementById('resultsBody');
  tbody.innerHTML = '';
  
  for (const [topic, score] of Object.entries(scores)) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${topic}</td><td>${score}</td>`;
    tbody.appendChild(row);
  }
  
  // Hide quiz, show results
  document.getElementById('quizContainer').classList.add('hide');
  document.getElementById('resultsContainer').style.display = 'block';
}

function resetQuiz() {
  // Deselect all radio buttons
  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(radio => radio.checked = false);
  
  // Close all collapsed question cards
  const cards = document.querySelectorAll('.question-card');
  cards.forEach(card => card.classList.remove('active'));
  
  // Reset topic results
  topicResults = {};
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Hide results, show quiz
  document.getElementById('resultsContainer').style.display = 'none';
  document.getElementById('quizContainer').classList.remove('hide');
}
