/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorFunctionsComponent = (element) => {
  console.log("generatorFunctionsComponent");

  //   const myGenerator = myFirstGeneratorFunction();
  //   console.log(myGenerator.next());

  const genId = idGenerator();

  const button = document.createElement("button");
  button.innerText = "Click me";
  element.append(button);

  const renderButton = () => {
    const { value } = genId.next();
    button.innerText = `Click ${value}`;
  };

  button.addEventListener("click", renderButton);
};

function* idGenerator() {
  let currentId = 0;
  while (true) {
    yield `2024-${++currentId}`;
  }
}

function* myFirstGeneratorFunction() {
  yield "Primer valor"; // Es como un return pero para function generadoras, se pausa ahi
  yield "Segundo valor";
  yield "Tercer valor";
  yield "Cuarto valor";
  return "No hay valores";

  yield "Ya no pueden hacer nada";
}
