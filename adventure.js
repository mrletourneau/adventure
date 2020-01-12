var inventory = {};
var levels = {
    start: {
      title: "welcome",
      description: "to start the game, choose START below",
      picture: "start.png",
      options: [
          {
            title: "Start",
            action: function() {
              return "levelOne";
            }
          }
      ]
  }
}

function loadLevel(level) {
    setTitle(level.title);
    setDescription(level.description);
    loadPicture(level.picture);
    buildOptions(level.options);
}

function setTitle(title) {
    var titleElement = document.getElementById("title");
    titleElement.innerHTML = title;
}

function setDescription(description) {
    var descriptionElement = document.getElementById("description");
    descriptionElement.innerHTML = description;
}

function loadPicture(picture) {
    var pictureElement = document.getElementById("picture");
    var newPicture = document.createElement("img");
    newPicture.src = "img/" + picture;
    pictureElement.appendChild(newPicture);
}

function buildOptions(options) {

}

