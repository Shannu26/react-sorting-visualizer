const insertionSort = (alterStateAfterTimeOut, data) => {
  const array = [...data];
  let count = 0;
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      alterStateAfterTimeOut(array, j + 1, j, count, false, 0, "yellow");
      count++;
      array[j + 1] = array[j];
      j--;
      alterStateAfterTimeOut(array, j + 1, j, count, false, 0, "yellow");
      count++;
    }
    array[j + 1] = key;
    alterStateAfterTimeOut(array, -1, j + 1, count, false, -1, "orange");
    count++;
  }
  for (let i = 0; i < array.length; i++) {
    alterStateAfterTimeOut(array, 0, 0, count, true, i);
  }
  alterStateAfterTimeOut(array, -1, -1, count);
};

export default insertionSort;
