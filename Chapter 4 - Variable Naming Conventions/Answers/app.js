// 1. Declare 3 variables in one statement.
let abc, def, ghi;

// 2. Declare 5 legal & 5 illegal variable names.

/*Legal*/
let userName; // simple camel casing
let userAge; // simple camel casing
let userAge2; // can contain 0-9 digits
let _userScore; // can contain _ (underscores)
let user$Amount; // can contain $ (dollar sign)

/*illegal*/
let var; // cannot contain reserve keywords
let 123abc; // cannot start with numbers
let user-name // cannot contain hyphens as only lowercasing, UPPERCASING and camelCasing is allowed; no snake-case naing convention allowed
let my variable // no spaces between it is allowed
let super@hero; // invalid character

// 3. Display this in your browser
    // a) A heading stating “Rules for naming JS variables”
    // b) Variable names can only contain ______, ______, ______ and ______.
        // For example $my_1stVariable
    // c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
    // d) Variable names are case _________
    // e) Variable names should not be JS _________
document.write("<h1>Rules for nameing JS variables</h1>");
document.write("<p>Variable names can only contain 0-9 digits, a-z (or A-Z), $, and _. For Example $my_1stVariable</p>");
document.write("<p>Variables must begin with a $, _ or a-z (or A-Z). For example $name, _name or name</p>");
document.write("<p>Variable names are case sensitive</p>");
document.write("<p>Variable names should not be JS reserve words</p>");