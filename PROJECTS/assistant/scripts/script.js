

const d = new Date();
let text = d.toLocaleDateString();
//document.getElementById("demo").innerHTML = text;

console.log(document.getElementById("demo").textContent + date.toLocaleTimeString());


let tasks = [];

function speak(message) {
  const speech = new SpeechSynthesisUtterance(message);
  speech.lang = "en-US";
  window.speechSynthesis.speak(speech);
}

function addTask() {
  const name = document.getElementById("taskName").value;
  const start = document.getElementById("startTime").value;
  const end = document.getElementById("endTime").value;

  if (!name || !start || !end) {
    alert("Please fill all fields");
    return;
  }

  const task = { name, start, end };
  tasks.push(task);

  displayTasks();
}

function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    list.innerHTML += `
      <div class="task">
        <strong>${task.name}</strong><br>
        ${task.start} - ${task.end}
      </div>
    `;
  });
}

function checkTime() {
  const now = new Date();
  const current = now.toTimeString().slice(0,5); // HH:MM

  tasks.forEach(task => {

    // START
    if (current === task.start) {
      speak(`Now, it is time to  ${task.name}`);
    }

    // END
    if (current === task.end) {
      speak(`Time is up. Stop ${task.name}`);
    }

  });
}

function startAssistant() {
  speak("Assistant started. Stay focused.");
  setInterval(checkTime, 1000);
}
