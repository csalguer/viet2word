# Database Schema Conventions

This document outlines conventions for designing and naming database schemas to ensure consistency and clarity.

## 1. Naming Conventions

- **Tables**:
    - Use `snake_case` for table names (e.g., `user_profiles`).
    - Use plural nouns for table names (e.g., `users`, `products`).
    - Avoid using prefixes or suffixes (e.g., `tbl_`, `_data`).

- **Columns**:
    - Use `snake_case` for column names (e.g., `first_name`).
    - Be descriptive but concise with column names.
    - Avoid using reserved keywords as column names.
    - **Primary Keys**: Name the primary key column `id`.
    - **Foreign Keys**: Name foreign key columns using the singular name of the referenced table, followed by `_id` (e.g., `user_id` in the `posts` table).
    - **Timestamps**: Use `created_at` and `updated_at` for tracking creation and modification times. These should be timestamp or datetime types.
    - **Booleans**: Prefix boolean columns with `is_` or `has_` (e.g., `is_active`, `has_profile`).

## 2. Data Types

- **Choose Appropriate Types**: Select the most appropriate and efficient data type for each column.
- **Character Data**: Use `VARCHAR` with a reasonable length limit instead of `TEXT` where possible.
- **Numeric Data**: Use `INTEGER` or `BIGINT` for whole numbers and `DECIMAL` or `NUMERIC` for fixed-point numbers. Avoid using floating-point types for currency.
- **Dates and Times**: Use `TIMESTAMP WITH TIME ZONE` (`timestamptz`) whenever possible to avoid ambiguity.

## 3. Constraints

- **Primary Keys**: Every table must have a primary key. Prefer auto-incrementing integer or UUID primary keys.
- **Foreign Keys**: Define foreign key constraints to enforce referential integrity.
- **Not Null**: Use `NOT NULL` constraints where appropriate to ensure data integrity.
- **Uniqueness**: Use `UNIQUE` constraints to enforce uniqueness on one or more columns.

## 4. Indexing

- **Index Foreign Keys**: Always create indexes on foreign key columns to improve join performance.
- **Index Frequently Queried Columns**: Create indexes on columns that are frequently used in `WHERE` clauses or `ORDER BY` clauses.
- **Avoid Over-indexing**: Don't create too many indexes, as they can slow down write operations.

## 5. Migrations

- **Use a Migration Tool**: Use a database migration tool (e.g., Alembic, Flyway) to manage and version your database schema.
- **Write Reversible Migrations**: Write migrations in a way that allows you to both apply and revert changes.
- **One Change Per Migration**: Each migration should represent a single, atomic change to the schema.
