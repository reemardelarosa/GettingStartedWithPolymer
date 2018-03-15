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