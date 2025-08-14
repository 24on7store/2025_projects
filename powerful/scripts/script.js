    
    //JavaScript For The Toggle Menu
    var navLinks = document.getElementById("navLinks");

    function showMenu(){
        navLinks.style.right = "0"
    }
    function hideMenu(){
        navLinks.style.right = "-200px"
    }

    //Codes for the paragraph
    //document.getElementById("beginner").innerHTML ="Hello"

    //function myFunction () {
    //    document.getElementById("beginner").innerHTML = "You will learn basic words and simple sentences to talk about yourself, your family, and everyday life. You can introduce yourself, ask and answer simple questions, and understand very basic conversations.";
    //}


    //Message form
  document.addEventListener("DOMContentLoaded", function () {
  //const form = document.querySelector("form");
  const contactForm = document.getElementById("contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", function () {
      alert("Thank You! Message sent successfully!");
      // Form will submit normally after alert
    });
  }
});


    //A Try
    document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtn = document.querySelector(".hero-btn");
    aboutInFooter = document.querySelector("footer .about-us");

    if (readMoreBtn && aboutInFooter) {
    readMoreBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Stop default link behavior
    aboutInFooter.scrollIntoView({ behavior: "smooth" });
    });
}
});


//New
//const questions = [
  //{ q: "What is your name?", a: "My name is Anna", options: ["I name is Anna", "My name is Anna", "Me is name is Anna", "I am Name Anna"] },
  //{ q: "She _____ a student.", a: "is", options: ["are", "is", "am", "be"] },

//];
const questions = [
  {
    q: "What is your name?",
    a: "My name is Anna",
    options: ["I name is Anna", "My name is Anna", "Me is Anna", "I am name Anna"]
  },
  {
    q: "She ___ a student.",
    a: "is",
    options: ["are", "is", "am", "be"]
  },
  {
    q: "I ___ in New York.",
    a: "live",
    options: ["living", "live", "lives", "am live"]
  },
  {
    q: "The committee reached a ___ decision.",
    a: "unanimous",
    options: ["unanimous", "universal", "unified", "uniform"]
  },
  {
    q: "He arrived ___ the airport at 8 PM.",
    a: "at",
    options: ["on", "in", "at", "by"]
  },
  {
    q: "Choose the correct past tense: 'She ___ to the store yesterday.'",
    a: "went",
    options: ["go", "goes", "went", "gone"]
  },
  {
    q: "If it rains, we ___ inside.",
    a: "will stay",
    options: ["stay", "stayed", "will stay", "staying"]
  },
  {
    q: "Identify the adjective: 'The tall man ran fast.'",
    a: "tall",
    options: ["man", "tall", "ran", "fast"]
  },
  {
    q: "Which sentence is correct?",
    a: "She has two cats.",
    options: ["She have two cats.", "She has two cats.", "She has two cat.", "She had two cat."]
  },
  {
    q: "What’s the plural of 'child'?",
    a: "children",
    options: ["childs", "child", "children", "childes"]
  },
  {
    q: "Which word is a verb?",
    a: "run",
    options: ["happy", "quick", "run", "blue"]
  },
  {
    q: "He ___ watching TV when I arrived.",
    a: "was",
    options: ["is", "are", "was", "were"]
  },
  {
    q: "We ___ dinner at 7 PM every day.",
    a: "have",
    options: ["has", "have", "having", "had"]
  },
  {
    q: "They ___ to school yesterday.",
    a: "went",
    options: ["go", "went", "gone", "going"]
  },
  {
    q: "I have never ___ sushi.",
    a: "eaten",
    options: ["eat", "ate", "eaten", "eating"]
  },
  {
    q: "Choose the correct form: 'He ___ working all day.'",
    a: "has been",
    options: ["have been", "has been", "was", "had"]
  },
  {
    q: "What is the comparative form of 'good'?",
    a: "better",
    options: ["gooder", "more good", "better", "best"]
  },
  {
    q: "Which sentence uses the future perfect tense?",
    a: "She will have left by then.",
    options: ["She leaves at noon.", "She is leaving now.", "She will have left by then.", "She left earlier."]
  },
  {
    q: "What part of speech is 'quickly'?",
    a: "adverb",
    options: ["noun", "verb", "adjective", "adverb"]
  },
  {
    q: "Which sentence is passive voice?",
    a: "The cake was eaten by the children.",
    options: [
      "The children ate the cake.",
      "The cake was eaten by the children.",
      "The children have eaten the cake.",
      "The cake is eating by children."
    ]
  },
  {
    q: "Pick the correct sentence.",
    a: "There are five apples in the basket.",
    options: [
      "There is five apples in the basket.",
      "There are five apple in the basket.",
      "There are five apples in the basket.",
      "There is five apple in basket."
    ]
  },
  {
    q: "What is the superlative form of 'happy'?",
    a: "happiest",
    options: ["more happy", "most happy", "happiest", "happyest"]
  },
  {
    q: "Which conjunction best completes the sentence? 'I studied hard ___ I passed.'",
    a: "so",
    options: ["so", "but", "because", "or"]
  },
  {
    q: "What is the noun in the sentence: 'Cats sleep a lot'?",
    a: "Cats",
    options: ["Cats", "sleep", "lot", "a"]
  },
  {
    q: "Choose the correct article: '___ apple a day keeps the doctor away.'",
    a: "An",
    options: ["A", "An", "The", "No article"]
  },
  {
    q: "What is the antonym of 'generous'?",
    a: "selfish",
    options: ["kind", "giving", "selfish", "humble"]
  },
  {
    q: "Pick the correct spelling.",
    a: "necessary",
    options: ["neccessary", "necessary", "necesary", "nessesary"]
  },
  {
    q: "What tense is this: 'I had eaten before you arrived'?",
    a: "past perfect",
    options: ["past", "present perfect", "past perfect", "future perfect"]
  },
  {
    q: "He ___ to play the guitar.",
    a: "knows how",
    options: ["know how", "knows how", "knew how", "known how"]
  },
  {
    q: "Choose the synonym for 'big'.",
    a: "large",
    options: ["small", "tiny", "large", "thin"]
  },
  {
    q: "Which is a question tag? 'You're coming, ___?'",
    a: "aren't you",
    options: ["isn't it", "don't you", "aren't you", "are you"]
  },
  {
    q: "Complete the sentence: 'I prefer tea ___ coffee.'",
    a: "to",
    options: ["than", "from", "to", "with"]
  },
  {
    q: "Which sentence is correct?",
    a: "Does she work here?",
    options: ["Do she work here?", "Does she works here?", "Does she work here?", "Work she does here?"]
  },
  {
    q: "Choose the correct verb form: 'Neither of them ___ going.'",
    a: "is",
    options: ["are", "were", "is", "am"]
  },
  {
    q: "What is the plural of 'mouse'?",
    a: "mice",
    options: ["mouses", "mouse", "mices", "mice"]
  },
  {
    q: "Which is an exclamatory sentence?",
    a: "What a beautiful day!",
    options: ["Close the door.", "What a beautiful day!", "Are you okay?", "I am tired."]
  },
  {
    q: "Choose the correct punctuation: 'Lets eat Grandma!'",
    a: "Let’s eat, Grandma!",
    options: ["Lets eat Grandma!", "Let's eat Grandma!", "Let’s eat, Grandma!", "Let’s, eat Grandma!"]
  },
  {
    q: "Select the correct homophone pair.",
    a: "pair – pear",
    options: ["sea – see", "pair – pear", "bare – bear", "write – right"]
  },
  {
    q: "What is the base form of 'ran'?",
    a: "run",
    options: ["running", "runned", "ran", "run"]
  },
  {
    q: "Which is a compound word?",
    a: "toothbrush",
    options: ["tooth", "brush", "toothbrush", "toothy"]
  },
  {
    q: "Which sentence is in the present continuous tense?",
    a: "She is reading a book.",
    options: [
      "She reads books.",
      "She read a book.",
      "She is reading a book.",
      "She has read a book."
    ]
  },
  {
    q: "He didn't come because he was ___.",
    a: "tired",
    options: ["tiring", "tired", "tiresome", "tire"]
  },
  {
    q: "Which is the correct word order for a question?",
    a: "What are you doing?",
    options: ["You are doing what?", "What doing are you?", "What are you doing?", "Doing what are you?"]
  },
  {
    q: "Choose the word with a silent letter.",
    a: "knee",
    options: ["knee", "name", "kick", "know"]
  }
  // ← Add remaining questions here if needed
];

//Second added
let currentIndex = 0;
let userAnswers = {};
//Added
const questionsPerPage = 10;
let currentPage = 0;

const startBtn = document.getElementById("start-btn");
const timer = document.getElementById("timer");
const form = document.getElementById("quiz-form");
const container = document.getElementById("questions-container");
const username = document.getElementById("username");
//added
const email = document.getElementById("email");
const whatsapp = document.getElementById("whatsapp");
const pagination = document.getElementById("pagination");

//Codes added to Save the answers
document.getElementById("questions-container").addEventListener("change", e =>{
  if (e.target.name.startsWith("q")) {
    //userAnswers[currentPage] = e.target.value;
    userAnswers[e.target.name] = e.target.value;
  }
});

// Time: 2 hours in seconds
let time = 2 * 60 * 60;
let interval;

//Create question elements

//added

//Create question elements
function renderQuestions(index) {
  container.innerHTML="";

  const startIndex = currentPage * questionsPerPage;
  const endIndex = Math.min(startIndex + questionsPerPage, questions.length);
  for (let i = startIndex; i < endIndex; i++) {
    const q = questions[i];
    const div = document.createElement("div");
    div.innerHTML = `<p class="quiz-question">${i + 1}. ${q.q}</p>` +
      q.options.map(opt =>
        // `<label><input type="radio" name="q${i}" value="${opt}" ${userAnswers[index] === opt ? "checked" : ""}>
//${opt}</label>`
        `<label><input type="radio" name="q${i}" value="${opt}" ${userAnswers[`q${i}`] === opt ? "checked" : ""}>
${opt}</label>`
      ).join("");
    container.appendChild(div);
  }


//Added codes
const totalPages = Math.ceil(questions.length / questionsPerPage);
//NEW
pagination.innerHTML = "";
  if (currentPage > 0) {
    const prevBtn = document.createElement("button");
    prevBtn.classList.add("prev-btn");
    //prevBtn.style.backgroundColor = "blue";
    //prevBtn.style.color = "white";
    //prevBtn.style.padding = "5px 10px";
    //prevBtn.style.border = "none";
    //prevBtn.style.marginRight = "580px"; s
    //prevBtn.style.cursor = "pointer";
    //prevBtn.style.marginBottom = "10px 0";
    //prevBtn.style.fontSize = "15px";
    //prevBtn.style.fontWeight = "bold";
    prevBtn.textContent = "Previous";
    prevBtn.type = "button";
    prevBtn.onclick = () => {
      currentPage--;
      renderQuestions(currentPage);

    };
    pagination.appendChild(prevBtn);
  }
  //if ((currentPage + 1) * questionsPerPage < questions.length) {
  //if (currentPage < questions.length - 1) {
  if (currentPage < totalPages - 1) {
    const nextBtn = document.createElement("button");
    //nextBtn.classList.add("next-btn");
    nextBtn.classList.add("next-btn"); // ✅ Add class
    //nextBtn.textContent = "Next";
    //nextBtn.type = "button";
    //nextBtn.style.backgroundColor = "blue";
    //nextBtn.style.color = "white";
    //nextBtn.style.padding = "5px 20px";
    //nextBtn.style.border = "none";
    //nextBtn.style.cursor = "pointer";
    //nextBtn.style.margin = "10px 0";
    //nextBtn.style.fontSize = "15px";
    //nextBtn.style.fontWeight = "bold";
    nextBtn.textContent = "Next";
    nextBtn.type = "button";
    nextBtn.onclick = () => {
      currentPage++;
      renderQuestions(currentPage);
    

    };
    pagination.appendChild(nextBtn);
  }
}



//Timer logic
function updateTimer() {
  const hrs = Math.floor(time / 3600);
  const mins = Math.floor((time % 3600) / 60);
  const secs = time % 60;
  timer.textContent = `⏰Time left: ${hrs}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  if (time <= 0) {
    clearInterval(interval);
    form.submit();
  }
  time--;
}

// Start Quiz
//startBtn.addEventListener("click", () => {
  //const name = username.value.trim();
  //if (!name) {
    //alert("Please enter your name before starting the quiz.");
    //return;
  //}

  startBtn.addEventListener("click", () => {
  const name = username.value.trim();
  const email = document.getElementById("email").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();
  //const email = email.value.trim();
  //const whatsapp = phone.value.trim();
  //timer.style.display ="inline-block";
  //timer.style.backgroundColor = "red";
  //timer.style.fontSize = "18px";
  //timer.style.padding = "5px 10px";


  if (!name) {
    alert("Please enter your full name.");
    //e.preventDefault();
    return;
  }

  if (!email && !whatsapp) {
    alert("Please enter EITHER  an email address OR a WhatsApp number.");
    //e.preventDefault();
    return;
  }
    

  

  startBtn.style.display = "none";
  timer.style.display = "block";
  form.style.display = "block";

  renderQuestions();
  interval = setInterval(updateTimer, 1000);
  updateTimer();
});

// Submit Quiz
//const quizForm = document.getElementById("quiz-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearInterval(interval);
  
    const name = username.value.trim();
    const email = document.getElementById("email").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();

  if (!name) {
    alert("Name is required to submit the quiz.");
    return;
  }

  
  if (!email && !whatsapp) {
    alert("EITHER  an email address OR a WhatsApp number is required to submit this quiz.");
    e.preventDefault();
    return;
  }

//form.addEventListener("submit", function (e) {
    //const name = document.getElementById("name").value.trim();
    //const email = document.getElementById("email").value.trim();
//const whatsapp = document.getElementById("whatsapp").value.trim();

 
  //if (!name) {
    //alert("Name is required to submit the quiz.");
    //return;
  //}
  
    //if (!email && !whatsapp) {
    //alert("Please enter either an email address or a WhatsApp number.");
    //e.preventDefault();
    //return;
  //}

  // Check unanswered questions
  const unanswered = [];
  questions.forEach((q, i) => {
    const selected = form.querySelector(`input[name="q${i}"]:checked`);
    if (!selected) unanswered.push(i);
  });

  if (unanswered.length > 0) {
    const confirmSubmit = confirm("You haven't finished yet. Are you sure you want to submit it?");
    if (!confirmSubmit) {
      const firstUnanswered = form.querySelector(`input[name="q${unanswered[0]}"]`);
      if (firstUnanswered) {
        firstUnanswered.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
  }

  // Scoring
  let score = 0;
  questions.forEach((q, i) => {
    const selected = form.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === q.a) {
      score++;
    }
  });

  // Level Logic
  let level = "A1";
  if (score > 85) level = "C2";
  else if (score > 68) level = "C1";
  else if (score > 51) level = "B2";
  else if (score > 35) level = "B1";
  else if (score > 18) level = "A2";

  //alert(`Test submitted successfully!\nYou scored ${score}/${questions.length}.\nYour level is ${level}.`);
  //alert(`Test submitted successfully!\nYou scored ${score}/${questions.length}.\nYour level is ${level}.`);
  alert(`Congratulations ${name}! Test submitted successfully!`);
  alert(`You scored ${score}/${questions.length}.\nYour level is ${level}.`);


  // Send to Google Sheets
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", document.getElementById("email").value.trim());
  formData.append("whatsapp", document.getElementById("whatsapp").value.trim());
  formData.append("score", score);
  formData.append("level", level);


  console.log('Sending:', { name, email, whatsapp, score, level });

  //fetch("https://script.google.com/macros/s/AKfycbxVFgGKg3bawsWfoIIKzfvJMsek649zWmSG4ecZwpW0GFk__LZ5aUDmyY83s919fYB2Sg/exec", {
  //fetch("https://script.google.com/macros/s/AKfycbxVFgGKg3bawsWfoIIKzfvJMsek649zWmSG4ecZwpW0GFk__LZ5aUDmyY83s919fYB2Sg/exec", {
  fetch("https://script.google.com/macros/s/AKfycbypUbhTh-7Q5fsQw7H-jI103BKo81pNuS-K_o87vxAOINe7k6ftf0V70RfkPG0QE7UDVg/exec", {
    method: "POST",
    body: formData
  });

  form.reset();
  //added
  currentPage = 0;
});