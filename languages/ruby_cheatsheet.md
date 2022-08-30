# Ruby Cheatsheet
---
|    **Types**    	|      **Expressions**     	| **Operators & Precedence** 	| **Module/Class**         	|
|:---------------:	|:------------------------:	|:--------------------------:	|--------------------------	|
|      12345      	|      if expr [then]      	|             ::             	| module Name              	|
|      123.45     	|     elsif expr [then]    	|             []             	| class Name               	|
|     1.23e-4     	|        else [then]       	|             **             	| class Name < Sup         	|
|      0xFF00     	|    unless expr [then]    	|           + - ! ~          	| class << obj             	|
|     0b01100     	|        else [then]       	|            * / %           	| def name(args...)        	|
|       1..5      	|       expr if expr       	|            << >>           	| def inst. name(...)      	|
|      1...5      	|     expr unless expr     	|           & \| ^           	| public protected private 	|
|     'a'..'z'    	|         case expr        	|          > >= < <=         	| attr_reader attr_writer  	|
|    'a'...'z'    	|     when comp [then]     	|      <==> == === != =~     	| attr attr_accessor       	|
|   'string sq'   	|        else [then]       	|             &&             	| alias new old            	|
|   "string dq"   	|      while expr [do]     	|           .. ...           	|                          	|
|     "#{exp}"    	|      until expr [do]     	|         = ( += -=)         	|                          	|
|     "\t\r\n"    	|   for var in expr [do]   	|         not and or         	|                          	|
|  %q(string sq)  	|      expr.each [do]      	|                            	|                          	|
|  %Q(string dq)  	| break, next, redo, retry 	|                            	|                          	|
|   %(string dq)  	|                          	|                            	|                          	|
|  <<id string id 	|                          	|                            	|                          	|
|     :symbol     	|                          	|                            	|                          	|
|    /regex/opt   	|                          	|                            	|                          	|
|   %r\|regex\|   	|                          	|                            	|                          	|
|     [1,2,3]     	|                          	|                            	|                          	|
|    %w(1 2 3)    	|                          	|                            	|                          	|
|  %W(1 2 #{exp}) 	|                          	|                            	|                          	|
| {1=>2, :s=>'v'} 	|                          	|                            	|                          	|

---

|    **Predefined Variables**   	|            **Regex**            	| **Reserved Words** 	|
|:-----------------------------:	|:-------------------------------:	|:------------------:	|
|    $! Exception Information   	|         . all characters        	|        alias       	|
|     $@ Array of Backtrace     	|    [ ] any single char in set   	|         and        	|
|    $& String of Last Match    	| [^ ] any single char not in set 	|        begin       	|
| $' String right of last Match 	|          * zero or more         	|        BEGIN       	|
|  $+ Last group of last match  	|          + one or more          	|        break       	|
|   $N Nth group of last match  	|          ? zero or one          	|        case        	|
|    $~ Info about last match   	|          \| alteration          	|        class       	|
|    $= Case insensitive flag   	|            ( ) Group            	|         def        	|
|   $/ Input record separator   	|  ^ Beginning of line or string  	|      defined?      	|
|   $\ Output field separator   	|     $ End of line or string     	|         do         	|
|   $, Output field separator   	|           {1,5} 1 to 5          	|        else        	|
|  $. Line number of last file  	|      \A Beginning of String     	|        elsif       	|
|       $> Default output       	|         \b Word boundry         	|         END        	|
|  $_ Last input line of string 	|       \B Non-word Boundry       	|         end        	|
|  $* Last input line of string 	|     \d digit, same as [0..9]    	|       ensure       	|
|       $0 Name of script       	|           \D non-digit          	|        false       	|
|       $$ Process Number       	|          \s whitespace          	|         for        	|
|     $" Module Names loaded    	|        \S non-whitespace        	|         if         	|
| $stderr Standard Error output 	|        \w word-character        	|         in         	|
|       $stdin Standard In      	|      \W non-word-character      	|       module       	|
|      $stdout Standard Out     	|         \z End of string        	|        next        	|
|                               	|   \Z End of string, before nl   	|         nil        	|
|                               	|                                 	|         not        	|
|                               	|                                 	|         or         	|
|                               	|                                 	|        redo        	|
|                               	|                                 	|       rescue       	|
|                               	|                                 	|        retry       	|
|                               	|                                 	|       return       	|
|                               	|                                 	|        self        	|
|                               	|                                 	|        super       	|
|                               	|                                 	|        then        	|
|                               	|                                 	|        true        	|
|                               	|                                 	|        undef       	|
|                               	|                                 	|       unless       	|
|                               	|                                 	|        until       	|
|                               	|                                 	|        when        	|
|                               	|                                 	|        while       	|
|                               	|                                 	|        yield       	|

---

|   **Exceptions**  	| **Variables** 	| **Constants** 	| **Ruby Arguments** 	|
|:-----------------:	|:-------------:	|:-------------:	|:------------------:	|
|       begin       	|     local     	|    __FILE__   	|      -c Check      	|
|  rescue ex => var 	|   @instance   	|    __LINE__   	|      -d Debug      	|
|       else        	|    @@class    	|      ENV      	|     -e One Line    	|
|       ensure      	|    CONSTANT   	|      ARGF     	|       -h Help      	|
|   StandardError   	|               	|      ARGV     	|    -n gets loop    	|
| ZeroDivisionError 	|               	|               	|    -rL require L   	|
|     RangeError    	|               	|               	|     -v verbose     	|
|   SecurityError   	|               	|               	|     -w warning     	|
|      IOError      	|               	|               	|    -y comp debug   	|
|     IndexError    	|               	|               	|                    	|
|    RuntimeError   	|               	|               	|                    	|
