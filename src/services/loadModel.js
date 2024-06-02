const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
  const url = "//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    url model nanti";
  const modelUrl = process.env.MODEL_URL || url;
  return tf.loadGraphModel(modelUrl); // bagian untuk memuat model dari URL storage cloud diatas
}

module.exports = loadModel; // Mengekspor fungsi loadModel