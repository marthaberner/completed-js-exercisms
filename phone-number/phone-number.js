function PhoneNumber(num) {
  this.stripNum = num.replace(/\D/g,'');
  this.validNum = validate(this.stripNum);
}

PhoneNumber.prototype.number = function () {
  return this.validNum;
}

PhoneNumber.prototype.areaCode = function () {
  return this.validNum.slice(0, 3);
}

PhoneNumber.prototype.toString = function() {
  return "(" + this.areaCode() + ") " +
  this.validNum.slice(3, 6) + "-" + this.validNum.slice(6, 10);
}

function validate(num) {
  if(isLong(num) && isValid(num)){
    return num.substr(1);
  } else {
    return isValid(num) ? num : "0000000000";
  }
}

function isLong (num) {
  return num.length === 11;
}

function isValid(num) {
  return num[0] === '1' && num.length >= 10;
}

module.exports = PhoneNumber;
