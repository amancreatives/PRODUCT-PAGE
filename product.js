let productImg = document.querySelector("#productImg");
let btn = document.querySelectorAll(".btn");

btn[0].onclick = function(){
    productImg.src = "image1.png";

    for(i of btn){
        i.classList.remove("active");
    }
    this.classList.add("active");
}

btn[1].onclick = function(){
    productImg.src = "image2.png";

    for(i of btn){
        i.classList.remove("active");
    }
    this.classList.add("active");
}

btn[2].onclick = function(){
    productImg.src = "image3.png";

    for(i of btn){
        i.classList.remove("active");
    }
    this.classList.add("active");
}