
(function() {

    let message: string = "hola";
    let number: number = 123;
    let boolean: boolean = true;
    let hoy: Date = new Date(); // = let hoy = new Date()

    let something; // any type
    something = message; // something has a string value;
    something = number // something has a number value;
    something = boolean // something has a boolean value;
    something = hoy // something has a date value;

    let something2: string | number; // Type string or number; 
    something2 = message; // something has a string value;
    something2 = number // something has a number value;
    something2 = boolean // something has a boolean value = error
    something2 = hoy // something has a date value = error
    
    // Objects
    let student = {
        name: "Ángela", // value type = string always from now
        age: 25 // value type = number always from now
    };

    student = {
        name: "Ángela", // value type = string always from now
        age: "25", // error, should be a number type value
        lastname: "Benavente" // error, it dont exist in original object
    };
})();

