import React from 'react';

const Blog = () => {
    return (
        <div className="container">
            <div class="row">
            <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"> How does prototypical inheritance work?</h5>
        <p class="card-text">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. </p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"> What is a unit test? Why should we write unit tests?</h5>
        <p class="card-text">Let's start with the definition: Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">What are the different ways to manage a state in a React application</h5>
        <p class="card-text">When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

There are four main types of state you need to properly manage in your React apps:

</p>
<ul>
    <li>Local state </li>
    <li>Global state </li>
    <li>Server state </li>
    <li>URL state </li>



</ul>
Let's cover each of these in detail:

Local (UI) state – Local state is data we manage in one or another component.

Local state is most often managed in React using the useState hook.

For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

Global (UI) state – Global state is data we manage across multiple components.

Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

Sometimes state we think should be local might become global.

Server state – Data that comes from an external server that must be integrated with our UI state.

Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.


      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">  React vs. Angular vs. Vue?</h5>
        <p class="card-text">Angular vs Vue
But now a question comes – which one is better, Vue or Angular? As we have seen a comparison between Angular JS vs React JS in the above section, let’s understand how Vue and Angular differ from each other and which one is a better framework for you.

Angular is a TypeScript-based structure framework, while Vue is a progressive lightweight framework. Both - Angular JS and React JS frameworks are used to create web interfaces for front end development.
Angular is Google’s matured and advanced JavaScript framework based on TypeScript, whereas Vue is a progressive open-source front-end JavaScript framework created by Evan You.
While comparing Vue JS vs Angular, Vue is known for its clean architecture and its elegant designs. On the other hand, Angular is considered for many organizations due to its vast functionality and high performance.
React vs Vue
While Talking about Vue JS vs React, both front-end tools are used to build web applications for enterprises. However, both open-source tools have their own use cases; we will explore comprehensive differences - React JS vs Vue JS.

Vue is a popular progressive, open-source framework for developing complex user interfaces, while React is a JavaScript library for building web development for interactive elements on UIs. React is also used to develop SPAs and mobile apps.
Vue JS is more oriented to novice developers, while React requires in-depth knowledge of JavaScript. React uses a virtual DOM (copy of the actual DOM) to interact with HTML files, but every element is represented as a JavaScript object. Vue has two-way binding and uses a virtual DOM.
Now is the time to differentiate each technology and understand in the given tabular format. This comparison table will help you choose the right and best tool among the three-.</p>
        
      </div>
    </div>
  </div>


</div>
        </div>
    );
};

export default Blog;