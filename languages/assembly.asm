
# ########################################################   Variable convention.    ####################################################################################
# [$a0], $a1  |  [$f12], $f13, $f14, $f15   = Input registers, used to pass data to an follow-up section (function), or input for the system to process said data [$a0].
# [$v0], $v1  |  [$f0] , $f1 , $f2 , $f3    = Output registers, used by our custom rections the system to return the processed data.
# $tXX        |  $f4  - $f11 & $f16 - $f19  = Temporary usage registers, used by our sections to store temporal data, they act like if it were local variables in a OOP.
# $sXX        |  $f20 - $f30                = Session data Registers, used to store data trough the execution of the program.
##########################################################################################################################################################################


# - Example data - 
.data  # The data section contains anything that you want to be automatically initialized

exampleMessage: .asciiz "asdadasdsfddfgsfsfddf: "
string: .space 32

.eqv keyboardControl 0  # eqv = constants.
.eqv keyboardBuffer 4
.eqv ControlDisplay 8
.eqv BufferDisplay 12

# - Keyboard - 

lui $t0, 0xffff              # Hardware changes memory address
lw $v0, BufferTeclado($t0)   # Reads hardware input ( in this case, keyboard keystrokes ).
sw $a0, BufferDisplay($t0)   # Writes text to primary display ( Console ).

#------------------------ Print and read ( Syncronous ). ----------------------------------------
# SELECTION:
lui $t0, 0xffff                # Hardware changes memory address
r_wait:
  lw $t2, keyboardControl($t0) # Reads from the keyboard when theres a keystroke
  andi  $t2, $t2, 1            # bit "ready", used to syncronize
beqz $t2, r_wait               # if 0, no keystroke detected
# We keep waiting...


# READING:
jal getc
move $a0, $v0
w_wait:
  lw $t1, ControlDisplay($t0) # control register
  andi $t1, $t1, 1            # bit "ready", used to syncronize
beq $t1, $0, w_wait           # if 0, not ready ti print

# WRITTING
jal putc
j r_espera


# Auxiliar "Functions"
getc:
lw $v0, BufferTeclado($s0) # Read keyboard data register, Key ascii code saved in $ v0
jr $ra

putc:
sw $a0, BufferDisplay($s0) # Write to the console
jr $ra



# - Exceptions - 
mfc0 $a0, $13         # $a0 <= "cause" register
andi $a0, $a0, 0x3C   # we extract the exception code in $a0

# We detected only 3 exceptions
li $s0, 0x0030        # Overflow code
li $s1, 0X0010        # code address error load

beq $a0, $zero, Interruption
beq $a0, $s0,   Overflow
beq $a0, $s1,   Read



# - Functioons - 

# Function, read a character:
li $a0, '>'	# We put a > character so that the user knows that we are waiting for a character.
li $v0, 11
syscall			
li $v0, 12 # read character function
syscall    # Read a character to $ v0
jr $ra     # Return to the main program


# Function, print a characterprintCharTab:
printChar:
li $a0, 'X'
li $v0, 11
syscall
jr $ra


# Function, print a spacer (tab)
printCharTab:
li $a0, '\t'
li $v0, 11
syscall
jr $ra


# Funcion, imprime una nueva linea
printCharNewline:
li $a0, '\n'
li $v0, 11
syscall


# Function prints a message
printMsg:
la $a0, exampleMessage
li $v0, 4
syscall
jr $ra


# Function prints integer in binary
printBin:
la $v0, 35
syscall
jr $ra


# Function, read a string
readString:
li $v0, 8       # ask for a string
la $a0, cadena  # load the address from where the string will be stored in memory
li $a1, 20      # we specify the maximum number of characters.
move $t0, $a0   # save the string to t0
syscall
jr $ra


# Function reads an integer.
readInt: 
li $a0, '>'	# We put a character so that the user knows that we are waiting for an input number.
li $v0, 11
syscall
li $v0, 5		# We ask for an integer
syscall
jr $ra			# Go back to the main


# Function, print an integer
printInt:
li $v0, 1  # Print function
syscall    # Write the value of $a0
jr $ra			# Go back to the main


# Function, read a float. (received value stored in $f12)
readFloat:
li $v0, 6
syscall
jr $ra


# Function, print a float. (value to print stored in $f0)
printFloat:
li $v0, 2
syscall
jr $ra


# - complex functions -

# Function: pow(float $f12, int $a0): float $f0
pow:
  subi $a0, $a0, 1
  beqz $a0, powCondionalExitOne	
  bltz $a0, powCondionalExitZero
  mul.s $f14, $f14, $f12
bnez $a0, pow	
powCondionalExitZero:
li $s0, 1
mtc1 $s0, $f14
cvt.s.w $f14, $f14
powCondionalExitOne:
mov.s $f0, $f14
jr $ra


# Function: Max(float $f13, float $f12): float $f0.
max:
c.lt.s $f13, $f12
bc1t maxConditionalAssinament1
j maxConditionalAssinament2
maxConditionalAssinament1:
mov.s $f0, $f12
j maxConditionalExitNormal
maxConditionalAssinament2:
mov.s $f0, $f13
maxConditionalExitNormal:
jr $ra


# Function reads a string from the keyboard (live) and prints it to the display.read_string:
lui $s0, 0xffff                   # Address keyboard control register..
li $s1, '\n'                      # Ascii carriage return code
la $t2, string                    # string: .space 32
r_sync:                           # We check when we a character readed.
  lw   $t1, ControlTeclado($s0)
  andi $t1, $t1, 1                # If it has been read, the bit will be 1, we check, if not, we check again.
beqz $t1, r_sync
  lw   $t1, BufferTeclado($s0)    # We get the character.
  beq  $t1, $s1, r_final          # We check if it is ENTER (\n), if it is, we exit.
  sb   $t1, 0($t2)                # We save in our register.
  addi $t2, $t2, 1                # We increase the record jump to concatenate the next character.
j r_sync
r_final:
jr $ra


# Function, invert bitsinvert
Bits:
xori $v0, $a0, 0xffffffff
jr $ra


# Exits the program
exit:
li $v0, 10
syscall
