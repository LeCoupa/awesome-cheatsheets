/* *******************************************************************************************
 * GLOBAL OBJECTS > OBJECT
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * ******************************************************************************************* */

// Global object: properties
Object.length                                        // length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number does not include the rest parameter. Has a value of 1.
Object.prototype                                     // Represents the Object prototype object and allows to add new properties and methods to all objects of type Object.

// Methods of the Object constructor
Object.assign(target, ...sources)                    // Copies the values of all enumerable own properties from one or more source objects to a target object. method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object
Object.create(MyObject)                              // Creates a new object with the specified prototype object and properties. The object which should be the prototype of the newly-created object.
Object.defineProperty(obj, prop, descriptor)         // Adds the named property described by a given descriptor to an object.
Object.defineProperties(obj, props)                  // Adds the named properties described by the given descriptors to an object.
Object.entries(obj)                                  // Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
Object.freeze(obj)                                   // Freezes an object: other code can't delete or change any properties.
Object.getOwnPropertyDescriptor(obj, prop)           // Returns a property descriptor for a named property on an object.
Object.getOwnPropertyDescriptors(obj)                // Returns an object containing all own property descriptors for an object.
Object.getOwnPropertyNames(obj)                      // Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.
Object.getOwnPropertySymbols(obj)                    // Returns an array of all symbol properties found directly upon a given object.
Object.getPrototypeOf(obj)                           // Returns the prototype of the specified object.
Object.is(value1, value2);                           // Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).
Object.isExtensible(obj)                             // Determines if extending of an object is allowed.
Object.isFrozen(obj)                                 // Determines if an object was frozen.
Object.isSealed(obj)                                 // Determines if an object is sealed.
Object.keys(obj)                                     // Returns an array containing the names of all of the given object's own enumerable string properties.
Object.preventExtensions(obj)                        // Prevents any extensions of an object.
Object.seal(obj)                                     // Prevents other code from deleting properties of an object.
Object.setPrototypeOf(obj, prototype)                // Sets the prototype (i.e., the internal [[Prototype]] property).
Object.values(obj)                                   // Returns an array containing the values that correspond to all of a given object's own enumerable string properties.

// Object instances and Object prototype object (Object.prototype.property or Object.prototype.method())
// Properties
obj.constructor                                      // Specifies the function that creates an object's prototype.
obj.__proto__                                        // Points to the object which was used as prototype when the object was instantiated.

// Methods
obj.hasOwnProperty(prop)                             // Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.
prototypeObj.isPrototypeOf(object)                   // Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.
obj.propertyIsEnumerable(prop)                       // Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set.
obj.toLocaleString()                                 // Calls toString().
obj.toString()                                       // Returns a string representation of the object.
object.valueOf()                                     // Returns the primitive value of the specified object.

/* *******************************************************************************************
 * GLOBAL OBJECTS > ARRAY
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * ******************************************************************************************* */

// Global object: properties
Array.length                                         // Reflects the number of elements in an array.
Array.prototype                                      // Represents the prototype for the Array constructor and allows to add new properties and methods to all Array objects.

// Global object: methods
Array.from(arrayLike[, mapFn[, thisArg]])            // Creates a new Array instance from an array-like or iterable object.
Array.isArray(obj)                                   // Returns true if a variable is an array, if not false.
Array.of(element0[, element1[, ...[, elementN]]])    // Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

// Instance: properties
arr.length                                           // Reflects the number of elements in an array.

// Instance: mutator methods
arr.copyWithin(target, start, end)                   // Copies a sequence of array elements within the array.
arr.fill(value, start, end)                          // Fills all the elements of an array from a start index to an end index with a static value.
arr.pop()                                            // Removes the last element from an array and returns that element.
arr.flat()                                           // merges nested array into one single array
arr.push([element1[, ...[, elementN]]])              // Adds one or more elements to the end of an array and returns the new length of the array.
arr.reverse()                                        // Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.
arr.shift()                                          // Removes the first element from an array and returns that element.
arr.sort()                                           // Sorts the elements of an array in place and returns the array.
array.splice(start, deleteCount, item1, item2, ...)  // Adds and/or removes elements from an array.
arr.unshift([element1[, ...[, elementN]]])           // Adds one or more elements to the front of an array and returns the new length of the array.

// Instance: accessor methods
arr.at(index)                                        // Returns the element at the specified index in the array.
arr.concat(value1[, value2[, ...[, valueN]]])        // Returns a new array comprised of this array joined with other array(s) and/or value(s).
arr.includes(searchElement, fromIndex)               // Determines whether an array contains a certain element, returning true or false as appropriate.
arr.indexOf(searchElement[, fromIndex])              // Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
arr.join(separator)                                  // Joins all elements of an array into a string.
arr.lastIndexOf(searchElement, fromIndex)            // Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
arr.slice(begin, end)                                // Extracts a section of an array and returns a new array.
arr.toString()                                       // Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method.
arr.toLocaleString(locales, options)                 // Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString() method.

// Instance: iteration methods
arr.entries()                                        // Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
arr.every(callback[, thisArg])                       // Returns true if every element in this array satisfies the provided testing function.
arr.filter(callback[, thisArg])                      // Creates a new array with all of the elements of this array for which the provided filtering function returns true.
arr.find(callback[, thisArg])                        // Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.
arr.findIndex(callback[, thisArg])                   // Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.
arr.flatMap(callback[, thisArg])                     // Apply the callback function for each element in array and flatten the result in a new array
arr.forEach(callback[, thisArg])                     // Calls a function for each element in the array.
arr.keys()                                           // Returns a new Array Iterator that contains the keys for each index in the array.
arr.map(callback[, initialValue])                    // Creates a new array with the results of calling a provided function on every element in this array.
arr.reduce(callback[, initialValue])                 // Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
arr.reduceRight(callback[, initialValue])            // Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.
arr.some(callback[, initialValue])                   // Returns true if at least one element in this array satisfies the provided testing function.
arr.values()                                         // Returns a new Array Iterator object that contains the values for each index in the array.

/* *******************************************************************************************
 * GLOBAL OBJECTS > STRING
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 * ******************************************************************************************* */

// Global object: properties
str.length                                           // Returns the number of characters in string

// Methods of the Object constructor
String.fromCharCode(num1[, ...[, numN]])             // Returns a string created from the specified sequence of UTF-16 code units.
String.fromCodePoint(num1[, ...[, numN]])            // Returns a string created by using the specified sequence of code points
String.raw(strings, ...substitutions)                // It's used to get the raw string form of template literals that is, substitutions (e.g. ${foo}) are processed, but escape sequences (e.g. \n) are not.

// Methods
str.charAt(index)                                    // Takes an integer and return the character in position passed, if not found returns an empty string
str.charCodeAt(index)                                // Takes an integer that corresponds to a position in the string and returns Unicode of the character at that position
str.codePointAt(index)                               // Takes an integer and returns the Unicode of the position passed as an argument
str.concat(string2[, ...stringN])                    // Receives an N number of strings and returns their concatenation
str.endsWith(searchString[, endPosition])            // Checks if the string ends with one or more characters, returning a boolean
str.includes(searchString[, position])               // Checks if the characters passed as an argument are present in the string
str.indexOf(searchValue[, fromIndex])                // Returns the index of the first occurrence of the value provided as an argument in the searchValue
str.lastIndexOf(searchValue[, fromIndex])            // Returns the index of the last occurrence of the value provided as an argument in the searchValue
str.localeCompare(compareString[,locales[,options]]) // Checks if the reference string comes before or after the one passed as an argument 
str.match(regexp)                                    // Retrieves the result of matching a string against a regular expression.
str.matchAll(regexp)                                 // Returns an iterator of all results matching a string against a regular expression, including capturing groups
str.normalize([form])                                // Returns the Unicode Normalization Form of the string
str.padEnd(targetLength [, padString])               // Returns a new string padded from the right end with the character or group of characters specified in padString
str.padStart(targetLength [, padString])             // Returns a new string padded from the beginning with the character or group of characters specified in padString
str.repeat(count)                                    // Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together
str.replace(regexp|substr, newSubStr|func)           // Takes as first argument a string or a Regex that the match or matches are replaced, the second argument is a new string or a function that the return will replace the occurrences, and returns a new string with the replacements
str.replaceAll(regexp|substr, newSubStr|func)        // It takes as the first argument a string or a Regex that matches will be replaced, the second argument is a new string or a function that the return will replace the occurrences, and returns a new string with the replacements
str.search(regexp)                                   // It takes a regexp as an argument and returns the index of the position that satisfies it
str.slice(start, end)                                // Remove a part of the string and return a new string
str.split([separator[, limit]])                      // Splits the string from a separator defined in the first argument and returns an array of strings
str.startsWith(searchString[, position])             // Checks if the string starts with one or more characters, returning a boolean
str.toLocaleLowerCase(locale)                        // Converts all letters to lowercase and return the string with the converted values according to the locale specified as an argument
str.toLocaleUpperCase(locale)                        // Converte todas as letras em valores retorna uma string com os valores de acordo com a localidade especificada como argumento
str.toLowerCase()                                    // Convert all letters to lowercase and return the string with the converted values
str.toString()                                       // Returns a string representing the specified string value.
str.toUpperCase()                                    // Converts all letters to uppercase returns the string with the converted values
str.trim()                                           // Remove whitespace at the beginning and end of the string
str.trimStart()                                      // Remove whitespace at the beginning
str.trimEnd()                                        // Remove whitespace at the end of the string
str.valueOf()                                        // Returns the primitive value of a String object.

/* *******************************************************************************************
 * GLOBAL OBJECTS > STRING
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 * ******************************************************************************************* */

// Global object: methods
Number.EPSILON                                       // The smallest interval between two representable numbers.
Number.MAX_SAFE_INTEGER                              // The maximum safe integer in JavaScript (253 - 1).
Number.MAX_VALUE                                     // The largest positive representable number.
Number.MIN_SAFE_INTEGER                              // The minimum safe integer in JavaScript (-(253 - 1)).
Number.MIN_VALUE                                     // The smallest positive representable number—that is, the positive number closest to zero (without actually being zero).
Number.NaN                                           // Special "Not a Number" value.
Number.NEGATIVE_INFINITY                             // Special value representing negative infinity. Returned on overflow.
Number.POSITIVE_INFINITY                             // Special value representing infinity. Returned on overflow.
Number.isFinite(value)                               // Determine whether the passed value is a finite number, returns a boolean.
Number.isInteger(value)                              // Determine whether the passed value is an integer, returns a boolean.
Number.isNaN(value)                                  // Determine whether the passed value is NaN, returns a boolean.
Number.isSafeInteger()                               // Determine whether the passed value is a safe integer (number between -(253 - 1) and 253 - 1), returns a boolean.
Number.parseFloat()                                  // Parses a string argument and returns a floating point number, this is the same as the global parseFloat() function.
Number.parseInt()                                    // Parses a string argument and returns an integer of the specified radix, this is the same as the global parseInt() function.

// Methods
number.toExponential(fractionDigits)                 // Returns a string representing the number in exponential notation.
number.toFixed(digits)                               // Returns a string representing the number in fixed-point notation.
number.toLocaleString(locales, options)              // Returns a string with a language-sensitive representation of this number.
number.toPrecision(precision)                        // Returns a string representing the number to a specified precision in fixed-point or exponential notation.
number.toString(radix)                               // Returns a string representing the specified number value.
number.valueOf(radix)                                // Returns a string representing the specified number value.
