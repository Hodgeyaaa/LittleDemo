
let flag = 0;
var inputText = document.querySelector('.entry')
var pwd = document.querySelector('.pwd')
var eye = document.querySelectorAll('.eye');
var body = document.querySelector('body');
body.addEventListener('mousemove', (e) => {
    
    
    eye.forEach((eye) => {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientWidth / 2);
        let radian = Math.atan2(e.pageX - x, e.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.addEventListener('mouseover', () => {
            flag = 1;
        })
        eye.addEventListener('mouseout', () => {
            flag = 0;
        })
        if(flag == 0) {
            eye.style.transform = "rotate(" + rot + "deg)";
        }else if(flag == 1) {
            eye.style.transform = "rotate(0deg)";
        }
        else if (flag == 2) {
            eye.style.transform = "rotate(-60deg)"
        }
        
    })
   
})
inputText.addEventListener('blur', () => {
    flag = 0
})
inputText.addEventListener('input', () => {
    flag = 2;
    console.log();
    let len = inputText.value.length + 60
    eye.forEach((eye) => {
        eye.style.transform = "rotate("+ len * -1 + "deg)";
    })
})
pwd.addEventListener('focus', () => {
    flag = 1;
    
    eye.forEach((eye) => {
        eye.classList.remove('eye');
        eye.classList.add('off');
        eye.style.transform = "rotate(0deg)";
    })
    
})
pwd.addEventListener('blur', () => {
    flag = 0;
     
    eye.forEach((eye) => {
        eye.classList.remove('off');
        eye.classList.add('eye');
    })
    
})