# ng-redux-injector
_Inject Your Reducers at .config phase_

This library will allow you to load in a dynamic way your Reducers,
Is useful when you work with components.

## Example

FILE: _./List/List.module.js_

```JS
import angular from 'angular';
import injector from 'ng-redux-injector';
import List from './List.reducer';

export default angular
  .module('List', [injector])
  .config(($ngReduxInjectorProvider) => {
    'ngInject';
    $ngReduxInjectorProvider.injectReducers({List});
  })

```

FILE: _./App.js_

```JS
import { combineReducers } from 'redux';
import angular from 'angular';
import ngRedux from 'ng-redux';
import injector from 'ng-redux-injector';

angular.module('App', [ngRedux, injector])
  .config(($ngReduxProvider, $ngReduxInjectorProvider) => {
    'ngInject';
    const reducers = combineReducers($ngReduxInjectorProvider.getReducers());

    $ngReduxProvider.createStoreWith(reducers, [logger(), thunk], [window.devToolsExtension()]);
  })

```

## API

---

`injectReducers([reducers])`: Save reducers into a temporary storage.

_reducers_: One or various reducers in the way that `combineReducers` understand.

---

`getReducers()`: Return the saved reducers in a way that `combineReducers` can process it.

---