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

```
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
```
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
```
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

```
Polymer with paper-input element
<base href="http://polygit.org/polymer+:master/components/">
<link href="polymer/polymer.html" rel="import">
<link rel="import" href="paper-input/paper-input.html">
```
### Parsing and HTML Elements
> HTML Element is an individual component of an HTML document or web page, once this has been parsed into the Document Object Model

> From Browser `<HTML CODE>` is `Parse, Render HTML Code` to display to user in browser.

[w3schools HTML Tags](https://www.w3schools.com/tags/)

```
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

## Properties and Data Binding
## Reuse and Styling
## Events and Behaviors