const questionsPool = [
  {
    q: "During the summit in Brussels, the spokesperson addressed the press regarding the new environmental directives. He __________ that the member states adopt the resolution immediately.",
    options: ["suggested", "urged", "remarked", "told"],
    correct: 1,
  },
  {
    q: "The Parthenon stands as a testament to Ancient Greek ingenuity. __________ its massive marble columns to collapse, the historical loss to European heritage would be truly irreparable.",
    options: ["Were", "If", "Should", "Had"],
    correct: 0,
  },
  {
    q: "Visitors are permitted to explore the tidal island of Mont Saint-Michel __________ they adhere to the safety warnings regarding the rapid incoming tides of the bay.",
    options: ["unless", "but for", "provided that", "supposing"],
    correct: 2,
  },
  {
    q: "Looking back at the initial excavations of Pompeii, experts realize that the workers __________ more caution. Some of the artifacts were accidentally damaged during the first week.",
    options: [
      "must have exercised",
      "could have exercised",
      "should have exercised",
      "needn't have exercised",
    ],
    correct: 2,
  },
  {
    q: "Protecting the rare bird species in the Danube Delta is no easy task; environmentalists often feel like they are __________ trying to stop illegal fishing without enough patrol boats.",
    options: [
      "chasing rainbows",
      "barking up the wrong tree",
      "fighting a losing battle",
      "a fish out of water",
    ],
    correct: 2,
  },
  {
    q: "At the university debate in Heidelberg, a student stood up and asked: 'I was wondering if __________ to reconsider the current grading system in light of the new European standards?'",
    options: [
      "the dean intended",
      "did the dean intend",
      "would the dean intend",
      "the dean intends",
    ],
    correct: 0,
  },
  {
    q: "When the new trade agreement was announced, the aggressive response from the tech sector really __________ among the traditional manufacturers.",
    options: [
      "let the cat out of the bag",
      "put the cat among the pigeons",
      "took the bull by the horns",
      "killed two birds with one stone",
    ],
    correct: 1,
  },
  {
    q: "Archeologists suggest that the ancient builders __________ the massive stones from miles away, though the exact method remains a subject of intense academic debate.",
    options: [
      "might have transported",
      "should have transported",
      "can't have transported",
      "must have to transport",
    ],
    correct: 0,
  },
  {
    q: "__________ the extreme weather conditions during the winter months, the fjords would be the most visited destination in Northern Europe all year round.",
    options: [
      "Had it not been for",
      "Were it not for",
      "If it wasn't",
      "But for",
    ],
    correct: 1,
  },
  {
    q: "It is a little-known fact that the Eiffel Tower __________ by several inches during the summer due to the thermal expansion of the iron.",
    options: ["extends", "swells", "expands", "stretches"],
    correct: 2,
  },
  {
    q: "The guide at Peleș Castle __________ the visitors __________ the wood carvings, as they are extremely fragile and part of our national heritage.",
    options: [
      "suggested / not to touch",
      "urged / not touching",
      "implored / to not touch",
      "entreated / not to touch",
    ],
    correct: 3,
  },
  {
    q: "Scholars argue that had the Library of Alexandria survived, the Renaissance __________ centuries earlier, drastically changing European history.",
    options: [
      "might have occurred",
      "must have occurred",
      "should have occurred",
      "ought to have occurred",
    ],
    correct: 0,
  },
  {
    q: "If the Berlin Wall __________ still standing today, the socio-political landscape of modern Europe __________ vastly different from what we see now.",
    options: [
      "were / would have been",
      "had been / would be",
      "were / would be",
      "is / will be",
    ],
    correct: 2,
  },
  {
    q: "When the new austerity measures were announced in Madrid, the opposition leader accused the government of __________ by ignoring the primary cause of the crisis.",
    options: [
      "taking the bull by the horns",
      "flogging a dead horse",
      "smelling a rat",
      "being a dark horse",
    ],
    correct: 1,
  },
  {
    q: "Only after the signing of the Magna Carta __________ to realize that the power of the monarchy could be legally limited in England.",
    options: [
      "did the English barons begin",
      "the English barons began",
      "had the English barons begun",
      "were the English barons beginning",
    ],
    correct: 0,
  },
  {
    q: "__________ the city of Venice implements stricter regulations on cruise ships, the structural integrity of its historic buildings will continue to deteriorate.",
    options: ["Provided that", "Unless", "Supposing", "As long as"],
    correct: 1,
  },
  {
    q: "The diplomat __________ having leaked the classified documents to the press during the high-level meeting on European security.",
    options: ["refused", "denied", "rejected", "countered"],
    correct: 1,
  },
  {
    q: "The process of unifying European rail systems has been slow, but experts believe we are finally __________ after years of technical delays.",
    options: [
      "out of the woods",
      "seeing the light at the end of the tunnel",
      "skating on thin ice",
      "weathering the storm",
    ],
    correct: 1,
  },
  {
    q: "Engineers have worked tirelessly to ensure that the Leaning Tower of Pisa does not __________ further, using complex soil extraction techniques.",
    options: ["tilt", "bend", "stay", "swerve"],
    correct: 0,
  },
  {
    q: "Johannes Gutenberg __________ the impact his invention would have on European literacy; it was a revolution beyond his wildest dreams.",
    options: [
      "couldn't have foreseen",
      "mustn't have foreseen",
      "shouldn't have foreseen",
      "needn't have foreseen",
    ],
    correct: 0,
  },
  {
    q: "The journalist inquired __________ the new digital privacy law would finally take effect across the European Union.",
    options: ["that when", "when", "if when", "about when"],
    correct: 1,
  },
  {
    q: "Scarcely __________ the horizon when the vibrant green lights of the Aurora Borealis began to dance across the Arctic sky.",
    options: [
      "did the sun cross",
      "had the sun crossed",
      "the sun had crossed",
      "was the sun crossing",
    ],
    correct: 1,
  },
  {
    q: "If the permafrost in the Alps __________ to melt at this rate, many high-altitude villages __________ at risk of landslides in the near future.",
    options: [
      "continues / would be",
      "continued / will be",
      "were to continue / would be",
      "had continued / would have been",
    ],
    correct: 2,
  },
  {
    q: "Preparing for the final exams across various European systems can be exhausting; many students feel like they are __________ in a never-ending cycle of revision.",
    options: [
      "chasing their tails",
      "a wolf in sheep's clothing",
      "a leopard shouldn't change its spots",
      "crying wolf",
    ],
    correct: 0,
  },
  {
    q: "The European Commission recommended that each member state __________ its carbon footprint by at least 20% by the end of next year.",
    options: ["reduces", "reduce", "will reduce", "reduced"],
    correct: 1,
  },
  {
    q: "The Louvre’s collection is so __________ that it is physically impossible for a visitor to see every single artwork in a single day.",
    options: ["vast", "volatile", "vague", "vacant"],
    correct: 0,
  },
  {
    q: "The construction of the Sagrada Familia will be completed by 2026, __________ there are no further unforeseen financial or logistical obstacles.",
    options: ["on condition that", "even if", "unless", "but for"],
    correct: 0,
  },
  {
    q: "The proposal to change the school curriculum was met with silence; it was clear the minister had __________ with his radical ideas.",
    options: [
      "made a mountain out of a molehill",
      "broken the ice",
      "been barking up the wrong tree",
      "been a breath of fresh air",
    ],
    correct: 2,
  },
  {
    q: "If the Steam Engine __________ invented in the 18th century, the world __________ such a high level of carbon emissions today.",
    options: [
      "wasn't / wouldn't have",
      "hadn't been / might not have",
      "werere / wouldn't have had",
      "hadn't been / wouldn't be having",
    ],
    correct: 1,
  },
  {
    q: "The researchers __________ having successfully mapped the entire genome, marking a new era for European medicine.",
    options: ["admitted", "claimed", "exclaimed", "boasted"],
    correct: 1,
  },
  {
    q: "Dealing with the administrative paperwork for a work visa can be a nightmare; it is often a __________ situation regarding experience and the job itself.",
    options: [
      "snake in the grass",
      "white elephant",
      "chicken and egg",
      "fishy",
    ],
    correct: 2,
  },
  {
    q: "Under no circumstances __________ visitors to climb the original walls of the Colosseum for safety and conservation reasons.",
    options: [
      "are allowed",
      "allow",
      "are visitors allowed",
      "visitors are allowed",
    ],
    correct: 2,
  },
  {
    q: "The Vikings __________ as far as North America, as archaeological evidence in Newfoundland suggests they arrived there centuries before Columbus.",
    options: [
      "must have traveled",
      "should have traveled",
      "could have traveled",
      "might have traveled",
    ],
    correct: 0,
  },
  {
    q: "__________ for the funding provided by the European Space Agency, the Rosetta mission would never have successfully landed a probe on a comet.",
    options: ["Were it not", "Had it not been", "If it wasn't", "Supposing"],
    correct: 1,
  },
  {
    q: "The activist __________ the council for failing to protect the local wetlands from aggressive urban development projects.",
    options: ["blamed", "criticized", "accused", "scolded"],
    correct: 1,
  },
  {
    q: "The train climbed __________ up the steep Swiss mountain slope, offering passengers a breathtaking view of the valley below.",
    options: ["abruptly", "steadily", "vague", "scarcely"],
    correct: 1,
  },
  {
    q: "Should the King __________ the demands of the Third Estate in 1789, the subsequent violence of the French Revolution might have been avoided.",
    options: ["met", "have met", "meet", "had met"],
    correct: 2,
  },
  {
    q: "Trying to predict the next big technological breakthrough in Europe is like __________; it is almost impossible to know where it will emerge.",
    options: [
      "a drop in the ocean",
      "a needle in a haystack",
      "chasing the wind",
      "being under the weather",
    ],
    correct: 2,
  },
  {
    q: "Shakespeare's plays __________ the human condition in a way that remains deeply relevant to European audiences even 400 years later.",
    options: ["depict", "distort", "discard", "detach"],
    correct: 0,
  },
  {
    q: "Not only __________ the way we view art, but the Renaissance also fundamentally changed the European scientific method.",
    options: [
      "did it change",
      "it changed",
      "has it changed",
      "was it changing",
    ],
    correct: 0,
  },
  {
    q: "The Nobel committee asked the laureate how __________ to use the prize money to further his research in physics.",
    options: ["did he intend", "he intended", "would he intend", "he intends"],
    correct: 1,
  },
  {
    q: "In the digital age, many people feel that the 'Big Tech' companies have __________ on our personal data and privacy.",
    options: [
      "a bird's eye view",
      "the lion's share",
      "a bee in their bonnet",
      "a tiger by the tail",
    ],
    correct: 1,
  },
  {
    q: "The defenders of Constantinople __________ more prepared, but the overwhelming size of the opposing army made the outcome almost inevitable.",
    options: [
      "might have been",
      "must have been",
      "could have been",
      "ought to have been",
    ],
    correct: 2,
  },
  {
    q: "Europe will achieve energy independence __________ it continues to invest heavily in wind and solar infrastructure.",
    options: ["but for", "provided that", "unless", "supposing"],
    correct: 1,
  },
  {
    q: "After weeks of heated debate in the European Council, the two leaders finally __________ and reached a historical compromise.",
    options: [
      "beat around the bush",
      "buried the hatchet",
      "went with the flow",
      "hit the hay",
    ],
    correct: 1,
  },
  {
    q: "The Orient Express was __________ famous for its luxury and the distinguished guests it carried across the continent.",
    options: ["utterly", "highly", "deeply", "widely"],
    correct: 3,
  },
  {
    q: "The historians __________ that the harsh terms of the Treaty of Versailles contributed to the rise of future conflicts in Europe.",
    options: ["told", "remarked", "talked", "mentioned"],
    correct: 1,
  },
  {
    q: "If Alexander Fleming __________ his laboratory that day in 1928, millions of lives __________ lost to simple infections.",
    options: [
      "didn't tidy / would have been",
      "hadn't tidied / might have been",
      "hadn't tidied / would be",
      "wouldn't tidy / would have been",
    ],
    correct: 1,
  },
  {
    q: "Introducing a single currency was a bold move; many critics thought the architects of the Euro were __________ by attempting such a feat.",
    options: [
      "biting off more than they could chew",
      "letting sleeping dogs lie",
      "watching like a hawk",
      "acting like a fish out of water",
    ],
    correct: 0,
  },
  {
    q: "Little __________ that their small grassroots movement would eventually grow into a pan-European initiative for human rights.",
    options: [
      "they realized",
      "did they realize",
      "had they realized",
      "they were realizing",
    ],
    correct: 1,
  },
];

let selectedQuestions = [];
let currentIndex = 0;
let skippedQuestions = [];
let userAnswers = [];
let globalTime = 600;
let questionTime = 30;
let globalTimerInterval, questionTimerInterval;
let isReturnPhase = false;

// UI Control
const screens = document.querySelectorAll(".screen");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const classInput = document.getElementById("class-name");
const acceptRules = document.getElementById("accept-rules");
const startBtn = document.getElementById("start-quiz-btn");

// Navigation to Rules
document.getElementById("to-rules-btn").onclick = () => {
  if (
    firstNameInput.value.trim() &&
    lastNameInput.value.trim() &&
    classInput.value.trim()
  ) {
    showScreen("rules-screen");
  } else {
    alert("Please fill in all fields.");
  }
};

// Checkbox logic
acceptRules.onchange = () => {
  startBtn.disabled = !acceptRules.checked;
};

// Start Quiz logic
startBtn.onclick = () => {
  setupQuiz();
  showScreen("quiz-screen");
  startTimers();
  displayQuestion();
};

function showScreen(id) {
  screens.forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function setupQuiz() {
  selectedQuestions = [...questionsPool]
    .sort(() => 0.5 - Math.random())
    .slice(0, 20);
  currentIndex = 0;
  userAnswers = [];
  skippedQuestions = [];
  isReturnPhase = false;
  globalTime = 600; 
}

function startTimers() {
  globalTimerInterval = setInterval(() => {
    globalTime--;
    let mins = Math.floor(globalTime / 60);
    let secs = globalTime % 60;
    document.getElementById("global-timer").innerText =
      `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    if (globalTime <= 0) endQuiz();
  }, 1000);
  resetQuestionTimer();
}

function resetQuestionTimer() {
  clearInterval(questionTimerInterval);
  questionTime = 30;
  
  const barFill = document.getElementById("timer-bar-fill");
  barFill.style.width = "100%"; // Resetăm bara la 100%
  barFill.style.backgroundColor = "#3498db"; // Culoare inițială albastră

  questionTimerInterval = setInterval(() => {
    questionTime--;
    
    // Calculăm procentajul rămas
    let percentage = (questionTime / 30) * 100;
    barFill.style.width = percentage + "%";

    // Schimbăm culoarea în roșu când mai sunt sub 10 secunde
    if (questionTime <= 10) {
      barFill.style.background = "#e74c3c";
    }

    if (questionTime <= 0) {
      handleTimeout();
    }
  }, 1000);
}

function displayQuestion() {
  let currentPool = isReturnPhase ? skippedQuestions : selectedQuestions;

  if (currentIndex >= currentPool.length) {
    if (!isReturnPhase && skippedQuestions.length > 0 && globalTime > 0) {
      isReturnPhase = true;
      skippedQuestions = skippedQuestions.sort(() => 0.5 - Math.random());
      currentIndex = 0;
      displayQuestion();
    } else {
      endQuiz();
    }
    return;
  }

  const q = currentPool[currentIndex];
  document.getElementById("question-count").innerText = isReturnPhase
    ? `Review Phase: Question`
    : `Question ${currentIndex + 1} of 20`;
  document.getElementById("question-text").innerText = q.q;

  const optionsBox = document.getElementById("options-container");
  optionsBox.innerHTML = "";

  q.options.forEach((opt, index) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt;
    div.onclick = () => selectAnswer(index);
    optionsBox.appendChild(div);
  });

  document.getElementById("skip-btn").style.display = isReturnPhase
    ? "none"
    : "block";
}

function selectAnswer(index) {
  const currentPool = isReturnPhase ? skippedQuestions : selectedQuestions;
  const q = currentPool[currentIndex];

  userAnswers.push({
    question: q.q,
    chosen: q.options[index],
    correct: q.options[q.correct],
    status: index === q.correct ? "Correct" : "Incorrect",
  });

  nextQuestion();
}

function handleTimeout() {
  const currentPool = isReturnPhase ? skippedQuestions : selectedQuestions;
  const q = currentPool[currentIndex];

  userAnswers.push({
    question: q.q,
    chosen: "None (Time Expired)",
    correct: q.options[q.correct],
    status: "Expired",
  });

  nextQuestion();
}

document.getElementById("skip-btn").onclick = () => {
  skippedQuestions.push(selectedQuestions[currentIndex]);
  currentIndex++;
  resetQuestionTimer();
  displayQuestion();
};

function nextQuestion() {
  currentIndex++;
  if (globalTime > 0) {
    resetQuestionTimer();
    displayQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(globalTimerInterval);
  clearInterval(questionTimerInterval);
  showScreen("results-screen");

  const correctCount = userAnswers.filter((a) => a.status === "Correct").length;
  const grade = (correctCount * 0.4 + 2).toFixed(2);

  document.getElementById("res-name").innerText =
    `${firstNameInput.value} ${lastNameInput.value}`;
  document.getElementById("res-class").innerText = classInput.value;
  document.getElementById("final-grade").innerText = `Your Grade: ${grade}`;
}

// PDF GENERATION LOGIC (Final Fixed Version: 5 items per page & line-by-line control)
document.getElementById("generate-pdf-btn").onclick = () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  const fName = firstNameInput.value.trim();
  const lName = lastNameInput.value.trim();
  const fullName = `${fName} ${lName}`;
  const now = new Date();
  const displayTimestamp = now.toLocaleString("en-GB");

  // Naming logic
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const fileNameDate = `${day}-${month}-${year}_${hours}-${minutes}`;

  // Header Raport
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("Official Quiz Report", 20, 20);
  
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`Student: ${fullName}`, 20, 35);
  doc.text(`Class: ${classInput.value}`, 20, 42);
  doc.text(`Date & Time: ${displayTimestamp}`, 20, 49);
  doc.setFont("helvetica", "bold");
  doc.text(`Final Result: ${document.getElementById("final-grade").innerText}`, 20, 56);

  let y = 70; 
  const LINE_HEIGHT = 7; 

  userAnswers.forEach((ans, i) => {
    // Verificăm dacă avem nevoie de pagină nouă (la fiecare 5 întrebări)
    if (i > 0 && i % 5 === 0) {
      doc.addPage();
      y = 20; 
    }

    // 1. Scriem Întrebarea
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    
    // Curățăm întrebarea de eventuale caractere care pot bloca randarea
    const cleanQuestion = ans.question.replace(/\s+/g, ' '); 
    const splitTitle = doc.splitTextToSize(`${i + 1}. ${cleanQuestion}`, 170);
    
    // Desenăm întrebarea și stocăm noua poziție Y
    doc.text(splitTitle, 20, y);
    
    // CALCUL STRICT: Mutăm Y fix după numărul de rânduri ale întrebării
    y += (splitTitle.length * LINE_HEIGHT);

    // 2. Scriem Detaliile Răspunsului sub întrebare
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    
    doc.text(`User choice: ${ans.chosen}`, 25, y + 2);
    y += LINE_HEIGHT;
    
    doc.text(`Correct answer: ${ans.correct}`, 25, y + 2);
    y += LINE_HEIGHT;
    
    // Evidențiem statusul
    if(ans.status === "Correct") doc.setTextColor(0, 150, 0); // Verde
    else doc.setTextColor(200, 0, 0); // Roșu
    
    doc.text(`Status: ${ans.status}`, 25, y + 2);
    
    // Resetăm culoarea la negru și pregătim spațiul pentru următoarea întrebare
    doc.setTextColor(0, 0, 0);
    y += LINE_HEIGHT * 2; 
  });

  doc.save(`${fName}_${lName}_${fileNameDate}.pdf`);
};