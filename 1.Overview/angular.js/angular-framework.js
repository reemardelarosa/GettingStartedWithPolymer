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