for (let i = 1; i <= 2; i++) {
    document.getElementsByClassName('playersChoise')[0].innerHTML += `
        <div>
            <h1 class="text">
                <i>Игрок ${i} выбирает!</i>
            </h1>
            <div class="field">
                <p>
                    <button class="lookButton" onclick="fixedChoice(${i},1)">
                        <img src="img/rock.png" alt="Rock">
                        <span>Rock</span>
                    </button>
                </p>
                <p>
                    <button class="lookButton" onclick="fixedChoice(${i},2)">
                        <img src="img/scissors.png" alt="Scissors">
                        <span>Scissors</span>
                    </button>
                </p>
                <p>
                    <button class="lookButton" onclick="fixedChoice(${i},3)">
                        <img src="img/paper.png" alt="Paper">
                        <span>Paper</span>
                    </button>
                </p>
            </div>
        </div>
    `
}