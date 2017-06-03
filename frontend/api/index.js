import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest/client';
import es6promise from 'es6-promise';
import fetch from 'isomorphic-fetch';

es6promise.polyfill();

const client = feathers()
  .configure(hooks)
  .configure(rest('http://localhost:3030').fetch(fetch));

export default client;