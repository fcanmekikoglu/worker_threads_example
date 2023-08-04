const { workerData, parentPort } = require("worker_threads");
const crypto = require("crypto");

const hash = (hashInput) => {
  for (let i = 0; i < 500000; i++) {
    hashInput = crypto.createHash("sha256").update(hashInput).digest("hex");
  }

  return hashInput;
};

const result = hash(workerData.hashInput);

parentPort.postMessage(result);
