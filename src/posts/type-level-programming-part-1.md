---
path: "/2018/04/10/type-level-programming-part: 1"
date: "2018-04-10T17:12:33.962Z"
title: "Type Level Programming: Part 1"
---

As tools and methodologies for software development have evolved, the functional programming paradigm has washed over the tools we use across the stack.  Haskell has been a [go-to tool for developers to use for data analysis](https://github.com/BinRoot/Haskell-Data-Analysis-Cookbook) for close to three decades. On the other end, languages like [TypeScript](https://www.typescriptlang.org/) and [Elm](http://elm-lang.org/) have hit the front-end landscape like a wave. Thus allowing developers to develop type-safe applications that compile to browser-readable JavaScript. You've probably heard functional programming advocates discussing all the benefits of these tools and what you can do by putting more information into a type system. And well, they're right. On the front end, if you look closely, you can see [how languages like Elm influenced the architecture libraries like Redux](https://redux.js.org/introduction/prior-art#elm).

Statically-typed programming languages give you more control over how you build software.

As a note, I'm not going to spend time covering basic types and primitives here. Understanding higher kinded and dynamically kinded types requires a solid understanding of Haskell's underlying basic type system and their primitives. If you don't have that foundation, this may not be the right article for you. It may end up being more confusing than helpful.

### The Higher Kinds
As a quick refresher, at its core, a type is a way of classifying *things*. We assign types to functions and use them to compare a function's declared type and the values it returns. So, how do we define types in Haskell? If you're not already aware, a [value constructor accepts a value and yields a value](http://learnyouahaskell.com/making-our-own-types-and-typeclasses). In a similar manner, a type constructor accepts a type and yields a type.

```Haskell
data Maybe a
  = Just a
  | Nothing
```

Above, we declare a type **Maybe** that consists of two data constructors. **Just**, which accepts a value of type a, and **Nothing**, which does not accept any values at all. However, before we go any further, let's discuss those data constructors a bit more in depth.

```Haskell
ghci> :t Just
Just :: a -> Maybe a
ghci> :t Nothing
Nothing :: Maybe a
```

**Just** has a function type. This means that any value we give it will become a **Maybe** of that type. **Nothing**, however, can conjure up whatever type it wants without needing a value at all. This pattern is actually pretty common, and when we declare a type `Nothing :: Maybe a`, what we're actually saying is that **Nothing** is. value of **Maybe a** for any and all types **a** that may be provided to it.

Armed with that knowledge, you might be driven to ask: what is the type of **Maybe**?

```Haskell
ghci> :t Maybe

\<interactive\>:1:1: error:
  • Data constructor not in scope: Maybe
  • Perhaps you meant variable ‘maybe’ (imported from Prelude)
```

Hold on a second. What's going on here? Does this mean that types don't have types of their own? Well, sort of. Types have *kinds*.

```Haskell
ghci> :Kind Maybe
Maybe :: * -> *
```

What? What is *****? ***** is the *kind* of types which have values. At its core, what this means is that the *kind* of **Maybe** accepts a type that has values. This is called [higher kinded polymorphism](https://www.stephanboyer.com/post/115/higher-rank-and-higher-kinded-types). As a generalization, higher-minded polymorphism is a method for abstracting types from values. It's analogous to how functions already abstract values from values.

```Haskell
Data HigherKinded a b
 = Bare b
 | Wrapped (a b)
```

Haskell's kind inference is fairly simple and straightforward. If you scroll back up to the top, you'll see the similarities between it and Haskell's type inference. This is because when we declare a type that applies a function **a** to a value **b**, Haskell knows that **a** must have the kind `* -> *`, and a type of *kind* ***** that returns a type of *kind* *****. In English, this means that `HigherKinded` accepts two types: the first of which is a function that does not have values itself, but when provided with a type that *does* have values, those values are then applied to the function. The second argument is simply a type that have values. Finally, it returns a type that can have ordinary values. *Think about how the **Maybe** type's kind would be defined in this way.*

### Dynamically Kinded Programming
Moving on from higher kinded types, let's take a moment to discuss its lesser-known counterpart. The easiest way to discuss dynamically kinded types is through example.

```Haskell
ghci> data Void
ghci> :kind Void
Void :: *
```

When we declare a type **Void** and a subsequently check for that type's kind, we're greeted by *****. Are you surprised? In the same way that you can productively program at the value level with dynamic types as you learn how to do when building a foundation in functional programming, you can also program at the type level with dynamic kinds.

_At its core, that's what ***** represents_.

Now that you understand that, we can start encoding our first type level numbers. As an example, we can start by defining types for [Peano natural numbers](https://en.wikipedia.org/wiki/Peano_axioms). Defining our numbers will be as easy as defining two data constructors, **Zero** and the **Succ** (Successor) of some natural number.

```Haskell
data Zero
data Succ a

type One = Succ Zero
type Two = Succ One
type Three = Succ Two
type Four = Succ (Succ (Succ (Succ Zero)))
```

As you can see from the example above, declaring our number types is as easy as using functional application with the two data constructors that we defined above. When defining subsequent types such as **Two**, or **Three**, you can observe that we can either reference already defined types to define the new type, or we can use functional application as in the case of the **Four** type. However, this method isn't without its caveats. There's nothing preventing us from declaring a type with `type One = Succ Bool`, which doesn't make any sense. In order to get around this, we'll need to introduce more kinds than the mere ***** kind that we've been dealing with until this point.

### Data Kinds
The `DataKinds` GHC extension allows us to extend the functionality of data constructors into type constructors. As a consequence this also extends the type constructors into kind constructors. Just as with the above information, the best way to convey what this extension allows you to do is through example.

```Haskell
{-# LANGUAGE DataKinds #-}

data Nat = Zero | Succ Nat
```

The definition above declares a new type **Nat** that consists of two value constructors, **Zero** and **Succ**. The `DataKinds` extension introduced a new kind **Nat**, which exists in a separate namespace. In addition to this, we also get two new types, **'Zero**, which has the kind of **Nat**, and **'Succ**, which accepts a type of kind **Nat**.

```Haskell
ghci> :kind 'Zero
'Zero :: Nat
ghci> :kind 'Succ
'Succ :: Nat -> Nat
```

Fairly simple, right? And as an aside, If we ever need to promote something a level up, we prefix the name with an apostrophe: **'**. Where it can be ambiguous, the **'** is used to disambiguate. Otherwise, Haskell will infer which you mean. After all, if we check the types, they should look the same!

```Haskell
ghci> :type Zero
Zero :: Nat
ghci> :type Succ
Succ :: Nat -> Nat
```

And that's all that there is to it when it comes to extending our type and kind constructors. We now have the ability to architect pretty basic types and kinds. However, in order to actually use them, though, we'll need to dive in a little deeper.

*In the next article, part two of this series on type level programming, we'll discuss how to implement these types with GADTs, Vectors, Type Families, and more.*