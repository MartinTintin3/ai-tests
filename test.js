import * as tf from "@tensorflow/tfjs-node";

const model = await tf.loadLayersModel("file://xor-model/model.json");

model.predict(tf.tensor([[1], [100]], undefined)).print();