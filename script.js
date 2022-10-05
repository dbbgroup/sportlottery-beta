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
    for (let i = 0; i < 5; i++) {
        if (sortedArr[i] == sortedRand[i]) score++;
    }

    alert("Ваш счёт: "+score+" Загаданные числа: "+randVals);
});