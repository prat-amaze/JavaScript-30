const r = document.querySelector(':root');
const rs = getComputedStyle(r);
// console.log(rs.getPropertyValue('--bg'));

const col = document.getElementById('colorPicker');

// Check if the element exists before attaching the event
if (col) {
  col.addEventListener('input', (e) => {
    r.style.setProperty('--bg', e.target.value);
  });
} else {
  console.error('Color picker not found!');
}

const blurr = document.getElementById('sliderBlur');
const space = document.getElementById('sliderSpace');

space.addEventListener('input', e=>{
    const val = parseInt(e.target.value);
    r.style.setProperty('--spacing', `${-50 + val}px`);
})

blurr.addEventListener('input', e=>{
    const val = parseInt(e.target.value);
    r.style.setProperty('--blur', `${val/20}px`);
    console.log(val, rs.getPropertyValue('--blur'));
    
})

