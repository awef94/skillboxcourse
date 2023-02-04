document.addEventListener(`DOMContentLoaded`,
    function () {

        let count = document.getElementById(`count`);
        let button = document.getElementById(`button`);
        let input = document.getElementById(`input`);


        function timer() {

            if(typeof input.value === "number"){
                count.textContent = input.value;
                count.style.backgroundColor = `green`;
            } else {
                count.textContent = `input num!`;
                count.style.backgroundColor = `red`;
            }

        }

        button.addEventListener(`click`, timer)

    });