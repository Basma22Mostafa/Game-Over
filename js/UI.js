
import { Details } from "./details.js";
let details=new Details();
export default class UI {
       

    displayGames(games){
        let cartoona="";
        for(let i=0;i<games.length;i++){
            cartoona+=`
            
    <div class="col-lg-3 col-md-6 ">
    <div class="card text-light" style="width: 16rem; height:20rem">
  <img src=${games[i].thumbnail} gid=${games[i].id} style="aspect-ratio:2/1; object-fit:cover" class="card-img-top p-2 opacity-50" alt="game">
  <div class="card-body">
    <div class="d-flex justify-content-between align-items-center my-2">
    <h5 class="card-title fs-6">${games[i].title}</h5>
    <button class="btn free-btn badge p-2 bg-primary">Free</button>
    </div>
    <p class="card-text small text-center opacity-75" style="overflow:hidden ; max-height:60px">${games[i].short_description}</p>
    <div class="card-footer d-flex justify-content-between px-0">
    <a href="#" class="card-link badge text-decoration-none bg-dark">${games[i].genre}</a>
    <a href="#" class="card-link badge text-decoration-none bg-dark"> ${games[i].platform}</a>
  </div>
    </div>
    </div>
    </div>

            `
        }
        document.querySelector('#displaygames').innerHTML=cartoona;

        let cardImgs=document.querySelectorAll(".card-img-top");
        for(let i=0;i<cardImgs.length;i++){
            cardImgs[i].addEventListener("click",function(e){
                let gid=e.target.getAttribute("gid")
                details.getGameById(gid);

            })
        }
    }
    

    displayDetails(game){
        let cartoona2="";
        for(let i=0;i<game.length;i++){
            cartoona2+=`
            <div class="col-md-4">
        <div class="left-details">
          <h2>Details Game</h2>
          
          <img src=${game[i].thumbnail} class="mt-2" alt="">
        </div>
      </div>
      <div class="col-md-8 py-5">
        <div class="right-details d-flex justify-content-between">
          <div>
          <h3 class="fw-bolder">Title: ${game[i].title}</h3>
          <h4 class="fs-6 my-3">Category: <span  class="bg-info text-dark   p-2 rounded-2">${game[i].genre}</span></h4>
          <h4 class="fs-6 my-3">Platform: <span class="bg-info text-dark  p-2 rounded-2">${game[i].platform}</span></h4>
          <h4 class="fs-6 my-3">Status: <span class="bg-info text-dark p-2 rounded-2">${game[i].status}</span></h4>
          <p id="description">${game[i].description}</p>
          <button class="btn btn-outline-warning text-light fw-bold ">Show Game</button>
          </div>
          <i class="fa-solid fa-xmark" id="closeIcon" style="cursor: pointer;"></i>
        </div>
      </div>
            `
        }
        document.querySelector(".details").classList.remove("d-none");
        document.querySelector(".games").classList.add("d-none");
        document.getElementById("dispGameDetails").innerHTML=cartoona2;
        
    }
}




