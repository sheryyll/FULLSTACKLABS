const button = document.getElementById('clickMe');
button.addEventListener('click', () =>{
    console.log("Button clicked!");
});

const myImage = document.getElementById('myImage');
myImage.addEventListener('mouseover', ()=>{
    myImage.style.borderColor = 'red';
})
myImage.addEventListener('mouseout', ()=>{
    myImage.style.borderColor = 'black';
});

document.addEventListener("keydown", (event)=>{
    console.log(`Key pressed: ${event.key}`);
})
