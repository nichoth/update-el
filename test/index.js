var test = require('tape');
var spec = require('yo-yo/test/tests');
var hyperx = require('hyperx');
var h = require('bel/create-element');
var updateEl = require('../');

spec(hyperx(h), updateEl, test);
