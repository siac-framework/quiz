import { quizData, TOPIC_ORDER } from './config.js';
import { flattenAndRenderQuiz, getFlattenedQuestions } from './render.js';
import { calculateScores } from './scoring.js';

let topicResults = {};

document.addEventListener('DOMContentLoaded', () => {
  flattenAndRenderQuiz();
  initAutoCloseCards();
});

// Collect all responses organized by topic
function collectResponses() {
  const flattenedQuestions = getFlattenedQuestions();
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

// Toggle question card expansion
window.toggleQuestion = function(header) {
  const card = header.parentElement;
  const icon = header.querySelector('.toggle-icon');
  
  card.classList.toggle('active');
  
  if (card.classList.contains('active')) {
    icon.textContent = '−';
  } else {
    icon.textContent = '+';
  }
};

// Submit quiz and display results
window.submitQuiz = function() {
  // Prevent double submission
  const submitBtn = document.querySelector('.submit-btn');
  if (submitBtn && submitBtn.disabled) return;
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
  }
  
  topicResults = collectResponses();
  
  const { scores, scoresLabels, scoresWithValidity } = calculateScores(topicResults);
  
  const tbody = document.getElementById('resultsBody');
  tbody.innerHTML = '';
  
  // Iterate in SPECIFIC ORDER using TOPIC_ORDER array
  TOPIC_ORDER.forEach(topic => {
    const row = document.createElement('tr');
    
    const score = scores[topic];
    const hasAnswers = scoresWithValidity[topic];
    const label = scoresLabels[topic];
    
    if (hasAnswers && score !== undefined && score !== 0) {
      row.innerHTML = `
        <td>${topic}</td>
        <td>${score}</td>
        <td>${label}</td>
      `;
    } else {
      row.innerHTML = `
        <td>${topic}</td>
        <td>-</td>
        <td>Not enough answers to calculate</td>
      `;
    }
    
    tbody.appendChild(row);
  });
  
  // Hide quiz container COMPLETELY
  const quizContainer = document.getElementById('quizContainer');
  quizContainer.style.display = 'none';
  quizContainer.classList.add('hide');
  
  // Show results container - REMOVE .hide CLASS FIRST
  const resultsContainer = document.getElementById('resultsContainer');
  resultsContainer.classList.remove('hide');
  resultsContainer.style.display = 'block';
  resultsContainer.scrollIntoView({ behavior: 'smooth' });
};

// Reset quiz
window.resetQuiz = function() {
  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(radio => radio.checked = false);
  
  const cards = document.querySelectorAll('.question-card');
  cards.forEach(card => card.classList.remove('active'));
  
  topicResults = {};
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Hide results container
  const resultsContainer = document.getElementById('resultsContainer');
  resultsContainer.classList.add('hide');
  resultsContainer.style.display = 'none';
  
  // Show quiz container
  const quizContainer = document.getElementById('quizContainer');
  quizContainer.style.display = 'block';
  quizContainer.classList.remove('hide');
  
  // Re-enable submit button
  const submitBtn = document.querySelector('.submit-btn');
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit Answers';
  }
};

function initAutoCloseCards() {
  const quizContainer = document.getElementById('quizContainer');
  
  if (!quizContainer) return;
  
  // Re-run on mutation observer (handles dynamic question loading)
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        setupAutoCloseForNewRadioButtons();
      }
    });
  });
  
  observer.observe(quizContainer, { childList: true, subtree: true });
  
  setupAutoCloseForNewRadioButtons();
}

function setupAutoCloseForNewRadioButtons() {
  const allOptions = quizContainer.querySelectorAll('.option-label input[type="radio"]');
  
  // Remove any existing listeners first (prevent duplicates)
  allOptions.forEach(radio => {
    if (!radio.hasAttribute('data-auto-close-initialized')) {
      radio.setAttribute('data-auto-close-initialized', 'true');
      
      radio.addEventListener('change', function() {
        const questionCard = this.closest('.question-card');
        
        if (questionCard && questionCard.classList.contains('active')) {
          // 500ms wait + 50ms buffer for CSS transition to start
          setTimeout(() => {
            questionCard.classList.remove('active');
          }, 500);
        }
      });
    }
  });
}
