require('es6-promise').polyfill();

var fetch = require('isomorphic-fetch');
var fetchReject = require('fetch-reject');

var newFetch = fetchReject.createFetchReject(fetch);

module.exports = newFetch;

// So fetch stays consistent through the whole project
module.exports.replaceGlobal = () => {
  if (typeof global !== 'undefined') {
    global.fetch = newFetch;
  }
  if (typeof window !== 'undefined') {
    window.fetch = newFetch;
  }
};
