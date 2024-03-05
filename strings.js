//string methods, string length, s
// Write a JavaScript function to check whether an 'input' is a string or not.


is_string = function(input) {
    // Checking if the type of input is a string by examining its internal [[Class]] property
    if (Object.prototype.toString.call(input) === '[object String]')
      
      return true;
    else
      
      return false;   
      };
  //  calling the is_string function with a string argument
  console.log(is_string('Kwagala Joanna Victor'));
  //  calling the is_string function with an array argument
  console.log(is_string([90, 85, 81, 80]));


// Question two
  //Write a JavaScript function to convert a string into abbreviated form.
   // Define a function named abbrev_name which takes a single parameter str1 representing a name string



   abbrev_name = function (str1) {
    // Trim deletes leading and trailing whitespace from the input string and split it 
    var split_names = str1.trim().split(" ");
    // Checking if the array contains more than one element 
    if (split_names.length > 1) {
        // Returning the abbreviation of the name in the format Kwagala J V
        return (split_names[0] + " " + split_names[1].charAt(0) + " " + split_names[2].charAt(0) + " " + ".");
    }
    // If only one name is provided, return the name as it is
    return split_names[0];
};
// Call the abbrev_name function with the input "Robin Singh" and log the result to the console
console.log(abbrev_name("Kwagala Joanna Victor"));

//Write a JavaScript function that takes a string with both lowercase and upper case 
//letters as a parameter. It converts upper case letters to lower case, and lower case 
//letters to upper case

//declaring a value changecase taking a string as input
changecase = function changecase(str) {
    // Using the replace method with a regular expression to match lowercase and uppercase letters separately
    //If the match is a lowercase letter ('([a-z]+)'), it is replaced with its uppercase equivalent.
// If the match is an uppercase letter ('([A-Z]+)'), it is replaced with its lowercase equivalent.
       return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        // changing lowercase to uppercase and uppercase to lowercase
        // the '?' is used to access properties or methods of an object without having to check if the object 
        //or its properties are null or undefined
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
// Output the result of applying the changecase function to the string 'AaBbc'
console.log(changecase('aA, bB, cC, dD'));
// output: Aa, Bb, Cc, Dd



  