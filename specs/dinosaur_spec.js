var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe("Dinosaur", function() {

  var plesiosaur;

  beforeEach(function() {
    plesiosaur = new Dinosaur("plesiosaur", 2);
  });

  it('should have a type', function(){
    assert.strictEqual(plesiosaur.type, "plesiosaur");
  });

});
