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
    },
    forestFork: {
      title: "a fork in the road...",
      description: "You have come across an EERIE fork... IN THE ROAD! spooky! you have TWO options......... left........... or............... RIGHT! EGAD!",
      picture: "forestfork.JPG",
      options: [
          {
            title: "LEFT",
            action: function() {
                loadLevel(levels["bootsOrHat"]);
            }
          },
          {
            title: "RIGHT",
            action: function() {
               loadLevel(levels["coffeeOrTea"]);
            }
          }
      ]
    },
    bootsOrHat: {
      title: "look! a clearing!",
      description: "you must don the spooky boots or the haunted hat.........choose carefully!",
      picture: "bootsorhat.JPG",
      options: [
          {
            title: "SPOOKY BOOTS",
            action: function() {
               loadLevel(levels["spookyBoots"]);
            }
          },
          {
            title: "HAUNTED HAT",
            action: function() {
                console.log('test');
            }
          }
      ]
    },
    coffeeOrTea: {
      title: "look! a clearing!",
      description: "you must drink the CREEPY COFFEE or the TOO-SCARY TEA! pIcK yOuR pOiSoN",
      picture: "coffeeortea.JPG",
      options: [
          {
            title: "CREEPY COFFEE",
            action: function() {
                console.log('test');
            }
          },
          {
            title: "TOO-SCARY TEA",
            action: function() {
                console.log('test');
            }
          }
      ]
    },
    spookyBoots: {
      title: "SPOOKY BOOTS!.",
      description: "YOU HAVE DECIDED TO WEAR THE SPOOKY BOOTS! your feet are now posessed by the spirit of DANCE! PREPARE TO BOOGIE TIL YOU DIEEEEEE",
      picture: "boots.JPG",
      options: []
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
    var oldPicture = pictureElement.lastElementChild;
    if (oldPicture) {
      pictureElement.removeChild(oldPicture);
    }
    var newPicture = document.createElement("img");
    newPicture.src = "img/" + picture;
    pictureElement.appendChild(newPicture);
}

function buildOptions(options) {
    var inputElement = document.getElementById("player-input");
    var child = inputElement.lastElementChild;
    while (child) {
      inputElement.removeChild(child);
      child = inputElement.lastElementChild;
    }
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
