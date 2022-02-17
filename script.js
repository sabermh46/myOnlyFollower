
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
    h1.style.top = scY*0.5+'px';
})


const tiltEffectSettings = {
    max: 15,
    perspective: 1000,
    scale: 1.2,
    speed: 500,
    easing: "cubic-bezier(0.03, 0.98, 0.52, 0.99)"
};

const cards = document.querySelectorAll('.tiltCard');

cards.forEach(card => {
    card.addEventListener('mousemove', cardMouseMove);
    card.addEventListener('mouseleave', cardMouseLeave);
    card.addEventListener('mouseenter', setTransition);
});

function cardMouseMove(event) {
    const card = event.currentTarget;
    const cardW = card.offsetWidth;
    const cardH = card.offsetHeight;
    const centerX = card.offsetLeft + cardW/2;
    const centerY = card.offsetTop + cardH/2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    const rotateX = (tiltEffectSettings.max * mouseY / (cardW/2)).toFixed(2);
    const rotateY = ((-1) * tiltEffectSettings.max * mouseX / (cardH/2)).toFixed(2);

    card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
}

function cardMouseLeave(event) {
    event.currentTarget.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    setTransition(event);
}

function cardMouseEnter(event){
    setTransition(event);
}

function setTransition(event) {
    const card = event.currentTarget;
    clearTimeout(card.transTimeOut);
    card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
    card.transTimeOut = setTimeout(() => {
        card.style.transition = '';
    }, tiltEffectSettings.speed);
}