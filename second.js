const { Worker } = require("worker_threads");

const doHash = async (hashInput) => {
  return new Promise((resolve, reject) => {
    const start = Date.now();

    const worker = new Worker("./crypt.js", {
      workerData: {
        hashInput,
      },
    });

    worker.once("message", (data) => {
      console.log(`Worker [${worker.threadId}]: done in ${Date.now() - start}ms`);
      resolve(data);
    });

    worker.once("error", (e) => reject(e));
  });
};

const main = async () => {
  const start = Date.now();

  const hashes = await Promise.all([
    doHash("Hash this text 500k times!"),
    doHash("Hash this text 500k times!"),
    doHash("Hash this text 500k times!"),
    doHash("Hash this text 500k times!"),
    doHash("Hash this text 500k times!"),
    doHash("Hash this text 500k times!"),
    doHash("Hash this text 500k times!"),
    doHash("Hash this text 500k times!"),
  ]);
  console.log(hashes);

  console.log(`Main done in ${Date.now() - start} ms`);
};

main().catch(console.error);
