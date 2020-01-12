var inventory = {};
var levels = {
    start: {
      title: "welcome",
      description: "to start the game, choose START below",
      picture: "start.png",
      options: [
          {
            title: "START",
            action: function() {
                console.log('test');
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
    var inputElement = document.getElementById("player-input");
    options.forEach(function(option) {
        inputElement.appendChild(buildOption(option));
    });
}

function buildOption(option) {
    var optionElement = document.createElement("button");
    optionElement.innerHTML = option.title;
    optionElement.type = "button";
    optionElement.onclick = option.action;
    return optionElement;
}
