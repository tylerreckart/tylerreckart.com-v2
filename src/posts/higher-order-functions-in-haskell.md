---
path: "/2018/03/24/higher-order-functions"
date: "2018-03-24T17:12:33.962Z"
title: "Higher Order Functions"
---

In 2016, I set out to learn functional programming through Haskell. It was partially because of the challenge of mastering a notoriously [difficult to learn](https://www.quora.com/Why-is-Haskell-so-hard-to-learn) language, however, I most drawn to it because of its potential to radically change the way I approach problems in my day-to-day work. While I'm still far from mastering the language, a deeper understanding of functional programming *has* significantly influenced the way that I work.

One of the concepts that has influenced me the most has been higher order functions (HOFs). In Haskell, functions can take functions as parameters and return a function as a result. HOFs are extremely useful when if comes to performing calculations by defining what stuff *is* rather than by the steps to perform an arbitrary state change. They're a really powerful tool when it comes to solving problems and thinking about programs.

If you're not already aware, functions in Haskell can officially only take one argument. However, when learning Haskell, you'll often find yourself adding multiple parameters to a function like so:

```bash
ghci> max 4 5
5
```

We can also define a function that takes an argument which then returns a function that takes an argument of its own to apply that function twice.

```haskell
applyTwice :: (a -> a) -> a -> a
applyTwice f x = f (f x)
```

```bash
ghci> applyTwice (+3) 10
16
```

So, what's going on here? Both the `max` and `applyTwice` functions look like they're taking two parameters. Putting a space between two values in Haskell *is* functional application. Let's take a look at the `applyTwice` type declaration one more time.

```haskell
applyTwice :: (a -> a) -> a -> a
```

You could also write this as a function `applyTwice` that takes a function `(a -> a)`, which takes something and returns the same thing. The second parameter and return value are also of that type. This is called [currying](https://wiki.haskell.org/Currying). You can think of the `max` function as a function that takes an additional parameter and either returns `4` or that parameter depending on which is bigger.

Another HOF that we can define is the `map` function. It takes in two inputs - a function, and a list. It then applies the function to every element in the array.

```haskell
map :: (a->b) -> [a] -> [b]
map f [] = []
map f (x:xs) = f x : map f xs
```

HOFs are powerful because they make your code more declarative, or rather shorter, simpler, and easier to read. Let's take a moment to step back from Haskell and talk about HOFs in a more familiar context with JavaScript.

Just as with Haskell, the `map` function is an extremely useful tool for evaluating and applying functions to sets of data.

```javascript
const users = [
  { name: 'user1', age: 16, description: 'the first user' },
  { name: 'user2', age: 18, description: 'the second user' },
  { name: 'user3', age: 20, description: 'the third user' },
  { name: 'user4', age: 22, description: 'the fourth user' },
];
```
However, before we get into the map function, let's take a second to think about the old way of evaluating a collection in JavaScript. When I started to learn how to program, `for` loops were the best way to iterate through objects in a given collection. If we wanted to iterate through the array we defined above and return an array that only contained adults, we would be able to define that function like so:

```javascript
const getAdults = collection => {
  const results = [];

  for (let i = 0; i < collection.length; i++) {
    const user = collection[i];

    if (user.age >= 18) {
      results.push(user);
    }
  }

  return results;
};
```
In all reality, the above function will work just fine. However, we can do the exact same thing in a much more declaritive way. `Array.Prototype.filter()` is a native method that allows us to create a new array that only consists of elements that pass a given logical test.

```javascript
const getAdults = collection => (
  collection.filter(user => user.age >= 18)
);

getAdults(users); // [{ name: 'user2' ... }, { name: 'user3' ... }, { name: 'user4' ... }]
```

Look at that! By using a HOF, we were able to reduce the amount of code required to define the `getAdults` function from 13 to just 3 lines. As another example, what if we wanted to perform an operation on each item in the array while returning the same items in a new array? Well, in that case we'd use `Array.Prototype.map()`.

Let's say that we want to capitalize the name of each user in our array. That can be done easily like so:

```javascript
const capitalizeNames = collection => (
  collection.map(user => user.name.toUpperCase());
);

getAdults(users); // [{ name: 'USER1' ... }, { name: 'USER2' ... }, { name: 'USER3' ... }, { name: 'USER4' ... }]
```

And, while those were just a few simple examples of HOFs, I think that they really help to illustrate just how useful these functions are when it comes to performing calculations by defining what stuf *is* rather than by steps to perform an arbitrary state change.

