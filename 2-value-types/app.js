"use strict";
(function () {
    var message = "hola";
    var number = 123;
    var boolean = true;
    var hoy = new Date(); // = let hoy = new Date()
    var something; // any type
    something = message; // something has a string value;
    something = number; // something has a number value;
    something = boolean; // something has a boolean value;
    something = hoy; // something has a date value;
    var something2; // Type string or number; 
    something2 = message; // something has a string value;
    something2 = number; // something has a number value;
    something2 = boolean; // something has a boolean value = error
    something2 = hoy; // something has a date value = error
    // Objects
    var student = {
        name: "Ángela",
        age: 25 // value type = number always from now
    };
    student = {
        name: "Ángela",
        age: "25",
        lastname: "Benavente" // error, it dont exist in original object
    };
})();
