import injectorProvider from './ngReduxInjector';

export default angular.module('ngReduxInjector', [])
  .provider('$ngReduxInjector', injectorProvider)
  .name;