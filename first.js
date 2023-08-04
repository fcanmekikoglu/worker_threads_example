const crypto = require("crypto");

const hash = (input) =>
  new Promise((resolve) => {
    const start = Date.now();
    for (let i = 0; i < 500000; i++) {
      input = crypto.createHash("sha256").update(input).digest("hex");
    }
    console.log(`Hashing done in ${Date.now() - start} ms`);
    resolve(input);
  });

const main = async () => {
  const start = Date.now();

  const hashes = await Promise.all([
    hash("Hash this text 500k times!"),
    hash("Hash this text 500k times!"),
    hash("Hash this text 500k times!"),
    hash("Hash this text 500k times!"),
    hash("Hash this text 500k times!"),
    hash("Hash this text 500k times!"),
    hash("Hash this text 500k times!"),
    hash("Hash this text 500k times!"),
  ]);
  console.log(hashes);

  console.log(`Main done in ${Date.now() - start} ms`);
};

main().catch(console.error);

