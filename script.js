//local storage
let key = prompt("Enter Key");
let value = prompt("Enter value");


// let key = JSON.stringify({
//     name:'Rao Rabi',
//     age:19,
//     Degree: 'BSSE',
// })

// let value = 23;

localStorage.setItem(key,value);

console.log(`The Value at ${key} is ${localStorage.getItem(key)}`);

if(key == 'red' || key == 'blue'){
    localStorage.removeItem(key)
}

if(key == 0){
    localStorage.clear();
}

console.log(`Length is: ${localStorage.length}`);

console.log(`key is ${localStorage.key(2)}`);


//session storage

// differs from local storage in a way that if tab is closed and opened the data get removed and the rest methods are same but on referesh the data remains like local storage

sessionStorage.setItem(key,value);
if(key == 1){
    sessionStorage.clear();
}

//storage Event 

// we can listen it when value in sotrage is changed it gives alert in separate tab

window.onstorage = (e) => {
    alert('changed');
    console.log(e);
}
