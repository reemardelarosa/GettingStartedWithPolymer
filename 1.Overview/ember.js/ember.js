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