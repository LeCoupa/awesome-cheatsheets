# Ruby Cheatsheet

|    **Types**    	|      **Expressions**     	| **Operators & Precedence** 	|
|:---------------:	|:------------------------:	|:--------------------------:	|
|      12345      	|      if expr [then]      	|             ::             	|
|      123.45     	|     elsif expr [then]    	|             []             	|
|     1.23e-4     	|        else [then]       	|             **             	|
|      0xFF00     	|    unless expr [then]    	|           + - ! ~          	|
|     0b01100     	|        else [then]       	|            * / %           	|
|       1..5      	|       expr if expr       	|            << >>           	|
|      1...5      	|     expr unless expr     	|           & \| ^           	|
|     'a'..'z'    	|         case expr        	|          > >= < <=         	|
|    'a'...'z'    	|     when comp [then]     	|      <==> == === != =~     	|
|   'string sq'   	|        else [then]       	|             &&             	|
|   "string dq"   	|      while expr [do]     	|           .. ...           	|
|     "#{exp}"    	|      until expr [do]     	|         = ( += -=)         	|
|     "\t\r\n"    	|   for var in expr [do]   	|         not and or         	|
|  %q(string sq)  	|      expr.each [do]      	|                            	|
|  %Q(string dq)  	| break, next, redo, retry 	|                            	|
|   %(string dq)  	|                          	|                            	|
|  <<id string id 	|                          	|                            	|
|     :symbol     	|                          	|                            	|
|    /regex/opt   	|                          	|                            	|
|   %r\|regex\|   	|                          	|                            	|
|     [1,2,3]     	|                          	|                            	|
|    %w(1 2 3)    	|                          	|                            	|
|  %W(1 2 #{exp}) 	|                          	|                            	|
| {1=>2, :s=>'v'} 	|                          	|                            	|
