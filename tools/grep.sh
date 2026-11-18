##############################################################################
# GREP — BASICS
##############################################################################

grep 'ERROR' app.log                            # Plain search: print the lines that contain ERROR (case matters)
grep -i 'error' app.log                         # Ignore case in pattern and text — log files never agree on capitalization
grep -v 'INFO' app.log                          # Invert: print the lines that do NOT match (the log with routine noise removed)
grep -c 'ERROR' app.log                         # Count matching LINES, not occurrences (a line with 3 matches still counts once)
grep -n 'ERROR' app.log                         # Prefix each match with its 1-based line number
grep -l 'ERROR' *.log                           # Print only the NAMES of files that contain a match (stops at each file's first match)
grep -L 'ERROR' *.log                           # The complement: names of files with NO match at all


##############################################################################
# GREP — RECURSION & FILE FILTERS
##############################################################################

grep -r 'ERROR' proj                            # Search a whole tree; matches come out as path:line (symlinks found inside the tree are skipped)
grep -R 'ERROR' proj                            # Like -r, but follows EVERY symlink — expect duplicates when one file is reachable by two paths
grep -r --include='*.log' 'ERROR' proj          # Only search *.log files; sources and binaries are never opened
grep -r --exclude-dir='sub' 'ERROR' proj        # Prune a whole directory subtree from the search (the node_modules fix)


##############################################################################
# GREP — PATTERNS: REGEX FLAVORS & HOW MUCH MUST MATCH
##############################################################################

grep -E 'ERROR|WARN' app.log                    # Extended regex (ERE): | + ? ( ) { } work bare, no backslashes
grep 'ERROR\|WARN' app.log                      # The same search in default BRE: the | needs a backslash — pick one dialect per command
grep -F 'log_error(' src/main.c                 # Fixed string: match literally, character for character (also the fastest flavor — no regex engine)
grep -w 'error' notes.txt                       # Whole words only: will not match inside Errors, error_codes or terror
grep -x 'INFO boot ok' app.log                  # The WHOLE line must match, as if the pattern were wrapped in ^...$
grep -e 'ERROR' -e 'WARN' app.log               # Several patterns at once: a line matching ANY of them is printed once
grep -f patterns.txt app.log                    # Read the patterns from a file, one per line (a stray blank line matches everything)
grep '^INFO' app.log                            # Anchor: the line must START with INFO
grep 'complete$' app.log                        # Anchor: the line must END with the word complete


##############################################################################
# GREP — CONTEXT & OUTPUT
##############################################################################

grep -A 1 'ERROR' app.log                       # 1 line AFTER each match — the error is rarely the whole story
grep -B 1 'ERROR' app.log                       # 1 line BEFORE each match — what led into the failure
grep -C 1 'ERROR' app.log                       # Context on both sides; groups that touch are MERGED, so a missing "--" separator means the matches were close together
grep --color=always 'ERROR' app.log | less -R   # Force match highlighting through a pipe (auto = color only on a terminal)
grep -o 'ERROR' app.log | wc -l                 # Print only the matching part, one per line — this counts OCCURRENCES (contrast with -c)
grep -H 'ERROR' app.log                         # Force the filename prefix even for a single file (scripts parsing file:line want this)
grep -h 'ERROR' app.log server.log              # Suppress the filename prefix when the names are just noise


##############################################################################
# GREP — PIPELINES & SCRIPTING
##############################################################################

grep -q 'ERROR' app.log; echo $?                # Print nothing, answer with the exit code: 0 = match, 1 = no match, 2 = error — the contract scripts rely on
grep -s 'ERROR' missing.txt                     # Silence the "No such file" message — the exit status is STILL 2, only the message is quieted
grep -m 1 'INFO' app.log                        # Stop after the first match per file instead of scanning a multi-GB log to the end
grep 'error' data.bin                           # Binary file: the matching line is suppressed; stderr gets "grep: data.bin: binary file matches" (exit still 0)
grep -a 'error' data.bin                        # Treat a binary file as text and print the matching lines anyway (NUL bytes and all)
grep -rI 'error' proj                           # Recursive search that silently SKIPS binary files — what most tree searches actually want
grep -z 'ERROR' records0.txt                    # Records are NUL-terminated, not newline-terminated (the find -print0 world); a pattern with a real newline can now span lines
tail -f app.log | grep --line-buffered 'ERROR'  # Flush after every line — without this, a live monitor sits silent while matches pile up in the buffer
grep -Po '(?<=usage at )[0-9]+' app.log         # PCRE lookbehind: extract the number after a label, without the label (GNU only — BSD grep on macOS has no -P)
grep -- '-v' notes.txt                          # Search for a pattern that starts with a dash: -- ends option parsing (grep -e '-v' notes.txt does the same)

# Manual: https://www.gnu.org/software/grep/manual/
# Every entry verified on GNU grep 3.11 against a fixture tree before inclusion.
# Trilingual (EN/ES/PT) extended version: https://github.com/Ezra-Zhao/grep-cheatsheet
