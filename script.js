console.log("hello checking ");

let photos=document.querySelectorAll(".img-box img");
let fullphoto=document.querySelector(".full-img");
let fullImg=document.querySelector(".frame img");
let close=document.querySelector(".close");

let left=document.querySelector(".left");
let right=document.querySelector(".right");
let slider=document.querySelector(".slider");
let images=document.querySelectorAll(".img");

let pBig=document.querySelector("p");
let pSmall=document.querySelector("#small-p");


for(photo of photos){
    photo.addEventListener("click",function(){
        console.log("Photo was clicked");
        let img=this.getAttribute("src");
        console.log(this);
        
        // for(imgine of images){
        //     if(imgine.getAttribute("id")==img.getAttribute("id"));
        //     console.log(imgine);
        // }
       
        slideNumber=this.getAttribute("id");
        slider.style.transform=`translateX(-${(slideNumber-1)*700}px)`;
        // console.log(this.getAttribute("id"));
        console.log("the slide number is",slideNumber);
        // fullImg.setAttribute("src",img);
        fullphoto.style.display="flex";
        
        pBig.innerText=`Image #${slideNumber}`;
        pSmall.innerText=`${slideNumber} of ${images.length}`;
    });
}

close.addEventListener("click",function(){
    fullphoto.style.display="none";
    // img.setAttribute("src","");
    // slideNumber=1;
});


// console.log(images);


let slideNumber;

right.addEventListener("click",function(){
    if(slideNumber<images.length){
        // console.log("Working");
        console.log("intial",slideNumber);
        slider.style.transform=`translateX(-${(slideNumber)*100}%)`;
        slideNumber++;
        console.log("final",slideNumber);
    }
    else{
        console.log("intial",slideNumber);
        slider.style.transform=`translateX(0%)`;
        slideNumber=1;
        console.log("final",slideNumber);
    }
    pBig.innerText=`Image #${slideNumber}`;
    pSmall.innerText=`${slideNumber} of ${images.length}`;
});


left.addEventListener("click",function(){
    if(slideNumber==1){
        slideNumber=images.length;
        slider.style.transform=`translateX(-${(slideNumber-1)*100}%)`;   
        console.log("intial left",slideNumber);
        console.log("final left",slideNumber);
    }
    else{
        console.log("intial left",slideNumber);
        slider.style.transform=`translateX(-${(slideNumber-2)*100}%)`;
        slideNumber--;
        console.log("final left",slideNumber);
    }
    pBig.innerText=`Image #${slideNumber}`;
    pSmall.innerText=`${slideNumber} of ${images.length}`;

});


