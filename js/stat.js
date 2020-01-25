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

var render


var renderStatistics = function (ctx, names, times) {
  renderMessageWindow(ctx, MessageWindow.POSITION_X, MessageWindow.POSITION_Y, MessageWindow.WIDTH, MessageWindow.HEIGHT, MessageWindow.COLOR, MessageWindow.SHADOW_COLOR, MessageWindow.SHADOW_OFFSET_X, MessageWindow.SHADOW_OFFSET_Y);
  renderText(ctx, 'Ура вы победили! ', MessageFont.LINE_HEIGHT, MessageFont.LINE_HEIGHT, MessageFont.FACE, MessageFont.SIZE, MessageFont.COLOR);
  renderText(ctx, 'Список результатов:', MessageFont.LINE_HEIGHT, MessageFont.LINE_HEIGHT*2, MessageFont.FACE, MessageFont.SIZE, MessageFont.COLOR);
};
