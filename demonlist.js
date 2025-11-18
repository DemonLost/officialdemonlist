

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
    record1:`As1nus`, record1pic:"as1nus", victor1link:"https://www.youtube.com/channel/UCV8Z4f8lXoO6r0kLhH8cX9A",
    record2:"Coldaf", record2pic:"coldaf",
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
      <div class="record1 eachrecord"> <img class="recordpfp" id="${demon.record1pic ?? "norecordpic"}" src="images/${demon.record1pic}.png"> ${demon.record1 ?? "No Record Yet"} - First Victor <a href="${demon.victor1link ?? ""}" style="cursor: pointer;"> <img  style="float: right;" class="recordpfp" src="${demon.victor1link ? "images/greyyticon.png" : "images/nogreyyticon.png"}"> </a> </div>
      <div class="record2 eachrecord" id="2recordplayer"> <img class="recordpfp" id="${demon.record2pic ?? "norecordpic2"}" src="images/${demon.record2pic}.png"> ${demon.record2 ?? "No Record Yet"} <a href="${demon.victor2link ?? ""}" style="cursor: pointer;"> <img style="float: right;" class="recordpfp" src="${demon.victor2link ? "images/greyyticon.png" : "images/nogreyyticon.png"}"> </a> </div>
      <div class="record3 eachrecord" id="3recordplayer"> <img class="recordpfp" id="${demon.record3pic ?? "norecordpic3"}" src="images/${demon.record3pic}.png"> ${demon.record3 ?? "No Record Yet"} <a href="${demon.victor3link ?? ""}" style="cursor: pointer;"> <img style="float: right;" class="recordpfp" src="${demon.victor3link ? "images/greyyticon.png" : "images/nogreyyticon.png"}"> </a> </div>
      ${demon.record4 ?? ""}
    </div>

    <div class="other">
      <div class="othercontent"> ${getDemonPoints(i + 1, demon.difficulty)} points</div>
    </div>
  `;

  
    if (document.getElementById("norecordpic2")) {
      document.getElementById("2recordplayer").style.display = "none";
    }

    if (document.getElementById("norecordpic3")) {
      document.getElementById("3recordplayer").style.display = "none";
    }

}

