import { retry } from "retry-promise-func";

const someFunction = async (someParams) => {
  return new Promise((resolve, reject) => {
    console.log(someParams);
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Success");
      } else {
        reject("Failure");
      }
    }, 1000);
  });
};

const main = async () => {
  try {
    const result = await retry(someFunction, { a: 1 }, 10, 2000);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

main();
