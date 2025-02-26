const container = document.querySelector(".container");

let boxNum = 16;

let flag = 0;



function createGrid(boxNum = 16){
    container.innerHTML = '';
    console.log(boxNum)
    const containerSize = 528;
    const boxSize = containerSize / boxNum;
    let h = containerSize / boxNum;
    console.log(h);

    // const box = document.createElement("div");
    for(let i = 0; i < (boxNum * boxNum); i++){

        const box = document.createElement("div");    
        box.setAttribute(`style`, ` width: ${h - 2}px; background: white; height: ${h - 2}px; border: 1px black solid`);
        box.setAttribute("class", "square")
        
        
        box.addEventListener("mouseover", () => {
            box.setAttribute(`style`, ` width: ${h - 2}px; background: orange; height: ${h - 2}px; border: 1px black solid`)     
        })
        container.appendChild(box);
    }
    
    
}

const reset = document.querySelector(".rstButton");
reset.addEventListener("click", () => {
    
    for(let i = 0; i > -1; i++){
        const boxNum = prompt("Enter the number of squares for the grid: ");
        
        if(Number(boxNum)){
            console.log("reached if")
            createGrid(boxNum);
            break;
        }else{
            alert("Enter a valid Number!");
            continue;
    }

    }
    
});

const divOne = createGrid();

console.log(divOne);