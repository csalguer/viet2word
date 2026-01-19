# Fish Shell Skill

## Description
Expertise in writing and executing commands for the Fish Shell (Friendly Interactive Shell).
This shell differs significantly from Bash/Zsh in syntax/grammar.

## Instructions

### Syntax Rules
*   **Variable Setting**: Use `set -x VAR value` (export) or `set VAR value` (local). Never `export VAR=value`.
*   **Command Substitution**: Use parenthesis `(command)`. Never `$(command)` or backticks backticks.
    *   *Correct*: `echo (date)`
    *   *Incorrect*: `echo $(date)`
*   **Conditionals**: `if test -f file.txt; ...; end`. No `[[ ... ]]`.
*   **Loops**: `for i in (seq 1 5); ...; end`. No `{1..5}` expansion.
*   **Chaining**: Use `; and` or `; or`. While modern Fish supports `&&`/`||`, explicit `and`/`or` is preferred for clarity in scripts.
*   **Environment Variables for Single Command**: Use `env VAR=val command`. Never `VAR=val command`.

### Common Patterns

**Iterating files:**
```fish
for file in *.ts
    echo "Processing $file"
end
```

**Checking status:**
```fish
if status is-interactive
    echo "Interactive mode"
end
```

**String Manipulation:**
Use `string` builtin (e.g., `string match`, `string replace`).

## Related Agents
- **Di Scriptor**: Primary holder of this skill.
