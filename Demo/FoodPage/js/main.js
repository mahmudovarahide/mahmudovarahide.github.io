  
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var banner = document.querySelector('.banner');
    menuToggle.classList.toggle('active');
    banner.classList.toggle('active');

}




const navToggler = document.querySelector(".toggle");
navToggler.addEventListener("click",toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".header__navbar-link").classList.toggle("open");
};

document.addEventListener("click",function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    };
});

window.addEventListener("scroll",function(){
    if(this.pageYOffset > 60){
        document.querySelector(".header__logo").classList.add("sticky");
        document.querySelector(".toggle").classList.add("sticky");
    }else{
        document.querySelector(".header__logo").classList.remove("sticky");
        document.querySelector(".toggle").classList.remove("sticky");
    }
});