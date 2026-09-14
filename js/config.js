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
      {
        id: 'q2',
        text: "Do you believe God approves of different kinds of sins as a means to an end, if the final goal is something you think God values? (Examples: lying, twisting the truth, withholding truth, cheating, controlling or withholding resources, etc., as long as I'm not breaking any state or federal laws)",
        options: [
          { score: 10, text: "Yes -- I think God will forgive me if I did" },
          { score: 0, text: "No -- I trust that God is able to work everything out according to his own plan and doesn't need me to interfere, especially if I have to sin to do it" },
          { score: 0, text: "No, Jesus is not ok with me purposely sinning even if I think it will bring about something good. I take Heb 10:24, Gal 2:17, and Col 3:17 seriously. Plus it could make me look like a hypocrite to people I need to witness to" }
        ]
      },
      {
        id: 'q3',
        text: "Do you believe God would approve of you breaking a law as a means to an end, if the final goal is something you think God values? (Examples: stealing, fraud, libel, lying in paperwork or in a legal case, vandalism, money laundering, etc.)",
        options: [
          { score: 10, text: "Yes, God would approve" },
          { score: 0, text: "No, God would not approve" }
        ]
      }
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
        text: "Let's say there's an American woman who believes that part of her unalienable rights to Life, Liberty, and the pursuit of Happiness includes a right to legally join households and finances with another consenting adult woman and raise a family, or that another American woman believes that the sanctity of her own life is more important than the first trimester life in her womb. These are beliefs and also fall under an unalienable right to life or liberty or happiness. Do you think that laws against gay marriage and against abortion prevent the free exercise of beliefs for the example women?",
        options: [
          { score: 1, text: "Yes, these women's rights are violated if the laws are based on the beliefs from someone else's religion" },
          { score: 2, text: "Yes. Abortions can be necessary to save a mother's life. I'm not sure why people mix up 'marriage' as a spiritual ceremony when talking about a set of legal rules for couples and families -- they are separate issues" },
          { score: 5, text: "No. Marriage is from the Bible, and is defined as being one man and one woman. Abortion is murder because the baby is living and the mother is planning to kill it. Gay marriage and abortion aren't rights that anyone should have." }
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
    title: 'Relationship to a Church',
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
  },
  {
    id: 'leader',
    title: 'Relationship to a Leader',
    questions: [
      {
        id: 'q1',
        text: "Do you have a pastor, priest, church leader, or other person who helps shape what your spiritual values and beliefs are? Would you ever feel confident to ask questions or ask for a discussion if there are issues of faith or spiritual values you disagree about or feel uncomfortable about?",
        options: [
          { score: 1, text: "No, I'm really just a solo practitioner" },
          { score: 2, text: "Yes -- I am interested and challenged by my leader, but I don't always agree with their opinions. I look to other sources for shaping my spiritual beliefs and values even if I respect my leader." },
          { score: 3, text: "Yes -- I have a leader who I have respect and admiration for and generally always agree with, while I still see him or her as a spiritual peer even if they are a pastor or priest. My leader is still human and fallible, and I have engaged with them to question things I disagree about." },
          { score: 4, text: "Yes -- I really admire my leader and feel it's important to respect their authority and to submit to their teachings since they are the experts. I'm sure I could have a discussion if they every happened to teach something I disagree with, but I'd be more nervous about getting tongue-tied talking with them because I like and respect them so much." },
          { score: 5, text: "Yes -- I have found a leader who is so inspired by God and so close to God that I want to learn everything I can from them. If they teach things or talk about things that go against what the Bible says, it's probably because they are so close to God that they have new updates from God to all of us. It's so exciting to be part of this group of Christians who are hearing the newest stuff from God!" },
          { score: 6, text: "Yes -- I have found a leader who is so inspired by God and so close to God that I want to learn everything I can from them. To prove how serious I am about my faith, I may be asked to do things that feel confusing or wrong, but I have to trust it's for a good reason in the end. I might need to move away from friends and family, or stop talking to them entirely. I might need to be secretive or be entrusted with secrets. I might need to only read or watch informational content that my leader provides. I really need to show my loyalty for this leader and our group." }
        ]
      }
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
        id: 'q2',
        text: "Should Christians help the needy and the struggling only through donating to churches and religious organizations? Or should Christians help the needy and the struggling through paying taxes as well as personal donations?",
        options: [
          { score: 1, text: "Christians should not rely on the state to help the needy, they should vote against it and instead donate to religious institutions or nonprofits so those groups can help the needy." },
          { score: 2, text: "Christians can donate to organizations to help the needy, but it is also efficient (and even Christlike) to pay taxes and vote to have the government run programs to help the needy." }
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
    id: 'persecution',
    title: 'Religious Persecution',
    questions: [
      {
        id: 'q1',
        text: "Do you feel Christians are persecuted due their religious beliefs (Examples: can be screened out of job searches or lose jobs, be kicked out of rental homes or denied home loans, jailed for expressing their beliefs, experience acts of violence while minding their own business)?",
        options: [
          { score: 1, text: "Christians do not face persecution in the US, and actually they have more Privilege and rights compared to other groups" },
          { score: 1, text: "Christians do not face persecution in the US" },
          { score: 2, text: "Christians occasionally face minor religious persecution in the US" },
          { score: 3, text: "Christians face major religious persecution in the US" },
          { score: 3, text: "Christians are persecuted for their beliefs in the US more than other kinds of groups (Muslims, Jews, LGBTQ+, People of Color, people with disabilities)" }
        ]
      }
    ]
  },
  {
    id: 'authoritarian',
    title: 'Christian Authoritarianism',
    questions: [
      {
        id: 'q1',
        text: "Do you believe that the US started as a Christian Nation?",
        options: [
          { score: 5, text: "Yes -- all of the founding fathers were Christians, and were trying to escape religious persecution from Britain, so the US did start as a Christian nation" },
          { score: 1, text: "No" },
          { score: 1, text: "No -- in fact, in 100+ the years before the US declared independence, only 1 small colony was a specifically religious colony and all the others were mercantile colonies (and the Pilgrims were not the first colony). The writers of the Constitution were of varying beliefs, including Diests. They modeled our government structure and architecture after the pagans of ancient Greece and ancient Rome. Many of the founding fathers worked to use sacred pagan geometry to lay out the capital city" }
        ]
      },
      {
        id: 'q2',
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
  {
    id: 'racism',
    title: 'Racism',
    questions: [
      {
        id: 'q1',
        text: "Which of the following mostly describes your feelings about people with darker versus lighter skin colors?",
        options: [
          { score: 1, text: "I believe that God created all humans to have all the same capacities across ethnicities or skin colors. There are no ethnicities where the whole group is somehow better, smarter, more capable, or more favored by God than other ethnic groups." },
          { score: 2, text: "Even though the 12 disciples and all the original Christians were ethnically and religiously Jewish, and Jesus told them to go spread the good news to all nations, I believe that God made Caucasian people to be better than people who are not, and that white Christians are inherently better at being Christians than non-white Christians." },
          { score: 3, text: "Only people who are Caucasian can be saved." }
        ]
      }
    ]
  }
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
  'Relationship to a Church',
  'Relationship to a Leader',
  'Political Alignment',
  'Religious Persecution',
  'Christian Authoritarianism',
  'Racism'
];

// Label maps
export const bibFamiliarityLabels = {
  1: 'Osmosist: Never or basically never reads the Bible',
  2: 'Osmosist: Rarely to sometimes reads the Bible',
  3: 'Indirect: Getting info about the Bible from handouts or guides',
  4: 'Committed: Reads Bible outside church/mass',
  5: 'Researcher: Reads Bible often, and uses ancient languages to check context'
};

export const biblicalAlignmentLabels = {
  1: 'Gospels: Only the Gospels are a source of Truth',
  2: 'Red Letter: Only Jesus\'s words are a source of Truth',
  3: 'New Testament: Only the NT is a source of Truth and laws',
  4: 'Old Testament: The Old Testament is the preferred source of truth and laws',
  5: 'Cherry Picker: All parts of the Bible are equally true and I can pick from any of the laws'
};

export const bibAuthForSelfLabels = {
  1: 'Idealist: Just likes the ideals of Christ',
  2: 'Good Bookist: Bible has good stories and morals, but I don\'t have to follow them',
  3: 'Honorist: The Bible has important teachings, but also it\'s old and can\'t be relied on',
  4: 'Partial Literalist: Some parts of the Bible are to be followed literally and some aren\'t',
  5: 'Literalist: The whole Bible is literal, and I follow it the best I can',
  6: 'Literalist Separatists: To follow the Bible faithfully, I have to be apart from most of society'
};

export const bibAuthOthersSoulsLabels = {
  1: 'Many Paths: Many Paths up the Mountain and all are equal',
  2: 'Good People: Good People end up in Heaven',
  3: 'Christ Only: Christ is the Only Way, for everyone'
};

export const motivationalLabels = {
  1: 'None: my faith doesn\'t motivate me to police others',
  2: 'Live and Let Live: God is Judge, I\'m not motivated to police others',
  3: 'Concern: I feel compelled to intervene when a Body or Soul could be in danger (according to my definition of danger)',
  4: 'Control/Conformity: motivated to intervene because of what the Bible says, or my pastor/priest says, or because it\'s my culture',
  5: 'Hate/Disgust: motivated to intervene because something is unnatural or disgusting (according to my definitions)'
};

export const evangelismLabels = {
  1: 'No one needs saving',
  2: 'Not Evangelical: not my place, not my job, not my expertise, or Calvinist',
  3: 'Mild/Moderately Evangelical: Jesus might need my other skills more',
  4: 'Life-Purpose Evangelical: The only purpose of a Christian\'s life is to help save souls',
  5: 'Missionary: Above and beyond personal relationships'
};

export const spiritualWarfareLabels = {
  1: 'None: didn\'t cross my mind, or there isn\'t a war like that',
  2: 'Maybe Angels: Angels- Yes! Demons- I guess so',
  3: 'Not My War: It\'s between God and Satan',
  4: 'Spiritual War + Prayer: it\'s real and I can fight by praying and remaining mentally strong and Non-Violent',
  5: 'Spiritual War + Demonic Possession: It\'s real and I can fight it by praying and casting out demons',
  6: 'Spiritual War + Physical Violence: It\'s real and I can help Jesus come back by physically or financially supporting Israeli wars'
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
  2: 'Generally respected leader: still weighs other sources to shape values/beliefs',
  3: 'Admired Leader, Spiritual Peer: Can question a spiritual peer and still be inspired',
  4: 'Adoration and Submission: Authority/hierarchy is important, but more awe and inspiration',
  5: 'Leader over Bible: follow the leader even when in conflict with the Bible',
  6: 'Cult: the leader of a cult uses methods of control (of behavior, information, thought, and emotions) to replace a person\'s free will with obedience and replace their individuality with dependency. This can include using secrecy, deception, manipulation, sexual pressure or rape, or violence. It often includes shunning or harassing individuals who leave the group. -Dr. Steven Hasan\'s BITE model'
};

export const politicalLabels = {
  1: 'Non-Voter',
  2: 'Liberal who votes Democrat',
  3: 'Conservative who votes Republican',
  4: 'Liberal who votes Republican (Liberal Hostages)',
  5: 'Conservative who votes Democrat'
};

export const persecutionLabels = {
  1: 'Christians are not persecuted',
  2: 'Christians occasionally face minor persecution',
  3: 'Christians actively face major persecution'
};

export const racismLabels = {
  1: 'Christianity is for everyone, and all people are created equal',
  2: 'Christianity is for everyone, but white people are better',
  3: 'Christianity is only for White people'
};

export const bibAuthOthersPhysLabels = {
  1: 'None: the Bible isn\'t an authority for me, so it\'s not an authority for anyone else',
  2: 'Live and Let Live: The Bible is my authority, but I let God be the Judge of everyone else',
  3: 'Peer-Only-Policer: The Bible is an authority to me and other Christians, but it shouldn\'t be imposed on people who aren\'t Christians yet',
  4: 'Open Season Policing: The Bible is true for everyone, even if they don\'t think so',
  5: 'Christian Authoritarian: The US is or should be a Christian nation, and the rules of the Bible should be turned into laws',
  6: 'Vigilantes & Criminals: Breaking the law or committing violence in the name of God'
};

export const authoritarianLabels = {
  1: 'Secular Nation',
  5: 'Christian Nation'
};
