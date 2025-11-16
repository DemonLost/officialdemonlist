const demonlist = [
  {name: "Windy Landscape", creator: "WOOGI1411"},
  {name: "Nine Circles", creator: "WOOGI1411"},
  {name: "Jawbreaker", creator: "WOOGI1411"},
  {name: "Ultra Violence", creator: "WOOGI1411"},
  {name: "Skeletal Shenanigans", creator: "WOOGI1411"},
  {name: "B", creator: "WOOGI1411"},
  {name: "Speed of Light II", creator: "WOOGI1411"},
];

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  loadDemonList();
});

function loadDemonList() {
  const containerfr = document.getElementById("amazingdemonlist");
  if (!containerfr) {
    console.error('Container element with id "amazingdemonlist" not found in HTML.');
    return;
  }

  // clear any previous content
  containerfr.innerHTML = "";

  demonlist.forEach((demon, i) => {
    const crazylist = document.createElement("div");
    crazylist.classList.add("listofdemons");

    crazylist.innerHTML = `#${i + 1} &emsp; ${demon.name}`;

    crazylist.addEventListener("click", () => {
      information(demon, i);
      // visually mark selected (optional)
      document.querySelectorAll(".listofdemons").forEach(el => el.classList.remove("selected"));
      crazylist.classList.add("selected");
    });

    containerfr.appendChild(crazylist);
  });
}

function information(demon, i) {
  const descriptionfr = document.getElementById("description");
  if (!descriptionfr) {
    console.error('Description element with id "description" not found in HTML.');
    return;
  }

  descriptionfr.innerHTML = `
    <h2>${i + 1} — ${demon.name}</h2>
    <p><strong>Creator:</strong> ${demon.creator ?? "Unknown"}</p>
  `;
}

/*const demonlist = [
    {name: "Windy Landscape", creator: "WOOGI1411"},
    {name: "Nine Circles", creator: "WOOGI1411"},
    {name: "Jawbreaker", creator: "WOOGI1411"},
    {name: "Ultra Violence", creator: "WOOGI1411"},
    {name: "Skeletal Shenanigans", creator: "WOOGI1411"},
    {name: "B", creator: "WOOGI1411"},
    {name: "Speed of Light II", creator: "WOOGI1411"},
]

function loadDemonList() {

    demonlist.forEach((demon, i) => {
                const containterfr = document.getElementById("amazingdemonlist");
                const crazylist = document.createElement("div");
                crazylist.classList.add("listofdemons");
        
                crazylist.innerHTML = 
                    `
                        #${i + 1} &emsp; ${demon.name}
                    `;
            

                crazylist.addEventListener("click", () => {
                    information(demon, i);
                });

                containterfr.appendChild(crazylist); 

            }); 
        };
    


function information(demon, i) {
    const descriptionfr = document.getElementById("description");

    descriptionfr.innerHTML =
        `
        <h2> ${demon.name} </h2>
        <br>
        <p> Creator: ${demon.creator} </p>
        `;
}

loadDemonList();*/

//ill just edit this later i guess haha (BROO I DONT KNOW WHY THIS ISNT WORKING HELP)

/* const demonlist = [
    {name: "Windy Landscape", creator: "WOOGI1411"},
    {name: "Nine Circles", creator: "Zobros"},
    {name: "Jawbreaker", creator: "ZenthicAlpha"},
    {name: "Ultra Violence", creator: "Pockeon"},
    {name: "Skeletal Shenanigans", creator: "LimeX"},
    {name: "B", creator: "nikroplays"},
    {name: "Speed of Light II", creator: "LifelineGD"},
];

function loadDemonList() {

    demonlist.forEach((demon, i) => {
        const containterfr = document.getElementById("amazingdemonlist");

        const crazylist = document.createElement("div");
        crazylist.classList.add("listofdemons");

        crazylist.innerHTML = `
            #${i + 1} &emsp; ${demon.name}
        `;

        crazylist.addEventListener("click", () => {
            information(demon, i);
        });

        containterfr.appendChild(crazylist);
    });
}

function information(demon, i) {
    const descriptionfr = document.getElementById("description");

    descriptionfr.innerHTML = `
        <h2>${demon.name}</h2>
        <br>
        <p>Creator: ${demon.creator}</p>
    `;
}

loadDemonList(); */