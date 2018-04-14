// 0.5) Build a function that do currency converter from USD to UAH, and reverse.

function convertFrom (currency, val, curs) {
  var res;

  switch (currency) {
    case "uah":
      return res = val / curs;
      break;
  
    case "usd":
      return res = val * curs;
      break;
  }
  
}

var value = 2550;
var curs = 25.5;

var usd = convertFrom ("uah", value, curs);
console.log(value + " uah is " + usd + " usd.");

value = 10;
uah = convertFrom ("usd", value, curs);
console.log(value + " usd is " + uah + " uah.");