document.querySelector(".menu__grid").addEventListener("click", function(){
    if(true){
        document.querySelector(".menu__section").style.display = "block";
        document.querySelector(".header").style.display = "none";
    }
    
})

document.querySelector(".back").addEventListener("click", function(){
    if(true){
        document.querySelector(".header").style.display = "";
        document.querySelector(".menu__section").style.display = "none";
    }
})
document.querySelector(".heart").addEventListener("click", function(){
 

    this.classList.toggle("clicked");
  
});


