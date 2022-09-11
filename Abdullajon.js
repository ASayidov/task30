
// Very Easy turkumidan:
// 1. Convert Minutes into Seconds
function convert(minutes) {
  return minutes * 60
}

// 2. Return the First Element in an Array
function getFirstValue(arr) {
	return arr[0]
}

// 3. Return the Remainder from Two Numbers
function remainder(x, y) {
	return x%y
}


// Easy turkumidan:
// 1. Add up the Numbers from a Single Number

function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}
// 2. Largest Swap

function largestSwap(num) {
  let strNum = num.toString();
  let revTemp = strNum[1];
  let rev = revTemp + strNum[0];
  let revNum = parseInt(rev);

  if (num >= revNum) {
    return true;
  } else {
    return false;
  }
}


// 3. Find the Amount of Potatoes
function potatoes(n) {
  searchFor = 'potato';
  count = 0;
  pos = str.indexOf(searchFor);

  while (pos > -1) {
    ++count;
    pos = str.indexOf(searchFor, ++pos);
  }
  return count
}
