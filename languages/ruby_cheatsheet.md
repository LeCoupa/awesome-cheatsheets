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

