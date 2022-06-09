let numOfElement = document.querySelectorAll('.software-checked').length;
let progressBar = document.getElementById('current-progress');
let eachCheckBox = 100 / numOfElement;

function onChange() {
    let minecraft = document.getElementById('minecraft-was-install').checked;
    let optifine = document.getElementById('optifine-was-install').checked;
    let fabric = document.getElementById('fabric-was-install').checked;

    let currentProgress = ((minecraft + optifine + fabric) * eachCheckBox);
    progressBar.style.width = currentProgress + "%";
    progressBar.innerHTML = (Math.floor(currentProgress === 100)) ? "ยินดีด้วย คุณพร้อมที่จะเล่นแล้ว" : Math.floor(currentProgress) + " %";
}