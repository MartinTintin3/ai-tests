import * as tf from "@tensorflow/tfjs-node";

const model = await tf.loadLayersModel("file://xor-model/model.json");

model.predict(tf.tensor2d([[0, 0], [0, 1], [1, 0], [1, 1]], undefined)).print();