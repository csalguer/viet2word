````markdown
# TypeScript & Java Skill

## Overview

This skill provides expertise in TypeScript, Java, and strongly-typed programming paradigms. It enables type-safe development across the stack.

## Core Competencies

### TypeScript

- **Type System**: Advanced types, generics, utility types, conditional types
- **Configuration**: tsconfig.json optimization and strict mode settings
- **Runtime Validation**: Zod, io-ts, and runtime type checking
- **React Integration**: Type-safe React components, hooks, and context

### Java Patterns (Applied to TypeScript)

- **Interface Segregation**: Small, focused interfaces
- **Dependency Injection**: Constructor-based DI patterns
- **Design Patterns**: Factory, Builder, Strategy in TypeScript

## Standards

### tsconfig.json Requirements

```json
{
	"compilerOptions": {
		"strict": true,
		"noUncheckedIndexedAccess": true,
		"noImplicitReturns": true,
		"noFallthroughCasesInSwitch": true,
		"exactOptionalPropertyTypes": true,
		"noPropertyAccessFromIndexSignature": true,
		"moduleResolution": "bundler",
		"esModuleInterop": true,
		"skipLibCheck": true
	}
}
```
````

### Type Definition Patterns

```typescript
// ✅ Prefer interfaces for object shapes
interface User {
	id: string
	name: string
	email: string
}

// ✅ Use type for unions and primitives
type UserId = string
type UserRole = "admin" | "user" | "guest"

// ✅ Use readonly for immutability
interface ReadonlyUser {
	readonly id: string
	readonly name: string
}

// ✅ Use generics for reusable types
interface ApiResponse<T> {
	data: T
	status: number
	message: string
}
```

### Zod Integration

```typescript
import { z } from "zod"

// Define schema as source of truth
const UserSchema = z.object({
	id: z.string().uuid(),
	name: z.string().min(1).max(100),
	email: z.string().email(),
	role: z.enum(["admin", "user", "guest"]),
})

// Infer TypeScript type from schema
type User = z.infer<typeof UserSchema>

// Validate at runtime boundaries
function parseUser(data: unknown): User {
	return UserSchema.parse(data)
}
```

### Utility Types

```typescript
// Built-in utility types
type PartialUser = Partial<User>
type RequiredUser = Required<User>
type ReadonlyUser = Readonly<User>
type UserKeys = keyof User
type PickedUser = Pick<User, "id" | "name">
type OmittedUser = Omit<User, "email">

// Custom utility types
type Nullable<T> = T | null
type Optional<T> = T | undefined
type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}
```

## ESLint Rules

```javascript
// eslint.config.js type-related rules
{
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
  }
}
```

## Common Patterns

### Discriminated Unions

```typescript
type LoadingState<T> =
	| { status: "idle" }
	| { status: "loading" }
	| { status: "success"; data: T }
	| { status: "error"; error: Error }

function handleState<T>(state: LoadingState<T>): void {
	switch (state.status) {
		case "idle":
			console.log("Idle")
			break
		case "loading":
			console.log("Loading...")
			break
		case "success":
			console.log("Data:", state.data)
			break
		case "error":
			console.error("Error:", state.error.message)
			break
	}
}
```

### Brand Types

```typescript
// Prevent mixing IDs of different types
type UserId = string & { readonly __brand: "UserId" }
type PostId = string & { readonly __brand: "PostId" }

function createUserId(id: string): UserId {
	return id as UserId
}

function getUser(id: UserId): User {
	// Implementation
}

// ❌ This would be a type error:
// getUser(postId);
```

## References

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [Zod Documentation](https://zod.dev/)
- [Total TypeScript](https://www.totaltypescript.com/)

```

```
