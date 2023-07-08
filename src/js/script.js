// eslint-disable-next-line no-unused-vars
let lastClickTime = 1;
var teamPoints = {};
// -----------------------------------------------------------------------------------------------------------------{ handleButtonClickFilms }----------------------------
// eslint-disable-next-line no-unused-vars
function handleButtonClickFilms(button) {

  const currentTime = new Date().getTime();
  const timeDiff = currentTime - lastClickTime;

  

  if (timeDiff < 300) {
    button.classList.add('used');
  }

  lastClickTime = currentTime;

  //const buttonText = button.textContent.trim();
  const buttonClass = button.className;
  const actionDisplay = document.querySelector('.action-display1');

  const questionNumber = button.dataset.question;
  const imageNumber = button.dataset.image;
  const audioNumber = button.dataset.audio;


  // Usuń aktualne działanie
  while (actionDisplay.firstChild) {
    actionDisplay.removeChild(actionDisplay.firstChild);
  }

  // Sprawdź klasę przycisku
  if (buttonClass.includes('ask-btn')) {
    // Jeśli to przycisk z pytaniem
    const questionText = getFilmQuestionText(questionNumber);

    const question = document.createElement('h4');
    question.textContent = `Pytanie ${questionNumber}: ${questionText}`;

    actionDisplay.appendChild(question);
  } else if (buttonClass.includes('image-btn')) {
    // Jeśli to przycisk ze zdjęciem
    const imageSrc = getFilmImageSrc(imageNumber);

    const image = document.createElement('img');
    image.src = imageSrc;
    image.alt = `Zdjęcie ${imageNumber}`;

    actionDisplay.appendChild(image);
  } else if (buttonClass.includes('voice-btn')) {
    // Jeśli to przycisk z dźwiękiem

    const audioSrc = getFilmAudioSrc(audioNumber);

    const audio = document.createElement('audio');
    audio.src = audioSrc;
    audio.controls = true;

    actionDisplay.appendChild(audio);
  }

  // Pokaż działanie
  actionDisplay.style.display = 'block';

  setTimeout(function () {
    actionDisplay.style.display = 'none';
  }, 20000);

  button.addEventListener('click', function () {
    actionDisplay.style.display = 'none';
  });

}

function getFilmQuestionText(questionNumber) {
  // Tutaj możesz zwrócić odpowiedni tekst pytania na podstawie numeru
  // Na przykład, użyj switch lub obiektu z pytaniami i ich tekstami
  switch (questionNumber) {
  case '1':
    return 'Pytanie asdasdasdasdsa1';
  case '2':
    return 'Tekst pytania 2';
  case '3':
    return 'Tekst pytania 3';
  default:
    return 'Brak tekstu pytania';
  }
}

function getFilmImageSrc(imageNumber) {
  // Tutaj możesz zwrócić odpowiednią ścieżkę do zdjęcia na podstawie numeru
  // Na przykład, użyj switch lub obiektu ze ścieżkami do zdjęć
  switch (imageNumber) {
  case '1':
    return '/images/partytime.jpg';
  case '2':
    return 'sciezka/do/zdjecia/2.jpg';
  case '3':
    return 'sciezka/do/zdjecia/3.jpg';
  default:
    return '';
  }
}


function getFilmAudioSrc(audioNumber) {
  // Tutaj możesz zwrócić odpowiednią ścieżkę do pliku audio na podstawie numeru
  // Na przykład, użyj switch lub obiektu ze ścieżkami do plików audio
  switch (audioNumber) {
  case '1':
    return 'sciezka/do/dzwieku/1.mp3';
  case '2':
    return 'sciezka/do/dzwieku/2.mp3';
  case '3':
    return 'sciezka/do/dzwieku/3.mp3';
  default:
    return '';
  }
}
// -----------------------------------------------------------------------------------------------------------------{ handleButtonClickActors }----------------------------
// eslint-disable-next-line no-unused-vars
function handleButtonClickActors(button) {

  const currentTime = new Date().getTime();
  const timeDiff = currentTime - lastClickTime;

  if (timeDiff < 300) {
    button.classList.add('used');
  }

  lastClickTime = currentTime;

  const buttonText = button.textContent.trim();
  const buttonClass = button.className;
  const actionDisplay = document.querySelector('.action-display2');

  // Usuń aktualne działanie
  while (actionDisplay.firstChild) {
    actionDisplay.removeChild(actionDisplay.firstChild);
  }

  // Usuń aktualne działanie
  while (actionDisplay.firstChild) {
    actionDisplay.removeChild(actionDisplay.firstChild);
  }

  // Sprawdź klasę przycisku
  if (buttonClass.includes('ask-btn')) {
    // Jeśli to przycisk z pytaniem
    const questionNumber = buttonText.substring(buttonText.length - 1);
    const questionText = getActorQuestionText(questionNumber);

    const question = document.createElement('h4');
    question.textContent = `Pytanie ${questionNumber}: ${questionText}`;

    actionDisplay.appendChild(question);
  } else if (buttonClass.includes('image-btn')) {
    // Jeśli to przycisk ze zdjęciem
    const imageNumber = buttonText.substring(buttonText.length - 1);
    const imageSrc = getActorImageSrc(imageNumber);

    const image = document.createElement('img');
    image.src = imageSrc;
    image.alt = `Zdjęcie ${imageNumber}`;

    actionDisplay.appendChild(image);
  } else if (buttonClass.includes('voice-btn')) {
    // Jeśli to przycisk z dźwiękiem
    const audioNumber = buttonText.substring(buttonText.length - 1);
    const audioSrc = getActorAudioSrc(audioNumber);

    const audio = document.createElement('audio');
    audio.src = audioSrc;
    audio.controls = true;

    actionDisplay.appendChild(audio);
  }

  // Pokaż działanie
  actionDisplay.style.display = 'block';

  button.addEventListener('click', function () {
    actionDisplay.style.display = 'none';
  });

}

function getActorQuestionText(questionNumber) {
  // Tutaj możesz zwrócić odpowiedni tekst pytania na podstawie numeru
  // Na przykład, użyj switch lub obiektu z pytaniami i ich tekstami
  switch (questionNumber) {
  case '1':
    return 'Kto jest najlepszym polskim wykonwaca?';
  case '2':
    return 'Tekst pytania 2';
  case '3':
    return 'Tekst pytania 3';
  default:
    return 'Brak tekstu pytania';
  }
}

function getActorImageSrc(imageNumber) {
  // Tutaj możesz zwrócić odpowiednią ścieżkę do zdjęcia na podstawie numeru
  // Na przykład, użyj switch lub obiektu ze ścieżkami do zdjęć
  switch (imageNumber) {
  case '1':
    return 'sciezka/do/zdjecia/1.jpg';
  case '2':
    return 'sciezka/do/zdjecia/2.jpg';
  case '3':
    return 'sciezka/do/zdjecia/3.jpg';
  default:
    return '';
  }
}

function getActorAudioSrc(audioNumber) {
  // Tutaj możesz zwrócić odpowiednią ścieżkę do pliku audio na podstawie numeru
  // Na przykład, użyj switch lub obiektu ze ścieżkami do plików audio
  switch (audioNumber) {
  case '1':
    return 'sciezka/do/dzwieku/1.mp3';
  case '2':
    return 'sciezka/do/dzwieku/2.mp3';
  case '3':
    return 'sciezka/do/dzwieku/3.mp3';
  default:
    return '';
  }
}
// eslint-disable-next-line no-unused-vars
function addTeam() {
  var teamName = prompt('Podaj nazwę drużyny: (maksymalnie 25 znaków)');
  var teamColor = prompt('Podaj kolor drużyny: (podanie kolorów jest obsługiwane tylko przez język angielski)');

  if (teamName && teamColor) {
    var teamList = document.getElementById('team-list');

    if (teamName.length < 4) {
      alert('Nazwa drużyny musi mieć co najmniej 4 znaki! Wypróbuj inną nazwę.');
      return;
    }

    if (teamName.length > 25) {
      teamName = teamName.substring(0, 20);
    }

    var teamItem = document.createElement('li');
    teamItem.className = 'team-item';

    // Utwórz elementy dla drużyny
    var teamContainer = document.createElement('div');
    teamContainer.className = 'team-container';
    teamContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    teamContainer.style.border = '3px solid #000';
    teamContainer.style.borderRadius = '10px';
    teamContainer.style.width = '20%';
    teamContainer.style.height = '120px';

    var teamTitle = document.createElement('h3');
    teamTitle.textContent = teamName;
    teamTitle.style.color = teamColor;

    var teamNameElement = document.createElement('span');
    teamNameElement.className = 'team-name';
    teamNameElement.textContent = teamName;

    var teamIconsContainer = document.createElement('div');
    teamIconsContainer.className = 'team-icons';

    // Tworzenie 3 ikon 'fas fa-star'
    // eslint-disable-next-line no-redeclare
    for (var i = 0; i < 3; i++) {
      // eslint-disable-next-line no-redeclare
      var icon = document.createElement('i');
      icon.className = 'fa-solid fa-hand';

      icon.addEventListener('dblclick', function() {
        if (this.style.color === 'red') {
          this.style.color = '';
        } else {
          this.style.color = 'red';
        }
      });

      teamIconsContainer.appendChild(icon);
    }

    // Tworzenie 3 ikon 'fas fa-shield'
    // eslint-disable-next-line no-redeclare
    for (var i = 0; i < 3; i++) {
      // eslint-disable-next-line no-redeclare
      var icon = document.createElement('i');
      icon.className = 'fa-solid fa-right-left';

      icon.addEventListener('dblclick', function() {
        if (this.style.color === 'red') {
          this.style.color = '';
        } else {
          this.style.color = 'red';
        }
      });

      teamIconsContainer.appendChild(icon);
    }

    // Tworzenie 3 ikon 'fas fa-heart'
    // eslint-disable-next-line no-redeclare
    for (var i = 0; i < 3; i++) {
      // eslint-disable-next-line no-redeclare
      var icon = document.createElement('i');
      icon.className = 'fa-solid fa-clipboard-list';

      icon.addEventListener('dblclick', function() {
        if (this.style.color === 'red') {
          this.style.color = '';
        } else {
          this.style.color = 'red';
        }
      });

      teamIconsContainer.appendChild(icon);
    }

    // Dodaj elementy do kontenera drużyny
    teamContainer.appendChild(teamIconsContainer);
    //teamContainer.appendChild(teamNameElement);

    // Dodaj drużynę do listy
    teamList.appendChild(teamContainer);
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
    gameRules.textContent = 'To są zasady gry dodane przez użytkownika! ssdadasdasdasdasdasdasdadsasdasdadadadadsasdasdasdasdasd';
    gameRules.textContent += 'To są zasady gry dodane przez użytkowniasdasdasdaka! ssdadasdasdasdasdasdasdadsasdasdadadadadsasdasdasdasdasd';


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
    case 4:
      challengeText.textContent = 'Zadanie 3';
      break;
    case 5:
      challengeText.textContent = 'Zadanie 3';
      break;
    case 6:
      challengeText.textContent = 'Zadanie 3';
      break;
    case 7:
      challengeText.textContent = 'Zadanie 3';
      break;
    case 8:
      challengeText.textContent = 'Zadanie 3';
      break;
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