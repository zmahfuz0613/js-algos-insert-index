//INSERT INDEX

const getIndexToInsert = (arr, num) => {

  let sortedArray = arr.sort((a,b)=> a-b);
  let indexToInsert = sortedArray.findIndex((a)=> a >=num);
  if(indexToInsert === -1){
    return sortedArray.length;
  }
  return indexToInsert;
};

console.log(getIndexToInsert([40, 60, 5, 322, 48, 83], 80));

module.exports = {
  getIndexToInsert
};
