const numList = [1, 2, 3];
const alphaList = ['a', 'b', 'c'];

function zipList(list1, list2) {
  const combinedList = [];
  for (const num of list1) {
    combinedList.push(list1[num - 1], list2[num - 1]);
  }
  return combinedList;
}

console.log(zipList(numList, alphaList));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(numList, alphaList));
