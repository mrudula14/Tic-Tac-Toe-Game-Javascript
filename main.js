
let boardSize = 8,
    counter = 0,
    crossTxt = "X",
    oTxt = "O";
let board1, content, line1;
let dataStore = [];

function initBoard(){
    board1 = document.getElementById('main-board');
    for(let i=0; i<=boardSize; i++){
        content = document.createElement('div');
        content.id=i;
        content.className ="tile";
        board1.appendChild(content);
        content.addEventListener("click", titleClick, false);
      
    }
}
function titleClick(event){
    for(let i=0; i<=boardSize; i++){
       counter++;

       if(counter%2===0){
        event.path[0].innerHTML =  oTxt;
        dataStore[event.path[0].id] = oTxt;
       }else{
        event.path[0].innerHTML =  crossTxt;
        dataStore[event.path[0].id] = crossTxt;
       }
    }
  
 
    event.path[0].removeEventListener("click", titleClick);
    if(columnCheck() || rowsCheck() || diagWin()){
        if(line1 === "XXX"){
            setTimeout(function(){
                alert("X Wins Game");
            }, 100);
            
           
        } else{
            setTimeout(function(){
                alert("O Wins Game");
            }, 100);
        }
        board1.style.pointerEvents = "none";
    }
    
}

function hasThree(line) {
    line = line.join('');
    line1 = line;
    return (line === "XXX" || line === "OOO");
}

function columnCheck(){
    let colWin = false;
    let colArr;
    for (let i = 0; i < 3; i++) {
    colArr =  dataStore.filter((item, index) =>{
         return index=== 0 + i || index === 3 + i || index === 6 + i
        })
        colWin = hasThree(colArr);
		if (colWin) { break; }
    }
   return colWin;
}

function rowsCheck(){
    let rowWin = false;
    let rowArr;
	for (let i = 0; i < 3; i++) {
        rowArr = dataStore.filter((square, index) => 
            (index >= (0 + (i * 3)) && index <= (2 + (i * 3))));
        rowWin = hasThree(rowArr);
        if (rowWin) { break; }
    }
    return rowWin;
}
function diagWin() {
    let diag = '';
    let diagWin = false;

    for (let i = 0; i < 3; i++) {
        diag = dataStore.filter((square, index) =>
            (index === 0 + i || index === 4 || index === 8 - i));
        diagWin = hasThree(diag)
        if (diagWin) { break };
    }
    return diagWin;
}

initBoard();