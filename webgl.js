var canvas;
var gl;
var renderListeners = [];

function initWebGL() {
  canvas = document.getElementById("canvas");
  gl = canvas.getContext("webgl");

  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0.5, 0.5, 0.5, 1);

  update();
}

function update() {
  requestAnimationFrame(update);

  render();
}

function render() {
  gl.clear(gl.COLOR_BUFFER_BIT);
}

function renderModel(model) {}
