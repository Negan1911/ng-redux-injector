export default function () {
  let _reducers = {};

  this.getReducers = () => {
    return _reducers;
  };

  this.injectReducers = (reducers) => {
    Object.keys(reducers).forEach(key => _reducers[key] = reducers[key]);
  };

  // Don't expose anything in the $get because this only works in .config phase
  this.$get = angular.noop;
}