CHEATSHEET C#

1. Data Types

    Primitive   Size            Example
    
    String      2 bytes/char    s = "reference";
    bool                        b = true;
    char        2 bytes         ch = 'a';
    byte        1 byte          b = 0x78;
    short       2 bytes         val = 70;
    int         4 bytes         val = 700;
    long        8 bytes         val = 70;
    float       4 bytes         val = 70.0F;
    double      8 bytes         val = 70.0D;
    decimal     16 bytes        val = 70.0M;

2. Arrays
    
    2.1 Declaration

    //Initiliazed using a list defined with curly braces
    int[] nameArray = {100, 101, 102};
    
    //Define an empty array
    int[] nameArray = new int[3]; // 3 rows and 2 columns
    
    //To access a specific item in the array
    int[] nameArray = new int[10];
    int firstNumber = nameArray[0];
    nameArray[1] = 20;
    
    //Multidimensional arrays
    int [,] matrix = new int [2,2]
    matrix[0,0] = 1;
    matrix[0,1] = 2;
    matrix[1,0] = 3;
    matrix[1,1] = 4;

    int[,] predefinedMatrix = new int[2,2] { { 1, 2 }, { 3, 4 } };

    2.2 Array Operations
    
    //Sort ascending
    Array.Sort(nameArray);
    
    //Sort begins at element 6 and sorts 20 elements
    Array.Sort(nameArray,6,20);
    
    //Use 1 array as a key & sort 2 arrays
    string[] values = {"Juan", "Victor", "Elena"};
    string[] keys = {"Jimenez", "Martin", "Ortiz"};
    Array.Sort(keys, values);
    
    //Clear elements in array (array, first element, # elements)
    Array.Clear(nameArray, 0, nameArray.Length);
    
    //Copy elements from one array to another
    Array.Copy(scr, target, numOfElements);

3. String Operations
    
    //To concatenate between strings, use the plus operator:
    string firstName = "Erin";
    string lastName = "Roger";
    string fullName = firstName + " " + lastName;

    //To add one string to another, use the += operator:
    string secondLastName = "Green";
    string fullName += secondLastName;
    
    //ToString function
    //It converts an object to its string representation so that it is suitable for display
    Object.ToString();
    
    //String formatting
    //Each additional argument to the function can be referred to in the string using the brackets operator with the index number.
    String.Format(String format, Object arg0);
     format - A composite format string that includes one or more format items 
     arg0 - The first or only object to format

    //Substring
    //Returns a part of the string, beginning from the index specified as the argument. Substring also accepts a maximum length for the substring
    String.Substring(beginAt);
    String.Substring(beginAt, maximum);
    
    //Replace
    string newStr = oldStr.Replace("old","new");

    //IndexOf
    //Finds the first ocurrence of a string in a larger string
    //Returns -1 if the string is not found
    String.IndexOf(val, start, num)
    val - string to search for
    start - where to begin in string

    //LastIndexOf
    //Search from end of string

    //Split
    //Split is used to break delimited string into substrings
    String.Split(Char[]);

    //ToCharArray
    //Places selected characteres in a string in a char array
    String str = "AaBbCcDd";
    //create array of 8 vowels
    var chars = str.ToCharArray();
    //create array of 'B' and 'C'
    var chars = str.ToCharArray(2,2);

4. System.Text.StringBuilder

    4.1 Constructor

    StringBuilder sb = new StringBuilder();
    StringBuilder sb = new StringBuilder(myString);
    StringBuilder sb = new StringBuilder(myString, capacity);

    myString - Initial value of StringBuilder object
    capacity - Initial size of buffer

5. DateTime

    5.1 DateTime Constructor

    DateTime(year, month, day)
    DateTime(year, month, day, hour, minute, second)

    DateTime newYear = DateTime.Parse("1/1/2018"):
    DateTime currentDate = DateTime.Now;
    DateTime nextYear = DateTime.AddYears(1);

6. TimeSpan
    
    6.1 TimeSpan Constructor
        
    TimpeSpan(hour, minute, sec)
    
    TimeSpan timeS = new TimeSpan(10, 14, 50);
    TimeSpan timeS_Hours = TimeSpan.FromDays(3640);

7. Formatting Values

    Format item syntax: {index[,alignment][:format string]}
    index - Specifies element in list of values to which format is applied
    aligment - Indicates minimun width (in characters) to display value
    format string - Contains the code which specififes the format of the displayed value

    7.1 Numeric

    Format   Name           Pattern             Value       Result
    C or c   Currency       {0:C2}, 1000.1      $ 1000.1    A currency value
    D or d   Decimal        {0:D5}, 30          00030       Integer digits with optional negative sign
    E or e   Exponential    {0,9:E2}, 120.2     1.20+E002   Exponential notation
    F or f   Fixed-point    {0,9:F2}, 120.2     120.2       Integral and decimal digits with optional negative sign
    G or g   General        {0,9:G2}, 120.2     120.2       The more compact of either fixed-point or scientific notation
    N or n   Number         {0,9:N1}, 1300.5    1,300,5    Integral and decimal digits, group separators, and a decimal separator with optional negative sign
    P or p   Percent        {0,9:P3}, .0903     9.03%       Number multiplied by 100 and displayed with a percent symbol
    R or r   Round-trip     {0,9:R}, 3.1416     3.1316      A string that can round-trip to an identical number
    X or x   Hexadecimal    {0,9:X4}, 31        001f        A hexadecimal string

8. C# compiler at the Command Line

    csc File.cs -> Compiles Files.cs producing File.exe
    csc -target:library File.cs -> Compiles File.cs producing File.dll
    csc -out:My.exe File.cs -> Compiles File.cs and creates My.exe
    csc -define:DEBUG -optimize -out:File2.exe *.cs -> Compiles all the C# files in the current directory with optimizations enabled and defines the DEBUG symbol. The output is File2.exe
    csc -target:library -out:File2.dll -warn:0 -nologo -debug *.cs -> Compiles all the C# files in the current directory producing a debug version of File2.dll. No logo and no warnings are displayed
    csc -target:library -out:Something.xyz *.cs -> Compiles all the C# files in the current directory to Something.xyz (a DLL)
    
    8.1 Compiler Options Listed

    Option	                    Purpose
    @	                        Reads a response file for more options.
    -?	                        Displays a usage message to stdout.
    -additionalfile	            Names additional files that don't directly affect code generation but may be used by analyzers for producing errors or warnings.
    -addmodule	                Links the specified modules into this assembly
    -analyzer	                Run the analyzers from this assembly (Short form: -a)
    -appconfig	                Specifies the location of app.config at assembly binding time.
    -baseaddress	            Specifies the base address for the library to be built.
    -bugreport	                Creates a 'Bug Report' file. This file will be sent together with any crash information if it is used with -errorreport:prompt or -errorreport:send.
    -checked	                Causes the compiler to generate overflow checks.
    -checksumalgorithm:<alg>	Specifies the algorithm for calculating the source file checksum stored in PDB. Supported values are: SHA1 (default) or SHA256.
    -codepage	                Specifies the codepage to use when opening source files.
    -debug	                    Emits debugging information.
    -define	                    Defines conditional compilation symbols.
    -delaysign	                Delay-signs the assembly by using only the public part of the strong name key.
    -deterministic	            Causes the compiler to output an assembly whose binary content is identical across compilations if inputs are identical.
    -doc	                    Specifies an XML Documentation file to generate.
    -errorreport	            Specifies how to handle internal compiler errors: prompt, send, or none. The default is none.
    -filealign	                Specifies the alignment used for output file sections.
    -fullpaths	                Causes the compiler to generate fully qualified paths.
    -help	                    Displays a usage message to stdout.
    -highentropyva	            Specifies that high entropy ASLR is supported.
    -incremental	            Enables incremental compilation [obsolete].
    -keycontainer	            Specifies a strong name key container.
    -keyfile	                Specifies a strong name key file.
    -langversion:<string>	    Specify language version: Default, ISO-1, ISO-2, 3, 4, 5, 6, 7, 7.1, 7.2, 7.3, or Latest
    -lib	                    Specifies additional directories in which to search for references.
    -link	                    Makes COM type information in specified assemblies available to the project.
    -linkresource	            Links the specified resource to this assembly.
    -main	                    Specifies the type that contains the entry point (ignore all other possible entry points).
    -moduleassemblyname	        Specifies an assembly whose non-public types a .netmodule can access.
    -modulename:<string>	    Specify the name of the source module.
    -noconfig	                Instructs the compiler not to auto include CSC.RSP file.
    -nologo	                    Suppresses compiler copyright message.
    -nostdlib	                Instructs the compiler not to reference standard library (mscorlib.dll).
    -nowarn	                    Disables specific warning messages
    -nowin32manifest	        Instructs the compiler not to embed an application manifest in the executable file.
    -optimize	                Enables/disables optimizations.
    -out	                    Specifies the output file name (default: base name of file with main class or first file).
    -parallel[+|-]	            Specifies whether to use concurrent build (+).
    -pathmap	                Specifies a mapping for source path names output by the compiler.
    -pdb	                    Specifies the file name and location of the .pdb file.
    -platform	                Limits which platforms this code can run on: x86, Itanium, x64, anycpu, or anycpu32bitpreferred. The default is anycpu.
    -preferreduilang	        Specifies the language to be used for compiler output.
    -publicsign             	Apply a public key without signing the assembly, but set the bit in the assembly indicating the assembly is signed.
    -recurse	                Includes all files in the current directory and subdirectories according to the wildcard specifications.
    -reference              	References metadata from the specified assembly files.
    -refout                 	Generate a reference assembly in addition to the primary assembly.
    -refonly                	Generate a reference assembly instead of a primary assembly.
    -resource               	Embeds the specified resource.
    -ruleset:<file>         	Specify a ruleset file that disables specific diagnostics.
    -subsystemversion	        Specifies the minimum version of the subsystem that the executable file can use.
    -target                 	Specifies the format of the output file by using one of four options: -target:appcontainerexe, -target:exe, -target:library, -target:module, -target:winexe, -target:winmdobj.
    -unsafe                 	Allows unsafe code.
    -utf8output	                Outputs compiler messages in UTF-8 encoding.
    -warn	                    Sets the warning level (0-4).
    -warnaserror	            Reports specific warnings as errors.
    -win32icon              	Uses this icon for the output.
    -win32manifest          	Specifies a custom win32 manifest file.
    -win32res               	Specifies the win32 resource file (.res).


9. Control flow statements

    9.1 Switch

    switch (expression) {
    //expression may be integer, string or enum
    case expression:
        //statements
        break/ goto / return()

    case ..
    default
        //statements
        break/ goto / return()
    }

    9.2 If

    if (condition) {
        //statements
    } else {
        //statements
    }

10. Loop

    10.1 While
    
    while (condition) {body}
    
    10.2 Do while

    do {body} while condition;
    
    10.3 For

    for (initializer; termination condition; iteration;) {
            //statements
    }
    
    10.4 For each
    
    foreach (type identifier in collection)  {
        //statements
    }

11. Class Definition

    11.1 Class

    public | protected | internal | private
    abstract | sealed | static

    class className [:class/interfaces inherited from]

    11.2 Constructor

    [access modifier] className (parameters) [:initializer]

    initializer -base calls constructor in base class.
                 this calls constuctor within class.

    public class nameClass : Initializer {
        public className(dataType param1 , dataType param2, ...) : base(param1, param2)
        { constructor body }
    }

    11.3 Method

    [access modifier]
    static | virtual | override | new | sealed | abstract
    methodName (parameter list) { body }

    virtual – method can be overridden in subclass
    override – overrides virtual method in base class
    new – hides non-virtual method in base class
    sealed – prevents derived class from inheriting
    abstract – must be implemented by subclass

    Passing parameters:
        1. By default, parametres are passed by value
        2. Passing by reference: ref, in and out modifers

    To pass a parameter by reference with the intent of changing the value, use the ref, or out keyword. To pass by reference with the intent of avoiding copying but not changing the value, use the in modifier

    11.4 Property

    [modifier] <dataType> property name{
        public string BrandName
        {
            get { return brandName; }
            set { brandName = value; }
        }
    }

12. Struct

    12.1 Defining a structure
    
    [attribute][modifier] struct name [:interfaces] { struct-body }
    
    12.2 Class vs Structure

       -> Classes are reference types and structs are value types
       -> Structures do not support inheritance
       -> Structures cannot have default constructor

13. Enum

    13.1 Declaring enum variable

    enum <enumName> {
        enumeration list
    };

    enumName - Specifies the enumeration type name
    enumeration list is a comma-separated list of identifiers

    //Each of the symbols in the enumeration list stands for an integer value, one greater than the symbol that precedes it.

14. Delegates

    //A delegate is a reference type variable that holds the reference to a method. The reference can be changed at runtime.

    14.1 Declaring delegates

    //Delegate declaration determines the methods that can be referenced by the delegate.

    delegate <return type> <delegate-name> <parameter list>

    14.2 Instantiating delegates

    //When creating a delegate, the argument passed to the new expression is written similar to a method call, but without the arguments to the method

    public delegate void printString(string s);
    printString ps1 = new printString(WriteToScreen);
    printString ps2 = new printString(WriteToFile);

15. Events

    15.1 Declaring events

    //To declare an event inside a class, first a delegate type for the event must be declared.

    public delegate string MyDelegate(string str);
    
    //The event itself is declared by using the event keyword

    event MyDelegate MyEvent;

    15.2 Commonly used Control Events

    Event                                           Delegate

    Click, MouseEnter, DoubleClick, MouseLeave      EventHandler( object sender, EventArgs e)
    MouseDown, Mouseup, MouseMove                   MouseEventHandler(object sender, MouseEventArgs e)
                                                        e.X, e.Y – x and y coordinates
                                                        e.Button – MouseButton.Left, Middle, Right
    KeyUp, KeyDown                                  KeyEventHandler(object sndr, KeyEventArgs e)
                                                        e.Handled – Indicates whether event is handled.
                                                        e.KeyCode – Keys enumeration, e.g., Keys.V
                                                        e.Modifiers – Indicates if Alt, Ctrl, or Shift key.
    KeyPress                                        KeyPressEventHandler(object sender, KeyPressEventArgs e)


