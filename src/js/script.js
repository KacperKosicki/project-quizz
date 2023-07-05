let lastClickTime = 0;
var teamPoints = {};

function handleButtonClick(button) {
  const currentTime = new Date().getTime();
  const timeDiff = currentTime - lastClickTime;

  if (timeDiff < 300) {
    button.classList.add("used");
  }

  lastClickTime = currentTime;
}

function addTeam() {
  var teamName = prompt("Podaj nazwę drużyny: (maksymalnie 20 znaków)");
  var teamColor = prompt("Podaj kolor drużyny: (podanie kolorów jest obsługiwane tylko przez język angielski)");

  if (teamName && teamColor) {
    var teamList = document.getElementById("team-list");

    if (teamName.length < 4) {
        alert("Nazwa drużyny musi mieć co najmniej 4 znaki! Wypróbuj inną nazwę.");
        return;
    }

    if (teamName.length > 20) {
        teamName = teamName.substring(0, 20);
    }

    // Utwórz elementy dla drużyny
    var teamContainer = document.createElement("div");
    teamContainer.className = "team-container";
    teamContainer.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    teamContainer.style.borderRadius = "10px";
    teamContainer.style.width = "20%";
    teamContainer.style.height = "100px";

    var teamTitle = document.createElement("h3");
    teamTitle.textContent = teamName;
    teamTitle.style.color = teamColor;

    var teamPointsElement = document.createElement("span");
    teamPointsElement.className = "team-points";
    teamPointsElement.textContent = "0 pkt";

    // Przyciski do dodawania i odejmowania punktów
    var incrementButton = document.createElement("button");
    incrementButton.textContent = "+";
    incrementButton.addEventListener("click", function () {
      incrementPoints(teamName);
    });

    var decrementButton = document.createElement("button");
    decrementButton.textContent = "-";
    decrementButton.addEventListener("click", function () {
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
  if (teamPoints.hasOwnProperty(teamName) && teamPoints[teamName] > 0) {
    teamPoints[teamName]--;
    updatePoints();
  }
}

function updatePoints() {
    var teamContainers = document.getElementsByClassName("team-container");
  
    for (var i = 0; i < teamContainers.length; i++) {
      var teamContainer = teamContainers[i];
      var teamName = teamContainer.getElementsByTagName("h3")[0].textContent;
      var teamPointsElement = teamContainer.getElementsByClassName("team-points")[0];
      var points = teamPoints[teamName];
  
      teamPointsElement.textContent = points + " pkt";
    }
  }