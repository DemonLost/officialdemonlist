const demonlist = [
    {name: "Windy Landscape", creator: "WOOGI1411"},
    {name: "Nine Circles"},
    {name: "Jawbreaker"},
    {name: "Ultra Violence"},
    {name: "Skeletal Shenanigans"},
    {name: "B"},
    {name: "Speed of Light II"},
]

function loadDemonList() {

    demonlist.forEach((demon, i) => {
                const containterfr = document.getElementById("amazingdemonlist");
                const crazylist = document.createElement("div");
                crazylist.classList = add("listofdemons");
        
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
    const descriptionfr = document.getElementById("amazingdescription");

    descriptionfr.innerHTML =
        `
        <h2> ${demon.name} </h2>
        <br>
        <p> Creator: ${demon.creator} </p>
        `;
}

loadDemonList();

//ill just edit this later i guess haha (BROO I DONT KNOW WHY THIS ISNT WORKING HELP)