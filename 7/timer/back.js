document.addEventListener(`DOMContentLoaded`,
    function () {

        let count = document.getElementById(`count`);
        let button = document.getElementById(`button`);
        let input = document.getElementById(`input`);
        let startStop;
        let audio = new Audio(`cat.mp3`);

        function check() {
            let checker = parseInt(input.value);
            if (typeof checker === `number` && checker >= 0) {
                count.style.backgroundColor = `green`;
                count.innerHTML = checker;
                startStop = setInterval(timer, 1000);
            } else {
                count.textContent = `input number! or increase num!`;
                count.style.backgroundColor = `red`;
            }
        }
        function timer() {
            let counter = parseInt(count.textContent);
            if(counter<=1){
                clearInterval(startStop);
                audio.play();
                count.textContent = `done!`;
            }else{
                console.log(counter--);
                count.textContent = counter;
            }
        }
        function drop() {
            clearInterval(startStop);
        }
        
        function animButton1() {
            button.style.border = `10px outset whitesmoke`;
        }
        function animButton2() {
            button.style.border = `10px inset whitesmoke`;
        }

        button.addEventListener(`mouseup`, animButton1)
        button.addEventListener(`mousedown`, animButton2);
        button.addEventListener(`click`, drop);
        button.addEventListener(`click`, check);

    });