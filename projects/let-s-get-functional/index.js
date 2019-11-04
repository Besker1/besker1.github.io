// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-besker1');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(customers) {
 let array = _.filter(customers,function(customer,index,array) {
    return customer.gender === "male";
});
return array.length;
};

var femaleCount = function(array){
      return _.reduce(customers, function(acc, currentE, index) {
        if(currentE.gender === "female") {
            acc++;
        }
       return acc;
       
        
    }, 0);
    
    
    
};

var oldestCustomer = function(array){
    return _.reduce(array, function(acc,element, index){ 
         if(acc.age < element.age){
              acc = element.name;
              //console.log(acc);
              
              
            }
            return acc;
            });
            
};

var youngestCustomer = function (array){
       array.sort((a,b) => { return a.age - b.age;
          
       });
           return array[0].name;
       
};


var averageBalance = function (array){
    let newArr = _.reduce(array, function(acc, elem, index) {
        let newStr = elem.balance.slice(1);
        let newStr2 = newStr.split(',').join('');
        let num = parseFloat(newStr2);
        //console.log(num)
        
        return acc += num;
    
    },0);
    return newArr/ array.length;
};

var firstLetterCount  = function(customers, firstLetter) {
    var containarray = [];
    for(var i = 0; i < customers.length; i++) {
        if(customers[i].name[0].toUpperCase() === firstLetter.toUpperCase()) {
            containarray.push(customers[i].name[0]);
        }
    }
        return containarray.length;
};

var friendFirstLetterCount =  function(array, customer, letter) {
    let count = 0;
   _.each(array, function(e, i, c){
       if(e.name === customer) {
           _.filter(e.friends, function(friend,i, c){
            if(friend.name.charAt(0).toUpperCase() === letter.toUpperCase()) {
                count += 1;
            }
           });
       }
   });
   return count;
};
 
var friendsCount = function(array, name) {
    
        // declare count var as empty array
  let count = [];
  // using each function to iterate the element index and collection
  _.each(array, function(e, i, c) {
      // if EACH name does not equal name
   if(e.name !== name) {
       // filter each friend
       _.filter(e.friends, function(friend, i, c){
           if(friend.name === name) {
               // push the name into count
               count.push(e.name);
           }
       });
   }
  });
  // return count
  return count;
};

var topThreeTags = function(array) {
  //get array of tags
  let tags = _.pluck(array, "tags");
  tags = tags.join().split(",");
  // create counter object with each tag as a key with 0 value
  let counter = {};
   // create a key for each tag with a value matching its frequency
  _.filter(tags, function(element, i, array){
      if (counter.hasOwnProperty(element) === false){
          counter[element] = 0;
      }
      return counter[element]++ ;
  });
  // subtract 1 from all values, remove keys with 0 value
  while (Object.keys(counter).length > 3){
      for (var key in counter){
          counter[key] -- ;
              if (counter[key] < 1){
                  delete counter[key];
              }
      }
  }
//return the keys
return Object.keys(counter);
};


var genderCount = function(array){
  //create object to return
  genderCount = {};
  //get number of males
  genderCount.male = _.reduce(array, function(object, index, array){
      if (index.gender === 'male'){
         object++;
      }
      return object;
  }, 0);
  //get number of females
  genderCount.female = _.reduce(array, function(object, index, array){
      if (index.gender === 'female'){
         object++;
      }
      return object;
  }, 0);
  //get number of non-binary
  genderCount['non-binary'] = _.reduce(array, function(object, index, array){
      if (index.gender === 'non-binary'){
         object++;
      }
      return object;
  }, 0);
  //return object
  return genderCount;
};



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
