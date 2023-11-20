let inp = document.getElementsByClassName('inp')[0];
let pencil = document.getElementsByClassName('fas')[0];
let adds = document.getElementsByClassName('adds')[0];

let emp = "";

inp.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        let cre = document.createElement('h2');
        cre.innerHTML = inp.value
        console.log(cre)
        adds.insertAdjacentElement("beforeend", cre)
        inp.value = ""
        cre.addEventListener('click', () => {
            cre.style.textDecoration = 'line-through'
        })
        cre.addEventListener('dblclick', () => {
            cre.style.textDecoration = 'none'
        })
        pencil.addEventListener('click', () => {
            adds.innerHTML = ""
        })
    }
})
