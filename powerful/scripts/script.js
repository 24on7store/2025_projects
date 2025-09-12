    
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
    a: "B) My name is Anna",
    options: ["A) I name is Anna", "B) My name is Anna", "C) Me is Anna", "D) I am name Anna"]
  },
  {
    q: "She ___ a student.",
    a: "B) is",
    options: ["A) are", "B) is", "C) am", "D) be"]
  },
  {
    q: "I ___ in New York.",
    a: "B) live",
    options: ["A) living", "B) live", "C) lives", "D) am live"]
  },
  {
    q: "What time ___ it?",
    a: "C) is",
    options: ["A) are", "B) do", "C) is", "D) has"]
  },
  {
    q: "Choose the correct sentence:",
    a: "C) He doesn't like pizza",
    options: ["A) He not like pizza", "B) He don't like pizza", "C) He doesn't like pizza", "D) He doesn't likes pizza"]
  },
  {
    q: "We ___  from Canada.",
    a: "A) are",
    options: ["A) are", "B) is", "C) am", "D) be"]
  },
  {
    q: "I have ___ apple.",
    a: "A) an",
    options: ["A) an", "B) a", "C) the", "D) one"]
  },
  {
    q: "____ is your favorite color?",
    a: "C) what",
    options: ["A) who", "B) where", "C) what", "D) where"]
  },
  {
    q: "My birthday is ____ December 7.",
    a: "C) on",
    options: ["A) in", "B) at", "C) the", "D) on"]
  },
  {
    q: 'The opposite of "big" is?',
    a: "C) small",
    options: ["A) short", "B) long", "C) small", "D) tall"]
  },
  {
    q: "I ____ coffee every morning.",
    a: "A) drink",
    options: ["A) drink", "B) drinks", "C) drinking", "D) am drink"]
  },
  {
    q: "She ____ a car.",
    a: "C) has",
    options: ["A) have", "B) haves", "C) has", "D) is have"]
  },
    {
    q: "They ____ at home now.",
    a: "B) are",
    options: ["A) is", "B) are", "C) do", "D) be"]
  },
  {
    q: 'What is the plural of "child"?',
    a: "B) children",
    options: ["A) childs", "B) children", "C) childrens", "D) childes"]
  },
  {
    q: "It ____ cold today.",
    a: "C) is",
    options: ["A) are", "B) am", "C) is", "D) be"]
  },
  {
    q: "I go to school ____ bus.",
    a: "B) by",
    options: ["A) in", "B) by", "C) on", "D) with"]
  },
  {
    q: " ____ you like pizza?",
    a: "A) Do",
    options: ["A) Do", "B) Are", "C) Does", "D) Have"]
  },
  //Elementary - 17 to 34
  {
    q: "I am good ____ playing the guitar.",
    a: "A) at",
    options: ["A) at", "B) in", "C) on", "D) with"]
  },
  {
    q: "She speaks English ____ than I.",
    a: "B) better",
    options: ["A) good", "B) better", "C) best", "D) more good"]
  },
  {
    q: "There ____ some books on the table.",
    a: "B) are",
    options: ["A) is", "B) are", "C) has", "D) have"]
  },
  {
    q: "What do you do?",
    a: "C) I am a teacher",
    options: ["A) I student", "B) I am teacher", "C) I am a teacher", "D) I working"]
  },
  {
    q: "Can you swim?",
    a: "A) Yes, I can.",
    options: ["A) Yes, I can.", "B) Yes, I do.", "C) Yes, I am.", "D) Yes, I have."]
  },
  {
    q: "She ____ to work by car.",
    a: "C) goes",
    options: ["A) go", "B) going", "C) goes", "D) gone"]
  },
  {
    q: "I ____ never been to London.",
    a: "A) have",
    options: ["A) have", "B) has", "C) had", "D) did"]
  },
  {
    q: "We didn't ____ the movie.",
    a: "C) watch",
    options: ["A) watching", "B) watched", "C) watch", "D) to watch"]
  },
  {
    q: 'The past tense of "take" is:',
    a: "B) took",
    options: ["A) taked", "B) took", "C) token", "D) taken"]
  },
  {
    q: "I  ____  a shower every morning.",
    a: "C) take",
    options: ["A) am take", "B) takes", "C) take", "D) taking"]
  },
  {
    q: "He is the  ____ person I know.",
    a: "D) nicest",
    options: ["A) nice", "B) nicer", "C) most nice", "D) nicest"]
  },
  {
    q: "I am looking forward to ____ you next week.",
    a: "C) seeing",
    options: ["A) see", "B) saw", "C) seeing", "D) will see"]
  },
  {
    q: "How ____ sugar do you want?",
    a: "B) much",
    options: ["A) many", "B) much", "C) more", "D) less"]
  },
  {
    q: "I am interested ____ football.",
    a: "C) in",
    options: ["A) on", "B) about", "C) in", "D) at"]
  },
  {
    q: "I ____ go to the gym, but now I don't.",
    a: "A) used to",
    options: ["A) used to", "B) use", "C) using", "D) use to"]
  },
  {
    q: "We have lived here ____ five years.",
    a: "B) for",
    options: ["A) since", "B) for", "C) in", "D) during"]
  },
  {
    q: "Where ____ you go on vacation last year?",
    a: "A) did",
    options: ["A) did", "B) do", "C) were", "D) had"]
  },
  // B1 Intermediate - 35 to 50 I stop here
  {
    q: "If I have time, I ___ help you.",
    a: "A) will",
    options: ["A) will", "B) would", "C) can", "D) did"]
  },
  {
    q: "She’s ___ than her sister.",
    a: "C) more intelligent",
    options: ["A) intelligent", "B) most intelligent", "C) more intelligent", "D) intelligenter"]
  },
  {
    q: "I haven’t seen her ___ Monday.",
    a: "B) since",
    options: ["A) for", "B) since", "C) in", "D) on"]
  },
  {
    q: "They were tired ___ they had worked all day.",
    a: "B) because",
    options: ["A) so", "B) because", "C) but", "D) then"]

  },
  {
    q: "I’d rather ___ at home tonight.",
    a: "A) stay",
    options: ["A) stay", "B) staying", "C) to stay", "D) stays"]
  },
  // NEW FORMAT
  {
    q: "I was reading when he ___ in.",
    options: ["A) comes", "B) come", "C) came", "D) had come"],
    a: "C) came"
  },
  {
    q: "We’ve already ___ dinner.",
    options: ["A) ate", "B) eaten", "C) eat", "D) eating"],
    a: "B) eaten"
  },
  {
    q: "Would you mind ___ the window?",
    options: ["A) to open", "B) opening", "C) open", "D) opened"],
    a: "B) opening"
  },
  {
    q: "I don’t know where ___ my phone.",
    options: ["A) I left", "B) did I leave", "C) have I left", "D) I have left"],
    a: "A) I left"
  },
  {
    q: "I’m used to ___ early.",
    options: ["A) wake up", "B) waking up", "C) woke", "D) woken"],
    a: "B) waking up"
  },
  {
    q: "I’ve got too ___ work to do.",
    options: ["A) many", "B) much", "C) more", "D) lot"],
    a: "B) much"
  },
  {
    q: "We had fun ___ the rain.",
    options: ["A) despite", "B) because", "C) if", "D) when"],
    a: "A) despite"
  },
  {
    q: "Let me know if you ___ any questions.",
    options: ["A) have", "B) has", "C) had", "D) having"],
    a: "A) have"
  },
  {
    q: "That’s the person ___ car was stolen.",
    options: ["A) who", "B) which", "C) whose", "D) that"],
    a: "C) whose"
  },
  {
    q: "She said she ___ come later.",
    options: ["A) will", "B) can", "C) would", "D) should"],
    a: "C) would"
  },
  {
    q: "I regret ___ him the truth.",
    options: ["A) tell", "B) to tell", "C) telling", "D) told"],
    a: "C) telling"
  },
// B2 (Upper Intermediate - 51 to 67)
  {
    q: "It was such a boring movie that I ____ asleep.",
    options: ["A) fall", "B) fell", "C) fallen", "D) falling"],
    a: "B) fell"
  },
  {
    q: "She speaks English fluently ____ she never lived abroad.",
    options: ["A) although", "B) despite", "C) because", "D) unless"],
    a: "A) although"
  },
  {
    q: "That’s the restaurant ____ we had dinner.",
    options: ["A) where", "B) which", "C) that", "D) when"],
    a: "A) where"
  },
  {
    q: "I wish I ____ more confident when I speak English.",
    options: ["A) am", "B) have been", "C) was", "D) were"],
    a: "D) were"
  },
  {
    q: "They apologized ____ being late.",
    options: ["A) to", "B) for", "C) about", "D) of"],
    a: "B) for"
  },
  {
    q: "He denied ____ the window.",
    options: ["A) break", "B) broke", "C) to break", "D) breaking"],
    a: "D) breaking"
  },
  {
    q: "I didn’t expect you ____ early.",
    options: ["A) coming", "B) to come", "C) came", "D) come"],
    a: "B) to come"
  },
  {
    q: "If I had seen her, I ____ hello.",
    options: ["A) say", "B) said", "C) would say", "D) would have said"],
    a: "D) would have said"
  },
  {
    q: "Not only ____ late, but he also forgot the documents.",
    options: ["A) he arrived", "B) did he arrive", "C) he did arrive", "D) had he arrived"],
    a: "B) did he arrive"
  },
  {
    q: "I’d rather you ____ smoke here.",
    options: ["A) don’t", "B) didn’t", "C) won’t", "D) hadn’t"],
    a: "B) didn’t"
  },
  {
    q: "She talked to me as if I ____ a child.",
    options: ["A) am", "B) were", "C) was", "D) had been"],
    a: "B) were"
  },
  {
    q: "I’ll send you the report when I ____ it.",
    options: ["A) finish", "B) will finish", "C) finishing", "D) finished"],
    a: "A) finish"
  },
  {
    q: "The manager demanded that he ____ immediately.",
    options: ["A) left", "B) leaves", "C) leave", "D) had left"],
    a: "C) leave"
  },
  {
    q: "It’s high time we ____.",
    options: ["A) go", "B) went", "C) have gone", "D) gone"],
    a: "B) went"
  },
  {
    q: "I’d like to know what time the meeting ____.",
    options: ["A) start", "B) starts", "C) starting", "D) started"],
    a: "B) starts"
  },
  {
    q: "The film was so moving that I couldn’t help ____.",
    options: ["A) cry", "B) crying", "C) to cry", "D) cried"],
    a: "B) crying"
  },
  {
    q: "I regret ____ more time with my grandfather.",
    options: ["A) to spend", "B) not spending", "C) not to spend", "D) spend"],
    a: "B) not spending"
  },
  // C1 (ADVANCED - 68 to 84)
  {
    q: "Rarely ____ such an inspiring speech.",
    options: ["A) I heard", "B) have I heard", "C) I have heard", "D) did I heard"],
    a: "B) have I heard"
  },
  {
    q: "The moment he arrived, the audience ____.",
    options: ["A) was cheering", "B) cheered", "C) had cheered", "D) cheers"],
    a: "B) cheered"
  },
  {
    q: "Her performance was far ____ expectations.",
    options: ["A) beyond", "B) behind", "C) after", "D) through"],
    a: "A) beyond"
  },
  {
    q: "The book, ____ was written in 1890, is still popular today.",
    options: ["A) which", "B) that", "C) where", "D) whose"],
    a: "A) which"
  },
  {
    q: "Had I known, I ____ things differently.",
    options: ["A) will do", "B) would have done", "C) would do", "D) have done"],
    a: "B) would have done"
  },
  {
    q: "Scarcely ____ the train when it started moving.",
    options: ["A) had I boarded", "B) I had boarded", "C) I boarded", "D) was I boarding"],
    a: "A) had I boarded"
  },
  {
    q: "She insisted that he ____ present.",
    options: ["A) is", "B) be", "C) was", "D) were"],
    a: "B) be"
  },
  {
    q: "No sooner had they arrived ____ it began to rain.",
    options: ["A) then", "B) when", "C) than", "D) while"],
    a: "C) than"
  },
  {
    q: "He’s always been a ____ learner — quick and focused.",
    options: ["A) tenacious", "B) tense", "C) temporary", "D) tangible"],
    a: "A) tenacious"
  },
  {
    q: "Her behavior was anything but ____.",
    options: ["A) acceptable", "B) accepting", "C) accept", "D) acceptance"],
    a: "A) acceptable"
  },
  {
    q: "This essay is ____ with minor errors.",
    options: ["A) filled", "B) fraught", "C) combined", "D) influenced"],
    a: "B) fraught"
  },
  {
    q: "The results were not ____ with our expectations.",
    options: ["A) consistent", "B) consisted", "C) consist", "D) consisting"],
    a: "A) consistent"
  },
  {
    q: "She had her car ____ yesterday.",
    options: ["A) repaired", "B) repair", "C) repairing", "D) to repair"],
    a: "A) repaired"
  },
  {
    q: "I take issue ____ your last statement.",
    options: ["A) by", "B) from", "C) with", "D) on"],
    a: "C) with"
  },
  {
    q: "His accent was barely ____.",
    options: ["A) noticeable", "B) noticed", "C) notice", "D) noticing"],
    a: "A) noticeable"
  },
  {
    q: "The judge ruled in ____ of the defendant.",
    options: ["A) favor", "B) favoring", "C) favors", "D) favorable"],
    a: "A) favor"
  },
  {
    q: "It’s important that he ____ this before tomorrow.",
    options: ["A) does", "B) do", "C) did", "D) will do"],
    a: "B) do"
  },
  // C2 Proficient - 85 to 100
  {
    q: "The professor’s argument was full of logical ____.",
    options: ["A) fallacies", "B) falls", "C) failures", "D) faults"],
    a: "A) fallacies"
  },
  {
    q: "The novelist employs a ____ style of narration.",
    options: ["A) verbose", "B) verbal", "C) verb", "D) verbally"],
    a: "A) verbose"
  },
  {
    q: "He is fluent in three languages, not ____ English.",
    options: ["A) only", "B) not yet", "C) merely", "D) least"],
    a: "A) only"
  },
  {
    q: "Her speech was both _____ and impactful.",
    options: ["A) eloquent", "B) elocution", "C) elevated", "D) elect"],
    a: "A) eloquent"
  },
  {
    q: "The decision was entirely ____ upon financial matters.",
    options: ["A) contingent", "B) contained", "C) conformed", "D) conceptual"],
    a: "A) contingent"
  },
  {
    q: "The witness recanted his ____ testimony.",
    options: ["A) prior", "B) primary", "C) priorly", "D) prioring"],
    a: "A) prior"
  },
  {
    q: "His explanation was so ____ that no one questioned it.",
    options: ["A) cogent", "B) cogitate", "C) cognitive", "D) cohesive"],
    a: "A) cogent"
  },
  {
    q: "They treated the issue with the utmost ____.",
    options: ["A) delicacy", "B) delicate", "C) delicateness", "D) delicates"],
    a: "A) delicacy"
  },
  {
    q: "She was a ____ of truth in a world of deception.",
    options: ["A) beacon", "B) bacon", "C) beaker", "D) break-in"],
    a: "A) beacon"
  },
  {
    q: "Gangs are ____ for any country.",
    options: ["A) detrimental", "B) determinative", "C) determined", "D) detained"],
    a: "A) detrimental"
  },
  {
    q: "He’s an ____ speaker; he rarely prepares notes.",
    options: ["A) impromptu", "B) impassioned", "C) extemporaneous", "D) extreme"],
    a: "C) extemporaneous"
  },
  {
    q: "The essay was marked by a ____ use of metaphor.",
    options: ["A) judicious", "B) judicial", "C) justice", "D) judgment"],
    a: "A) judicious"
  },
  {
    q: "His actions were in ____ violation of the rules.",
    options: ["A) bluntly", "B) blunt", "C) blatant", "D) blank"],
    a: "C) blatant"
  },
  {
    q: "The theory remains ____ and unchallenged.",
    options: ["A) unspeakable", "B) unattainable", "C) unapproachable", "D) unassailable"],
    a: "D) unassailable"
  },
  {
    q: "Her ____ insights impressed the whole committee.",
    options: ["A) perspective", "B) perspicacious", "C) persuasive", "D) persistent"],
    a: "B) perspicacious"
  },
  {
    q: "The committee reached a ____ decision.",
    options: ["A) unanimous", "B) universal", "C) unified", "D) uniform"],
    a: "A) unanimous"
  }
  
  // ← Add remaining questions here if needed
];



//Second added
let currentIndex = 0;
let userAnswers = {};
//Added
const questionsPerPage = 100;
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

  alert(`Test submitted successfully!\nYou scored ${score}/${questions.length}.\nYour level is ${level}.`);
  //alert(`Test submitted successfully!\nYou scored ${score}/${questions.length}.\nYour level is ${level}.`);
  //alert(`Congratulations ${name}! Test submitted successfully! \nYou scored ${score} out of ${questions.length}. \nYour level is ${level}.` );
  //alert(`You scored ${score}/${questions.length}.\nYour level is ${level}.`);
  //window.location.reload();

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
  setTimeout(() => {
    location.reload();
  }, 1000);
});

//window.location.reload();