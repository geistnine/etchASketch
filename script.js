


function populateBoard(size) {
    let board = document.querySelector("#gridcontainer");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i=0; i < size ** 2; i++){
        let box = document.createElement('div');
        box.className = "square";
        box.style.backgroundColor = "blue";
        box.addEventListener("mouseenter", function(){
            box.style.backgroundColor = "red";
        });
        board.insertAdjacentElement("beforeend", box);
    }
}

// eventlister for button click that calls populateboard using input size
let button = document.querySelector("#gridbutton");
button.addEventListener('click', function(){
    let input = document.getElementById("inputSize")
    populateBoard(input.value);
});


