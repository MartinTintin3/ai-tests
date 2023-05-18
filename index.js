import * as tf from "@tensorflow/tfjs-node";

// create a model with one input layer (2 nodes), one layer (2 nodes each), and one output layer (1 node)

const model = tf.sequential();

model.add(tf.layers.dense({ inputShape: [2], units: 2, activation: "sigmoid" }));
model.add(tf.layers.dense({ units: 1, activation: "sigmoid" }));

// loss meansquarederror, optimizer adam with learning rate 0.02
model.compile({ loss: "meanSquaredError", optimizer: tf.train.adam(0.02) });

model.summary();

// create training data
const xs = tf.tensor2d([[0, 0], [0, 1], [1, 0], [1, 1]], undefined);
const ys = tf.tensor2d([[0], [1], [1], [0]], undefined);

// train the model
await model.fit(xs, ys, { epochs: 500 });
model.predict(xs).print();

await model.save("file://xor-model");