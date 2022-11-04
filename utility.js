const shuffleMatrix = (matrixArray) => {
  let newArray = [...matrixArray];
  for (let i = matrixArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  setMatrixArray(newArray);
};

const sortMatrix = (matrixArray) => {
  let newArray = [...matrixArray];
  newArray.sort();
  setMatrixArray(newArray);
};

const setMatrixArray = (newArray) => {
  document.getElementById("cardMatrix").innerHTML = "";
  for (let i = 0; i < newArray.length; i++) {
    let elem = document.createElement("div");
    elem.className = "card";
    elem.innerHTML = newArray[i];
    document.getElementById("cardMatrix").appendChild(elem);
  }
};
