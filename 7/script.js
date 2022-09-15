/*

document.addEventListener(`DOMContentLoaded`, function () {
    let buttonMain = document.getElementById(`butt`);
    let blockColor = document.getElementById(`block`);
    let headBig = document.getElementById(`head`);
    let par = document.getElementById(`pi`);
    let txt = document.getElementById(`txtarea`);

    function increment() {
        let count = parseInt(pi.textContent)
        pi.textContent = count+1;
    }

    incrementButton.addEventListener(`click`, increment);
})

 */

document.addEventListener(`DOMContentLoaded`, function () {
    let buttonMain = document.getElementById(`butt`);
    let blockColor = document.getElementById(`block`);
    let headBig = document.getElementById(`head`);
    let par = document.getElementById(`pi`);
    let txt = document.getElementById(`txtarea`);

    function changeColor() {
        blockColor.style.backgroundColor = txt.value;
    }

    txt.addEventListener(`input`, changeColor);

    changeColor();

    buttonMain.addEventListener(`click`, function () {
        blockColor.style.removeProperty(`background-color`);
        txt.value = ``;
    })
});