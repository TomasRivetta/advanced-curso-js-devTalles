import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorAsyncComponent = async (element) => {
  console.log("generatorAsyncComponent");

  const heroGenerator = getHeroGenerator();
  let isFinished = false;
  do {
    const { value, done } = await heroGenerator.next();
    isFinished = done;
    if (isFinished) break;
    element.innerHTML = value;
  } while (!isFinished); // cuando ya estamos en el final el done es true, entonces con la negacion rompemos el ciclo
};

async function* getHeroGenerator() {
  for (const hero of heroes) {
    await sleep();
    yield hero.name;
  }

  return "No hay mas";
}

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
