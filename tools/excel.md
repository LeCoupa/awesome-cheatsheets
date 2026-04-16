# *****************************************************************************
# BASICS & SHORTCUTS
# *****************************************************************************

F4                                     # Toggle absolute/relative references ($A$1) or repeat last action
Ctrl + Shift + L                       # Toggle AutoFilter on selected headers
Ctrl + T                               # Convert selected range into an official Table
Alt + =                                # AutoSum adjacent cells
Ctrl + ;                               # Insert current date into cell
Ctrl + Shift + Enter                   # Execute legacy Array Formula (CSE)

# *****************************************************************************
# LOOKUP AND REFERENCE (Data Retrieval)
# *****************************************************************************

=XLOOKUP(value, lookup_rng, return_rng) # Modern lookup (Search for value in range and return from another)
=VLOOKUP(value, table, col_index, 0)   # Vertical lookup (Classic exact match search)
=INDEX(rng, MATCH(value, lookup_rng, 0)) # Flexible lookup (Combines row position with range indexing)
=INDIRECT("Sheet1!A1")                 # Return a reference specified by a text string
=OFFSET(ref, rows, cols, [h], [w])     # Return a range reference shifted from a starting point

# *****************************************************************************
# LOGIC AND ALLOCATION
# *****************************************************************************

=IF(condition, value_if_true, value_if_false) # Basic conditional logic
=IFS(cond1, val1, cond2, val2, TRUE, val3)   # Multiple conditions without nested IFs
=AND(cond1, cond2)                           # Returns TRUE if all arguments are TRUE
=OR(cond1, cond2)                            # Returns TRUE if any argument is TRUE
=SUMPRODUCT(array1, array2)                  # Multiply ranges and sum the result (Weighted averages)

# *****************************************************************************
# DATA WRANGLING AND CLEANING
# *****************************************************************************

=TRIM(text)                            # Remove all extra spaces from text
=CLEAN(text)                           # Remove all non-printable characters from text
=TEXTJOIN(", ", TRUE, range)           # Combine multiple cells with a delimiter, ignoring empties
=VALUE(text)                           # Convert a text string that represents a number to a number
=PROPER(text)                          # Capitalize the first letter of each word

# *****************************************************************************
# DYNAMIC ARRAYS (Modern Excel)
# *****************************************************************************

=UNIQUE(range)                         # Return a list of unique values from a range
=SORT(range, [index], [order])         # Sort a range based on a specific column
=FILTER(range, criteria)               # Filter a range based on one or more conditions
=SEQUENCE(rows, [cols])                # Generate a list of sequential numbers in an array

# *****************************************************************************
# STATISTICS AND AGGREGATION
# *****************************************************************************

=SUMIFS(sum_rng, crit_rng1, crit1, ...) # Sum cells that meet multiple criteria
=COUNTIFS(crit_rng1, crit1, ...)       # Count cells that meet multiple criteria
=AVERAGEIFS(avg_rng, crit_rng1, crit1) # Average cells that meet multiple criteria
=AGGREGATE(function_num, options, rng) # Perform calculations while ignoring errors or hidden rows

# *****************************************************************************
# ERROR HANDLING
# *****************************************************************************

=IFERROR(formula, value_if_error)      # Return a custom value if a formula results in an error
=ISBLANK(cell)                         # Check if a cell is empty
=ISNUMBER(cell)                        # Check if a value is a number
