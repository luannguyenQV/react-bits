/**
 * Stateless functions are a great way to define highly reusable components.
 * They don't hold state; they're just functions.
 *
 *  One of the advantages of using functions includes a very clear separation of view and logic (see the first point), because there is no room for any logic.
 *  The absence of the this keyword and thus lacking the ability to add functions that do internal state handling and logic further enforces this separation.
 *
 * Stateless functional components will soon offer improved performance as well.
 * Since there’s no state or lifecycle methods to worry about, the React team plans to avoid unnecessary checks and memory allocations in future releases.
 *
 * @Reference:
 * https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.uf2v8yt3y
 * https://medium.com/javascript-inside/some-thoughts-on-function-components-in-react-cb2938686bc7#.4nuietgvb
 * https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.rnyamfbvv
 * http://www.zsoltnagy.eu/container-components-and-stateless-functional-components-in-react/
 *
 * Pros and Cons: http://stackoverflow.com/questions/40703675/react-functional-stateless-component-purecomponent-component-what-are-the-dif
 * Minor Optimization: http://cooperm.com/2016/10/19/clean-up-stateless-react-components-with-inline-render-functions/
 */

import {PropTypes, ContextTypes} from "react";

const Greeting = () => <div>Hi there!</div>;

// They get passed props and context
const Greeting = (props, context) =>
  <div style={{color: context.color}}>Hi {props.name}</div>;

// They can define a local variable, when a function block is used.
const Greeting = (props, context) => {
  const style = {
    fontWeight: "bold",
    color: context.color
  };

  return <div style={style}>{props.name}</div>
};

// But you could get the same result by using other functions.
const getStyle = context => ({
  fontWeight: "bold",
  color: context.color
});

const Greeting = (props, context) =>
  <div style={getStyle(context)}>props.name</div>;

// They can have defined defaultProps, propTypes and contextTypes.
Greeting.propTypes = {
  name: PropTypes.string.isRequired
};
Greeting.defaultProps = {
  name: "Guest"
};
Greeting.contextTypes = {
  color: PropTypes.string
};

