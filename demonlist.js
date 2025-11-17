//Player data
const 
  As1nus = '<img class="recordpfp" src="images/as1nus.png" alt="Competitor 1"> As1nus'


//demonlist data
const demonlist = [//DATA
  {//WINDY LANDSCAPE
    name: "Windy Landscape", 
    creator: "WOOGI1411", 
    difficulty:"insanedemon", 
    tags:`
    <span class="tags"> Flow </span>
    <span class="tags"> Timings </span> 
    <span class="tags"> Fast paced </span>
    `, 
    videolink:"https://drive.google.com/file/d/1i2JYamEOTHlpftOvk68kjK8ZTO2oHFxn/preview",
    record1:`${As1nus} - First Victor`,
  },
  {//NINE CIRCLES
    name: "Nine Circles", 
    creator: "Zobros"
  },
  {//JAWBREAKER
    name: "Jawbreaker", 
    creator: "WOOGI1411"
  },
  {//ULTRA VIOLENCE
    name: "Ultra Violence", 
    creator: "WOOGI1411"
  },
  {//SKELETAL SHENANIGANS
    name: "Skeletal Shenanigans", 
    creator: "WOOGI1411"
  },
  {//B
    name: "B", 
    creator: "WOOGI1411"
  },
  {//SPEED OF LIGHT II
    name: "Speed of Light II", 
    creator: "WOOGI1411"
  },
];


//difficulty bonus points
difficultybonus = {
  easydemon: 0,
  mediumdemon: 30,
  harddemon: 100,
  insanedemon: 200,
  extremeidemon: 500,
  Top500: 1000,
  Top150: 1600,
  Top75: 2000,
  Top30: 2500,
  Top10: 3000,
}

//points calculation
function getDemonPoints(rank, difficulty) {
  const rankbonus = Math.max(350 - 3.5 * (rank - 1), 0);
  let bonus = difficultybonus[difficulty];
  return rankbonus + bonus;
}


document.addEventListener("DOMContentLoaded", () => {
  loadDemonList();
});

//demonlist basically
function loadDemonList() {
  const containerfr = document.getElementById("amazingdemonlist");

  containerfr.innerHTML = "";

  demonlist.forEach((demon, i) => {
    const crazylist = document.createElement("div");
    crazylist.classList.add("listofdemons");

    crazylist.innerHTML = `#${i + 1} &emsp; ${demon.name}`;

    crazylist.addEventListener("click", () => {
      information(demon, i);
      document.querySelectorAll(".listofdemons").forEach(el => el.classList.remove("selected"));
      crazylist.classList.add("selected");
    });

    containerfr.appendChild(crazylist);
  });
}

//demon information
function information(demon, i) {
  const descriptionfr = document.getElementById("description");


  descriptionfr.innerHTML = 
  `
    <div class="videotitle">
      <div class="titleofvideo"> ${i + 1} — ${demon.name} </div>
      <div class="videocreator"> <strong>Creator:</strong> ${demon.creator ?? "Unknown"} </div>
    </div>

    <div class="videolinkfr">
      <iframe src="${demon.videolink}" class="verify"></iframe>
    </div>

    <div class="desc">
    ${demon.tags ?? ""}
    <div class="descriptioncontent"> funny description </div>
    </div>

    <div class="records">
      <div class="record1 eachrecord"> ${demon.record1 ?? "No Record Yet"} </div>
      <div class="record2 eachrecord"> ${demon.record2 ?? ""} </div>
      <div class="record3 eachrecord"> ${demon.record3 ?? ""} </div>
    </div>

    <div class="other">
      <div class="othercontent"> ${getDemonPoints(i + 1, demon.difficulty)} points</div>
    </div>
  `;
}

