let lastClickTime = 0;
var teamPoints = {};
// eslint-disable-next-line no-unused-vars
function handleButtonClick(button) {
  const currentTime = new Date().getTime();
  const timeDiff = currentTime - lastClickTime;

  if (timeDiff < 300) {
    button.classList.add('used');
  }

  lastClickTime = currentTime;
}
// eslint-disable-next-line no-unused-vars
function addTeam() {
  var teamName = prompt('Podaj nazwę drużyny: (maksymalnie 20 znaków)');
  var teamColor = prompt('Podaj kolor drużyny: (podanie kolorów jest obsługiwane tylko przez język angielski)');

  if (teamName && teamColor) {
    var teamList = document.getElementById('team-list');

    if (teamName.length < 4) {
      alert('Nazwa drużyny musi mieć co najmniej 4 znaki! Wypróbuj inną nazwę.');
      return;
    }

    if (teamName.length > 20) {
      teamName = teamName.substring(0, 20);
    }

    // Utwórz elementy dla drużyny
    var teamContainer = document.createElement('div');
    teamContainer.className = 'team-container';
    teamContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    teamContainer.style.border = '3px solid #000';
    teamContainer.style.borderRadius = '10px';
    teamContainer.style.width = '20%';
    teamContainer.style.height = '100px';

    var teamTitle = document.createElement('h3');
    teamTitle.textContent = teamName;
    teamTitle.style.color = teamColor;

    var teamPointsElement = document.createElement('span');
    teamPointsElement.className = 'team-points';
    teamPointsElement.textContent = '0 pkt';

    // Przyciski do dodawania i odejmowania punktów
    var incrementButton = document.createElement('button');
    incrementButton.textContent = '+';
    incrementButton.addEventListener('click', function () {
      incrementPoints(teamName);
    });

    var decrementButton = document.createElement('button');
    decrementButton.textContent = '-';
    decrementButton.addEventListener('click', function () {
      decrementPoints(teamName);
    });

    // Dodaj drużynę do listy
    teamContainer.appendChild(teamTitle);
    teamContainer.appendChild(incrementButton);
    teamContainer.appendChild(teamPointsElement);
    teamContainer.appendChild(decrementButton);
    teamList.appendChild(teamContainer);

    // Dodaj drużynę do obiektu teamPoints
    teamPoints[teamName] = 0;
  }
}

function incrementPoints(teamName) {
  if (teamPoints.hasOwnProperty(teamName)) {
    teamPoints[teamName]++;
    updatePoints();
  }
}

function decrementPoints(teamName) {
  if (teamPoints.hasOwnProperty(teamName) && teamPoints[teamName] >= -1000) {
    teamPoints[teamName]--;
    updatePoints();
  }
}

function updatePoints() {
  var teamContainers = document.getElementsByClassName('team-container');
  
  for (var i = 0; i < teamContainers.length; i++) {
    var teamContainer = teamContainers[i];
    var teamName = teamContainer.getElementsByTagName('h3')[0].textContent;
    var teamPointsElement = teamContainer.getElementsByClassName('team-points')[0];
    var points = teamPoints[teamName];
  
    teamPointsElement.textContent = points + ' pkt';
  }
}
// eslint-disable-next-line no-unused-vars
function addGameRules(event) {
  event.preventDefault(); // Zatrzymuje domyślne działanie linku
  var gameRules = document.querySelector('.game-rules');

  if (gameRules) {
    // Jeśli zasady są już widoczne, usuń je
    gameRules.remove();
  } else {
    // Jeśli zasady nie są widoczne, dodaj je
    gameRules = document.createElement('div');
    gameRules.className = 'game-rules';
    gameRules.textContent = 'To są zasady gry dodane przez użytkownika!';

    var navigation = document.querySelector('.navigation');
    navigation.parentNode.insertBefore(gameRules, navigation.nextSibling);
  }
}
// eslint-disable-next-line no-unused-vars
function generateRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 10) + 1;
  alert('Wylosowana liczba: ' + randomNumber);
}
// eslint-disable-next-line no-unused-vars
function showChallenges(event) {
  event.preventDefault(); // Zatrzymuje domyślne działanie linku

  var challengeSection = document.querySelector('.challenge-section');
  var challengeBoxes = challengeSection.querySelectorAll('.challenge-box');

  if (challengeSection.classList.contains('show')) {
    // Jeśli sekcja jest już widoczna, ukryj pudełka i usuń numerację
    challengeBoxes.forEach(function (box) {
      box.style.display = 'none';
      var challengeNumber = box.querySelector('.challenge-number');
      if (challengeNumber) {
        challengeNumber.textContent = '';
      }
    });
    challengeSection.classList.remove('show');
  } else {
    // Jeśli sekcja jest ukryta, pokaż pudełka i ustaw numerację
    challengeBoxes.forEach(function (box, index) {
      box.style.display = 'block';
      box.dataset.index = index + 1; // Ustaw numer pudełka jako atrybut 'data-index'
      var challengeNumber = box.querySelector('.challenge-number');
      if (challengeNumber) {
        challengeNumber.textContent = '#' + (index + 1);
      }
      box.addEventListener('click', function () {
        toggleChallenge(this);
      });
    });
    challengeSection.classList.add('show');
  }
}
// eslint-disable-next-line no-unused-vars
function toggleChallenge(box) {
  var challengeText = box.querySelector('.challenge-text');

  if (!box.classList.contains('completed')) {
    // Jeśli pudełko nie jest oznaczone jako zakończone
    var boxIndex = parseInt(box.dataset.index);

    switch (boxIndex) {
    case 1:
      challengeText.textContent = 'Zrób 15 pompek w 20 sekund';
      break;
    case 2:
      challengeText.textContent = 'Zjedz łyżkę cynamonu bez zakrzywienia sie';
      break;
    case 3:
      challengeText.textContent = 'Zadanie 3';
      break;
      // Dodaj pozostałe zadania
    default:
      challengeText.textContent = '';
    }

    challengeText.style.display = 'block'; // Pokaż napis z wyzwaniem
  }

  box.addEventListener('dblclick', function () {
    // Jeśli dwukrotne kliknięcie, zmień kolor na czerwony
    this.classList.toggle('completed');
  });
}