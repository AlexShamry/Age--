let Age = 0;
let ageLabel = document.querySelector("label");
function SetAge() {
    Age = Number(window.prompt("what is you age?"));
    ageLabel.textContent = `Your age is ${Age}`;
    localStorage.setItem("Age", Age)
}
if(!localStorage.getItem("Age")){
    SetAge();
} else {
    Age = Number(localStorage.getItem("Age"));
    ageLabel.textContent = `Your age is ${Age}`;
}
document.getElementById("up").onclick = () => {
    ++Age;
    ageLabel.textContent = `Your age is ${Age}`;
    localStorage.setItem("Age", Age);
}
document.getElementById("down").onclick = () => {
    if (Number(Age) === 0){
        ageLabel.textContent = `You\'re dead!`;
    }
    else {
        --Age;
        ageLabel.textContent = `Your age is ${Age}`;
        localStorage.setItem("Age", Age);
    }
}
document.getElementById("reset").onclick = () => {
    Age = 0;
    ageLabel.textContent = `Your age is ${Age}`;
    localStorage.setItem("Age", Age);
}