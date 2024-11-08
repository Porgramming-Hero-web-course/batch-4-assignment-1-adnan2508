# Why Are Type Guards Necessary? Discussing Various Types of Type Guards and Their Use Cases

In TypeScript, **type guards** play a vital role in ensuring safe and predictable code. They help developers manage complex data types by enabling precise control over type-checking at runtime. This blog post explores why type guards are essential, various types of type guards, and practical examples of their usage.

## Why Are Type Guards Necessary?

TypeScript’s strength lies in its ability to add types to JavaScript, which reduces runtime errors and improves code readability. However, since JavaScript is a dynamic language, some types cannot be determined until runtime. Type guards are functions or expressions that perform these runtime checks, letting TypeScript know which type we’re working with. This allows for more precise type-safety, especially when handling **union types** (multiple possible types for a variable).

### Benefits of Using Type Guards

- **Improved Type Safety**: Type guards help prevent errors by ensuring that the operations on a variable are valid for its type.
- **Better Code Readability**: Type guards make it easier for developers to understand the flow of data types.
- **Enhanced Developer Experience**: Type guards reduce the need for casting and allow TypeScript to automatically infer types, leading to fewer errors and better code predictions.

## Types of Type Guards and Their Use Cases

Let’s look at some of the most common types of type guards in TypeScript and when to use them.

### 1. `typeof` Type Guard

The `typeof` type guard is ideal for primitive types such as `string`, `number`, and `boolean`. This type guard is simple and can be used directly in `if` statements to verify the type of a variable.

**Example:**

```typescript
function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log("String value:", value.toUpperCase());
    } else {
        console.log("Number value:", value.toFixed(2));
    }
}

printValue("Hello"); // Output: String value: HELLO
printValue(123.456); // Output: Number value: 123.46

class Dog {
    bark() {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else if (animal instanceof Cat) {
        animal.meow();
    }
}

makeSound(new Dog()); // Output: Woof!
makeSound(new Cat()); // Output: Meow!

### 2. `instanceof` Type Guard
class Dog {
    bark() {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else if (animal instanceof Cat) {
        animal.meow();
    }
}

makeSound(new Dog()); // Output: Woof!
makeSound(new Cat()); // Output: Meow!


### 3. Custom Type Guards (User-Defined Type Guards)

interface Square {
    shape: "square";
    sideLength: number;
}

interface Circle {
    shape: "circle";
    radius: number;
}

function isSquare(shape: Square | Circle): shape is Square {
    return shape.shape === "square";
}

function calculateArea(shape: Square | Circle) {
    if (isSquare(shape)) {
        return shape.sideLength * shape.sideLength;
    } else {
        return Math.PI * shape.radius * shape.radius;
    }
}

const square: Square = { shape: "square", sideLength: 5 };
const circle: Circle = { shape: "circle", radius: 3 };

console.log(calculateArea(square)); // Output: 25
console.log(calculateArea(circle)); // Output: 28.27
