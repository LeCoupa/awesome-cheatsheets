<?php

// Exit the file, string inside get's echo'ed
die("This file is not ment to be ran. ¯\_(ツ)_/¯");
exit("This file is not ment to be ran. ¯\_(ツ)_/¯");

/**
 * Printing
 */
echo ""; // Print a string or type that can be made into a string(I.E int, float).
print_r($arr); // Print anything, with type hints for array's and object's
var_dump($arr); // Print anything, with type hints for any value and sizes

/**
 * Declaring an Array
 */
// Indexed Array
$arr = array("John", "Doe", "Lorem", "Ipsum");

// Associative Array
$arr = array("John"=>"10", "Doe"=>"200", "Doe"=>"3000", "Ipsum"=>"40000");

// Multidimensional Arrays
$arr = array (
    array("John",100,180),
    array("Doe",150,130),
    array("Lorem",500,200),
    array("Ipsum",170,150)
);

/**
 * Sorting an Array
 */
sort($arr); // Sort arrays in ascending order.
rsort($arr); // Sort arrays in descending order.
asort($arr); // Sort associative arrays in ascending order, according to the value.
ksort($arr); // Sort associative arrays in ascending order, according to the key.
arsort($arr); // Sort associative arrays in descending order, according to the value.
krsort($arr); // Sort associative arrays in descending order, according to the key.

/**
 * Ways of looping
 */
continue; // Skip current iter
break; // Exit loop

// Foreach
foreach($arr as $key => $value) {
    $key = $key;
    $value = $value;
}

// For
for($i = 0; $i < count($arr); $i++) {
    $key = $i;
    $value = $arr[$i];
}

// While
$i = 0;
while($i < count($arr) - 1) {
    $key = $i;
    $value = $arr[$i];
}

// Do while
$i = 0;
do {
    $key = $i;
    $value = $arr[$i];
} while($i < count($arr));

// Switch
switch($arr) {
    case 1:
        break;
    case 2:
        break;
    case 3:
        break;
    default:
}

/**
 * Global variables
 * http://php.net/manual/en/language.variables.superglobals.php
 */
$_SERVER; // SERVER variables
$_GET; // Query params
$_POST; // Post fields
$_REQUEST; // GET and POST together
$GLOBALS; // Array of global variables
$_SESSION; // Browser session
$_FILES; // Array of files that are sent in request
$_COOKIE; // Array of cookies sent in request
$_ENV; // php.ini options
$argv; // Array of terminal arguments (filename included)
$argc; // Number of arguments passed into terminal

/**
 * Class 
 * http://php.net/manual/en/language.oop5.basic.php
 */
class NormalClass extends AbstractClassName implements InterfaceName
{

    use TraitName;

    // --> PROPERTY TYPES <--

    /**
     * Public property, everyone can access this property. 
     * @var Type
     */
    public $property;

    /**
     * Private property, only this instance can access this property.
     * @var Type
     */
    private $property;

    /**
     * Protected property, this instance and childs can access this property.
     * @var Type
     */
    protected $property;

    /**
     * Static property, is the same for all instances of this class.
     * @var Type
     */
    static $property;

    // --> FUNCTION TYPES <--

    /**
     * Public function, everyone can access this function.
     * @param Type
     * @return Type
     */
    public function publicFunction(Type $var = null): Type
    {
    }

    /**
     * Private function, only this instance can access this function.
     * @param Type
     * @return Type
     */
    private function privateFunction(Type $var = null): Type
    {
    }

    /**
     * Protected function, this instance and childs can access this function.
     * @param Type
     * @return Type
     */
    protected function protectedFunction(Type $var = null): Type
    {
    }
    
    /**
     * Static function, doesn't need an instance to be executed.
     * @param Type
     * @return Type
     */
    public static function staticFunction(Type $var = null): Type
    {
    }

    // --> MAGIC METHODS <--

    /**
     * Gets triggered on creating a new class instance
     * http://php.net/manual/en/language.oop5.decon.php
     * @param Type
     * @return void
     */
    public function __construct(Type $var = null)
    {
    }

    /**
     * Gets triggered on destruction of a class instance
     * http://php.net/manual/en/language.oop5.decon.php
     * @return void
     */
    public function __destruct()
    {
    }

    /**
     * __set() is run when writing data to inaccessible properties.
     * http://php.net/manual/en/language.oop5.overloading.php
     * @param string name
     * @param mixed value
     * @return void
     */
    public function __set(string $name , mixed $value)
    {
    }

    /**
     * __get() is utilized for reading data from inaccessible properties.
     * http://php.net/manual/en/language.oop5.overloading.php
     * @param string name
     * @return mixed
     */
    public function __get(string $name)
    {
    }

    /**
     * __isset() is triggered by calling isset() or empty() on inaccessible properties.
     * http://php.net/manual/en/language.oop5.overloading.php
     * @param string name
     * @return bool
     */
    public function __isset(string $name)
    {
    }

    /**
     * __unset() is invoked when unset() is used on inaccessible properties.
     * http://php.net/manual/en/language.oop5.overloading.php
     * @param string name
     * @return void
     */
    public function __unset(string $name)
    {
    }

    /**
     * __call is triggered when invoking inaccessible methods in an object context.
     * http://php.net/manual/en/language.oop5.overloading.php
     * @param string name
     * @param array arguments
     * @return mixed
     */
    public function __call(string $name, array $arguments)
    {
    }

    /**
     * __callStatic() is triggered when invoking inaccessible methods in a static context.
     * http://php.net/manual/en/language.oop5.overloading.php
     * @param string name
     * @param array arguments
     * @return mixed
     */
    public static function __callStatic(string $name, array $arguments)
    {
    }

    /**
     * http://php.net/manual/en/language.oop5.magic.php
     * @return array
     */
    public function __sleep()
    {
    }

    /**
     * http://php.net/manual/en/language.oop5.magic.php
     * @return void
     */
    public function __wakeup()
    {
    }

    /**
     * http://php.net/manual/en/language.oop5.magic.php
     * @return string
     */
    public function __toString()
    {
    }

    /**
     * http://php.net/manual/en/language.oop5.magic.php
     * @param Type
     * @return mixed
     */
    public function __invoke(Type $var = null)
    {
    }

    /**
     * http://php.net/manual/en/language.oop5.magic.php
     * @param array properties
     * @return object
     */
    public static function __set_state(array $properties)
    {
    }

    /**
     * http://php.net/manual/en/language.oop5.magic.php
     * @return array
     */
    public function __debugInfo()
    {
    }

}

/**
 * Every class that has implemented this interface need to have the same functions.
 */
interface InterfaceName
{

    public function FunctionName(Type $var = null): Type;

}

/**
 * Combination of class and interface.
 */
abstract class AbstractClassName
{

    /**
     * Classes extending this abstract class need to have this function.
     * @param Type
     * @return Type
     */
    abstract function abstractFunction(Type $var = null): Type;

}


/**
 * Basic Implementation of LoggerAwareInterface.
 * @see https://github.com/php-fig/log/blob/master/Psr/Log/LoggerAwareTrait.php
 */
trait LoggerAwareTrait
{
    /**
     * The logger instance.
     *
     * @var LoggerInterface
     */
    protected $logger;
    /**
     * Sets a logger.
     *
     * @param LoggerInterface $logger
     */
    public function setLogger(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }
}


/**
 * Example with use of LoggerAwareTrait.
 */
class ClassWithLogger
{
    /**
     * Use the LoggerAwareTrait in this class.
     */
    use LoggerAwareTrait;
}


/**
 * PHP Regex.
 */

// Meta Characters.

^   Start of subject (or line in multiline mode)
$   End of subject (or line in multiline mode)
[   Start character class definition
]   End character class definition
|   Alternates, eg (a|b) matches a or b
(   Start subpattern
)   End subpattern
\   Escape character

// Pattern Modifiers.

i   Caseless - ignore case
m   Multiline mode - ^ and $ match start and end of lines
s   Dotall - . class includes newline
x   Extended- comments & whitespace
e   preg_replace only - enables evaluation of replacement as PHP code
S   Extra analysis of pattern
U   Pattern is ungreedy
u   Pattern is treated as UTF-8

// Subpattern Modifiers & Assertions.
(?:)    Non capturing subpattern    ((?:foo|fu)bar) matches foobar or fubar without foo or fu appearing as a captured subpattern
(?=)    Positive look ahead assertion   foo(?=bar) matches foo when followed by bar
(?!)    Negative look ahead assertion   foo(?!bar) matches foo when not followed by bar
(?<=)   Positive look behind assertion  (?<=foo)bar matches bar when preceded by foo
(?<!)   Negative look behind assertion  (?<!foo)bar matches bar when not preceded by foo
(?>)    Once-only subpatterns   (?>\d+)bar Performance enhancing when bar not present
(?(x))  Conditional subpatterns (?(3)foo|fu)bar Matches foo if 3rd subpattern has matched, fu if not
(?#)    Comment (?# Pattern does x y or z)

// Base Character Classes
\w  Any "word" character (a-z 0-9 _)
\W  Any non "word" character
\s  Whitespace (space, tab CRLF)
\S  Any non whitepsace character
\d  Digits (0-9)
\D  Any non digit character
.   (Period) - Any character except newline

// Multiplicity.
n*  Zero or more of n
n+  One or more of n
n?  Zero or one occurrences of n
{n} n occurrences exactly
{n,}    At least n occurrences
{,m}    At most m occurrences
{n,m}   Between n and m occurrences (inclusive)


// PHP Regular Expression Functions.

Function    Description
preg_match()    The preg_match() function searches string for pattern, returning true if pattern exists, and false otherwise.
preg_match_all()    The preg_match_all() function matches all occurrences of pattern in string. Useful for search and replace.
preg_replace()  The preg_replace() function operates just like ereg_replace(), except that regular expressions can be used in the pattern and replacement input parameters.
preg_split()    Preg Split (preg_split()) operates exactly like the split() function, except that regular expressions are accepted as input parameters.
preg_grep() The preg_grep() function searches all elements of input_array, returning all elements matching the regex pattern within a string.
preg_ quote()   Quote regular expression characters

// Code Snippets.

//A better solution for validate email syntax is using filter_var.
if (filter_var('test+email@fexample.com', FILTER_VALIDATE_EMAIL)) {
    echo "Your email is ok.";
} else {
    echo "Wrong email address format.";
}

//Validate username, consist of alpha-numeric (a-z, A-Z, 0-9), underscores, and has minimum 5 character and maximum 20 character.
//You could change the minimum character and maximum character to any number you like.
$username = "user_name12";
if (preg_match('/^[a-z\d_]{5,20}$/i', $username)) {
    echo "Your username is ok.";
} else {
    echo "Wrong username format.";
}

//Validate domain
$url = "http://domain-name.com/";
if (preg_match('/^(http|https|ftp):\/\/([A-Z0-9][A-Z0-9_-]*(?:\.[A-Z0-9][A-Z0-9_-]*)+):?(\d+)?\/?/i', $url)) {
    echo "Your url is ok.";
} else {
    echo "Wrong url.";
}

//Extract domain name from certain URL
$url = "http://domain-name.com/index.html";
preg_match('@^(?:http://)?([^/]+)@i', $url, $matches);
$host = $matches[1];
echo $host; // domain-name.com

//Highlight a word in the content
$text = "A regular expression (shortened as regex) is a sequence of characters that define a search pattern. Usually such patterns are used by string-searching algorithms for 'find' or 'find and replace' operations on strings, or for input validation.";
$text = preg_replace("/\b(regex)\b/i", 'replaced content', $text);
echo $text; /*A regular expression (shortened as replaced content) is a sequence of characters that define a search pattern. Usually such patterns are used by string-searching algorithms for 'find' or 'find and replace' operations on strings, or for input validation.*/
