export const quizData = [
  {
    id: 'bib_familiarity',
    title: 'Biblical Familiarity',
    questions: [
      {
        id: 'q1',
        text: "Which response best describes your interaction with the Bible in the last 1-2 years?",
        options: [
          { score: 1, text: "I may or may not have a Bible of my own, but I don't read the Bible myself. I hear Bible verses at church/mass or from a spiritual leader" },
          { score: 2, text: "I crack open the Bible a couple times a year, but I usually hear Bible verses at church/mass or from a spiritual leader" },
          { score: 3, text: "I may or may not have a Bible of my own, but when I read the Bible it's usually from a workbook (like \"Ten Great Women of the Bible\") or from church handouts or church publishers" },
          { score: 4, text: "In addition to church/mass, I read my own Bible multiple times a week" },
          { score: 5, text: "In addition to church/mass, and reading the Bible on my own multiple times a week, I also have companion guides for original languages of the Bible or can read the ancient languages directly." }
        ]
      }
    ]
  },
  {
    id: 'biblical_alignment',
    title: 'Biblical Alignment',
    questions: [
      {
        id: 'q1',
        text: "The Council of Nicea (325 AD/CE) put together the current set of texts that is regarded by many to be the official Holy Bible. Which of these statements do you most resonate with?",
        options: [
          { score: 1, text: "I haven't heard of the Council of Nicea. Or I have heard of them, and it's not important to my faith. I am glad to have the Bible but I might be open to other sources about Jesus, such as the gospels of the Nag Hamadi Library" },
          { score: 1, text: "I think the Bible's gospels are the only writings that actually say what Jesus said. The rest of the New Testament was written by other people, and a lot of them by a guy who didn't ever spend time with Jesus when he was alive. If I want to know what Jesus taught, I'll get it straight from the gospels" },
          { score: 2, text: "The gospels are the truest accounts of Jesus and what he taught, but I get concerned about the parts where the author (or other people over the years) may have added things that Jesus didn't intend. I stick to the actual quoted words of Jesus only." },
          { score: 3, text: "I think the Council of Nicea was inspired and guided by God. They selected the texts that are in the Bible today because those are the ones that God inspired, and they are important to my faith and practice. But Jesus did say he completed the Law and the Prophets (the Old Testament) so no one has to follow any of the rules or even read it if they don't want to. I may reference or be inspired by the Old Testament, but I only follow what's in the New Testament" },
          { score: 5, text: "I think the Council of Nicea was inspired and guided by God. They selected the texts that are in the Bible today because those are the ones that God inspired, and they are important to my faith and practice. The books from the New Testament and Old Testament alike have values, guidelines, and rules for my life that I need to follow." }
        ]
      },
    ]
  },
  {
    id: 'bib_auth_for_self',
    title: 'Biblical Authority: My Body & Soul',
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
      },
    ]
  },
  {
    id: 'bib_auth_others_souls',
    title: "Biblical Authority: Other peoples' Souls",
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
    id: 'bib_auth_others_phys',
    title: "Biblical Authority: Other peoples' Bodies",
    questions: [
    
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
    ]
  },
  {
    id: 'motivational_alignment',
    title: 'Motivational Alignment',
    questions: [
      {
        id: 'q1',
        text: "If you had an urge to ask someone or tell someone to stop doing something because it doesn't align with your Christian values or beliefs (like knowing a straight couple is living together without being married, or knowing someone who gambles a lot), which of these most sounds like what you'd be thinking?",
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
          { score: 5, text: "Yes, there's a real spiritual war affecting spiritual and physical realms that we must actively 'fight' all the time. Demons can influence people and possess them! I can fight the spiritual war by talking with people, praying, 'putting on the armor of God', and actively casting demons out-of (or off-of) people." },
          { score: 6, text: "Yes, and I can help God by doing what I can to trigger the End Times, such as helping the Jewish People take over all of ancient Judea. I want my government to give money, weapons, even soldiers to help the country of Israel to establish dominance in the Levant coast. I might even go fight myself." },
        ],
      },
    ]
  },
 
  {
    id: 'political',
    title: 'Political Alignment',
    questions: [
      {
        id: 'q1',
        text: "Do you vote?",
        options: [
          { score: 1, text: "No -- I don't like or care about politics, or I don't like to put my focus on things that are negative" },
          { score: 1, text: "No -- the system is rigged since you only have two choices" },
          { score: 1, text: "No -- the Bible instructs me to submit to government authorities, not to become an authority by voting in a democracy" },
          { score: 1, text: "No -- the Bible says that only God is Judge. My vote is the same as casting judgement about what is good or bad in a society. Also, Christians should not be judges or elected representatives because they would have to make judgements" },
          { score: 0, text: "Yes -- I vote" }
        ]
      },
      {
        id: 'q3',
        text: "Do you have an opinion on whether you'd like the federal government to collect taxes and use them for government-managed programs like Social Security, Medicaid/Medicare, disaster relief, and public schools?",
        options: [
          { score: 3, text: "I don't think the government is efficient with my tax dollars, so I don't think the government should manage programs like this" },
          { score: 3, text: "I think these are communist or socialist programs and I don't want my taxes going to fund communism or socialism" },
          { score: 2, text: "I think the biggest strength of the United States is the ability to collect tax money from all the states (with widely varying GDP) in a big pot so that it can be used by any of the states for different kinds of disaster relief and support programs, as well as ensuring all citizens are educated enough to make good decisions at the ballot and live successful lives that contribute to the state and national GDP." }
        ]
      },
      {
        id: 'q4',
        text: "In the past few years, have you used your right to vote as a way of expressing disapproval of any of these issues: LGBTQ+ issues, abortion, evolution or prayer in public schools?",
        options: [
          { score: 10, text: "Yes" },
          { score: 0, text: "No" }
        ]
      }
    ]

  },
  {
    id: 'authoritarian',
    title: 'Authoritarian/Fascist',
    questions: [
      
      {
        id: 'qid: 'q2',
        text: "Even though the US Constitution is explicit that Congress cannot make a law that establishes a national religion or make laws that prevent people from practicing their religions, do you think the US government should declare a national religion that is some form of Christian?",
        options: [
          { score: 5, text: "Yes -- we need to reclaim the fact that we started as a Christian nation" },
          { score: 5, text: "Yes -- we might as well because the majority of Americans are Christian anyway" },
          { score: 1, text: "No -- it goes against everything our Founders intended" },
          { score: 1, text: "No -- that's dangerous because it could be used against Christians later if a different religion is declared as the national religion, or if some denomination is declared as the only true religion (then we might end up with persecution or civil wars about denominations or Protestant vs Catholic" }
        ]
      }
    ]
  },
  
];

export const TOPIC_ORDER = [
  'Biblical Familiarity',
  'Biblical Alignment',
  'Biblical Authority: My Body & Soul',
  "Biblical Authority: Other peoples' Souls",
  "Biblical Authority: Other peoples' Bodies",
  'Motivational Alignment',
  'Evangelism',
  'Spiritual Warfare',
  'Political Alignment',
];

// Label maps
export const bibFamiliarityLabels = {
  1: 'Osmosist: Never or basically never',
  2: 'Osmosist: Sometimes reads the Bible',
  3: 'Indirect',
  4: 'Committed',
  5: 'Researcher'
};

export const biblicalAlignmentLabels = {
  1: 'Gospels',
  2: 'Red Letter',
  3: 'New Testament',
  4: 'Old Testament',
  5: 'Cherry Picker'
};

export const bibAuthForSelfLabels = {
  1: 'Idealist',
  2: 'Good Bookist',
  3: 'Honorist',
  4: 'Partial Literalist',
  5: 'Literalist',
  6: 'Literalist Separatists'
};

export const bibAuthOthersSoulsLabels = {
  1: 'Many Paths up the Mtn',
  2: 'Good People end up in Heaven',
  3: 'Christ is the Only Way'
};

export const motivationalLabels = {
  1: 'None',
  2: 'Live and Let Live',
  3: 'Concern',
  4: 'Control/Conformity',
  5: 'Hate/Disgust'
};

export const evangelismLabels = {
  1: 'No one needs saving',
  2: 'Not Evangelical',
  3: 'Mild/Moderately Evangelical',
  4: 'Life-Purpose Evangelical',
  5: 'Missionary'
};

export const spiritualWarfareLabels = {
  1: 'None',
  2: 'Maybe Angels',
  3: 'Not My War',
  4: 'Spiritual War via Prayer',
  5: 'Spiritual War via Demonic Possession',
  6: 'Spiritual War via Physical Violence'
};

export const churchLabels = {
  1: 'Solo Practitioner',
  2: 'Cultural',
  3: 'Casual Community',
  4: 'Integrated Community',
  5: 'Invested/Serving/Leading'
};

export const leaderLabels = {
  1: 'No Leader',
  2: 'Generally respected leader',
  3: 'Admired Leader, Spiritual Peer',
  4: 'Adoration and Submission',
  5: 'Leader over Bible',
  6: 'Cult'
};

export const politicalLabels = {
  1: 'Non-Voter',
  2: 'Liberal who votes Democrat',
  3: 'Conservative who votes Republican',
  4: 'Liberal who votes Republican (Liberal Hostage)',
  5: 'Conservative who votes Democrat'
};

export const persecutionLabels = {
  1: 'Christians are not persecuted',
  2: 'Christians fave minor persectution',
  3: 'Christians face major persecution'
};

export const racismLabels = {
  1: 'All humans are equal to God',
  2: 'White people are better Christians',
  3: 'Christianity is only for White people'
};

export const bibAuthOthersPhysLabels = {
  1: 'None',
  2: 'Live and Let Live',
  3: 'Peer-Only-Policer',
  4: 'Open Season Policing',
  5: 'Christian Authoritarian',
  6: 'Vigilantes & Criminals'
};

export const authoritarianLabels = {
  1: 'Pro Democracy',
  5: 'Forced compliance of 1 religion\'s rules onto all citizens'
};
