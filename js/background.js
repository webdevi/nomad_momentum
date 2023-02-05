const bgImages = [
    "imgs/1.jpg",
    "imgs/2.jpg", 
    "imgs/4.jpg",
    "imgs/5.jpg",
    "imgs/6.jpg",
    "imgs/7.jpg",
    "imgs/8.jpg",
    "imgs/9.jpg",
    "imgs/10.jpg",
    "imgs/11.jpg",
    "imgs/12.jpg",
    "imgs/13.jpg",
    "imgs/14.jpg",
]; 

console.log();

function randomBackground(){
    const randomNum = Math.ceil(Math.random() * bgImages.length-1);
    document.body.style.backgroundImage = `url(${bgImages[randomNum]})`;   
   
};

randomBackground();
