let inp = document.querySelector(".calc-text");
let calc = document.querySelector(".calc")
let btn = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn-clear");
let equal = document.querySelector(".btn-equal");
let theme = document.querySelector(".btn-theme");
let sev = document.querySelectorAll(".btn-several");
let img = document.querySelector(".img")
let bg = document.querySelector(".bg")
  

btn.forEach(function(button){
  button.addEventListener('click', function(e) {
    let value = e.target.dataset.num
    inp.value += value
  })
})

equal.addEventListener('click', function(e) {
  if(inp.value === ''){
    inp.value = "Enter Something"
  } else {
    let answer = eval(inp.value);
    inp.value = answer;
  }
})

clear.addEventListener('click', function(e) {
  inp.value = ""
})


theme.addEventListener("click", ()=> {
  calc.classList.toggle('calc-dark')
  btn.forEach(function(button){
    button.classList.toggle('btn-dark')
  }) 
  sev.forEach(function(several){
    several.classList.toggle('blue-btn')
  })
  equal.classList.toggle('grey')
  inp.classList.toggle('calc-text-dark')
  theme.classList.toggle('btn-theme-dark')
  img.classList.toggle("img-dark")
  bg.classList.toggle("bg-dark")
})