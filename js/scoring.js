import { 
  getNonZeroValues, 
  hasValidAnswers 
} from './utils.js';
import { 
  bibFamiliarityLabels,
  biblicalAlignmentLabels,
  bibAuthForSelfLabels,
  bibAuthOthersSoulsLabels,
  motivationalLabels,
  evangelismLabels,
  spiritualWarfareLabels,
  churchLabels,
  leaderLabels,
  politicalLabels,
  persecutionLabels,
  racismLabels,
  bibAuthOthersPhysLabels,
  authoritarianLabels
} from './config.js';

export function calculateScores(responses) {
  const scores = {};
  const scoresLabels = {};
  const scoresWithValidity = {};
  
  // --- TOPIC 1: BIBLICAL FAMILIARITY ---
  const bibFamiliarityQ1 = responses['bib_familiarity']?.q1 || 0;
  scores['Biblical Familiarity'] = bibFamiliarityQ1;
  scoresLabels['Biblical Familiarity'] = bibFamiliarityLabels[bibFamiliarityQ1] || '';
  scoresWithValidity['Biblical Familiarity'] = bibFamiliarityQ1 !== 0;
  
  // --- TOPIC 2: BIBLICAL ALIGNMENT ---
  const bibAlignQ1 = responses['biblical_alignment']?.q1 || 0;
  const bibAlignQ2 = responses['biblical_alignment']?.q2 || 0;
  const bibAlignValues = [bibAlignQ1, bibAlignQ2];
  const bibAlignHasAnswers = hasValidAnswers(bibAlignValues);
  const nonZeroBibAlign = getNonZeroValues(bibAlignValues);
  
  let bibAlignScore = 0;
  if (bibAlignValues.includes(4)) {
    bibAlignScore = 4;
  } else if (!bibAlignHasAnswers) {
    bibAlignScore = 0;
  } else if (new Set(nonZeroBibAlign).size === 1) {
    bibAlignScore = nonZeroBibAlign[0];
  } else {
    bibAlignScore = bibAlignQ1;
  }
  
  scores['Biblical Alignment'] = bibAlignScore;
  scoresLabels['Biblical Alignment'] = biblicalAlignmentLabels[bibAlignScore] || '';
  scoresWithValidity['Biblical Alignment'] = bibAlignHasAnswers;
  
  // --- TOPIC 3: BIB AUTH FOR SELF ---
  const bibAuthSelfQ1 = responses['bib_auth_for_self']?.q1 || 0;
  const bibAuthSelfQ2 = responses['bib_auth_for_self']?.q2 || 0;
  const bibAuthSelfQ3 = responses['bib_auth_for_self']?.q3 || 0;
  const bibAuthSelfHasAnswers = bibAuthSelfQ1 !== 0;
  
  let bibAuthSelfScore = bibAuthSelfQ1;
  if (bibAuthSelfQ2 === 10 && bibAuthSelfQ1 === 5) {
    bibAuthSelfScore = 4;
  }
  
  scores['Biblical Authority: My Body & Soul'] = bibAuthSelfScore;
  scoresLabels['Biblical Authority: My Body & Soul'] = bibAuthForSelfLabels[bibAuthSelfScore] || '';
  scoresWithValidity['Biblical Authority: My Body & Soul'] = bibAuthSelfHasAnswers;
  
  // --- TOPIC 4: BIB AUTH OTHERS SOULS ---
  const bibAuthOthersSoulsQ1 = responses['bib_auth_others_souls']?.q1 || 0;
  scores["Biblical Authority: Other peoples' Souls"] = bibAuthOthersSoulsQ1;
  scoresLabels["Biblical Authority: Other peoples' Souls"] = bibAuthOthersSoulsLabels[bibAuthOthersSoulsQ1] || '';
  scoresWithValidity["Biblical Authority: Other peoples' Souls"] = bibAuthOthersSoulsQ1 !== 0;
  
  // --- TOPIC 5: BIB AUTH OTHERS PHYS (BASE CALCULATION) ---
  const bibAuthPhysQ1 = responses['bib_auth_others_phys']?.q1 || 0;
  const bibAuthPhysQ2 = responses['bib_auth_others_phys']?.q2 || 0;
  const bibAuthPhysQ3 = responses['bib_auth_others_phys']?.q3 || 0;
  const bibAuthPhysValues = [bibAuthPhysQ1, bibAuthPhysQ2, bibAuthPhysQ3];
  const bibAuthPhysHasAnswers = hasValidAnswers(bibAuthPhysValues);
  const nonZeroBibAuthPhys = getNonZeroValues(bibAuthPhysValues);
  let bibAuthPhysScore = bibAuthPhysHasAnswers ? Math.max(...nonZeroBibAuthPhys) : 0;
  
  // --- TOPIC 6: MOTIVATIONAL ALIGNMENT ---
  const motAlignQ1 = responses['motivational_alignment']?.q1 || 0;
  const motAlignQ2 = responses['motivational_alignment']?.q2 || 0;
  const motAlignQ3 = responses['motivational_alignment']?.q3 || 0;
  const motAlignValues = [motAlignQ1, motAlignQ2, motAlignQ3];
  const motAlignHasAnswers = hasValidAnswers(motAlignValues);
  const nonZeroMotAlign = getNonZeroValues(motAlignValues);
  let motAlignScore = motAlignHasAnswers ? Math.max(...nonZeroMotAlign) : 0;
  
  const politicalQ2 = responses['political']?.q2 || 0;
  if (politicalQ2 === 1 && motAlignScore < 4) {
    motAlignScore = 4;
  }
  
  scores['Motivational Alignment'] = motAlignScore;
  scoresLabels['Motivational Alignment'] = motivationalLabels[motAlignScore] || '';
  scoresWithValidity['Motivational Alignment'] = motAlignHasAnswers;
  
  // --- TOPIC 7: EVANGELISM ---
  const evangelismQ1 = responses['evangelism']?.q1 || 0;
  scores['Evangelism'] = evangelismQ1;
  scoresLabels['Evangelism'] = evangelismLabels[evangelismQ1] || '';
  scoresWithValidity['Evangelism'] = evangelismQ1 !== 0;
  
  // --- TOPIC 8: SPIRITUAL WARFARE ---
  const spiritWarfareQ1 = responses['spiritual_warfare']?.q1 || 0;
  const spiritWarfareQ2 = responses['spiritual_warfare']?.q2 || 0;
  const spiritWarfareValues = [spiritWarfareQ1, spiritWarfareQ2];
  const spiritWarfareHasAnswers = hasValidAnswers(spiritWarfareValues);
  const nonZeroSpiritWarfare = getNonZeroValues(spiritWarfareValues);
  const spiritWarfareScore = spiritWarfareHasAnswers ? Math.max(...nonZeroSpiritWarfare) : 0;
  
  scores['Spiritual Warfare'] = spiritWarfareScore;
  scoresLabels['Spiritual Warfare'] = spiritualWarfareLabels[spiritWarfareScore] || '';
  scoresWithValidity['Spiritual Warfare'] = spiritWarfareHasAnswers;
  
  // --- TOPIC 9: CHURCH ---
  const churchQ1 = responses['church']?.q1 || 0;
  const churchQ2 = responses['church']?.q2 || 0;
  const churchQ3 = responses['church']?.q3 || 0;
  const churchQ4 = responses['church']?.q4 || 0;
  const churchValues = [churchQ1, churchQ2, churchQ3, churchQ4];
  const churchHasAnswers = hasValidAnswers(churchValues);
  const nonZeroChurch = getNonZeroValues(churchValues);
  const churchScore = churchHasAnswers ? Math.max(...nonZeroChurch) : 0;
  
  scores['Relationship to a Church'] = churchScore;
  scoresLabels['Relationship to a Church'] = churchLabels[churchScore] || '';
  scoresWithValidity['Relationship to a Church'] = churchHasAnswers;
  
  // --- TOPIC 10: LEADER ---
  const leaderQ1 = responses['leader']?.q1 || 0;
  scores['Relationship to a Leader'] = leaderQ1;
  scoresLabels['Relationship to a Leader'] = leaderLabels[leaderQ1] || '';
  scoresWithValidity['Relationship to a Leader'] = leaderQ1 !== 0;
  
  // --- TOPIC 11: POLITICAL ---
  const politicalQ1 = responses['political']?.q1 || 0;
  const politicalQ2Val = responses['political']?.q2 || 0;
  const politicalQ3 = responses['political']?.q3 || 0;
  const politicalQ4 = responses['political']?.q4 || 0;
  const politicalValuesForMax = [politicalQ1, politicalQ2Val, politicalQ3].filter(v => v !== 0);
  const politicalHasAnswers = hasValidAnswers([politicalQ1, politicalQ2Val, politicalQ3]);
  
  let politicalScore = 1;
  if (politicalQ1 === 1) {
    politicalScore = 1;
  } else if (politicalHasAnswers) {
    politicalScore = Math.max(...politicalValuesForMax);
  } else {
    politicalScore = 0;
  }
  
  if (politicalScore === 2 && politicalQ4 === 10) {
    politicalScore = 4;
  }
  
  scores['Political Alignment'] = politicalScore;
  scoresLabels['Political Alignment'] = politicalLabels[politicalScore] || '';
  scoresWithValidity['Political Alignment'] = politicalHasAnswers;
  
  // --- TOPIC 12: PERSECUTION ---
  const persecutionQ1 = responses['persecution']?.q1 || 0;
  scores['Religious Persecution'] = persecutionQ1;
  scoresLabels['Religious Persecution'] = persecutionLabels[persecutionQ1] || '';
  scoresWithValidity['Religious Persecution'] = persecutionQ1 !== 0;
  
  // --- TOPIC 13: AUTHORITARIAN ---
  const authoritarianQ1 = responses['authoritarian']?.q1 || 0;
  const authoritarianQ2 = responses['authoritarian']?.q2 || 0;
  const authoritarianValues = [authoritarianQ1, authoritarianQ2];
  const authoritarianHasAnswers = hasValidAnswers(authoritarianValues);
  const nonZeroAuthoritarian = getNonZeroValues(authoritarianValues);
  const authoritarianScore = authoritarianHasAnswers ? Math.max(...nonZeroAuthoritarian) : 0;
  
  scores['Christian Authoritarianism'] = authoritarianScore;
  scoresLabels['Christian Authoritarianism'] = authoritarianLabels[authoritarianScore] || '';
  scoresWithValidity['Christian Authoritarianism'] = authoritarianHasAnswers;
  
  // --- TOPIC 14: RACISM ---
  const racismQ1 = responses['racism']?.q1 || 0;
  scores['Racism'] = racismQ1;
  scoresLabels['Racism'] = racismLabels[racismQ1] || '';
  scoresWithValidity['Racism'] = racismQ1 !== 0;
  
  // --- APPLY CROSS-TOPIC OVERRIDES TO BIB_AUTH_OTHERS_PHYS ---
  if (bibAuthSelfQ1 === 1) {
    bibAuthPhysScore = 1;
  }
  if (bibAuthSelfQ3 === 10) {
    bibAuthPhysScore = 6;
  }
  if (motAlignQ3 === 5) {
    bibAuthPhysScore = 6;
  }
  if (authoritarianHasAnswers && bibAuthPhysScore < 5) {
    bibAuthPhysScore = 5;
  }
  
  scores["Biblical Authority: Other peoples' Bodies"] = bibAuthPhysScore;
  scoresLabels["Biblical Authority: Other peoples' Bodies"] = bibAuthOthersPhysLabels[bibAuthPhysScore] || '';
  scoresWithValidity["Biblical Authority: Other peoples' Bodies"] = bibAuthPhysHasAnswers || bibAuthSelfQ1 === 1 || bibAuthSelfQ3 === 10 || motAlignQ3 === 5 || authoritarianHasAnswers;
  
  return { scores, scoresLabels, scoresWithValidity };
}
