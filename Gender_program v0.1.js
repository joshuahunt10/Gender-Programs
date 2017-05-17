
function Person(name,age, gender) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
  this.gender = gender;
  this.genderPronoun = function(){
    if(this.gender === "male"){
     return "he";
    }
    else if(this.gender === "female"){
     return "she";
    }
    else{
     return "(please assign gender before using the pronoun)";
    }
  }

}


var sally = new Person("Sally Bowles", 39, "female");
var holden = new Person("Holden Caulfield", 16, "male");
console.log("sally's species is " + sally.species + " and " + sally.genderPronoun() + " is " + sally.age + " years old." );
console.log("holden's species is " + holden.species + " and "+ holden.genderPronoun() + " is " + holden.age + " years old."  );
