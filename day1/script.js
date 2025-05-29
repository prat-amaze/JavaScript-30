buttons= document.getElementById("buttons")

const btnArr= ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
const BtnArr= btnArr.map(e => e.toUpperCase())

const makeButtons = ()=>{
    BtnArr.forEach((e,i) => {
        let btn= document.createElement('button')
        btn.className = 'button'
        btn.id= `${btnArr[i]}`
        btn.innerHTML= e

        let x = document.createElement("AUDIO");
        x.src= "sound/" + btnArr[i] + ".wav";
        x.id = `audio-${btnArr[i]}`
        btn.appendChild(x)

        buttons.appendChild(btn)
    })
}

makeButtons();

document.addEventListener('keydown', e=>{
    if(btnArr.includes(e.key)){
        console.log(`You pressed ${e.key}`);
        const audio= document.getElementById(`audio-${e.key}`)
        if (audio) {
            audio.currentTime = 0; // Rewind to start
            audio.play();
        }

        let par= audio.parentElement
        par.classList.add("playing")
        console.log(par);
        
        setTimeout(()=>{
            par.classList.remove("playing")
        }, 500)
    }
})