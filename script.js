function populateBoard(size) {
    let board = document.querySelector("#gridcontainer");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i=0; i < 256; i++){
        let box = document.createElement('div');
        box.className = "square";
        box.style.backgroundColor = "blue";
        board.insertAdjacentElement("beforeend", box);
    }
}

populateBoard(16);
