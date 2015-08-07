function Robot() {
  this.name = generateName();
}

function generateName() {
  var letters = "";
  var nums = "";
  var alpha = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
  for(var i=0; i<3; i++) {
    nums += (Math.floor(Math.random()*10));
    letters += alpha[(Math.floor(Math.random()*27))];
  }
  return letters.substr(1) + nums;
}

module.exports = Robot;
