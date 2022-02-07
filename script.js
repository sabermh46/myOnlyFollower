
document.addEventListener("mousemove", function(e){
    var body = document.querySelector('body');
    var heart = document.createElement("span");
    heart.classList.add('love');
    var x = e.offsetX;
    var y = e.offsetY;
    heart.style.left = x+'px';
    heart.style.top = y + 'px';
    var size = Math.random() * 100;
    heart.style.width = 20+ size + 'px';
    heart.style.height = 20+ size + 'px';
    body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);

})

window.addEventListener('scroll', ()=> {
    var scY = window.scrollY;
    var h1 = document.querySelector('h1');
    console.log(scY);
    h1.style.top = (-1)*scY*0.7+'px';
})