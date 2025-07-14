import { Games } from "./games.js";


let games= new Games();

//add event listener for all nav links 
var links=document.querySelectorAll("li");
games.getGames(links[0].innerText);
for (let i=0;i<links.length;i++){
    links[i].addEventListener("click",function(e){
         var option=e.target.innerHTML;
         games.getGames(option);

        document.querySelector(".details").classList.add("d-none");
        document.querySelector(".games").classList.remove("d-none");

         
    })
    
}

//for change active class
let navLinks=document.getElementsByClassName("nav-link");
for(let i=0;i<navLinks.length;i++){
    navLinks[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}








