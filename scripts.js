// ===========================
// QUIZ DATA CONFIGURATION
// Each TOPIC can have MULTIPLE QUESTIONS
// Topic IDs are used internally for scoring (not shown to user)
// ===========================
const quizData = [
  {
    id: 'biblical_alignment',
    title: 'Biblical Alignment', // Internal only - not shown
    questions: [
      {
        id: 'q1',
        text: 'If you have a favorite verse or book, what part of the Bible is it in?',
        options: {
          1: 'I don\'t have one',
          2: 'The Gospels',
          3: 'The New Testament, excluding Revelations',
          4: 'Revelations',
          5: 'The Old Testament, excluding Psalms, Proverbs, and Song of Solomon',
          0: 'Psalms, Proverbs, or Song of Solomon'
        }
      },
      {
        id: 'q2',
        text: 'Do you believe that the Old Testament rules and standards should be taken literally in your life?',
        options: {
          1: 'No, I just follow what is in the Gospels only',
          2: 'No, Jesus completed the Law and the Prophets, so I only follow the New Testament guidelines',
          4: 'Yes -- but only some, and I pick and choose which ones I think I should follow',
          6: 'Yes -- including all the animal sacrifices, stoning people to death, not eating shellfish or bacon, etc.'
        }
      }
    ]
  },
  {
    id: 'topic2',
    title: 'Topic 2', // Internal only
    questions: [
      {
        id: 'q1',
        text: 'What is your quest?',
        options: {
          1: 'Nothing, really',
          2: 'To find the Holy Grail',
          3: 'I don\'t know'
        }
      }
    ]
  }
  // Add more topics here...
];

// Flatten all questions into a single array for display
let flattenedQuestions = [];

// Store user responses: { topic_id_questionId: value }
let topicResults = {};

// ===========================
// INITIALIZATION
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  flattenAndRenderQuiz();
});

// Flatten questions from all topics into a single list for display
function flattenAndRenderQuiz() {
  flattenedQuestions = [];
  
  quizData.forEach(topic => {
    topic.questions.forEach(question => {
      flattenedQuestions.push({
        topicId: topic.id,      // Keep for scoring
        topicTitle: topic.title, // Keep for scoring display
        questionId: question.id,
        text: question.text,
        options: question.options
      });
    });
  });
  
  renderFlattenedQuiz();
}

// Render each question as an individual card
function renderFlattenedQuiz() {
  const container = document.getElementById('quizContainer');
  container.innerHTML = '';
  
  flattenedQuestions.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    
    card.innerHTML = `
      <div class="question-header" onclick="toggleQuestion(this)">
        <span class="question-text-preview">${item.text}</span>
        <span class="toggle-icon">+</span>
      </div>
      <div class="question-content">
        <div class="options-group" data-topic="${item.topicId}" data-qid="${item.questionId}">
          ${Object.entries(item.options).map(([value, text]) => `
            <label class="option-label">
              <input type="radio" name="${item.topicId}_${item.questionId}" value="${value}"> ${text}
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
  submitBtn.onclick = submitQuiz;
  submitBtn.textContent = 'Submit Answers';
  container.appendChild(submitBtn);
}

// ===========================
// INTERACTION FUNCTIONS
// ===========================

function toggleQuestion(header) {
  const card = header.parentElement;
  const icon = header.querySelector('.toggle-icon');
  
  card.classList.toggle('active');
  
  // Change +/- based on state
  if (card.classList.contains('active')) {
    icon.textContent = '−';
  } else {
    icon.textContent = '+';
  }
}

function collectResponses() {
  const responses = {};
  
  flattenedQuestions.forEach(item => {
    const key = `${item.topicId}_${item.questionId}`;
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    
    if (!responses[item.topicId]) {
      responses[item.topicId] = {};
    }
    
    responses[item.topicId][item.questionId] = selected ? parseInt(selected.value) : 0;
  });
  
  return responses;
}

function calculateScores(responses) {
  const scores = {};
  
  quizData.forEach(topic => {
    const topicResponses = responses[topic.id];
    const questionIds = topic.questions.map(q => q.id);
    
    const values = questionIds.map(qid => topicResponses[qid] || 0);
    const sum = values.reduce((acc, val) => acc + val, 0);
    const avg = values.length > 0 ? (sum / values.length) : 0;
    
    scores[topic.title] = Math.round(avg * 10) / 10;
  });
  
  return scores;
}

function submitQuiz() {
  topicResults = collectResponses();
  
  // Validation
  let unansweredCount = 0;
  flattenedQuestions.forEach(item => {
    const key = `${item.topicId}_${item.questionId}`;
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (!selected) {
      unansweredCount++;
    }
  });
  
  if (unansweredCount > 0) {
    alert(`Please answer all questions before submitting. (${unansweredCount} remaining)`);
    return;
  }
  
  const scores = calculateScores(topicResults);
  
  // Build results table
  const tbody = document.getElementById('resultsBody');
  tbody.innerHTML = '';
  
  for (const [topic, averageScore] of Object.entries(scores)) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${topic}</td><td>${averageScore}</td>`;
    tbody.appendChild(row);
  }
  
  // Hide quiz, show results
  document.getElementById('quizContainer').classList.add('hide');
  document.getElementById('resultsContainer').style.display = 'block';
}

function resetQuiz() {
  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(radio => radio.checked = false);
  
  const cards = document.querySelectorAll('.question-card');
  cards.forEach(card => card.classList.remove('active'));
  
  topicResults = {};
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  document.getElementById('resultsContainer').style.display = 'none';
  document.getElementById('quizContainer').classList.remove('hide');
}
