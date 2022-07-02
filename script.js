for (let i=0; i < 256; i++){
    let box = document.createElement('div');
    box.className = "square";
    let space = document.createElement('p');
    space.innerText = " ";
    box.appendChild(space);
    document.getElementById('gridcontainer').appendChild(box);
}