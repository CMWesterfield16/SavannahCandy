document.title = "Savannah Candy";

//Title Bar
var titleDiv = document.createElement('div');
titleDiv.id = 'title-div';
titleDiv.className = 'div-formatting';
container.append(titleDiv);

var titleText = document.createElement('div');
titleText.id = 'title-text';
titleText.innerHTML = 'SAVANNAH CANDY';
titleText.className = 'title-text-formatting';
titleDiv.append(titleText);

var titleLogo = document.createElement('div');
titleLogo.id = 'logo';
titleDiv.append(titleLogo);

var img = document.createElement("IMG");
img.id = 'img';
img.src = 'savannah.JPG';
titleLogo.appendChild(img);

//Button

var btnDiv = document.createElement('div');
btnDiv.id = 'btn-div';
btnDiv.className = 'div-formatting';
container.append(btnDiv);

var btnPlay = document.createElement('BUTTON');
btnPlay.id = 'btn-play';
btnPlay.className = 'btn-formatting';
btnPlay.innerHTML = 'PLAY';
btnDiv.append(btnPlay);

//Candy Section

var lolliDiv = document.createElement('div');
lolliDiv.id = 'lolli-div';
lolliDiv.className = 'div-formatting hidden';
container.append(lolliDiv);

var lolli1 = document.createElement('div');
lolli1.id = 'lolli-1-container';
lolliDiv.append(lolli1);

var lolli2 = document.createElement('div');
lolli2.id = 'lolli-2-container';
lolliDiv.append(lolli2);

var lolli3 = document.createElement('div');
lolli3.id = 'lolli-3-container';
lolliDiv.append(lolli3);


var imgLolli1 = document.createElement('IMG');
imgLolli1.id = 'lolli-1';
imgLolli1.src = 'lollipop1.png';
imgLolli1.className = 'lollipop-images';
lolli1.append(imgLolli1);

var imgLolli2 = document.createElement('IMG');
imgLolli2.id = 'lolli-2';
imgLolli2.src = 'lollipop2.png';
imgLolli2.className = 'lollipop-images';
lolli2.append(imgLolli2);

var imgLolli3 = document.createElement('IMG');
imgLolli3.id = 'lolli-3';
imgLolli3.src = 'lollipop3.png';
imgLolli3.className = 'lollipop-images';
lolli3.append(imgLolli3);

//Return statements

var answerDiv = document.createElement('div');
answerDiv.id = 'answer-div';
container.append(answerDiv);

var resultText = document.createElement('div');
resultText.id = 'result-text';
resultText.className = 'game-result-formatting hidden';
resultText.innerHTML = 'Click a lollipop to find the Savannah candy!';
answerDiv.append(resultText);

var newGameText = document.createElement('div');
newGameText.id = 'new-game-text';
newGameText.className = 'game-result-formatting hidden';
newGameText.innerHTML = "Click New Game? to reset!";
answerDiv.append(newGameText);

//Lollipop functionality

var lolliArray = [false, false, false];

btnPlay.addEventListener('click', function(){
  lolliArray = [false, false, false];
  var num = Math.floor((Math.random() * 3));
  lolliArray[num] = true;
  lolliDiv.className = 'div-formatting';
  btnPlay.innerHTML = 'New Game?';
  resultText.className = 'game-result-formatting';
  resultText.innerHTML = 'Click a lollipop to find the Savannah candy!';
  newGameText.className = 'game-result-formatting hidden';
});

lolli1.addEventListener('click', function(){
  if (lolliArray[0] == true) {
    resultText.innerHTML = 'YAY! You found the SAVANNAH CANDY!';
  } else if (resultText.innerHTML == 'YAY! You found the SAVANNAH CANDY!') {
    newGameText.className = 'game-result-formatting';
  } else {
    resultText.innerHTML = 'Sorry, Lollipop 1 is not the Savannah Candy';
  }
});

lolli2.addEventListener('click', function(){
  if (lolliArray[1] == true) {
    resultText.innerHTML = 'YAY! You found the SAVANNAH CANDY!';
  } else if (resultText.innerHTML == 'YAY! You found the SAVANNAH CANDY!') {
    newGameText.className = 'game-result-formatting';
  } else {
    resultText.innerHTML = 'Sorry, Lollipop 2 is not the Savannah Candy';
  }
});

lolli3.addEventListener('click', function(){
  if (lolliArray[2] == true) {
    resultText.innerHTML = 'YAY! You found the SAVANNAH CANDY!';
  } else if (resultText.innerHTML == 'YAY! You found the SAVANNAH CANDY!') {
    newGameText.className = 'game-result-formatting';
  } else {
    resultText.innerHTML = 'Sorry, Lollipop 3 is not the Savannah Candy';
  }
});
