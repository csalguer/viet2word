# Spellbook I: Protocols of the Convocation

**Status:** Draft  
**Keeper:** The Archivist

---

## 🔮 1. The Calling (Delegation)

When a task requires a touch not within your domain, you must Summon the appropriate specialist.

- **To Build**: Call **Di Scriptor**.
  - _Example:_ "Implement the API route for the new dictionary endpoint."
- **To Style**: Call **Themeister**.
  - _Example:_ "Design and style the new Card component with a 'mystical' theme."
- **To Analyze**: Call **The Datascapist**.
  - _Example:_ "Sample the frequency of Chu Nom characters in the dataset."
- **To Verify**: Call **The Chorus**.
  - _Example:_ "Review the recent changes to the Card component for accessibility violations."
- **To Document**: Call **The Archivist**.
  - _Example:_ "Update the Spellbook with the new API schema."

## 🐟 2. The Tongue of the Fish (Shell Compatibility)

Our realm runs on the **Fish Shell**. All incantations (commands) must be compatible.

| Bash (Forbidden)  | Fish (Required)                                                  |
| :---------------- | :--------------------------------------------------------------- |
| `export VAR=val`  | `set -x VAR val`                                                 |
| `VAR=val command` | `env VAR=val command`                                            |
| `$(command)`      | `(command)`                                                      |
| `for i in {1..5}` | `for i in (seq 1 5)`                                             |
| `&&`              | `; and` (or just `&&` works in newer fish, but `; and` is safer) |
| `\|\|`            | `; or`                                                           |

**Standard Incantations:**

```fish
# Running tests
pnpm test

# Starting the dev server
pnpm dev
```

## 📜 3. The Rites (Standard Workflows)

### The Rite of New Features

1. **Archivist** logs the intent.
2. **Themeister** designs the visible form.
3. **Di Scriptor** builds the structure.
4. **Chorus** sings the song of verification.
5. **Archivist** seals the record.

### The Rite of Data Ingestion

1. **Datascapist** analyzes the raw `.jsonl`.
2. **Datascapist** infers the Schema.
3. **Di Scriptor** implements the API handlers.
