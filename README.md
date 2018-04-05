# isomorphic-fetch-reject

This package is using [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch) and extends it to reject on HTTP error.

> Standard fetch does not throw on HTTP errors (>= 400 status code). This wrapper allows it to do so.

This package is perfect for apps that render on both the server and the client side.

## Install

```sh
npm i -S isomorphic-fetch-reject
```

```sh
yarn add isomorphic-fetch-reject
```

## Usage

You can either use it like any other package:

```js
import fetch from 'isomorphic-fetch-reject';

// Use just like the standard fetch
fetch('https://example.com/some/path')
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
```

Or you can add the fetch function directly to the `global`/`window` so you can use it from anywhere:

```js
// file1.js
import fetch from 'isomorphic-fetch-reject';
fetch.replaceGlobal();
```

```js
// file2.js
// Use just like the standard fetch
fetch('https://example.com/some/path')
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
```
