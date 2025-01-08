const heart= document.getElementById("heart");

const playBtn= document.getElementById("play");
const pauseBtn= document.getElementById("pause");
const changeBtn=document.getElementById("change");

const changeBackground = () => {
    const colors = [ "#ffc2ff", "#E4B7E5", "#672692","#63458A","#1E0B1E","#EEE4F1","#FFCAD4","#F4ACB7","#D8E2DC"
                    ,"#9D8189","#E5F9E0","#B2FFA8","#86E7B8","#6B6D76","#8A3033","#823329","#FFEF9F","#A61C3C","#F6BD60","#B8D4E3"
                    ,"#8A8E91","#855A5C","#66101F","#B8D4E3","#EEFFDB"
    ];
    const num = Math.floor(Math.random() * colors.length);
    document.body.style.background = `${colors[num]}`;
}

playBtn.addEventListener('click',() => heart.style.animationPlayState= "running");
pauseBtn.addEventListener('click',() => heart.style.animationPlayState= "paused");

changeBtn.addEventListener('click', changeBackground);

