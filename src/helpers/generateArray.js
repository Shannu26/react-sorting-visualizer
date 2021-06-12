const generateArray = (size) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    const num = Math.round(Math.random() * 100) + 1;
    // console.log(num);
    arr.push(num);
  }
  return [...arr];
};

export default generateArray;
