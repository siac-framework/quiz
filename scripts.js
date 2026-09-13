// ===========================
// QUIZ DATA CONFIGURATION
// Each TOPIC can have MULTIPLE QUESTIONS
// ===========================
const quizData = [
  {
    id: 'biblical_alignment',
    title: 'Biblical Alignment',
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
          6: 'Psalms, Proverbs, or Song of Solomon'
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
    title: 'Topic 2',
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

// Store user responses: { topic_id: { q1: 'val', q2: 'val', ... } }
let topicResults = {};

// ===========================
// DOM GENERATION FUNCTIONS
// ===========================

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
  renderQuiz();
});

// Render all topic/question cards dynamically
function renderQuiz() {
  const container = document.getElementById('quizContainer');
  container.innerHTML = '';
  
  quizData.forEach(topic => {
    // Create a wrapper for the topic
    const topicWrapper = document.createElement('div');
    topicWrapper.className = 'question-card';
    
    // Topic header (collapsible)
    topicWrapper.innerHTML = `
      <div class="question-header" onclick="toggleQuestion(this)">
        <span class="question-title">${topic.title}</span>
        <span class="toggle-icon">▼</span>
      </div>
      <div class="question-content">
        <div class="questions-container" data-topic="${topic.id}"></div>
      </div>
    `;
    
    const questionsContainer = topicWrapper.querySelector('.questions-container');
    
    // Add each question to this topic
    topic.questions.forEach((question, qIndex) => {
      const questionBlock = document.createElement('div');
      questionBlock.className = 'question-block';
      
      questionBlock.innerHTML = `
        <div class="sub-question-text">Question ${qIndex + 1}: ${question.text}</div>
        <div class="options-group" data-topic="${topic.id}" data-qid="${question.id}">
          ${Object.entries(question.options).map(([value, text]) => `
            <label class="option-label">
              <input type="radio" name="${topic.id}_${question.id}" value="${value}"> ${text}
            </label>
          `).join('')}
        </div>
      `;
      
      questionsContainer.appendChild(questionBlock);
    });
    
    container.appendChild(topicWrapper);
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
  header.parentElement.classList.toggle('active');
}

// Collect all responses organized by topic
function collectResponses() {
  const responses = {};
  
  quizData.forEach(topic => {
    responses[topic.id] = {};
    
    topic.questions.forEach(question => {
      const selected = document.querySelector(`input[name="${topic.id}_${question.id}"]:checked`);
      responses[topic.id][question.id] = selected ? parseInt(selected.value) : 0;
    });
  });
  
  return responses;
}

// Calculate average score per topic
function calculateScores(responses) {
  const scores = {};
  
  quizData.forEach(topic => {
    const topicResponses = responses[topic.id];
    const questionIds = topic.questions.map(q => q.id);
    
    // Get all numeric values for this topic
    const values = questionIds.map(qid => topicResponses[qid] || 0);
    
    // Calculate average (sum / count)
    const sum = values.reduce((acc, val) => acc + val, 0);
    const avg = values.length > 0 ? (sum / values.length) : 0;
    
    // Round to 1 decimal place for display
    scores[topic.title] = Math.round(avg * 10) / 10;
  });
  
  return scores;
}

// Submit quiz and display results
function submitQuiz() {
  topicResults = collectResponses();
  
  // Validate all questions answered
  let unansweredCount = 0;
  quizData.forEach(topic => {
    topic.questions.forEach(question => {
      if (topicResults[topic.id][question.id] === 0) {
        unansweredCount++;
      }
    });
  });
  
  if (unansweredCount > 0) {
    alert(`Please answer all questions before submitting. (${unansweredCount} remaining)`);
    return;
  }
  
  // Calculate averages
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

// Reset quiz
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
