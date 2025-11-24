//MAIN FORMAT FOR RECORD 4 AND ABOVE
/*<div class="eachrecord" id="3recordplayer"> <img class="recordpfp" src="images/coldaf.png"> Coldaf <a href="" style="cursor: pointer;"> <img style="float: right;" class="recordpfp" src="images/nogreyyticon.png"> </a> </div>*/

//demonlist data
const demonlist = [//DATA
  {//WINDY LANDSCAPE
    name: "Windy Landscape", 
    creator: "WOOGI1411", 
    difficulty:"insanedemon", 
    tags:`
    <span class="tags"> Flow </span>
    <span class="tags"> Timings </span> 
    <span class="tags"> Fast-Paced </span>
    `, 
    description:`Windy Landscape is an insane demon created by WOOGI1411. It features fast-paced gameplay with a focus on flow and precise timings. Players will need to navigate through challenging sections while maintaining rhythm and control. Perfect for those looking to test their skills in a dynamic environment! Make sure to practice the timings, especially in the chokepoints!`,
    videolink:"https://www.youtube.com/embed/hTX0Ch5bgMw?si=n6L3PBqez0s6Jq5z",
    song: "Windfall - TheFatRat",
    record1:`As1nus`, record1pic:"as1nus", victor1link:"https://www.youtube.com/channel/UCV8Z4f8lXoO6r0kLhH8cX9A",
    record2:"Coldaf", record2pic:"coldaf",
  },
  {//FORTUNE TELLER
    name: "Fortune Teller", 
    creator: "Scrumpy & More",
    difficulty: "harddemon",
    tags:`
    <span class="tags"> Timings </span>
    <span class="tags"> Fast-Paced </span>
    `,
    description:`Fortune Teller is a hard demon created by Scrumpy and others. This level emphasizes tight and quick gameplay, requiring players to execute exact movements and timing. The design challenges players to maintain control while navigating through intricate sections. A must-try for those who enjoy levels that test their precision and skill!`,
    videolink:"https://www.youtube.com/embed/ogA7Ud3yEzY?si=z8kwmezYQj_cu--r",
    song: "Bloody Tears (Remix) - NoveDeht",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//CTRL ALT DEL
    name: "Ctrl Alt Del", 
    creator: "LeoSquared & More",
    difficulty: "harddemon",
    tags:`
    <span class="tags"> Length </span>
    <span class="tags"> Fast-Paced </span>
    <span class="tags"> 2.2 Gameplay </span>
    `,
    description:`Ctrl Alt Del is a hard demon created by LeoSquared and others. This level is known for its length and fast-paced gameplay, incorporating 2.2 mechanics that challenge players to adapt quickly. The design features a variety of sections that test endurance and skill, making it a rewarding experience for those who can conquer its challenges.`,
    videolink:"https://www.youtube.com/embed/8_OtD_sUfUc?si=8yvMzlRJppvLzvIw",
    song: "Grand Finale - Schtiffles",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//NINE CIRCLES
    name: "Nine Circles", 
    creator: "Zobros",
    difficulty: "harddemon",
    tags:`
    <span class="tags"> Wave Timings </span>
    <span class="tags"> Fast-Paced </span>
    <span class="tags"> Iconic </span>
    <span class="tags"> Epilepsy ⚠️ </span>
    `,
    description:`Nine Circles is a hard demon created by Zobros & More. This level is renowned for its challenging wave timings and fast-paced gameplay. It has become iconic in the community for its intense design and memorable soundtrack. Players should be cautious of the flashing visuals, as it contains epilepsy-inducing effects. A true test of skill for those who dare to take on its nine circles!`,
    videolink:"https://www.youtube.com/embed/dOdPoU1ncOc?si=rYSafa4WPC0eB5Hi",
    song: "Nine Circles - Rukkus",
    record1:`Coldaf`, record1pic:"coldaf",
    record2:`As1nus`, record2pic:"as1nus",
    record3:`Sl1ckByt3`, record3pic:"sl1ckbyt3",
  },
  {//JAWBREAKER
    name: "Jawbreaker", 
    creator: "WOOGI1411",
    difficulty: "harddemon",
    tags:`
    <span class="tags"> Wave Timings </span>
    <span class="tags"> Fast-Paced </span>
    <span class="tags"> Upide-Down Waves </span>
    <span class="tags"> Epilepsy ⚠️ </span> 
    `,
    description:`Jawbreaker is a hard demon created by WOOGI1411. This level features challenging wave timings and fast-paced gameplay, with a unique twist of upside-down wave sections. The design is visually intense, so players should be aware of potential epilepsy triggers due to flashing effects. A thrilling experience for those looking to push their skills to the limit!`,
    videolink:"https://www.youtube.com/embed/7lsLVVujIvg?si=HnV5Ui3z6CcD7los",
    song: "Jawbreaker - Rukkus",
    record1:`As1nus`, record1pic:"as1nus",
  },
  {//ARTIFICIAL POWDER
    name: "Artificial Powder", 
    creator: "DRisccuN8",
    difficulty: "harddemon",
    tags:`
    <span class="tags"> Hard Ending </span>
    <span class="tags"> Indicators </span>
    `,
    description:`Artificial Powder is a hard demon created by DRisccuN8. This level is known for its challenging ending section that tests players' skills to the fullest. It incorporates indicators to help players navigate through complex parts of the level. A must-play for those seeking a tough yet rewarding experience!`,
    videolink:"https://www.youtube.com/embed/tZ8QJcU2tjw?si=b_rbmhEl3fxA-THI",
    song: "Nuke Powder - MaelouX",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//163
    name: "163",
    creator: "Diffuse",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> Length </span>
    <span class="tags"> Timings </span>
    <span class="tags"> Epilepsy ⚠️ </span>
    `,
    description:`163 is a medium demon created by Diffuse. This level is known for its considerable length and emphasis on precise timings. The design features visually intense sections, so players should be cautious of potential epilepsy triggers due to flashing effects. A great choice for those looking to test their endurance and timing skills!`,
    videolink:"https://www.youtube.com/embed/9MXFxPg6GVg?si=i2W2enHhp7ihG3pw",
    song: "Eden - cYsmix",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//STARQUAKE
    name: "Starquake",
    creator: "MasK463",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> Timings </span>
    <span class="tags"> Unfun 💀 </span>
    `,
    description:`Starquake is a medium demon created by MasK463. This level emphasizes precise timings and features sections that some players may find unfun due to their awkward nature. The old design tests players' skills in a unique way, making it an interesting experience for those looking to conquer its difficulties!`,
    videolink:"https://www.youtube.com/embed/WBvdbQ8HN-E?si=q1xT2Ib-cHtCyV7h",  
    song: "Stereo Madness - ForeverBound",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",  
  },
  {//ULTRA VIOLENCE
    name: "Ultra Violence", 
    creator: "Xender Games",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> Boss Fight </span>
    <span class="tags"> Timings </span>
    `,
    description:`Ultra Violence is a medium demon created by Xender Games. This level features a boss fight theme, challenging players with precise timings and intense gameplay. The design tests players' reflexes and control, making it an exciting experience for those looking to conquer a formidable foe!`,  
    videolink:"https://www.youtube.com/embed/tL2X3Fy0BUQ?si=QAYIGB_o7pboIYi6",
    song: "Power Sound - Eleps",
    record1:`Coldaf`, record1pic:"coldaf",
  },
  {//MECHANICAL SHOWDOWN
    name: "Mechanical Showdown", 
    creator: "Tongii",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> Fast-Paced </span>
    <span class="tags"> Timings </span> 
    <span class="tags"> Hard UFO </span>
    `,
    description:`Mechanical Showdown is a medium demon created by Tongii. This level features fast-paced gameplay with a focus on precise timings and challenging UFO sections, especially that one part. The design tests players' skills in a dynamic way, making it an enjoyable experience for those looking to take on a mechanical adversary!`,
    videolink:"https://www.youtube.com/embed/1Yc1b0Yk1oA?si=1QX1j1Y6Yk2F1y8K",
    song: "Stomping Ground - Boom Kitty",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//SKELETAL SHENANIGANS
    name: "Skeletal Shenanigans", 
    creator: "Yoreid & Airzyy",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> Boss Fight </span>
    <span class="tags"> Timings </span>
    `,
    description:`Skeletal Shenanigans is a medium demon created by YoReid & Airzyy. This level features a boss fight theme, challenging players with precise timings and engaging gameplay. The design tests players' skills in a fun and dynamic way, making it an enjoyable experience for those looking to take on a skeletal adversary!`,
    videolink:"https://www.youtube.com/embed/mgzTHUKATqo?si=c6AZrGPOzJxKFoyu",
    song: "Slash Inferno - Teminite x Boom Kitty x Waterflame",
    record1:`Ecopled`, record1pic:"ecopled",
    record2:`Coldaf`, record2pic:"coldaf",
  },
  {//SPEED OF LIGHT II
    name: "Speed of Light II", 
    creator: "TheRealSalad",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> Timings </span>
    <span class="tags"> Flow </span>
    `,
    description:`Speed of Light II is a medium demon created by TheRealSalad. This level emphasizes precise timings and smooth flow. The design offers an engaging experience for those looking to test their skills in a slow-paced yet flowy environment!`,
    videolink:"https://www.youtube.com/embed/nyPX9sfWqDI?si=EnXtaKDBzWGUOelX",
    song: "At the Speed of Light - Dimrain47",
    record1:`As1nus`, record1pic:"as1nus",
    record2:`Sl1ckByt3`, record2pic:"sl1ckbyt3",
  },
  {//B
    name: "B", 
    creator: " Motleyorc & ScorchVx",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> Boss Fight </span>
    <span class="tags"> Fast Paced </span>
    <span class="tags"> Flow </span>
    `,
    description:`B is a medium demon created by  Motleyorc & ScorchVx. This level features a boss fight theme with fast-paced gameplay and a focus on flow. Players will need to maintain rhythm and control while navigating through challenging sections. A great choice for those looking to test their skills in an exciting and dynamic environment!`,
    videolink:"https://www.youtube.com/embed/ohKPqGxotao?si=ch3WvHdA05E65DdR",
    song: "Merp Merp - Schtiffles",
    record1:`Ecopled`, record1pic:"ecopled",
    record2:`As1nus`, record2pic:"as1nus",
    record3:`Sl1ckByt3`, record3pic:"sl1ckbyt3",
    record4:'<div class="eachrecord" id="3recordplayer"> <img class="recordpfp" src="images/coldaf.png"> Coldaf <a href="" style="cursor: pointer;"> <img style="float: right;" class="recordpfp" src="images/nogreyyticon.png"> </a> </div>',
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
  const rankbonus = Math.max(700 - 7 * (rank - 1), 0);
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
    crazylist.id = `${demon.difficulty}`;

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

    <div class="tagsfr">
      ${demon.tags ?? ""}
    </div>

    <div class="desc">
      <div class="desctitle"> Description </div>
      <div class="descriptionpara"> ${demon.description} </div>
    </div>

    <div class="records">
      <div class="record1 eachrecord"> <img class="recordpfp" id="${demon.record1pic ?? "norecordpic"}" src="images/${demon.record1pic}.png"> ${demon.record1 ?? "No Record Yet"} - First Victor <a href="${demon.victor1link ?? ""}" style="cursor: pointer;"> <img  style="float: right;" class="recordpfp" src="${demon.victor1link ? "images/greyyticon.png" : "images/nogreyyticon.png"}"> </a> </div>
      <div class="record2 eachrecord" id="2recordplayer"> <img class="recordpfp" id="${demon.record2pic ?? "norecordpic2"}" src="images/${demon.record2pic}.png"> ${demon.record2 ?? "No Record Yet"} <a href="${demon.victor2link ?? ""}" style="cursor: pointer;"> <img style="float: right;" class="recordpfp" src="${demon.victor2link ? "images/greyyticon.png" : "images/nogreyyticon.png"}"> </a> </div>
      <div class="record3 eachrecord" id="3recordplayer"> <img class="recordpfp" id="${demon.record3pic ?? "norecordpic3"}" src="images/${demon.record3pic}.png"> ${demon.record3 ?? "No Record Yet"} <a href="${demon.victor3link ?? ""}" style="cursor: pointer;"> <img style="float: right;" class="recordpfp" src="${demon.victor3link ? "images/greyyticon.png" : "images/nogreyyticon.png"}"> </a> </div>
      ${demon.record4 ?? ""}
    </div>

    <div class="other">
      <div class="othertitle"> List Information </div>
      <div class="othercontent"> 
        <strong> Points Awarded:</strong> ${getDemonPoints(i + 1, demon.difficulty)} <br>
        <strong> Song:</strong> ${demon.song ?? "--"} 
      </div>
    </div>
  `;

  
    if (document.getElementById("norecordpic2")) {
      document.getElementById("2recordplayer").style.display = "none";
    }

    if (document.getElementById("norecordpic3")) {
      document.getElementById("3recordplayer").style.display = "none";
    }

}

