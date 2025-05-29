buttons = document.getElementById("buttons");

const btnArr = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const BtnArr = btnArr.map(e => e.toUpperCase());

const makeButtons = () => {
    BtnArr.forEach((e, i) => {
        let btn = document.createElement('button');
        btn.className = 'button';
        btn.id = `${btnArr[i]}`;
        btn.innerHTML = e;

        let x = document.createElement("AUDIO");
        x.src = "sound/" + btnArr[i] + ".wav";
        x.id = `audio-${btnArr[i]}`;
        btn.appendChild(x);

        // Add click listener
        btn.addEventListener('click', () => {
            playSound(btnArr[i]);
        });

        buttons.appendChild(btn);
    });
};

makeButtons();

document.addEventListener('keydown', e => {
    if (btnArr.includes(e.key)) {
        playSound(e.key);
    }
});

function playSound(key) {
    const audio = document.getElementById(`audio-${key}`);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }

    const btn = document.getElementById(key);
    if (btn) {
        btn.classList.add("playing");
        setTimeout(() => {
            btn.classList.remove("playing");
        }, 500);
    }
}
