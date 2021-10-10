let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () =>{
  navbar.classList.toggle("active");
}

let search = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () =>{
  search.classList.toggle("active");
}

let card = document.querySelector(".card-items-container");
document.querySelector("#card-btn").onclick = () =>{
  card.classList.toggle("active");
}