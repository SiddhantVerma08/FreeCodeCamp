// Create a Simple JSX Element
const JSX = <h1>Hello JSX!</h1>;

// Create a Complex JSX Element
const JSX1 = <div>
    <h1>this is heading</h1>
    <p>This is para</p>
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>;

// Add Comments in JSX
const JSX2 = (
    <div>
        <h1>This is a block of JSX</h1>
        {/* This is comment*/}
        <p>Here's a subtitle</p>
    </div>
);

// Render HTML Elements to the DOM
const JSX3 = (
    <div>
        <h1>Hello World</h1>
        <p>Lets render this to the DOM</p>
    </div>
);
// Change code below this line

ReactDOM.render(JSX3, document.getElementById("challenge-node"))

// Define an HTML Class in JSX
const JSX4 = (
    <div className="myDiv">
        <h1>Add a class to this div</h1>
    </div>
);

// Learn About Self-Closing JSX Tags
const JSX5 = (
    <div>
        <h2>Welcome to React!</h2> <br />
        <p>Be sure to close all tags!</p>
        <hr />
    </div>
);

// Create a Stateless Functional Component
const MyComponent1 = function () {
    // Change code below this line
    return (
        <div>Something is inside </div>
    )


    // Change code above this line
}

// Create a React Component
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // Change code below this line
        return (
            <div>
                <h1>Hello React!</h1>
            </div>
        )


        // Change code above this line
    }
};

// Create a Component with Composition
const ChildComponent = () => {
    return (
        <div>
            <p>I am the child</p>
        </div>
    );
};

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>I am the parent</h1>
                { /* Change code below this line */}
                <ChildComponent />

                { /* Change code above this line */}
            </div>
        );
    }
};

// Use React to Render Nested Components
const TypesOfFruit = () => {
    return (
        <div>
            <h2>Fruits:</h2>
            <ul>
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul>
        </div>
    );
};

const Fruits = () => {
    return (
        <div>
            { /* Change code below this line */}
            <TypesOfFruit />
            { /* Change code above this line */}
        </div>
    );
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                { /* Change code below this line */}
                <Fruits />
                { /* Change code above this line */}
            </div>
        );
    }
};

// Compose React Components
class Fruits1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Fruits:</h2>
                { /* Change code below this line */}
                <NonCitrus />
                <Citrus />

                { /* Change code above this line */}
            </div>
        );
    }
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                { /* Change code below this line */}
                <Fruits1 />

                { /* Change code above this line */}
                <Vegetables />
            </div>
        );
    }
};

// Render a Class Component to the DOM
class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                {/* Change code below this line */}
                <Fruits />
                <Vegetables />

                {/* Change code above this line */}
            </div>
        );
    }
};

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"))

// Write a React Component from Scratch
// Change code below this line
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>My First React Component!</h1>
            </div>
        )
    }
}
ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"))

// Pass Props to a Stateless Functional Component
const CurrentDate = (props) => {
    return (
        <div>
            { /* Change code below this line */}
            <p>The current date is: {props.date}</p>
            { /* Change code above this line */}
        </div>
    );
};

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>What date is it?</h3>
                { /* Change code below this line */}
                <CurrentDate date={Date()} />
                { /* Change code above this line */}
            </div>
        );
    }
};

// Pass an Array as Props
const List = (props) => {
    { /* Change code below this line */ }
    return <p>{props.tasks.join(', ')}</p>
    { /* Change code above this line */ }
};

class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>To Do Lists</h1>
                <h2>Today</h2>
                { /* Change code below this line */}
                <List tasks={["Walk", "Cook", "Bake"]} />
                <h2>Tomorrow</h2>
                <List tasks={["Study", "Code", "Eat"]} />
                { /* Change code above this line */}
            </div>
        );
    }
};

// Use Default Props
const ShoppingCart = (props) => {
    return (
        <div>
            <h1>Shopping Cart Component</h1>
        </div>
    )
};
// Change code below this line
ShoppingCart.defaultProps = {
    items: 0
};

// Override Default Props
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
  
  Items.defaultProps = {
    quantity: 0
  }
  
  class ShoppingCarts extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      { /* Change code below this line */ }
      return <Items quantity={10}/>
      { /* Change code above this line */ }
    }
  };

// Use PropTypes to Define the Props You Expect
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  // Change code below this line
  Items.propTypes = {
    quantity: PropTypes.number.isRequired
  };
  
  // Change code above this line
  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCartes extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };

// Access Props Using this.props
class App extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              { /* Change code below this line */ }
              <Welcome name="Jessica"/>
              { /* Change code above this line */ }
          </div>
      );
    }
  };
  
  class Welcome extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            { /* Change code below this line */ }
            <p>Hello, <strong>{this.props.name}</strong>!</p>
            { /* Change code above this line */ }
          </div>
      );
    }
  };

// Review Using Props with Stateless Functional Components
class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };
  // Change code below this line
  const Camper = props => <p>{props.name}</p>;
  
  Camper.defaultProps = {
    name: "CamperBot"
  };
  
  Camper.propTypes = {
    name: PropTypes.string.isRequired
  };
  