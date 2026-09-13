// ===========================
// QUIZ DATA CONFIGURATION
// Topics, questions, and options (using arrays for duplicate scores)
// ===========================
const quizData = [
  {
    id: 'biblical_alignment',
    title: 'Biblical Alignment',
    questions: [
      {
        id: 'q1',
        text: "The Council of Nicea (325 AD/CE) put together the current set of texts that is regarded by many to be the official Holy Bible. Which of these statements do you most resonate with?",
        options: [
          { score: 1, text: "I haven't heard of the Council of Nicea. Or I have heard of them, and it's not important to my faith. I am glad to have the Bible but I am open to other sources about Jesus, such as the gospels of the Nag Hamadi Library" },
          { score: 1, text: "I think the gospels are the only writings that actually say what Jesus said. The rest of the New Testament was written by other people, and a lot of them by a guy who didn't ever spend time with Jesus when he was alive. If I want to know what Jesus taught, I'll get it straight from the gospels" },
          { score: 2, text: "The gospels are the truest accounts of Jesus and what he taught, but I get concerned about the parts where the author (or other people over the years) may have added things that Jesus didn't intend. I stick to the actual quoted words of Jesus only." },
          { score: 3, text: "I think the Council of Nicea was inspired and guided by God. They selected the texts that are in the Bible today because those are the ones that God inspired, and they are important to my faith and practice. But Jesus did say he completed the Law and the Prophets (the Old Testament) so no one has to follow any of the rules or even read it if they don't want to. I may reference or be inspired by the Old Testament, but I only follow what's in the New Testament" },
          { score: 5, text: "I think the Council of Nicea was inspired and guided by God. They selected the texts that are in the Bible today because those are the ones that God inspired, and they are important to my faith and practice. The books from the New Testament and Old Testament alike have values, guidelines, and rules for my life that I need to follow." }
        ]
      },
      {
        id: 'q2',
        text: "If you have a favorite verse or book, what part of the Bible is it in?",
        options: [
          { score: 0, text: "I don't have one" },
          { score: 1, text: "The Gospels" },
          { score: 3, text: "The New Testament" },
          { score: 4, text: "The Old Testament, excluding Psalms, Proverbs, and Song of Solomon" },
          { score: 0, text: "Psalms, Proverbs, or Song of Solomon" }
        ]
      }
    ]
  },
  {
    id: 'bib_auth_for_self',
    title: 'Biblical Authority: My Body and Soul',
    questions: [
      {
        id: 'q1',
        text: "Which of the following best describes your feelings about the Bible?",
        options: [
          { score: 1, text: "I love the ideals and inspiration of Jesus, and he wasn't about rules. I don't need to follow rules to love people like God does." },
          { score: 2, text: "The Bible is a good book and has lots of good stories, morals, wisdoms, and cultural references, but I don't need to take it literally or follow all the rules for God to love me and for me to love God." },
          { score: 3, text: "The Bible is very culturally and spiritually significant for me to understand God and the need for Christ's sacrifice, but it was really only accurate for its time, and we now live in a modern world with issues the Bible has no answers for (and new understandings with science that the writers of the Bible didn't know). It's up to me or my group to determine how to be good followers of Christ, and not be tethered to an outdated book." },
          { score: 4, text: "All of the parts of the Bible that I value, I interpret literally and follow to the best of my ability. (examples: someone believes that only the Gospels are true and literal and follows them, but does not follow any other part of the Bible; or someone who thinks parts of the Bible are allegory while other parts are literal)" },
          { score: 5, text: "All of the Bible is literally true, and I follow all the rules and guidelines to the best of my ability in our modern society." },
          { score: 6, text: "All of the Bible is literally true, and because there are so many things in modern society that are not in alignment with Biblical values, I either stand out as odd in society or I feel I can practice my faith better by living apart from most of society." }
        ]
      }
    ]
  },
  {
    id: 'bib_auth_others_souls',
    title: 'Biblical Authority: Other people\'s Souls',
    questions: [
      {
        id: 'q1',
        text: "Is the spiritual path outlined in the Bible the only true spiritual path for all mankind?",
        options: [
          { score: 1, text: "All spiritual paths lead to God, or enlightenment, or a blessed afterlife, including my path which is Christianity" },
          { score: 2, text: "Christianity is the only true spiritual path, and Yahweh is the only true God, but He's loving and will let any good person into heaven even if they weren't Christians during life." },
          { score: 3, text: "Christianity is the only true spiritual path for everyone. To get to heaven and avoid hell, you must convert to Christianity." }
        ]
      }
    ]
  },
  {
    id: 'evangelism',
    title: 'Evangelism',
    questions: [
      {
        id: 'q1',
        text: "Does your spiritual path require you to try and convert others to become Christians?",
        options: [
          { score: 1, text: "Nope -- technically no one needs saving" },
          { score: 2, text: "Christianity is the only true path, but it's not up to me to convert people" },
          { score: 3, text: "Christianity is the only true path, and it's important to spread the gospel, but I think it's more important for me to use my talents and special skills to just help people rather than trying to convert them (saving lives as a doctor, feeding the poor, etc.)" },
          { score: 4, text: "As soon as I became a Christian, the whole point of my life is to live every moment for trying to win others over to Christ. As Galatians 2:20 says 'I have been crucified with Christ; and it is no longer I who live, but Christ lives in me'" },
          { score: 5, text: "Not only is the whole point of my life to win others over to Christ, I feel I need to do more. I engage in ongoing efforts to convert others that is above and beyond personal relationships with colleagues or friends, such as being in special outreach events (miming, plays, going door to door) or going on yearly mission trips, or being a full time missionary or pastor." }
        ]
      }
    ]
  },
  {
    id: 'motivational_alignment',
    title: 'Motivational Alignment',
    questions: [
      {
        id: 'q1',
        text: "If you had an urge to ask someone or tell someone to stop doing something because it doesn't align with your Christian values or beliefs (like knowing a straight couple is living together without being married, or knowing someone who gambles a lot, or you see a gay couple holding hands in public, or you see a woman wearing revealing clothing, or you hear someone talking about teaching evolution in schools), which of these most sounds like what you'd be thinking?",
        options: [
          { score: 2, text: "I think I should live by my values and let others live by their values, and let God be the judge -- so I wouldn't do anything." },
          { score: 3, text: "If I thought there was danger to someone physically or spiritually, I would feel like somebody needs to say something or do something (maybe me) to help save people from physical or spiritual harm." },
          { score: 4, text: "We live in a Christian society, so it's just not acceptable to do those things -- so I would feel like somebody needs to say something or do something (maybe me)." },
          { score: 4, text: "I'd want them to stop doing the bad things so they could be part of the good people in society, so I would feel like somebody needs to say something or do something (maybe me)." },
          { score: 5, text: "That person knows, or should know, that the Bible says it's wrong to what they're doing -- it's offensive to God (and also to me because I'm close with God), so someone should get them to stop (maybe me). I don't want to see it or be around it, and kids shouldn't see it or be around it." }
        ]
      },
      {
        id: 'q2',
        text: "Which of the following mostly describes your feelings about people who identify as LGBTQ+?",
        options: [
          { score: 1, text: "God made them that way, and it's ok. God also made gay penguins and other animals that pair with a homosexual partner for life." },
          { score: 3, text: "There's no such thing as being gay. People who think they are gay are actually troubled souls who had abusive childhoods or mental illness (like being bipolar) that makes them reach for sex as a coping mechanism." },
          { score: 5, text: "There's no such thing as being gay. It's not natural, and the only way they can actually do the deed is to be very drunk or use illegal drugs." },
          { score: 3, text: "There's no such thing as being gay. People who think they are gay are being influenced by the devil or are actually possessed by demons." },
          { score: 5, text: "People who are gay know it's evil and do it anyway -- they are the worst kind of abomination. They are disgusting, God hates them, and I do too." }
        ]
      },
      {
        id: 'q3',
        text: "Do you believe God approves of violence as a means to an end, if the final goal is something you think God values?",
        options: [
          { score: 5, text: "Yes" },
          { score: 1, text: "No" }
        ]
      }
    ]
  },
  {
    id: 'bib_auth_others_phys',
    title: 'Biblical Authority: Other people\'s Bodies',
    questions: [
      {
        id: 'q1',
        text: "Do you feel there is a difference between intervening in someone's life depending on whether they are Christians or not?",
        options: [
          { score: 5, text: "The values and standards of the Bible are God's values, and his values are for everyone, so I would intervene with anyone." },
          { score: 2, text: "God isn't about rules, He's about love. I'm not going to intervene in anyone's life, but I'm gonna love them no matter what choices they make." },
          { score: 3, text: "The Bible shows over and over that the standards and values of God only apply to people once they are Christians, so I only intervene with fellow Christians." }
        ]
      },
      {
        id: 'q2',
        text: "Do you feel that all people in the US should behave according to the rules or standards in the Bible that you find true and relevant (regardless of whether they are Christians or not)?",
        options: [
          { score: 2, text: "No -- enforcing the religious values of one group onto everyone is a violation of everyone's freedom of belief and freedom of practice" },
          { score: 3, text: "No -- forcing my values onto people who aren't Christians could have the opposite effect of pushing them away from becoming Christians. It's best to make sure laws aren't based in Christian values so non-Christians don't have additional barriers to overcome when I'm trying to convert them." },
          { score: 4, text: "Yes -- the values of the Bible are good for everyone" },
          { score: 5, text: "Yes -- Not only should we expect everyone to behave according to God's good rules, we should go back to having things like Sodomy Laws and make new laws that can be used by police and the judicial system to punish or rehabilitate violators." }
        ]
      },
      {
        id: 'q3',
        text: "In the past one to two years, have you protested (or wanted to) to express disapproval of abortion, LGBTQ+ issues, or issues about evolution or prayer in public schools?",
        options: [
          { score: 5, text: "Yes" },
          { score: 2, text: "No" }
        ]
      }
    ]
  },
  {
    id: 'spiritual_warfare',
    title: 'Spiritual Warfare',
    questions: [
      {
        id: 'q1',
        text: "Do you believe there is a spiritual world with a spiritual war, and if so, how should you be fighting it?",
        options: [
          { score: 1, text: "I never really thought about it, or I don't think there's a spiritual war going on between a Biblical God and Biblical Satan." },
          { score: 2, text: "I believe in angels (especially guardian angels or cute little baby cherubs), and I guess demons are real too." },
          { score: 3, text: "I know there is a war going on because the Bible says so, but it's really between God and Satan, so humans can't really do anything." },
          { score: 4, text: "Yes, there's a real spiritual war affecting spiritual and physical realms that we must actively 'fight' all the time. Demons can influence people, but demon possession rarely happens. Angels are the ones that can fight demons, while prayer and talking with people are the only ways I can fight. I can 'put on the armor of God', which is instruction from Peter for ensuring I remain non-violent and am fortifying my mind by reading the Bible so that I can resist the spiritual forces, which he says 'are not flesh and blood' (Eph 6:10-17)" },
          { score: 5, text: "Yes, there's a real spiritual war affecting spiritual and physical realms that we must actively 'fight' all the time. Demons can influence people and possess them! I can fight the spiritual war by talking with people, praying, 'putting on the armor of God', and actively casting demons out-of (or off-of) people." }
        ]
      },
      {
        id: 'q2',
        text: "Can human beings do anything to get Jesus to return?",
        options: [
          { score: 1, text: "I'm not sure Jesus will return, except in a mystical sense that he will return over and over again to give us more love and help us reach enlightenment" },
          { score: 2, text: "The Bible does have a story that his people prayed and that he changed his mind, so I can pray. But that's all. Anything else is pure hubris, and is an insult to God and his perfect plans" },
          { score: 6, text: "I can help God by doing what I can to trigger the End Times, such as helping the Jewish People take over all of ancient Judea. I want my government to give money, weapons, even soldiers to help the country of Israel to establish dominance in the Levant coast. I might even go fight myself." }
        ]
      }
    ]
  },
  {
    id: 'church',
    title: 'Relationship to a church or parish',
    questions: [
      {
        id: 'q1',
        text: "How regularly do you attend church or mass?",
        options: [
          { score: 1, text: "Rarely or never" },
          { score: 2, text: "Holidays and Holy Days" },
          { score: 3, text: "One or two times a month" },
          { score: 4, text: "Weekly" },
          { score: 5, text: "Multiple times a week" }
        ]
      },
      {
        id: 'q2',
        text: "Are there things in your life that prevent you from attending church/mass, or attending as often as you'd like? Examples: health concerns, retail work schedules, a controlling family member, lack of transportation",
        options: [
          { score: 4, text: "Yes" },
          { score: 0, text: "No" }
        ]
      },
      {
        id: 'q3',
        text: "Have you read the Statement of Faith for the church you attend, and do you agree with all of it?",
        options: [
          { score: 0, text: "No, and I don't need to" },
          { score: 3, text: "No I haven't read it, or didn't know there was one, but maybe I should find it" },
          { score: 4, text: "Yes, and I agree with most of it" },
          { score: 5, text: "Yes, and I agree with all of it" }
        ]
      },
      {
        id: 'q4',
        text: "Have you ever looked through your church's financial report to understand where your donations are going?",
        options: [
          { score: 0, text: "No, and I don't need to" },
          { score: 3, text: "No, I didn't know this was possible, but maybe I should" },
          { score: 4, text: "No, I trust them to wisely use the money I donate, whether for church upkeep or sending some of it to other non profits (whether political or not)" },
          { score: 5, text: "Yes" }
        ]
      }
    ]
  }
];

// Flatten all questions into a single array for display
let flattenedQuestions = [];

// Store user responses: { topic_id: { q1: score, q2: score, ... } }
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
  
  if (card.classList.contains('active')) {
    icon.textContent = '−';
  } else {
    icon.textContent = '+';
  }
}

// Collect all responses organized by topic
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

// ===========================
// CUSTOM SCORING LOGIC
// ===========================

function calculateScores(responses) {
  const scores = {};
  
  // Helper: filter out zeros from values
  function getNonZeroValues(values) {
    return values.filter(v => v !== 0 && v !== undefined && v !== null);
  }
  
  // Topic 1: BIBLICAL ALIGNMENT
  // Logic: If any answer = 4, return 4. If all answers same, return that value. If different, prefer Q1.
  const bibAlignQ1 = responses['biblical_alignment']?.q1 || 0;
  const bibAlignQ2 = responses['biblical_alignment']?.q2 || 0;
  const bibAlignValues = [bibAlignQ1, bibAlignQ2];
  const nonZeroBibAlign = getNonZeroValues(bibAlignValues);
  
  if (bibAlignValues.includes(4)) {
    scores['Biblical Alignment'] = 4;
  } else if (nonZeroBibAlign.length === 0) {
    scores['Biblical Alignment'] = 0;
  } else if (new Set(nonZeroBibAlign).size === 1) {
    // All non-zero values are the same
    scores['Biblical Alignment'] = nonZeroBibAlign[0];
  } else {
    // Values differ - prefer first question
    scores['Biblical Alignment'] = bibAlignQ1;
  }
  
  // Topic 2: BIB AUTH FOR SELF
  // Logic: Direct pass-through (single question)
  const bibAuthSelfQ1 = responses['bib_auth_for_self']?.q1 || 0;
  scores['Biblical Authority: My Body and Soul'] = bibAuthSelfQ1;
  
  // Topic 3: BIB AUTH OTHERS SOULS
  // Logic: Direct pass-through (single question)
  const bibAuthOthersSoulsQ1 = responses['bib_auth_others_souls']?.q1 || 0;
  scores['Biblical Authority: Other people\'s Souls'] = bibAuthOthersSoulsQ1;
  
  // Topic 4: EVANGELISM
  // Logic: Direct pass-through (single question)
  const evangelismQ1 = responses['evangelism']?.q1 || 0;
  scores['Evangelism'] = evangelismQ1;
  
  // Topic 5: MOTIVATIONAL ALIGNMENT
  // Logic: Maximum value from all questions
  const motAlignQ1 = responses['motivational_alignment']?.q1 || 0;
  const motAlignQ2 = responses['motivational_alignment']?.q2 || 0;
  const motAlignQ3 = responses['motivational_alignment']?.q3 || 0;
  const motAlignValues = [motAlignQ1, motAlignQ2, motAlignQ3].filter(v => v !== 0);
  scores['Motivational Alignment'] = motAlignValues.length > 0 ? Math.max(...motAlignValues) : 0;
  
  // Topic 6: SPIRITUAL WARFARE
  // Logic: Maximum value from all questions
  const spiritWarfareQ1 = responses['spiritual_warfare']?.q1 || 0;
  const spiritWarfareQ2 = responses['spiritual_warfare']?.q2 || 0;
  const spiritWarfareValues = [spiritWarfareQ1, spiritWarfareQ2].filter(v => v !== 0);
  scores['Spiritual Warfare'] = spiritWarfareValues.length > 0 ? Math.max(...spiritWarfareValues) : 0;
  
  // Topic 7: CHURCH
  // Logic: Maximum value from all questions
  const churchQ1 = responses['church']?.q1 || 0;
  const churchQ2 = responses['church']?.q2 || 0;
  const churchQ3 = responses['church']?.q3 || 0;
  const churchQ4 = responses['church']?.q4 || 0;
  const churchValues = [churchQ1, churchQ2, churchQ3, churchQ4].filter(v => v !== 0);
  scores['Relationship to a church or parish'] = churchValues.length > 0 ? Math.max(...churchValues) : 0;
  
  // Topic 8: BIB AUTH OTHERS PHYS
  // Logic: Highest value + overrides (check bib_auth_for_self=1 → force 1; check motivation_Q3=5 → force 6)
  const bibAuthPhysQ1 = responses['bib_auth_others_phys']?.q1 || 0;
  const bibAuthPhysQ2 = responses['bib_auth_others_phys']?.q2 || 0;
  const bibAuthPhysQ3 = responses['bib_auth_others_phys']?.q3 || 0;
  const bibAuthPhysValues = [bibAuthPhysQ1, bibAuthPhysQ2, bibAuthPhysQ3].filter(v => v !== 0);
  let bibAuthPhysScore = bibAuthPhysValues.length > 0 ? Math.max(...bibAuthPhysValues) : 0;
  
  // Override #1: If bib_auth_for_self = 1, force to 1
  if (scores['Biblical Authority: My Body and Soul'] === 1) {
    bibAuthPhysScore = 1;
  }
  
  // Override #2: If motivation_Q3 = 5 (Yes), force to 6
  if (motAlignQ3 === 5) {
    bibAuthPhysScore = 6;
  }
  
  scores['Biblical Authority: Other people\'s Bodies'] = bibAuthPhysScore;
  
  return scores;
}

// Submit quiz and display results
function submitQuiz() {
  topicResults = collectResponses();
  
  // Validation: Check all questions answered
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
  
  // Calculate scores using custom logic
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
