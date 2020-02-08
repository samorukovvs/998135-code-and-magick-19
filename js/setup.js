'use strict';
var WizardsData = {
  FIRST_NAME: [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ],
  SECOND_NAME: [
    'да Марья',
    'Верон',
    'Мирабелла Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ],
  COAT_COLORS: [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ],
  EYES_COLORS: [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ]
};

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

// Закрытие и открытие окна setup
var setupWindow = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setupWindow.querySelector('.setup-close');

var openSetupWindow = function () {
  setupWindow.classList.remove('hidden');
  setupClose.addEventListener('click', onCloseSetupWindow);
  document.addEventListener('keydown', function (evt) {
    if (evt.key === ESC_KEY) {
      onCloseSetupWindow();
    }
  });
};

var onCloseSetupWindow = function () {
  setupWindow.classList.add('hidden');
};

setupOpen.addEventListener('click', openSetupWindow);

//document.querySelector('.setup-similar').classList.remove('hidden');

var takeRandomElement = function (dataArray) {
  return dataArray[Math.floor((Math.random() * dataArray.length))];
};

var createWizard = function () {
  return {
    name: takeRandomElement(WizardsData.FIRST_NAME) + ' ' + takeRandomElement(WizardsData.SECOND_NAME),
    coatColor: takeRandomElement(WizardsData.COAT_COLORS),
    eyesColor: takeRandomElement(WizardsData.EYES_COLORS)
  };
};

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

for (var i = 0; i < 4; i++) {
  var newWizard = createWizard();
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = newWizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = newWizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = newWizard.eyesColor;
  similarListElement.appendChild(wizardElement);
}


