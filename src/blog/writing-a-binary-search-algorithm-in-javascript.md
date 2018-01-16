---
path: "/2016/09/16/writing-a-binary-search-algorithm-in-javascript"
date: "2016-09-16T17:12:33.962Z"
title: "Writing a Binary Search Algorithm in JavaScript"
---

Over the past few weeks, I've been reading through and studying the problems in [Programming Pearls](https://www.amazon.com/Programming-Pearls-2nd-Jon-Bentley/dp/0201657880/ref=sr_1_1?ie=UTF8&qid=1510196681&sr=8-1&keywords=programming+pearls) in an effort to better understand algorithms and their design. In the book, there's an excellent example of a binary search implementation. Working through the solution really caught my interest and inspired me to work through a front end implementation of a similar algorithm in JavaScript.  

Our binary search algorithm will work by evaluating a value in a set and determining if it is equal to, less than, or greater than the value you are searching for. If the key value is less than the the current index value, the stop index is set to the value of the current index - 1. If the greater than the current index value, the start index is set to the value of the current index + 1. If the key value is equal to the current index value, the search stops.  

**Let's define a problem to build our algorithm around:**  

Given a sequential array that contains at most 100 integers, find and log all of the integers between 0 and 100 that aren't in the array.  

Now that we have our challenge, we need outline the basic components of our algorithm. For the purposes of this example, we need an algorithm that takes an array and a key value and returns the index of the key value if it is present in the array. If the key value is not found, the function will return -1.  

```js
function binarySearch(arr, key) {
  if (arr[index] == key) {
    return index;
  } else {
    return -1;
  }
}
```  

This is the base of our algorithm. However, this code won't work. We need to define our starting and stoping indices as well as the current index value based on the current value of those variables.  

```js
function binarySearch(arr, key) {
  var startIndex = 0;
  var stopIndex = arr.length - 1;
  var index = (startIndex + stopIndex) >> 1;

  if (arr[index] == key) {
    return index;
  } else {
    return -1;
  }
}
```  

Our starting index will be set to 0. The stopping index will be dependent on the length of the array that we're evaluating. Our index value will then be calculated by adding our starting and stopping indices together and performing a bitwise operation to find the middle index of our array. We'll use this to perform our calculations.  

Now we need to write a conditional statement that executes the increment/decrement operation on our indices while the key value is not equal to the current index value and the starting index is not equal to the stopping index. At every step of our algorithm's execution, the current index value is evaluated, which determines what our algorithm does next.  

```js
...
while(arr[index] !== key && startIndex < stopIndex) {
  
  if (key < arr[index]) {
    stopIndex = index - 1;
  } else if (key > arr[index]) {
    startIndex = index + 1;
  }

  index = (startIndex + stopIndex) >> 1;
}
...
```  

The finished algorithm:  

```js
function binarySearch(arr, key) {
  var startIndex = 0;
  var stopIndex = arr.length - 1;
  var index = (startIndex + stopIndex) >> 1;

  while(arr[index] !== key && startIndex < stopIndex) {
  
    if (key < arr[index]) {
      stopIndex = index - 1;
    } else if (key > arr[index]) {
      startIndex = index + 1;
    }

    index = (startIndex + stopIndex) >> 1;
  }

  if (arr[index] == key) {
    return index;
  } else {
    return -1;
  }
}
```  

Our final conditional statement checks to see if the value was found, and if so, returns the index of the key value. If the value is not found, the function return -1.  

Now that we have our algorithm, let's return to our problem statement. We now need to perform a binary search on an array containing 100 random integers. Let's build a function that takes an empty array and populates it with 100 random values and then sorts the result to group together any duplicate values.  

```js
var myArr = [];

function populateArray() {
  // Generate a random integer between two values
  function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // Populate the array
  for (var i = 0; i <= 100; i++) {
    myArr.push(generateRandomInteger(0,100));
  }

  // Sort the array
  myArr.sort(function(a, b) {
    return a - b;
  });
}
```  

By running the populateArray function and logging the result, we'll be left with something like this:  

```js
console.log(myArr); // [1, 2, 3, ...];
```  

So now that we have our array, let's run our binarySearch function.  

```js
binarySearch(myArr, 5); // => 3
binarySearch(myArr, 10); // => 11
```

Notice that if our array contains duplicate integers, the index value returned by the binarySearch function will be the index of the last occurrence of that integer. Now we've got one final step to answering our question. We need to run the binary search over the entire array and log all of the numbers in our range that don't appear in our array. This can be done pretty simply by including the log inside of our return conditional in the binarySearch function and writing a test function that iterates the function 100 times.  

```js
...
if (arr[index] == key) {
    return index;
  } else {
    console.log(key + ' not found!');
    return -1;
  }
...
```  

```js
function test() {
  for (var i = 0; i <= 100; i++) {
    binarySearch(myArr, i);
  }
}
```  

Running the test function will give output the following to the console:  

```js
0 not found!
2 not found!
6 not found!
7 not found!
...
```  

That's it! The algorithm and test function satisfy all of the requirements of our prompt.  

**Conclusion** 

Searching arrays with a binary search function is an extremely efficient way to do so, because the maximum number of comparisons is limited by the conditions of our algorithm to `O(log(n))`. This is in contrast to a more traditional linear search method of indexOf which is has an efficiency of `O(n)`. After averaging 100 test cases, the average execution time of our binary search function was a mere 0.0501 milliseconds in Chrome.  

If you'd like to see my code, you can view it on [Github](https://gist.github.com/tylerreckart/fa0433056fea20a0d11b4358c17dca8d).  