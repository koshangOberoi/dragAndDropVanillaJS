const item = document.getElementsByClassName('draggableItem')[0];
console.log(item);
item.addEventListener('drag', ()=>{
});
const dropBoxes = document.getElementsByClassName('dropBox');
for(let i = 0; i < dropBoxes.length; ++i){
    dropBoxes[i].addEventListener('dragover', (event)=>{
        event.preventDefault();
    });
    dropBoxes[i].addEventListener('drop', (event)=>{
        event.preventDefault();
        if(event.target.className === 'dropBox'){
            item.parentNode.removeChild(item);
            event.target.appendChild(item);
        }
    })
}