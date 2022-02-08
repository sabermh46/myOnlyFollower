
document.addEventListener("mousemove", function(e){
    var body =  document.querySelector('*');
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
    h1.style.top = (-1)*scY*0.7+'px';
})


const card = document.querySelector('.tiltCard');

card.addEventListener('mousemove', cardMouseMove);

function cardMouseMove(event) {
    const cardW = card.offsetWidth;
    const cardH = card.offsetHeight;
    const centerX = card.offsetLeft + cardW/2;
    const centerY = card.offsetTop + cardH/2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    const rotateX = 25 * mouseY / (cardW/2);
    const rotateY = 25 * mouseX / (cardH/2);

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}