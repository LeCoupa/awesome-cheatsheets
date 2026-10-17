##############################################################################
# JQ — BASICS
##############################################################################

jq '.' data.json                                # Pretty-print JSON (identity filter)
jq '.name' data.json                            # Get one field
jq -r '.name' data.json                         # Raw output: no quotes around strings (for shell pipelines)
jq -c '.users[]' data.json                      # Compact output: one JSON value per line
echo '{"a":1}' | jq '.'                         # jq reads stdin too — this is how it composes with curl


##############################################################################
# JQ — NESTED DATA & ARRAYS
##############################################################################

jq '.owner.email' data.json                     # Nested field access
jq '.users[0]' data.json                        # First array element ([-1] = last)
jq '.users[]' data.json                         # Iterate: emit every element
jq '.users[].name' data.json                    # One field from every element
jq '.users | length' data.json                  # Count elements (works on arrays, objects, strings)


##############################################################################
# JQ — FILTERING WITH select
##############################################################################

jq '.users[] | select(.age > 18)' data.json                 # Keep elements matching a condition
jq '.users[] | select(.city == "Seattle")' data.json        # String equality
jq '.users[] | select(.age > 18 and .active)' data.json     # Combine conditions (and / or / not)
jq '.users[] | select(.name | test("^A"))' data.json        # Regex test on a string field


##############################################################################
# JQ — RESHAPING WITH map & OBJECT CONSTRUCTION
##############################################################################

jq 'map(.name)' data.json                       # Array of just the names (input: a top-level array)
jq '.users | map({name, city})' data.json       # Reshape: new objects with only these fields ({name} = shorthand for {name: .name})
jq '.users[] | {n: .name, senior: (.age >= 65)}' data.json  # Build computed objects field by field
jq '[.users[] | select(.active)]' data.json      # Collect filter results back into an array


##############################################################################
# JQ — STRINGS, NUMBERS, AGGREGATION
##############################################################################

jq '.price | tostring' data.json                # Number -> string (tonumber goes the other way)
jq '.tags | join(", ")' data.json               # Array of strings -> one string (split(",") reverses it)
jq '.users | sort_by(.age)' data.json           # Sort an array of objects by a field
jq '.users | map(.city) | unique' data.json     # Distinct values (unique sorts too)
jq '.users | group_by(.city) | map({city: .[0].city, count: length})' data.json  # Group + count per group
jq '[.users[].age] | add' data.json             # Sum an array of numbers (add also concatenates strings/arrays)
jq '.users | max_by(.age)' data.json            # Element with the max field (min_by for the min)


##############################################################################
# JQ — KEYS & REAL-WORLD PIPELINES
##############################################################################

jq 'keys' data.json                             # List an object's keys (sorted)
jq 'has("email")' data.json                     # Does the key exist? (use .users[0] | has("email") for elements)
jq 'del(.password)' data.json                   # Remove a field (e.g. before sharing output)
curl -s https://api.github.com/users/octocat | jq '{login, followers}'  # Shape a live API response in one line
jq -r '.[] | select(.level == "error") | .msg' app.log.json  # Extract error messages from JSON logs
jq --arg v "2.4.1" '.version = $v' data.json   # Pass a shell value safely with --arg (never string-interpolate JSON by hand)
jq -s '.' part1.json part2.json                 # --slurp: merge multiple JSON files into one array

# Manual: https://jqlang.github.io/jq/manual/
# Trilingual (EN/ES/PT) extended version: https://github.com/Ezra-Zhao/jq-cheatsheet
