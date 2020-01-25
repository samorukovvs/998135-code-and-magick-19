'use strict';
var MessageWindow = {
  POSITION_X: 100,
  POSITION_Y: 10,
  HEIGHT: 270,
  WIDTH: 420,
  COLOR: 'white',
  SHADOW_COLOR: 'rgba(0, 0, 0, 0.7)',
  SHADOW_OFFSET_X: 10,
  SHADOW_OFFSET_Y: 10,
};

var MessageFont = {
  FACE: 'PT Mono',
  SIZE: 16,
  COLOR: '#000',
  LINE_HEIGHT: 32
};

var Statusbar = {
  MAX_HEIGHT: 150,
  WIDTH: 40,
  MARGIN_RIGHT: 50
};

var renderMessageWindow = function (ctx, x, y, height, width, mainColor, shadowColor, shadowX, shadowY) {
  ctx.fillStyle = shadowColor;
  ctx.fillRect(x + shadowX, y + shadowY, height, width);
  ctx.fillStyle = mainColor;
  ctx.fillRect(x, y, height, width);
};

var renderText = function (ctx, txt, x, y, fontFace, fontSize, fontColor) {
  ctx.font = fontSize + 'px  ' + fontFace;
  ctx.fillStyle = fontColor;
  ctx.fillText(txt, MessageWindow.POSITION_X + x, MessageWindow.POSITION_Y + y, MessageWindow.WIDTH - 20);
};

var createRandomBlue = function () {
  var saturation = Math.floor(Math.random() * 100);
  var randomBlue = 'hsl(240, ' + saturation + '%, 50%)';
  return randomBlue;
};

var renderStatusbar = function(ctx, barNumber, percents) {
  var randomColor = createRandomBlue();
  ctx.fillStyle = randomColor;
  var x = MessageWindow.POSITION_X + MessageFont.LINE_HEIGHT +(Statusbar.WIDTH + Statusbar.MARGIN_RIGHT) * barNumber;
  var y = MessageWindow.POSITION_Y + MessageWindow.HEIGHT - MessageFont.LINE_HEIGHT;
  var height = 150 * percents * -1;
  ctx.fillRect(x, y, Statusbar.WIDTH, height);
};


var renderStatistics = function (ctx, names, times) {
  renderMessageWindow(ctx, MessageWindow.POSITION_X, MessageWindow.POSITION_Y, MessageWindow.WIDTH, MessageWindow.HEIGHT, MessageWindow.COLOR, MessageWindow.SHADOW_COLOR, MessageWindow.SHADOW_OFFSET_X, MessageWindow.SHADOW_OFFSET_Y);
  renderText(ctx, 'Ура вы победили! ', MessageFont.LINE_HEIGHT, MessageFont.LINE_HEIGHT, MessageFont.FACE, MessageFont.SIZE, MessageFont.COLOR);
  renderText(ctx, 'Список результатов:', MessageFont.LINE_HEIGHT, MessageFont.LINE_HEIGHT*2, MessageFont.FACE, MessageFont.SIZE, MessageFont.COLOR);
};
