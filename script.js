const button = document.querySelector('button');
const card = document.querySelector('section');

button.addEventListener('click', () =>{
    let color = "#";
    color += Math.random().toString(16).slice(2,8);
    card.style.backgroundColor = color;
})
  

