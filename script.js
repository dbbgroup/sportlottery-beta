let playBtn = document.getElementById('playButton');
console.log("loaded");

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

playBtn.addEventListener('click', function() {
    let playInput = document.getElementById('playInput');
    let adminEblan = playInput.value.split(" ");

    let sortedArr = adminEblan.sort();
    let randVals = Array(randomInteger(1, 36), randomInteger(1, 36), randomInteger(1, 36), randomInteger(1, 36), randomInteger(1, 36));
    let sortedRand = randVals.sort();
    let score = 0;
    if (sortedArr.length > 5)alert('Много чисел!!!');
    for (let i = 0; i < 5; i++) {
        if (Number.isInteger(sortedArr[i]))alert('Во вводе должны быть только числа!');
        if (sortedArr[i] > 36)alert('ОТ 1 ДО 36 НАПИСАНО ЖЕ');
        if (sortedArr[i] == sortedRand[i]) score++;
    }

    if(sessionStorage.getItem('total') >= 500){sessionStorage.setItem("total", 0);}
    sessionStorage.setItem("total", parseInt(sessionStorage.getItem("total")) + parseInt(score));

    let popup = document.querySelector('#popup');
    popup.style.display = "block";
    popup.querySelector('#score').innerHTML = score;
    popup.querySelector('#true-comb').innerHTML = randVals;
});