//Advanced Algorithm Scripting
//
//------------------------------------------------------------------------------
//Validate US Telephone Numbers

function telephoneCheck(str) {
  var arr = [];
  var count = 0;
  //Check for non opening/closing parenteses
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == ")") {
      count++;
    }
  }
  if (count === 1) {
    return false;
  }

  //Check for everything insede parenteses
  if (str[0] == "(" && str[str.length - 1] == ")") {
    return false;
  }

  //Check for number starting with -
  if (str[0] == "-") {
    return false;
  }

  //Remove unnecessary characters
  str = str.replace(/\-/g, "");
  str = str.replace(/\(/g, "");
  str = str.replace(/\)/g, "");
  str = str.replace(/ /g, "");

  var size = str.length;

  //Check if the phone number has at least 10 digits
  if (str.length < 10)
    return false;
  else {
    //Create an array with the formated phone number
    arr.push(str.substring(0, size - 10));
    arr.push(str.substring(size - 10, size - 7));
    arr.push(str.substring(size - 7, size - 4));
    arr.push(str.substring(size - 4, size));

    //Convert the strings in the array to integers
    for (var i = 0; i < arr.length; i++) {
      arr[i] = parseInt(arr[i], 10);
    }

    //Check if final array is valid

    //Check if the country code is from US (1) or no country code at all
    if (size > 11) {
      return false;
    }
    if (size === 11) {
      if (arr[0] != 1) {
        return false;
      }
      for (var i = 1; i < arr.length; i++) {
        if (typeof arr[i] != 'number') {
          return false;
        }
      }
    } else {
      if (!isNaN(arr[0])) {
        return false;
      }
      for (var i = 1; i < arr.length; i++) {
        if (typeof arr[i] != 'number') {
          return false;
        }
      }
    }
  }
  return true;
}

//telephoneCheck("1 555 555 5555");

//------------------------------------------------------------------------------
//Record Collection
