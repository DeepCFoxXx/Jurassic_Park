var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js');

describe('Park', function() {

  var park;
  var plesiosaur;
  var dilophosaurus;
  var velociraptor1;
  var velociraptor2;
  var velociraptor3;
  var velociraptor4;


  beforeEach(function() {
    park = new Park();
    plesiosaur = new Dinosaur("plesiosaur", 2);
    dilophosaurus = new Dinosaur("dilophosaurus", 2);
    velociraptor1 = new Dinosaur("velociraptor", 3);
    velociraptor2 = new Dinosaur("velociraptor", 3);
    velociraptor3 = new Dinosaur("velociraptor", 3);
    velociraptor4 = new Dinosaur("velociraptor", 3);
  });

  it('should start empty', function() {
    assert.strictEqual(park.enclosure.length, 0);
  });

  it('should be able to add Dinosaur', function(){
    park.addDinosaur(plesiosaur);
    assert.strictEqual(park.enclosure.length, 1);
  });

  it('should be able to remove all dinosaurs by type', function(){
    park.addDinosaur(plesiosaur);
    park.addDinosaur(dilophosaurus);
    park.addDinosaur(velociraptor1);
    park.addDinosaur(velociraptor2);
    park.addDinosaur(velociraptor3);
    park.addDinosaur(velociraptor4);
    park.removeDinosaurByType("velociraptor");
    assert.strictEqual(park.enclosure.length, 2);
  });

  it('should get all the dinosaurs with an average offspring count of more than 2', function(){
    park.addDinosaur(dilophosaurus);
    park.addDinosaur(velociraptor1);
    park.addDinosaur(velociraptor2);
    assert.strictEqual(park.dinosaursWithOffSpringMoreThan(2).length, 2);
  });

});
