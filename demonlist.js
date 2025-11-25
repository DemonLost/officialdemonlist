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
    <span class="tags"> Old Design </span>
    <span class="tags"> Unfun 💀 </span>
    `,
    description:`Starquake is a medium demon created by MasK463. This level emphasizes precise timings and features sections that some players may find unfun due to their awkward nature. The old design tests players' skills in a unique way, making it an interesting experience for those looking to conquer its difficulties!`,
    videolink:"https://www.youtube.com/embed/WBvdbQ8HN-E?si=q1xT2Ib-cHtCyV7h",  
    song: "Stereo Madness - ForeverBound",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",  
  },
  {//LAVA TEMPLE
    name: "Lava Temple",
    creator: "Michigun",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> Timings </span>
    `,
    description:`Lava Temple is a medium demon created by Michigun. This level emphasizes precise timings. The design offers an engaging experience for those looking to test their skills in a fiery environment!`,
    videolink:"https://www.youtube.com/embed/3y5oX1bX1oA?si=U4f6Z6Yk2F1y8K",
    song: "Silent Hill (Dubstep) - Jewelz123",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//CALCULATIONS
    name: "calculations",
    creator: "NovaSteel",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> 2.2 Gameplay </span>
    <span class="tags"> Speed Timings </span>
    `,
    description:`calculations is a medium demon created by NovaSteel. This level features speed timings and incorporates 2.2 mechanics that challenge players to adapt quickly. The design tests players' reflexes and control, making it an exciting experience for those looking to conquer its challenges!`,
    videolink:"https://www.youtube.com/embed/1f6Y7b1bX1o?si=1o8b2k1k3h3KJX9D",
    song: "Empress - Koraii",
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
    videolink:"https://www.youtube.com/embed/jTfLxbgexvc?si=Gq9nDbVIdTDc_JoP",
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
  {//OFF
    name: "Off",
    creator: "DanZmeN ",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> Mirrored </span>
    <span class="tags"> Flow </span>
    <span class="tags"> Fast-Paced </span>
    `,
    description:`Off is a medium demon created by DanZmeN. This level features mirrored design elements. The fast-paced gameplay tests players' reflexes and control, making it an exciting experience for those looking to conquer a unique challenge!`,
    videolink:"https://www.youtube.com/embed/4p2sb8iOWBw?si=ITSggLRZNFYTfKGk",
    song: "40000 - ColBreakz",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//SYNCOPE
    name: "syncope",
    creator: "djudjeito & Rowanm",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> Length </span>
    <span class="tags"> Mysterious </span>
    `,
    description:`syncope is a medium demon created by djudjeito & Rowanm. This level is known for its considerable length and mysterious atmosphere. The design offers an engaging experience for those looking to test their skills in a unique and intriguing environment!`,
    videolink:"https://www.youtube.com/embed/VwiclHQuAkw?si=bJyFhUsDwrmygWBa",
    song: "i guess im finally adult - HyperCubeRecords",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//SWEET DECEPTION
    name: "Sweet Deception", 
    creator: "RebornX",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> Fast-Paced </span>
    <span class="tags"> Flow </span>
    <span class="tags"> Mirrored </span>
    `,
    description:`Sweet Deception is a medium demon created by RebornX. This level features fast-paced gameplay with a focus on flow and mirrored design elements. Players will need to maintain rhythm and control while navigating through challenging sections. A great choice for those looking to test their skills in an exciting and dynamic environment!`,
    videolink:"https://www.youtube.com/embed/nI-Xtg--_bI?si=UROHCpV9vy7fe6Aw",
    song: "Ricochet Love - Waterflame",
    record1:"Sl1ckByt3", record1pic:"sl1ckbyt3",
  },
  {//WANNACRY
    name: "WANNACRY",
    creator: "kira9999",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> 2.2 Gameplay </span>
    <span class="tags"> Timings </span>
    <span class="tags"> Fast-Paced </span>
    `,
    description:`WANNACRY is a medium demon created by kira9999. This level features fast-paced gameplay with a focus on precise timings and incorporates 2.2 mechanics that challenge players to adapt quickly. The design tests players' reflexes and control, making it an exciting experience for those looking to conquer its challenges!`,
    videolink:"https://www.youtube.com/embed/c6kFItQP3Ig?si=fuUk1a6YeNCPM2Z_",
    song: "Annabelle's Tea Party by NIVIRO",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//MAGISTRO 
    name: "MAGISTRO",
    creator: "CHRAPIVA",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> 2.2 Gameplay </span>
    <span class="tags"> Flow </span>
    <span class="tags"> Fast-Paced </span>
    `,
    description:`MAGISTRO is a medium demon created by CHRAPIVA. This level features fast-paced gameplay with a focus on flow and incorporates 2.2 mechanics that challenge players to adapt quickly. The design tests players' reflexes and control, making it an exciting experience for those looking to conquer its challenges!`,
    videolink:"https://www.youtube.com/embed/-564U4q1zZc?si=2oQmnDhU4xMmSyNO",
    song: "Vienna - James Mercy",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//DEADLOCKED 2017
    name: "Deadlocked 2017",
    creator: "Bronks",
    difficulty: "mediumdemon",
    tags:`  
    <span class="tags"> Remake </span>
    <span class="tags"> Fast-Paced </span>
    <span class="tags"> Flow </span>
    `,
    description:`Deadlocked 2017 is a medium demon created by Bronks. This level features fast-paced gameplay with a focus on flow and is a remake of the original Deadlocked level. Players will need to maintain rhythm and control while navigating through challenging sections. A great choice for those looking to test their skills in an exciting and dynamic environment!`,
    videolink:"https://www.youtube.com/embed/UE1Mts-yVBc?si=675yXDNni8tZd1BA",
    song: "Deadlocked - F-777",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//RETROMINATOR
    name: "Retrominator",
    creator: "Gekou",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> Flow </span>
    <span class="tags"> Fast-Paced </span>
    <span class="tags"> Indicators </span>
    `,
    description:`RETROMINATOR is a medium demon created by Gekou. This level features fast-paced gameplay with a focus on flow and includes indicators to help players navigate through complex parts of the level. Players will need to maintain rhythm and control while navigating through challenging sections. A great choice for those looking to test their skills in an exciting and dynamic environment!`,
    videolink:"https://www.youtube.com/embed/jyX49bu-moM?si=eRNgB_4EaNZAV4wv",
    song: "Geometrical Dominator - Waterflame",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//LIVING OPEN
    name: "Living Open",
    creator: "MaFFaKa & More",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> Fast-Paced </span>
    <span class="tags"> Remake </span>
    `,
    description:`Living Open is a medium demon created by MaFFaKa & More. This level features fast-paced gameplay and is a remake of the original Deadlocked level. Players will need to maintain rhythm and control while navigating through challenging sections. A great choice for those looking to test their skills in an exciting and dynamic environment!`,
    videolink:"https://www.youtube.com/embed/NKIg8lm48jk?si=ly4QSaUobTrqxwwX",
    song: "Deadlocked - F-777",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//MAFFSTEP
    name: "Maffstep",
    creator: "MaFFaKa",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> 2.2 Gameplay </span>
    <span class="tags"> Timings </span>
    <span class="tags"> Remake </span>
    `,
    description:`Maffstep is a medium demon created by MaFFaKa. This level emphasizes precise timings and incorporates 2.2 mechanics that challenge players to adapt quickly. As a remake of Clubstep, it offers a fresh take on the original design, making it an interesting experience for those looking to conquer its difficulties!`,
    videolink:"https://www.youtube.com/embed/qY4dtXjiyno?si=7l1xOoGHcDjokKnm",
    song: "Clubstep - DJ Nate",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//HEMI
    name: "HEMI",
    creator:"X1RON",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> Fast-Paced </span>
    <span class="tags"> Flow </span>
    `,
    description:`HEMI is a medium demon created by X1RON. This level features fast-paced gameplay with a focus on flow. Players will need to maintain rhythm and control while navigating through challenging sections. A great choice for those looking to test their skills in an exciting and dynamic environment!`,
    videolink:"https://www.youtube.com/embed/JdIZfsOFux0?si=ygM1GE6qxsQ5SEYF",
    song: "Antipixel - Panda Eyes",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//SHURIKEN
    name: "Shuriken",
    creator: "Danolex",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> Fast-Paced </span>
    <span class="tags"> Flow </span>
    `,
    description:`Shuriken is a medium demon created by Danolex. This level features fast-paced gameplay with a focus on flow. Players will need to maintain rhythm and control while navigating through challenging sections. A great choice for those looking to test their skills in an exciting and dynamic environment!`,
    videolink:"https://www.youtube.com/embed/t9qNeq3ZwEw?si=ZOGjCr65Hdea-Lxg",
    song: "Shuriken - Panda Eyes x FYER",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//BISMARCK
    name: "BISMARCK",
    creator: "Inex & More",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> Fast-Paced </span>
    <span class="tags"> Flow </span>
    `,
    description:`BISMARCK is a medium demon created by Inex & More. This level features fast-paced gameplay with a focus on flow. Players will need to maintain rhythm and control while navigating through challenging sections. A great choice for those looking to test their skills in an exciting and dynamic environment!`,
    videolink:"https://www.youtube.com/embed/jICZX77Z82U?si=GGqcyjVmRSfX9Jku",
    song: "Ascending - Talurre",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//ELECTRODYNAMIX V2
    name: "Electrodynamix V2",
    creator: "Neptune",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> Fast-Paced </span>
    <span class="tags"> Flow </span>
    <span class="tags"> Remake </span>
    `,
    description:`Electrodynamix V2 is a medium demon created by Neptune. This level features fast-paced gameplay with a focus on flow. As a remake of Electrodynamix, it offers a fresh take on the original design, making it an interesting experience for those looking to conquer its difficulties!`,
    videolink:"https://www.youtube.com/embed/LO6_3xeI-BA?si=KVUO0xHWa6KH8K2C",
    song: "Electrodynamix - DJ Nate",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//BOXING BOXES
    name: "Boxing Boxes",
    creator: "Ellisha",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> Timings </span>
    <span class="tags"> Flow </span>
    `,
    description:`Boxing Boxes is a medium demon created by Ellisha. This level emphasizes precise timings and smooth flow especially with its moving objects. The design offers an engaging experience for those looking to test their skills in a rhythmic environment!`,
    videolink:"https://www.youtube.com/embed/1O8b0YJWBtc?si=iNtZwvH3akHMvtdx",
    song: "Hyperspin - Waterflame",  
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//DEMON PARK
    name: "DEMON PARK",
    creator: "melX0exe & More",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> Remake </span>
    `,
    description:`DEMON PARK is a medium demon created by melX0exe & More. This level is a remake of the original Demon Park level. Players will need to maintain rhythm and control while navigating through challenging sections. A great choice for those looking to test their skills in an exciting and dynamic environment!`,
    videolink:"https://www.youtube.com/embed/uxyI4GmWCOg?si=GN0_q_Hblh_zUStT",
    song: "Time Machine - Waterflame",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//ERA
    name: "ERA",  
    creator: "Airzyy",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> 2.2 Gameplay </span>
    <span class="tags"> Timings </span>
    `,
    description:`ERA is a medium demon created by Airzyy. This level emphasizes precise timings and incorporates 2.2 mechanics that challenge players to adapt quickly. The design offers an engaging experience for those looking to test their skills in a unique environment!`,
    videolink:"https://www.youtube.com/embed/hG8uPM-hGUM?si=RqRLWVE83vbyAFdV",
    song: "Foreign Place - Ajtastic",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
  },
  {//WAY OF THE DARKNESS
    name: "Way of the Darkness", 
    creator: "IIINePtunEIII",
    difficulty: "mediumdemon",
    tags:`
    <span class="tags"> Old Design </span>
    <span class="tags"> Flow </span>
    `,
    description:`Way of the Darkness is a medium demon created by IIINePtunEIII. This level features an old design style with a focus on flow. Players will need to maintain rhythm and control while navigating through challenging sections. A great choice for those looking to test their skills in an exciting and dynamic environment!`,
    videolink:"https://www.youtube.com/embed/dOJhARl5H30?si=WkPfngb-LMeQtjjD",
    song: "Theory of Everything - DJ Nate",
    record1:`Sl1ckByt3`, record1pic:"sl1ckbyt3",
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
  {//DECODE
    name: "DeCode",
    creator: "DanZmeN ",
    difficulty: "easydemon",
    tags:`
    <span class="tags"> Flow </span>
    <span class="tags"> Timings </span>
    <span class="tags"> Iconic </span>
    `,
    description:`DeCode is an easy demon created by DanZmeN. This level features smooth flow and precise timings especially at the iconic wave part, making it accessible for players of various skill levels. The design is iconic within the community, offering a memorable experience for those looking to enjoy a well-crafted level!`,
    videolink:"https://www.youtube.com/embed/IRTQZZ502J0?si=OmiqKBcJdXQtPiEy",
    song: "Endgame - Waterflame",
    record1:`Coldaf`, record1pic:"coldaf",
    record2: `As1nus`, record2pic:"as1nus",
    record3: `Sl1ckByt3`, record3pic:"sl1ckbyt3",
    record4:'<div class="eachrecord" id="3recordplayer"> <img class="recordpfp" src="images/ecopled.png"> Ecopled <a href="" style="cursor: pointer;"> <img style="float: right;" class="recordpfp" src="images/nogreyyticon.png"> </a> </div>',

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
  if (rank === 1) {
    bonus += 150;
  }
  if (rank <= 3) {
    bonus += 50;
  }
  if (rank >= 150) {
    bonus = 0;
  }
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

