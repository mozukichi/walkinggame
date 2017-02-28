window.addEventListener("DOMContentLoaded", init);

var models = {};

/**
 * 初期化
 */
function init() {
  initWebGL();

  loadModel("ground.gltf").then(function(model) {
    models.ground = model;
  });

  renderListeners.push(renderGame);
}

function renderGame() {
  renderModel(models.ground);
}

/**
 * JSONの読み込み
 *
 * @param {String} uri
 *
 * @return {Promise}
 */
function loadJson(uri) {
  return loadXhr(uri, "json");
}

/**
 * XMLHttpRequestによる読み込み
 *
 * @param {String} uri
 * @param {String} resType
 *
 * @return {Promise}
 */
function loadXhr(uri, resType) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = resType;
    xhr.addEventListener("load", function() {
      resolve(xhr.response);
    });
    xhr.open("GET", uri);
    xhr.send();
  });
}
