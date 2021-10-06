
window.addEventListener("scroll",function(){
	if(this.pageYOffset>60){
		document.querySelector(".navbar").classList.add("sticky");
	}else{
		document.querySelector(".navbar").classList.remove("sticky");
	}
});