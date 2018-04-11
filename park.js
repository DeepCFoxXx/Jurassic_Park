var Park = function () {
  this.enclosure = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.removeDinosaurByType = function (type) {
  var dinosaursToKeep = []
  for (var i = 0; i < this.enclosure.length; i++) {
    if (this.enclosure[i].type !== type) {
      dinosaursToKeep.push(this.enclosure[i]);
    }
  }
  this.enclosure = dinosaursToKeep;
}

Park.prototype.dinosaursWithOffSpringMoreThan = function (amount) {
  var foundDinosaurs = [];
  for (var i = 0; i < this.enclosure.length; i++) {
    if (this.enclosure[i].annualOffspring > amount) {
      foundDinosaurs.push(this.enclosure[i]);
    }
  }
  return foundDinosaurs;
}

module.exports = Park;
