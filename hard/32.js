// 3.2) Write a function that validates if input object has required key. If not - throw new error. For i.e. validate(["name","surname"], {name:"Roman",surname:"Rodomansky"})should return true. For i.e. validate(["name","surname","age"], {name:"Roman",surname:"Rodomansky"})should throw error since "age" wasn't passed on object.

function validate(key, obj) {
  var objKeys = Object.keys(obj);
  var hasKey;

  outer: for (var i = 0; i < key.length; i++) {

    for (var j = 0; j < objKeys.length; j++) {
      if (key[i] === objKeys[j]) {
        hasKey = true;
        continue outer;
      } else {
        hasKey = false;
      }
    }

    if (hasKey === false) {
      throw new Error ("<" + key[i] + "> wasn't passed on object")
      return hasKey;
    }  
  }
  
  return hasKey;
}

validate(["name","surname"], {name:"Roman",surname:"Rodomansky"});
validate(["name","surname","age"], {name:"Roman",surname:"Rodomansky"});

/*
function validate(arr, person)
{
    var result = {};
    for(var i=0; i < arr.length; i++)
    {
        if (!(arr[i] in person)){
            result[arr[i]] = 1;
        }else{
            result[arr[i]] += 1;
        }
    }
    for (var prop in result) {
        if (result[prop] == 1) {
            throw prop;
        }
    }
    return true;
};

try{
    validate(['name', 'surname', 'age'],{name:"Roman",surname:"Rodomansky", age: "10"});
    validate(['name', 'surname', 'age'],{name:"Roman",surname:"Rodomansky"});
}catch (e) {
    console.log(e, "wasn't passed on object");
}
*/