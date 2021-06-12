const selectionSort = (alterStateAfterTimeOut, data) => {
  const array = [...data];
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let index = i;
    for (let j = i + 1; j < array.length; j++) {
      alterStateAfterTimeOut(array, i, j, count, j === i + 1, i - 1);
      count++;
      if (array[index] > array[j]) {
        index = j;
        // console.log(arr);
      }
    }
    let temp = array[i];
    array[i] = array[index];
    array[index] = temp;
  }
  alterStateAfterTimeOut(
    array,
    array.length - 1,
    array.length - 2,
    count,
    true,
    array.length - 2
  );
  alterStateAfterTimeOut(
    array,
    array.length - 1,
    array.length - 2,
    count,
    true,
    array.length - 1
  );
  alterStateAfterTimeOut(array, -1, -1, count);
};

export default selectionSort;
