//
//      HELPERS
//

//RETURN A RANDOM ITEM FROM A LIST
const choice = (arr) => {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}


//
//      EXPORTS
//
export {choice};
