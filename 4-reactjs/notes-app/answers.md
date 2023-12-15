Q: Explain using code examples what is meant by props and state in React JS?

Answer: 

Props
Props are like instructions or data packages that are passed from parent components to their child components. They tell the child component what to do or what data to display. Props are like immutable constants, which means they can't be changed directly within the child component.

Here is an example of using props:

// Parent Component
const App = () => {
  const name = 'John Doe';

  return (
    <ChildComponent name={name} />
  );
};

// Child Component
const ChildComponent = ({ name }) => {
  return <h1>Hello, {name}</h1>;
};

State
State, on the other hand, is like the internal memory or working data of a component. It's the data that is specific to that component and can be changed within that component. State is used to track the dynamic behaviour of a component, such as user input or the current page count.

Here is an example of state in a basic click counter application, the “counter” component maintains its own state “count”, which represents the current count value. The count state is then updated with “IncrementCount” and “decrementCount” depending on the users’ actions:

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>

      
<button
 
onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <p>Current count: {count}</p>
    </div>
  );
};


Q: In functional programming, what does the term functor mean? Can you give an example in JavaScript?

Answer:

In functional programming, a functor is like a special type of box that holds data. This box can be transformed without changing its overall structure or breaking the data inside. Functors are like containers for data that can be modified while maintaining their integrity.

Functors have two important properties that make them useful in functional programming:


Identity Function Preservation 
When you apply a functor to the identity function, it returns the original functor itself. This means that if you don't apply any transformations, the data remains unchanged.

In JavaScript, the Array type is an example of a functor. You can use the map function to transform each element in an array without affecting the overall array structure.


For example, here we have an array of numbers:
const numbers = [1, 2, 3];

We can then use the map function on the array to double all the numbers while the structure remains the same:
const doubledNumbers = numbers.map((number) => number * 2);



Composition
You can chain together multiple functor transformations using the map function. This allows you to modify data in a hierarchical manner, applying transformations to nested structures without breaking the overall structure.


Q: We have looked at three kinds of asynchronous programming mechanisms, namely callbacks, promises and streams. Mention one advantage and one disadvantage of each type.

Answer:

Callbacks
Advantages
•	Simple and easy to use
•	Can be used with any code that can be interrupted

Disadvantages
•	Code can become difficult to read and maintain as the number of callbacks increases
•	Can be difficult to handle errors
•	Can be difficult to chain multiple asynchronous operations together


Promises
Advantages
•	More predictable and easier to reason about than callbacks
•	Can be chained together to handle multiple asynchronous operations
•	More error-prone than callbacks

Disadvantages
•	Can be more verbose than callbacks
•	Can be difficult to understand how exceptions are handled


Streams
Advantages
•	Can be used to handle data that is generated asynchronously
•	Can be used to process data in a pipeline
•	More efficient than callbacks and promises for handling large amounts of data

Disadvantages
•	Can be more complex to use than callbacks and promises
•	Not as widely supported as callbacks and promises

Q: With the aid of a diagram and example code, describe the Cascading Style Sheets (CSS) Box Model and show how it can be used to space DOM elements

Answer:

The CSS Box Model is a styling model used in web pages and is basically a box that wraps around each HTML element. It is divided into 4 boxes, each is contained within the other in the following order, margin, border, padding and content. The margin is the outermost box, which is transparent and can be set to any size giving space around the border. The border wraps around the padding box (which itself wraps around the content), this is usually not transparent. Then padding is another area similar to margin but gives space within the border of the element. Finally the last box is the content box and contains the content of the element.



Q: Detail how the browser loads and bootstraps a rich web application from an initial URL.

Answer:

The process starts with the user entering a URL in the address bar which the browser sends a request to the server at that URL, the server then sends a response back to the browser which will contain the requested web page along with any other resources such as images, CSS and JavaScript files. The browser will then load the HTML page and will create a Document Object Model (DOM) tree, which is a representation of the HTML page’s structure which the browser uses to render the page. The browser then loads the CSS files and applies the CSS rules to the DOM elements. This is followed by the loading of the JavaScript files, which are then executed. 

Finally the web app is bootstrapped where the initial JavaScript file is executed, initializing the application, and creating any necessary states. At this point the application is ready to respond to user interactions.
