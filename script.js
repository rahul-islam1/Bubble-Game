let new_hit;
const bottom_pannel = document.querySelector(".pBottom");
let score = 0;

function makeBubble() {
    bottom_pannel.innerHTML = "";

    for (let i = 0; i <= 146; i++) {
        let ran_num = Math.floor(Math.random() * 10);
        bottom_pannel.innerHTML += `<div class="bubble">${ran_num}</div>`;
    }
}

function getNewHit() {
    new_hit = Math.floor(Math.random() * 10);
    document.getElementById("hit_val").innerText = new_hit;
}

function timer() {
    let time = 60;
    const timer_val = document.getElementById("timer_val");
    timer_val.innerText = time;
    let interval_timer = setInterval(() => {
        if (time > 0) {
            time--;
            timer_val.innerText = time;
        } else {
            clearInterval(interval_timer);
            bottom_pannel.classList.add("game_over");
            bottom_pannel.innerHTML = `
            <h2>GAME OVER</h2>
            <span>your score is: ${score}</span>
            <button class="btn" onclick="restart()">New Game</button>
            `;
        }
    }, 1000);
}

function increaseScore() {
    score++;
    document.getElementById("score_val").innerText = score;
}

const clickedfun = (el) => {
    const clicked_num = Number(el.target.innerText);
    if (clicked_num == new_hit) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
};

const restart = () => {
    score = 0
    document.getElementById("score_val").innerText = score;
    bottom_pannel.classList.remove("game_over");
    makeBubble();
    getNewHit();
    timer();
};

bottom_pannel.addEventListener("click", clickedfun);
makeBubble();
getNewHit();
timer();
