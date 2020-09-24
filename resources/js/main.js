let button = document.getElementById('switch');
let ball = document.getElementById('ball');
let topBackground = document.getElementById('background-top');
let background = document.querySelector('main');
let cardBackground = document.getElementsByClassName('social-network');
let smallCardBackground = document.getElementsByClassName('social-grid');
let facebook = document.getElementById('facebook');
let text = document.querySelectorAll('p, h1, h2, strong');
let footer = document.querySelector('footer');




const changeButtonColor = () => {
  let buttonColor = getComputedStyle(button);
  if (buttonColor.backgroundImage === 'linear-gradient(90deg, rgb(92, 163, 235), rgb(96, 225, 152))') {
    button.style.backgroundImage = 'none';
    button.style.backgroundColor = 'hsl(230, 22%, 74%)';
    ball.style.backgroundColor = 'hsl(225, 100%, 98%)';
  } else {
    button.style.backgroundColor = 'none';
    button.style.backgroundImage = 'linear-gradient(90deg, rgb(92, 163, 235), rgb(96, 225, 152))';
    ball.style.backgroundColor = 'hsl(232, 19%, 15%)';
  }
}

const changeSwitchSide = () => {
  let ballSide = getComputedStyle(ball);
  if (ballSide.left === '2px') {
    ball.style.left = '27px';
  } else {
    ball.style.left = '2px';
  }
}


const changeTopBackgroundColor = () => {
  let backgroundStyle = getComputedStyle(topBackground);
  if (backgroundStyle.backgroundColor === 'rgb(31, 33, 46)') {
    topBackground.style.backgroundColor = 'hsl(225, 100%, 98%)';
  } else {
    topBackground.style.backgroundColor = 'rgb(31, 33, 46)';
  }
}

const changeBackgroundColor = () => {
  let mainBackgroundStyle = getComputedStyle(background);
  if (mainBackgroundStyle.backgroundColor === 'rgb(30, 32, 42)') {
    background.style.backgroundColor = 'hsl(0, 0%, 100%)';
    footer.style.backgroundColor = 'hsl(0, 0%, 100%)';
  } else {
    background.style.backgroundColor = 'rgb(30, 32, 42)';
    footer.style.backgroundColor = 'rgb(30, 32, 42)';
  }
}

const changeCardsBackgroundColor = () => {
  let cardsBackgroundColor = getComputedStyle(facebook);
  if (cardsBackgroundColor.backgroundColor === 'rgb(37, 42, 65)') {
    for (let i = 0 ; i < cardBackground.length ; i++) {
      cardBackground[i].style.backgroundColor = 'hsl(227, 47%, 96%)';
    }
    for (let j = 0 ; j < smallCardBackground.length ; j++) {
      smallCardBackground[j].style.backgroundColor = 'hsl(227, 47%, 96%)';
    }
  } else {
    for (let k = 0 ; k < cardBackground.length ; k++) {
      cardBackground[k].style.backgroundColor = 'rgb(37, 42, 65)';
    }
    for (let l = 0 ; l < smallCardBackground.length ; l++) {
      smallCardBackground[l].style.backgroundColor = 'rgb(37, 42, 65)';
    }
  }
}

const changeTextColor = () => {
  let computedColor = [];
  for (let i = 0 ; i < text.length ; i ++) {
    computedColor.push(getComputedStyle(text[i]).color);
  }
  for (let j = 0 ; j < computedColor.length ; j++) {
    if (computedColor[j] === 'rgb(139, 151, 198)') {
      text[j].style.color = 'hsl(228, 12%, 44%)';
    } else if (computedColor[j] === 'rgb(255, 255, 255)') {
      text[j].style.color = 'hsl(230, 17%, 14%)';
    } else if (computedColor[j] === 'rgb(30, 32, 42)') {
      text[j].style.color = 'hsl(0, 0%, 100%)';
    } else if (computedColor[j] === 'rgb(99, 104, 126)') {
      text[j].style.color = 'hsl(228, 34%, 66%)';
    }
  }
}


button.onclick = changeTopBackgroundColor;
button.addEventListener('click', changeBackgroundColor);
button.addEventListener('click', changeCardsBackgroundColor);
button.addEventListener('click', changeTextColor);
button.addEventListener('click', changeSwitchSide);
button.addEventListener('click', changeButtonColor);
