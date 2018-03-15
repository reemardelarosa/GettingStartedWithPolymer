import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
    selector: 'hello-component',
    template: '<div>Hello there</div>'
})

export class HelloComponent {}
bootstrap(HelloComponent);