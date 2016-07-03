import 'angular';
import 'angular-route';
import 'angular-ui-bootstrap';
function App() {
    return {
        restrict: 'E',
        template: `
            <h1>Hello from npm and webpack</h1>
            <h2>
                Hello from typescrypt: 
            </h2>
            <h3>
                Hello Kaf I love you forever
            </h3>
        `,
        controller: AppController,
        controllerAs: 'App'
    }
}
class AppController {

    constructor() {
    }
}
angular.module('app', [])
    .directive('app', App);
angular.bootstrap(document, ['app'])