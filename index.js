import * as tf from "@tensorflow/tfjs-node";

// create a model with one input layer (2 nodes), one layer (2 nodes each), and one output layer (1 node)

const model = tf.sequential();

model.add(tf.layers.dense({ units: 1, inputShape: [1], activation: "relu" }));
model.add(tf.layers.dense({ units: 5, activation: "relu" }));
//model.add(tf.layers.dense({ units: 3, activation: "relu" }));
model.add(tf.layers.dense({ units: 1, activation: "relu" }));

// loss meansquarederror, optimizer adam with learning rate 0.02
model.compile({ loss: "meanSquaredError", optimizer: tf.train.adam(0.02) });

model.summary();

let input_data = [];
let output_data = [];
// create training data
for (let a = 0; a < 10; a++) {
    for (let b = 0; b < 10; b++) {
        input_data.push([a]);
        output_data.push([2 * a + 3]);
    }
}

console.log(output_data);

// train the model
await model.fit(tf.tensor(input_data), tf.tensor(output_data), { epochs: 1000 });
model.predict(tf.tensor(input_data)).print();

await model.save("file://xor-model");