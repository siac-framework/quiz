// ===========================
// QUIZ DATA CONFIGURATION
// All 14 topics with questions and options
// ===========================
const quizData = [
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
          { score: 4, text: "All of the parts of the Bible that I value, I interpret literally and follow to the best of my ability. (examples: someone believes that only the Gospels are true and literal and follows them, but does not follow any other part of
