const bubbleSort = (alterStateAfterTimeOut, data) => {
  const array = [...data];
  let count = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      alterStateAfterTimeOut(array, j, j + 1, count, j === 0, array.length - i);
      count++;
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        // console.log(arr);
      }
    }
  }
  alterStateAfterTimeOut(array, 0, 1, count, true, 1);
  alterStateAfterTimeOut(array, 0, 1, count, true, 0);
  alterStateAfterTimeOut(array, -1, -1, count);
};

export default bubbleSort;
