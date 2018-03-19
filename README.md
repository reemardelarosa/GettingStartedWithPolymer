# GettingStartedWithPolymer

- [Overview](#overview)
- [First Element](#first-element)
- [Properties and Data Binding](#properties-and-data-binding)
- [Reuse and Styling](#reuse-and-styling)
- [Events and Behaviors](#events-and-behaviors)

## Overview
[Polymer Project](https://www.polymer-project.org/)

> Polymer is a Javascript Framework created by Google.

> [W3C](https://www.w3.org/standards/techs/components#w3c_all) Standards for Creating [Web Components](https://github.com/w3c/webcomponents)

- Custom Elements - component declaration
- Templates -  component template declaration
- Shadow DOM - encapsulation of the component
- HTML Imports - imports and reuse components

### Why Polymer.js?
> Custom Elements are fully integrated in Chrome but not in other browsers.

1. Grace fallback for Web Components.
2. Same declaration as specs change.
3. Helper functions
4. Just be getting better/faster - based on native code

### Polymer.js vs. Other Frameworks
### Components
- Declare the component.
- Declare the component template.
- Reuse the component in our Webpage.

#### Other Frameworks
1. [Angular.js](https://angular.io/) - [Github](https://github.com/angular/angular) and [Tutorial](https://www.w3schools.com/angular/default.asp)
2. [Ember.js](https://www.emberjs.com/) - [Github](https://github.com/emberjs/ember.js) and [Tutorial](https://www.w3schools.com/angular/default.asp)
3. [React.js](https://reactjs.org/) - [Github](https://github.com/facebook/react/) and [Tutorial](https://reactjs.org/tutorial/tutorial.html)

#### Angular.js

```js
import ... // Import necessary Angular Modules

@Component({ // Angular component template declaration
    selector: 'hello-component',
    template: '<div>Hello World</div>'
})

export class HelloComponent {} // Angular component declaration
bootstrap(HelloComponent); // Entry point for our app


<body>
    <hello-component></hello-component> // Insert Angular component in DOM
</body>

```

#### React.js
```js
var HelloComponent = // React component template declaration
React.createClass({
    render: function() {
        return (
            <div>Hello World</div>
        );
    }
});

ReactDOM.render( // React component declaration
    <HelloComponent />,
    document.body
);

<body>
    <hello-component></hello-component> // Insert React component in DOM
</body>
```
#### Ember.js
```js
<script type="text/x-handlebars" id="components/hello-component">
    <div>Hello There</div>  // Ember component template declaration
</script>

App = Ember.Application.create();
Ember.Component.extend({
    classNames: ["hello-component"] // Ember component declaration
});

<body>
<script type="text/x-handlebars">
    {{hello-component}} // Insert Ember component in DOM
</body>
```

## First Element
> [Polymer CDN](http://polygit.org/)

```html
Polymer with paper-input element
<base href="http://polygit.org/polymer+:master/components/">
<link href="polymer/polymer.html" rel="import">
<link rel="import" href="paper-input/paper-input.html">
```
### Parsing and HTML Elements
> HTML Element is an individual component of an HTML document or web page, once this has been parsed into the Document Object Model

> From Browser `<HTML CODE>` is `Parse, Render HTML Code` to display to user in browser.

[w3schools HTML Tags](https://www.w3schools.com/tags/)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Parsing and HTML Elements</title>
</head>
<body>
    <p title="hi">Hello there</p>
</body>
</html>
```

### Hello Element
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="https://polygit.org/components/webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="https://polygit.org/components/polymer/polymer.html">
    <title>Hello Element</title>
</head>
<body>

    <hello-element></hello-element>

    <dom-module id="hello-element">
        <template> Hello Component</template>
    </dom-module>

    <script>
        HTMLImports.whenReady(() => {
            Polymer({
                is: 'hello-element'
            });
        });   
    </script>
</body>
</html>
```

### Lifecycle Callbacks
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- <script src="https://polygit.org/components/webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="https://polygit.org/components/polymer/polymer.html"> -->
    <script src="https://bstavroulakis.com/pluralsight/polymer/bower_components/webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="https://bstavroulakis.com/pluralsight/polymer/bower_components/polymer/polymer.html" />
    <title>Class Style Constructor</title>
</head>
<body>
        
    <button onclick="document.querySelector('hello-element').remove()">Remove Hello Element</button>
        
    <script>
        HTMLImports.whenReady(() => {
            HelloElement = Polymer({
                is: "hello-element",
                created: () => {
                    this.textContent = "Hello Component";
                    console.log("Created: Hello Element has been created");
                },
                ready: () => {
                    console.log("Ready: Property values set and local DOM is initialized");
                    this.message = "hello2";
                },
                attached: () => {
                    console.log("Attached: The element is attached to the document. Can be called multiple times");;
                },
                detached: () => {
                    console.log("Detached: The element has been detached.");;
                },
                factoryImpl: () => {
                    console.log("Factory Impl: Only invoked when creating an event usigng the constructor");
                },
                attributeChanged: (attrName, oldValue, newValue) => {
                    console.log("AttributeChanged: Attribute " + attrName + " oldValue: " + oldValue + " newValue: " + newValue);
                }
            });

            var el = new HelloElement();
            document.body.appendChild(el);
            var el2 = document.createElement("hello-element");
            document.body.appendChild(el2);
        })
    </script>
</body>
</html>
```

### Type Extension
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://bstavroulakis.com/pluralsight/polymer/bower_components/webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="https://bstavroulakis.com/pluralsight/polymer/bower_components/polymer/polymer.html" />   <title>Class Style Constructor</title>
</head>
<body>
        
    <input type="text" is="hello-element" />
    <script>
        HTMLImports.whenReady(function() {
            HelloInput = Polymer({
                is: "hello-element",
                extends: 'input',
                created: function () {
                    this.value = "hello there";
                }
            });

            var inputElement = new HelloInput();
            console.log(inputElement instanceof HTMLInputElement);
            document.body.appendChild(inputElement);
            var inputElement2 = document.createElement('input', 'hello-element');
            console.log(inputElement2 instanceof HTMLInputElement);
            document.body.appendChild(inputElement2);
        });
    </script>
</body>
</html>
```

## Properties and Data Binding
### Properties
1. Type
- String
- Number
- Boolean
- Object
- Array
- Date
2. Value
- The text content for String, object for...
3. ReflectToAttribute
```js
<!-- alert-element.html -->
    Polymer({
        is: "alert-element",
        properties: {
            message: {
                type: String,
                value: "Hello World => ",
                reflectToAttribute: true
            }
        }
    });

<!-- Browser -->
 <alert-element message="Hello World => ">Hello World =>  </alert-element>
```
- message attribute is reflected to the alert-message in the DOM.
4. ReadOnly
5. Notify
6. Computed
7. Observer
### Data Binding
> `[]` - One-way binding

> `{}` - Two-way binding

> Select the element and type `$0` in the console to access the component.

> `$0._propertyEffects` to access arrays of properties.

```js
// Message setter pseudocode created automatically in Polymer
set message: (setVal) => {
let oldVal = this.__data__.message;
if(oldVal !== setVal) {
    1. this.__data__.message = setVal
    2. loop through property effects
    3. fire message-changed event
}
}
```

#### Data Binding in Object
```js
Polymer({
    is: "alert-element",
    properties: {
        message: {
            type: Object,
            value: () => {
                return {
                    text: "Hello World",
                    status: "success"
                }
            }
        }
    }
});

...
this.message.text = "Successfully Loaded"; // Can't update the `message.text`
this.message = {text: "Successfully Loaded", status: "Success"}; // Can update
this.notifyPath("message.text", "Notifypath updated"); // Can update
this.set("message.text", "Successfull set!"); // Can update
```

#### Native Element Binding
> after property, use `::` then correct event to bind the native element, e.g. property message::input
```html

{{message}}
<paper-input label="enter alert message "value="{{message::value-changed}}"></paper-input>
<input value="{{message::input}}">
```
```js
properties: {
    type: String,
    value: "Successful alert message!",
    notify: true
}

```
#### Computed Properties
> It is just another method that is being called everytime the parameter/property is updated.


## Reuse and Styling
### DOM Structure

```js

// DOM API

// Adding and Removing Elements:
Polymer.dom(parent).appendChild(node)
Polymer.dom(parent).insertBefore(node, beforeNode)
Polymer.dom(parent).removeChild(node)
Polymer.dom.flush()

// Parent and Child APIs
Polymer.dom(parent).childNodes
Polymer.dom(parent).children
Polymer.dom(node).parentNode
Polymer.dom(node).firstChild
Polymer.dom(node).lastChild
Polymer.dom(node).firstElementChild
Polymer.dom(node).lastElementChild
Polymer.dom(node).previousSibling
Polymer.dom(node).nextSibling
Polymer.dom(node).textContent
Polymer.dom(node).innerHTML

// Query Selector
Polymer.dom(parent).querySelector(selector)
Polymer.dom(parent).querySelectorAll(selector)

// Content APIs
Polymer.dom(contentElement).getDistributedNodes()
Polymer.dom(node).getDestinationInsertionPoints()

// Node Mutation API
Polymer.dom(node).setAttribute(attribute, value)
Polymer.dom(node).removeAttribute(attribute)
Polymer.dom(node).classList

```
### Reusable Elements
### Styling
### [W3C CSS VAriables Standards](https://www.w3.org/TR/css-variables-1/)
## Events and Behaviors