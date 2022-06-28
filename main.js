/* Obfuscated code */
const _0x3acd32 = _0x3c28;
function _0x3c28(_0x9f0631, _0x5e682e) {
  const _0x3bf6b6 = _0x3bf6();
  return (
    (_0x3c28 = function (_0x3c2869, _0x3765f2) {
      _0x3c2869 = _0x3c2869 - 0x16a;
      let _0x4368f3 = _0x3bf6b6[_0x3c2869];
      return _0x4368f3;
    }),
    _0x3c28(_0x9f0631, _0x5e682e)
  );
}
(function (_0x3e2454, _0x59730d) {
  const _0x254e2c = {
      _0x3fa8a4: '\x30\x78\x31\x36\x64',
      _0x51d489: '\x30\x78\x31\x37\x63',
      _0xf733b2: '\x30\x78\x31\x36\x61',
      _0x1722fd: '\x30\x78\x31\x37\x33',
      _0x119d26: '\x30\x78\x31\x37\x65',
    },
    _0x19c755 = _0x3c28,
    _0xacef7b = _0x3e2454();
  while (!![]) {
    try {
      const _0x3b9256 =
        (-parseInt(_0x19c755(_0x254e2c._0x3fa8a4)) / 0x1) *
          (parseInt(_0x19c755(_0x254e2c._0x51d489)) / 0x2) +
        -parseInt(_0x19c755(_0x254e2c._0xf733b2)) / 0x3 +
        parseInt(_0x19c755(_0x254e2c._0x1722fd)) / 0x4 +
        -parseInt(_0x19c755('\x30\x78\x31\x37\x32')) / 0x5 +
        parseInt(_0x19c755('\x30\x78\x31\x37\x35')) / 0x6 +
        (-parseInt(_0x19c755('\x30\x78\x31\x37\x36')) / 0x7) *
          (-parseInt(_0x19c755(_0x254e2c._0x119d26)) / 0x8) +
        (-parseInt(_0x19c755('\x30\x78\x31\x37\x61')) / 0x9) *
          (-parseInt(_0x19c755('\x30\x78\x31\x37\x39')) / 0xa);
      if (_0x3b9256 === _0x59730d) break;
      else _0xacef7b['push'](_0xacef7b['shift']());
    } catch (_0x3f3482) {
      _0xacef7b['push'](_0xacef7b['shift']());
    }
  }
})(_0x3bf6, 0xf285d);
let words = [
  _0x3acd32('\x30\x78\x31\x37\x64'),
  _0x3acd32('\x30\x78\x31\x37\x62'),
  _0x3acd32('\x30\x78\x31\x36\x65'),
  _0x3acd32('\x30\x78\x31\x37\x34'),
  _0x3acd32('\x30\x78\x31\x36\x62'),
  _0x3acd32('\x30\x78\x31\x37\x37'),
  _0x3acd32('\x30\x78\x31\x37\x38'),
  _0x3acd32('\x30\x78\x31\x37\x31'),
  _0x3acd32('\x30\x78\x31\x37\x30'),
  '\x41\x49\x52\x50\x4c\x41\x4e\x45',
  '\x54\x52\x41\x4e\x53\x4c\x41\x54\x4f\x52',
  '\x4d\x4f\x56\x49\x45',
  _0x3acd32('\x30\x78\x31\x36\x63'),
  _0x3acd32('\x30\x78\x31\x36\x66'),
];
function _0x3bf6() {
  const _0x54dc05 = [
    '\x50\x48\x50',
    '\x34\x38\x41\x69\x6b\x66\x42\x65',
    '\x35\x36\x34\x33\x38\x30\x34\x56\x66\x57\x44\x41\x70',
    '\x4c\x41\x50\x54\x4f\x50',
    '\x50\x4f\x57\x45\x52',
    '\x34\x32\x36\x31\x31\x71\x64\x56\x59\x57\x41',
    '\x48\x4f\x55\x53\x45',
    '\x56\x45\x48\x49\x43\x4c\x45',
    '\x44\x45\x53\x54\x52\x4f\x59',
    '\x47\x4c\x55\x45',
    '\x34\x30\x33\x37\x31\x38\x30\x4e\x64\x65\x62\x6b\x4b',
    '\x36\x35\x35\x36\x36\x31\x32\x57\x59\x62\x6d\x76\x45',
    '\x43\x41\x54',
    '\x36\x37\x36\x30\x38\x38\x34\x6a\x71\x66\x6d\x4f\x48',
    '\x36\x35\x38\x34\x32\x30\x72\x56\x76\x46\x4d\x62',
    '\x43\x4f\x4d\x50\x55\x54\x45\x52',
    '\x4b\x45\x59\x42\x4f\x41\x52\x44',
    '\x32\x38\x33\x39\x30\x68\x4f\x55\x4f\x4b\x67',
    '\x32\x36\x30\x31\x70\x55\x43\x71\x72\x4f',
    '\x4a\x41\x56\x41\x53\x43\x52\x49\x50\x54',
    '\x32\x32\x6d\x65\x69\x6d\x5a\x42',
  ];
  _0x3bf6 = function () {
    return _0x54dc05;
  };
  return _0x3bf6();
}
/* Obfuscated code */

let hangEllements = [
  'HANG_BOTTOM',
  'HANG_STICK',
  'HANG_LEVER',
  'HANG_ROPE',
  'HEAD',
  'BODY',
  'LEG1',
  'LEG2',
];

const WORD_TO_GUESS = chooseWord();

let startingScreen = document.querySelector('.starting-screen');
let looseModal = document.querySelector('.loose-modal');
let winModal = document.querySelector('.win-modal');
let wordPath = document.getElementById('secret-word');
let correctWords = [];
let wrongAttempts = -1;

// Game start function
const start = () => {
  startingScreen.style.display = 'none';

  chooseWord();
  createInput();
};

// Choose word for game randomly
function chooseWord() {
  const randNumber = Math.floor(Math.random() * words.length);
  return words[randNumber];
}

// Create empty inputs for letters
function createInput() {
  let wordSize = 0;
  let i = 0;

  for (letter of WORD_TO_GUESS) {
    wordSize += 1;

    let wordInput = document.createElement('input');
    wordInput.type = 'text';
    wordInput.setAttribute('disabled', 'disabled');
    wordPath.appendChild(wordInput);
  }
}

// Click letter and put it into input
const put = (x) => {
  let wrongLetter = '';
  let letterIndex;
  let letterLastIndex;

  for (letter of WORD_TO_GUESS) {
    correctWords.push(' ');
    if (letter === x) {
      wrongLetter += 'true';
      correctWords[WORD_TO_GUESS.indexOf(x)] =
        WORD_TO_GUESS[WORD_TO_GUESS.indexOf(x)];
      letterIndex = WORD_TO_GUESS.indexOf(x);

      correctWords[WORD_TO_GUESS.lastIndexOf(x)] =
        WORD_TO_GUESS[WORD_TO_GUESS.lastIndexOf(x)];
      letterLastIndex = WORD_TO_GUESS.lastIndexOf(x);
    } else {
      wrongLetter += 'false';
    }
  }

  // If word includes clicked letter
  if (wrongLetter.includes('true')) {
    if (letterIndex) {
      document.querySelector(
        `.secret-word :nth-child(${letterIndex + 1})`
      ).value = correctWords[letterIndex];
    } else if (letterIndex === 0) {
      document.querySelector(`.secret-word :nth-child(1)`).value =
        correctWords[letterIndex];
    }

    if (letterLastIndex) {
      document.querySelector(
        `.secret-word :nth-child(${letterLastIndex + 1})`
      ).value = correctWords[letterLastIndex];
    }

    // If word doesn't include clicked letter
  } else {
    wrongAttempts += 1;

    // Start activating hang elements
    switch (hangEllements[wrongAttempts]) {
      case 'HANG_BOTTOM':
        document.querySelector('.hang-bottom').style.visibility = 'visible';
        break;
      case 'HANG_STICK':
        document.querySelector('.hang-stick').style.visibility = 'visible';
        break;
      case 'HANG_LEVER':
        document.querySelector('.hang-lever').style.visibility = 'visible';
        break;
      case 'HANG_ROPE':
        document.querySelector('.hang-rope').style.visibility = 'visible';
        break;
      case 'HEAD':
        document.querySelector('.head').style.visibility = 'visible';
        break;
      case 'BODY':
        document.querySelector('.body').style.visibility = 'visible';
        break;
      case 'LEG1':
        document.querySelector('.leg1').style.visibility = 'visible';
        break;
      case 'LEG2':
        document.querySelector('.leg2').style.visibility = 'visible';
        setTimeout(loose, 100);
        break;
    }
  }
};

// Check if player put correct sequence of letters
function checkWord() {
  let word = '';
  for (let i = 0; i < correctWords.length; i++) {
    word += correctWords[i];
  }

  if (word.trim() === WORD_TO_GUESS) {
    win();
  }
}
setInterval(checkWord, 0);

// Loose function
function loose() {
  looseModal.style.display = 'block';
}

// Win function
function win() {
  winModal.style.display = 'block';
}
