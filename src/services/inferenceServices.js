const tf = require("@tensorflow/tfjs-node");
const InputError = require("../exceptions/InputError");

async function predictClassification(model, image) {
  try {
    const tensor = tf.node
      .decodeJpeg(image)
      .resizeNearestNeighbor([224, 224])
      .expandDims()
      .toFloat();

    const classes = ["ditemukan", "tidak_ditemukan"];

    const prediction = model.predict(tensor);
    const score = await prediction.data();
    const confidenceScore = Math.max(...score) * 100;

    const classResult = tf.argMax(prediction, 1).dataSync()[0];
    let label = classes[classResult];

    if (confidenceScore < 50) { //saat kurang dari 50 akan diberi keterangan tidak ditemukan
      label = "tidak_ditemukan";
    }

    let suggestion;
    if(label === 'ID') {
      suggestion = "ditemukan";
    } else {
      suggestion = "data identitas";
    }

    return { label, suggestion };
  } catch (error) {
    throw new InputError("Terjadi kesalahan dalam melakukan prediksi", 400);
  }
}

module.exports = predictClassification; // Mengekspor fungsi prediksi