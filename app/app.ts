import 'angular';
import 'angular-route';
import 'angular-ui-bootstrap';
export module app {
    'use strict';
    function App() {
        return {
            restrict: 'E',
            template: `
        <div ng-cloak>
            <h1>Hello {{App.tittle}}</h1>
            {{1+1}}
        </div>
        `,
            controller: AppController,
            controllerAs: 'App'
        }
    }
    class AppController {
        tittle: string;

        constructor() {
            this.tittle = 'kaflan';
        }
    }
    angular.module('app', ['ui.bootstrap'])
        .directive('app', App);
    angular.bootstrap(document, ['app']);
}