// Declaring main variables
let inp = document.getElementsByClassName('inp')[0];
let pencil = document.getElementsByClassName('fas')[0];
let adds = document.getElementsByClassName('adds')[0];
let h2 = document.getElementsByTagName('h2')

// Declaring main Function;
function main() {
    let array = JSON.parse(localStorage.getItem("name")) ?? [];
    let obj = {
        name: inp.value
    };
    array.push(obj);
    localStorage.setItem("name", JSON.stringify(array));

    let h2 = document.createElement("h2");
    array.forEach(e => {
        h2.innerHTML = e.name;
        adds.appendChild(h2);
    });

    // Adding lineThrough Function to the h2 elements inside the main function
    h2.addEventListener('click', () => {
        if (h2.style.textDecoration != 'line-through') {
            h2.style.textDecoration = 'line-through'
        } else {
            h2.style.textDecoration = 'none'
        }
    })
}

// Declaring a function for the local storage to show everything on the page;
function local() {
    let array = JSON.parse(localStorage.getItem("name")) ?? [];
    array.forEach(e => {
        adds.innerHTML += `<h2>${e.name}</h2>`;
    });
};

// Calling the local function;
local();

// Calling the main function inside this event;
inp.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        main();
        inp.value = "";
    };
});

// Clearing the local storage with this event;
pencil.addEventListener('click', () => {
    localStorage.clear();
    adds.innerHTML = '';
});

// Adding lineThrough Function to the h2 elements in the global scope
lineThrough()
function lineThrough() {
    Array.from(h2).forEach((e) => {
        e.addEventListener('click', () => {
            if (e.style.textDecoration != 'line-through') {
                e.style.textDecoration = 'line-through'
            } else {
                e.style.textDecoration = 'none'
            }
        })
    })
}
