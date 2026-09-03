/* =========================================================
   HULK GYM
   Main website JavaScript
   ========================================================= */


/* ================= MUSCLE DATABASE ================= */

const muscles = {

  chest: {
    name: {
      en: "CHEST",
      ar: "الصدر"
    },

    scientific: {
      en: "Pectoralis major & Pectoralis minor",
      ar: "العضلة الصدرية الكبرى والصغرى"
    },

    target: {
      en: "Pectoralis major",
      ar: "العضلة الصدرية الكبرى"
    },

    description: {
      en: "The chest muscles help produce pushing movements and contribute to shoulder control.",
      ar: "تساعد عضلات الصدر على إنتاج حركات الدفع وتساهم في التحكم بالكتف."
    },

    exercises: [
      {
        name: {en:"Bench Press",ar:"ضغط البنش"},
        icon:"▰",
        type:"press",
        steps:[
          "Set yourself up comfortably on the bench.",
          "Grip the bar with a comfortable hand position.",
          "Lower and press the bar with controlled movement.",
          "Keep the resistance manageable and focus on technique."
        ]
      },
      {
        name: {en:"Incline Dumbbell Press",ar:"ضغط الدمبل المائل"},
        icon:"◈",
        type:"dumbbell",
        steps:[
          "Use an incline bench and place the dumbbells securely in your hands.",
          "Keep your wrists stable as you press.",
          "Move the dumbbells through a controlled range.",
          "Avoid rushing or using resistance you cannot control."
        ]
      },
      {
        name: {en:"Cable Fly",ar:"تفتيح الكابل"},
        icon:"⌁",
        type:"cable",
        steps:[
          "Stand in a stable position between the cable handles.",
          "Hold the handles with a comfortable grip.",
          "Bring the hands together with controlled movement.",
          "Return slowly without letting the weights pull you."
        ]
      },
      {
        name: {en:"Push-Up",ar:"تمرين الضغط"},
        icon:"△",
        type:"pushup",
        steps:[
          "Place your hands in a comfortable position on the floor.",
          "Keep your body controlled and aligned.",
          "Lower yourself smoothly.",
          "Press away from the floor without rushing."
        ]
      }
    ]
  },


  back: {
    name:{
      en:"BACK",
      ar:"الظهر"
    },

    scientific:{
      en:"Latissimus dorsi, Trapezius & Erector spinae",
      ar:"العضلة الظهرية العريضة، شبه المنحرفة وناصبة الفقرات"
    },

    target:{
      en:"Latissimus dorsi",
      ar:"العضلة الظهرية العريضة"
    },

    description:{
      en:"The back contains several large muscle groups involved in pulling, posture and trunk stability.",
      ar:"يحتوي الظهر على عدة مجموعات عضلية كبيرة تشارك في السحب والوضعية وثبات الجذع."
    },

    exercises:[
      {
        name:{en:"Lat Pulldown",ar:"السحب العلوي"},
        icon:"↓",
        type:"cable",
        steps:[
          "Sit comfortably and secure your legs.",
          "Grip the bar evenly with both hands.",
          "Pull the bar down with controlled movement.",
          "Return the bar slowly and maintain a stable torso."
        ]
      },
      {
        name:{en:"Seated Cable Row",ar:"سحب الكابل جالساً"},
        icon:"←",
        type:"cable",
        steps:[
          "Sit with your feet supported and spine comfortable.",
          "Hold the cable handle with both hands.",
          "Pull the handle toward your body without jerking.",
          "Return the handle slowly."
        ]
      },
      {
        name:{en:"Dumbbell Row",ar:"سحب الدمبل"},
        icon:"↙",
        type:"dumbbell",
        steps:[
          "Use a stable support and comfortable stance.",
          "Hold the dumbbell securely.",
          "Pull the dumbbell toward your side.",
          "Lower it with control."
        ]
      },
      {
        name:{en:"Back Extension",ar:"تمديد الظهر"},
        icon:"⌃",
        type:"hinge",
        steps:[
          "Set up comfortably on the equipment.",
          "Keep your movement controlled.",
          "Move through a comfortable range.",
          "Avoid forcing the lower back into an extreme position."
        ]
      }
    ]
  },


  shoulders:{
    name:{
      en:"SHOULDERS",
      ar:"الأكتاف"
    },

    scientific:{
      en:"Deltoideus",
      ar:"العضلة الدالية"
    },

    target:{
      en:"Deltoideus",
      ar:"العضلة الدالية"
    },

    description:{
      en:"The deltoid muscles surround the shoulder and assist with lifting and moving the arms.",
      ar:"تحيط العضلات الدالية بمفصل الكتف وتساعد في رفع وتحريك الذراعين."
    },

    exercises:[
      {
        name:{en:"Dumbbell Shoulder Press",ar:"ضغط الكتف بالدمبل"},
        icon:"↑",
        type:"dumbbell",
        steps:[
          "Sit or stand in a stable position.",
          "Hold the dumbbells with your wrists comfortable.",
          "Press upward smoothly.",
          "Lower the dumbbells under control."
        ]
      },
      {
        name:{en:"Lateral Raise",ar:"الرفع الجانبي"},
        icon:"↔",
        type:"dumbbell",
        steps:[
          "Hold light, manageable dumbbells.",
          "Keep your shoulders relaxed.",
          "Raise the arms smoothly to a comfortable height.",
          "Lower them slowly."
        ]
      },
      {
        name:{en:"Reverse Fly",ar:"التفتيح الخلفي"},
        icon:"⇆",
        type:"dumbbell",
        steps:[
          "Use a stable position and comfortable hinge.",
          "Hold the dumbbells securely.",
          "Move your arms outward with control.",
          "Return slowly."
        ]
      }
    ]
  },


  arms:{
    name:{
      en:"ARMS",
      ar:"الذراعان"
    },

    scientific:{
      en:"Biceps brachii & Triceps brachii",
      ar:"العضلة ذات الرأسين العضدية والعضلة ثلاثية الرؤوس العضدية"
    },

    target:{
      en:"Biceps brachii & Triceps brachii",
      ar:"العضلة ذات الرأسين وثلاثية الرؤوس"
    },

    description:{
      en:"The arm muscles include the biceps and triceps, which assist with bending and extending the elbow.",
      ar:"تشمل عضلات الذراع العضلة ذات الرأسين وثلاثية الرؤوس، وتساعدان في ثني ومد الكوع."
    },

    exercises:[
      {
        name:{en:"Dumbbell Curl",ar:"ثني الذراع بالدمبل"},
        icon:"⌁",
        type:"curl",
        steps:[
          "Hold the dumbbells securely at your sides.",
          "Keep your elbows comfortable and stable.",
          "Curl the weights smoothly.",
          "Lower them slowly."
        ]
      },
      {
        name:{en:"Hammer Curl",ar:"تمرين المطرقة"},
        icon:"⌂",
        type:"curl",
        steps:[
          "Hold the dumbbells with a neutral grip.",
          "Keep the elbows close to your sides.",
          "Curl through a comfortable range.",
          "Return under control."
        ]
      },
      {
        name:{en:"Cable Triceps Pressdown",ar:"ضغط الترايسبس بالكابل"},
        icon:"↓",
        type:"cable",
        steps:[
          "Stand comfortably at the cable station.",
          "Hold the handle securely.",
          "Extend the elbows smoothly.",
          "Return the handle slowly."
        ]
      }
    ]
  },


  legs:{
    name:{
      en:"LEGS",
      ar:"الساقان"
    },

    scientific:{
      en:"Quadriceps, Hamstrings, Gluteus maximus & Gastrocnemius",
      ar:"العضلات الرباعية، أوتار الركبة، الألوية الكبرى وعضلة الساق"
    },

    target:{
      en:"Quadriceps & Gluteus maximus",
      ar:"العضلات الرباعية والألوية الكبرى"
    },

    description:{
      en:"The legs contain several major muscle groups responsible for standing, walking, squatting and many athletic movements.",
      ar:"تحتوي الساقان على عدة مجموعات عضلية رئيسية مسؤولة عن الوقوف والمشي والقرفصاء والعديد من الحركات الرياضية."
    },

    exercises:[
      {
        name:{en:"Squat",ar:"القرفصاء"},
        icon:"⌄",
        type:"squat",
        steps:[
          "Stand with a comfortable stance.",
          "Keep your feet stable and torso controlled.",
          "Lower through a comfortable range.",
          "Stand back up smoothly."
        ]
      },
      {
        name:{en:"Leg Press",ar:"ضغط الأرجل"},
        icon:"▣",
        type:"press",
        steps:[
          "Position yourself securely on the machine.",
          "Place your feet comfortably on the platform.",
          "Lower the platform under control.",
          "Press smoothly without locking the joints aggressively."
        ]
      },
      {
        name:{en:"Romanian Deadlift",ar:"الرفعة الرومانية"},
        icon:"↘",
        type:"hinge",
        steps:[
          "Stand with a comfortable stance.",
          "Keep the weight close to your body.",
          "Hinge through the hips with a controlled back position.",
          "Return to standing smoothly."
        ]
      },
      {
        name:{en:"Calf Raise",ar:"رفع الساق"},
        icon:"↑",
        type:"calf",
        steps:[
          "Stand securely with support if needed.",
          "Keep your feet stable.",
          "Raise your heels smoothly.",
          "Lower them slowly."
        ]
      }
    ]
  },


  core:{
    name:{
      en:"CORE",
      ar:"الجذع"
    },

    scientific:{
      en:"Rectus abdominis, Obliques & Transversus abdominis",
      ar:"العضلة المستقيمة البطنية والعضلات المائلة والمستعرضة البطنية"
    },

    target:{
      en:"Rectus abdominis & Obliques",
      ar:"العضلة المستقيمة البطنية والعضلات المائلة"
    },

    description:{
      en:"The core helps stabilize the trunk and transfer force between the upper and lower body.",
      ar:"يساعد الجذع على تثبيت الجسم ونقل القوة بين الجزء العلوي والسفلي."
    },

    exercises:[
      {
        name:{en:"Cable Crunch",ar:"كرنش الكابل"},
        icon:"↓",
        type:"cable",
        steps:[
          "Set the cable at a comfortable position.",
          "Hold the attachment securely.",
          "Curl the trunk through a controlled range.",
          "Return slowly without pulling with the arms."
        ]
      },
      {
        name:{en:"Plank",ar:"البلانك"},
        icon:"▬",
        type:"plank",
        steps:[
          "Set your hands or forearms comfortably.",
          "Keep the body stable.",
          "Maintain a controlled breathing pattern.",
          "Stop when you can no longer maintain good position."
        ]
      },
      {
        name:{en:"Dead Bug",ar:"ديد باغ"},
        icon:"✦",
        type:"core",
        steps:[
          "Lie comfortably on your back.",
          "Keep your trunk stable.",
          "Move opposite limbs slowly.",
          "Return to the starting position with control."
        ]
      }
    ]
  }

};


/* ================= LANGUAGE ================= */

let currentLanguage = "en";

const languageToggle = document.getElementById("languageToggle");

function applyLanguage(){

  document.documentElement.lang = currentLanguage;

  document.body.dir = currentLanguage === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-en]").forEach(element => {
    element.textContent = element.dataset[currentLanguage];
  });

  renderMuscle(currentMuscle);
  renderExercise(currentExercise);

  document.querySelectorAll(".muscle-btn").forEach(btn => {
    const muscle = muscles[btn.dataset.muscle];

    if(muscle){
      btn.querySelector("span:last-child").textContent =
        muscle.name[currentLanguage]
          .toLowerCase()
          .replace(/^./, char => char.toUpperCase());
    }
  });
}

languageToggle.addEventListener("click", () => {

  currentLanguage = currentLanguage === "en" ? "ar" : "en";

  applyLanguage();
});


/* ================= MUSCLE SELECTION ================= */

let currentMuscle = "chest";
let currentExercise = 0;

const humanBody = document.getElementById("humanBody");
const muscleName = document.getElementById("muscleName");
const scientificName = document.getElementById("scientificName");
const muscleDescription = document.getElementById("muscleDescription");
const primaryTarget = document.getElementById("primaryTarget");
const exerciseList = document.getElementById("exerciseList");

document.querySelectorAll(".muscle-btn").forEach(button => {

  button.addEventListener("click", () => {

    currentMuscle = button.dataset.muscle;
    currentExercise = 0;

    document.querySelectorAll(".muscle-btn").forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    renderMuscle(currentMuscle);
    renderExercise(0);
  });

});


function renderMuscle(key){

  const muscle = muscles[key];

  if(!muscle) return;

  muscleName.textContent = muscle.name[currentLanguage];
  scientificName.textContent = muscle.scientific[currentLanguage];
  muscleDescription.textContent = muscle.description[currentLanguage];
  primaryTarget.textContent = muscle.target[currentLanguage];

  exerciseList.innerHTML = "";

  muscle.exercises.forEach((exercise,index) => {

    const item = document.createElement("div");

    item.className = "exercise-item";

    if(index === currentExercise){
      item.classList.add("active");
    }

    item.innerHTML = `
      <div class="exercise-item-icon">${exercise.icon}</div>
      <div>
        <strong>${exercise.name[currentLanguage]}</strong>
        <small>${muscle.target[currentLanguage]}</small>
      </div>
    `;

    item.addEventListener("click", () => {

      currentExercise = index;

      document.querySelectorAll(".exercise-item").forEach(i =>
        i.classList.remove("active")
      );

      item.classList.add("active");

      renderExercise(index);
    });

    exerciseList.appendChild(item);
  });

  highlightMuscle(key);
}


/* ================= ANATOMICAL HIGHLIGHT ================= */

function removeHighlights(){

  document.querySelectorAll(".muscle-zone").forEach(zone =>
    zone.classList.remove("highlight")
  );
}


function highlightMuscle(key){

  removeHighlights();

  const zones = {

    chest:[
      ".chest"
    ],

    back:[
      ".back-muscle",
      ".trapezius"
    ],

    shoulders:[
      ".shoulder"
    ],

    arms:[
      ".upper-arm"
    ],

    legs:[
      ".thigh",
      ".calf"
    ],

    core:[
      ".abs",
      ".oblique"
    ]
  };

  if(!zones[key]) return;

  zones[key].forEach(selector => {

    document.querySelectorAll(selector).forEach(zone => {
      zone.classList.add("highlight");
    });

  });
}


/* ================= FRONT / BACK ================= */

document.querySelectorAll(".view-btn").forEach(button => {

  button.addEventListener("click", () => {

    document.querySelectorAll(".view-btn").forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    const view = button.dataset.view;

    humanBody.classList.toggle("back-view", view === "back");

  });

});


/* ================= EXERCISE DEMONSTRATOR ================= */

const demoTitle = document.getElementById("demoTitle");
const demoTarget = document.getElementById("demoTarget");
const exerciseScene = document.getElementById("exerciseScene");
const equipment = document.getElementById("equipment");

const stepElements = [
  document.getElementById("step1"),
  document.getElementById("step2"),
  document.getElementById("step3"),
  document.getElementById("step4")
];


function renderExercise(index){

  const muscle = muscles[currentMuscle];

  if(!muscle || !muscle.exercises[index]) return;

  const exercise = muscle.exercises[index];

  currentExercise = index;

  demoTitle.textContent = exercise.name[currentLanguage];
  demoTarget.textContent = muscle.target[currentLanguage];

  exercise.steps.forEach((step,index) => {

    if(stepElements[index]){
      stepElements[index].textContent = step;
    }

  });

  updateEquipment(exercise.type);

  document.querySelectorAll(".exercise-item").forEach((item,i) => {
    item.classList.toggle("active",i === index);
  });
}


function updateEquipment(type){

  exerciseScene.classList.remove(
    "cable-mode",
    "dumbbell-mode"
  );

  equipment.className = "equipment";

  if(type === "press"){
    equipment.classList.add("barbell");
  }

  if(type === "dumbbell"){
    equipment.classList.add("dumbbell-mode");
    equipment.innerHTML = `
      <div class="demo-dumbbell left-dumbbell">
        <span></span>
        <i></i>
        <b></b>
      </div>
      <div class="demo-dumbbell right-dumbbell">
        <span></span>
        <i></i>
        <b></b>
      </div>
    `;
  }

  if(type === "cable" || type === "curl" || type === "pressdown"){
    exerciseScene.classList.add("cable-mode");

    equipment.innerHTML = `
      <div class="cable-handle"></div>
    `;
  }

  if(type === "squat" || type === "hinge" || type === "calf"){
    equipment.classList.add("barbell");

    equipment.innerHTML = `
      <div class="bar"></div>
      <div class="plate p1"></div>
      <div class="plate p2"></div>
      <div class="plate p3"></div>
      <div class="plate p4"></div>
    `;
  }

  if(type === "pushup"){
    equipment.innerHTML = "";
  }

  if(type === "plank" || type === "core"){
    equipment.innerHTML = "";
  }
}


/* ================= DYNAMIC DEMO EQUIPMENT CSS ================= */

const dynamicStyle = document.createElement("style");

dynamicStyle.textContent = `

.demo-dumbbell{
  position:absolute;
  width:85px;
  height:18px;
  top:160px;
  z-index:8;
}

.left-dumbbell{
  left:42%;
  transform:rotate(-15deg);
}

.right-dumbbell{
  right:42%;
  transform:rotate(15deg);
}

.demo-dumbbell span,
.demo-dumbbell b{
  position:absolute;
  width:24px;
  height:34px;
  top:-8px;
  background:#252525;
  border:3px solid #777;
  border-radius:5px;
}

.demo-dumbbell span{left:0}
.demo-dumbbell b{right:0}

.demo-dumbbell i{
  position:absolute;
  width:60px;
  height:7px;
  top:5px;
  left:12px;
  background:#aaa;
}

.cable-handle{
  width:65px;
  height:13px;
  position:absolute;
  right:12px;
  top:260px;
  border:3px solid #aaa;
  border-radius:15px;
}

.cable-handle:before{
  content:"";
  position:absolute;
  width:3px;
  height:110px;
  background:#aaa;
  right:29px;
  top:-105px;
}

`;

document.head.appendChild(dynamicStyle);


/* ================= CALCULATOR ================= */

const calculateTraining = document.getElementById("calculateTraining");

calculateTraining.addEventListener("click", calculateSession);

function calculateSession(){

  const exercises = Math.max(
    1,
    Number(document.getElementById("exerciseCount").value) || 1
  );

  const sets = Math.max(
    1,
    Number(document.getElementById("setsPerExercise").value) || 1
  );

  const reps = Math.max(
    1,
    Number(document.getElementById("repsPerSet").value) || 1
  );

  const load = Math.max(
    0,
    Number(document.getElementById("loadPerRep").value) || 0
  );

  const rest = Math.max(
    0,
    Number(document.getElementById("restTime").value) || 0
  );

  const setTime = Math.max(
    1,
    Number(document.getElementById("setTime").value) || 1
  );

  const totalSets = exercises * sets;
  const totalReps = totalSets * reps;
  const volume = totalReps * load;

  const workSeconds = totalSets * setTime;

  const restIntervals = Math.max(0,totalSets - 1);
  const restSeconds = restIntervals * rest;

  const totalSeconds = workSeconds + restSeconds;

  const minutes = Math.max(1,Math.round(totalSeconds / 60));

  document.getElementById("totalSets").textContent =
    totalSets;

  document.getElementById("totalReps").textContent =
    totalReps;

  document.getElementById("trainingVolume").textContent =
    `${volume.toLocaleString()} kg`;

  document.getElementById("sessionTime").textContent =
    `${minutes} min`;
}


/* ================= CALENDAR ================= */

const dayButtons = document.querySelectorAll(".day-card button");

dayButtons.forEach(button => {

  button.addEventListener("click", () => {

    const card = button.closest(".day-card");
    const workout = button.dataset.workout;

    if(card.classList.contains("scheduled")){

      card.classList.remove("scheduled");

      button.textContent = "+";

      const existing = card.querySelector(".workout-label");

      if(existing){
        existing.remove();
      }

      return;
    }

    card.classList.add("scheduled");

    button.textContent = "✓";

    const label = document.createElement("small");

    label.className = "workout-label";

    label.textContent =
      currentLanguage === "ar"
        ? translateWorkout(workout)
        : workout;

    label.style.color = "var(--lime)";
    label.style.fontSize = "9px";
    label.style.fontWeight = "900";
    label.style.textAlign = "center";

    card.insertBefore(label,button);
  });

});


function translateWorkout(workout){

  const translations = {
    "Push":"دفع",
    "Pull":"سحب",
    "Legs":"أرجل",
    "Core":"جذع",
    "Upper":"الجزء العلوي",
    "Full Body":"الجسم كامل",
    "Rest":"راحة"
  };

  return translations[workout] || workout;
}


let weekOffset = 0;

const weekLabel = document.getElementById("weekLabel");

document.getElementById("previousWeek").addEventListener("click",() => {

  weekOffset--;

  updateWeekLabel();

});

document.getElementById("nextWeek").addEventListener("click",() => {

  weekOffset++;

  updateWeekLabel();

});


function updateWeekLabel(){

  if(weekOffset === 0){

    weekLabel.textContent =
      currentLanguage === "ar"
        ? "هذا الأسبوع"
        : "THIS WEEK";

    return;
  }

  if(weekOffset > 0){

    weekLabel.textContent =
      currentLanguage === "ar"
        ? `بعد ${weekOffset} أسبوع`
        : `IN ${weekOffset} WEEK${weekOffset > 1 ? "S" : ""}`;

  }else{

    const amount = Math.abs(weekOffset);

    weekLabel.textContent =
      currentLanguage === "ar"
        ? `قبل ${amount} أسبوع`
        : `${amount} WEEK${amount > 1 ? "S" : ""} AGO`;
  }
}


/* ================= INITIALIZE ================= */

renderMuscle("chest");
renderExercise(0);
calculateSession();
updateWeekLabel();


/* ================= SMOOTH NAVIGATION ================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click",event => {

    const target = document.querySelector(link.getAttribute("href"));

    if(!target) return;

    event.preventDefault();

    const navbarHeight =
      document.querySelector(".navbar").offsetHeight;

    const top =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight -
      15;

    window.scrollTo({
      top,
      behavior:"smooth"
    });
  });

});


/* ================= SMALL SCROLL EFFECT ================= */

window.addEventListener("scroll",() => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 30){

    navbar.style.background = "rgba(3,3,3,.95)";

  }else{

    navbar.style.background = "rgba(5,5,5,.84)";
  }

});
