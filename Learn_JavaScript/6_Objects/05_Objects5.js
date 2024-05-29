const user = {
    name: "Nikita",
    age: 24,
    "like this video": true    //there are spaces in between, property should be in double quotes..
}


console.log(user["like this video"]);               //we use square brackets to access the property..,now this acts like a key

//if we want to delete this property

// delete user["like this video"] 
console.log(user);