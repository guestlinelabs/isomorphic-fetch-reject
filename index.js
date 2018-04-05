require('es6-promise').polyfill();

var fetch = require('isomorphic-fetch');

function onResponse(res) {
  if (res.ok) {
    return res;
  }

  var error = new Error();
  error.status = res.status;
  error.response = res;
  throw error;
}

function newFetch() {
  return fetch.apply(this, arguments).then(onResponse);
}

module.exports = newFetch;
module.exports.replaceGlobal = function() {
  if (typeof global !== 'undefined') {
    global.fetch = newFetch;
  }
  if (typeof window !== 'undefined') {
    window.fetch = newFetch;
  }
};
