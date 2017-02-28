/**
 * 3Dモデルの読み込み
 *
 * @param {String} uri
 *
 * @return {Promise}
 */
function loadModel(uri) {
  return loadJson(uri).then(function(gltf) {
    var model = {};

    return Promise.all([loadBuffers(gltf.buffers).then(function(buffers) {
        model.buffers = buffers;
      })]).then(function() {
      model.accessors = gltf.accessors;
      model.bufferViews = gltf.bufferViews;
      return model;
    });
  });
}

function loadBuffers(buffers) {
  return Promise.all(Object.keys(buffers).map(function(bufferName) {
    var gltfBuffer = buffers[bufferName];
    return new Promise(function(resolve, reject) {
      loadXhr(gltfBuffer.uri, gltfBuffer.type).then(function(buffer) {
        resolve({name: bufferName, data: buffer});
      });
    });
  })).then(function(buffers) {
    return buffers.reduce(function(p, v) {
      p[v.name] = v.data;
      return p;
    }, {});
  });
}
