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

// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    collection[id][prop] = value;
  } else if (prop === "tracks" && !collection[id].hasOwnProperty("tracks")) {
    collection[id][prop] = [];
    collection[id][prop].push(value);
  } else if (prop === "tracks" && value !== "") {
    collection[id][prop].push(value);
  } else if (value === "") {
    delete collection[id][prop];
  }

  return collection;
}

// Alter values below to test your code
//updateRecords(5439, "artist", "ABBA");
//updateRecords(2468, "tracks", "Free");

//------------------------------------------------------------------------------
//Symmetric Difference

function sym() {
  var arr = [];
  var args = Array.prototype.slice.call(arguments);
  recursiveCheck(args);

  //Check if a num is inside an array
  function isInArray(n, arrSearch) {
    for (var i = 0; i < arrSearch.length; i++) {
      if (n === arrSearch[i]) {
        return true;
      }
    }
    return false;
  }

  //Build the symmetric difference array
  function recursiveCheck(args) {
    arr = [];
    if (args.length > 2) {
      for (var i = 0; i < args[0].length; i++) {
        if (!isInArray(args[0][i], args[1])) {
          if (!isInArray(args[0][i], arr)) {
            arr.push(args[0][i]);
          }
        }
      }
      for (i = 0; i < args[1].length; i++) {
        if (!isInArray(args[1][i], args[0])) {
          if (!isInArray(args[1][i], arr)) {
            arr.push(args[1][i]);
          }
        }
      }
      args.splice(0, 2);
      args.unshift(arr);
      return recursiveCheck(args);
    } else {
      for (var i = 0; i < args[0].length; i++) {
        if (!isInArray(args[0][i], args[1])) {
          if (!isInArray(args[0][i], arr)) {
            arr.push(args[0][i]);
          }
        }
      }
      for (i = 0; i < args[1].length; i++) {
        if (!isInArray(args[1][i], args[0])) {
          if (!isInArray(args[1][i], arr)) {
            arr.push(args[1][i]);
          }
        }
      }
    }
  }
  return arr;
}

//sym([1, 2, 3], [5, 2, 1, 4]);
