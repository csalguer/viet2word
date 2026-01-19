````markdown
# Python & Pydantic Skill

## Overview

This skill provides expertise in Python, Pydantic, and the serpentine arts of data validation. It enables type-safe Python development with runtime validation.

## Core Competencies

### Python

- **Modern Python**: 3.10+ features, type hints, dataclasses, protocols
- **Package Management**: Poetry, uv, pyproject.toml configuration
- **Testing**: pytest, hypothesis, coverage
- **CLI Tools**: Typer, Click, argparse

### Pydantic

- **V2 Mastery**: Models, field validators, serialization, settings
- **Runtime Validation**: Coercion, error handling, custom validators
- **FastAPI Integration**: Type-safe APIs with automatic documentation

## Standards

### pyproject.toml Configuration

```toml
[project]
name = "project-name"
version = "0.1.0"
description = "Project description"
requires-python = ">=3.10"
dependencies = [
    "pydantic>=2.0",
    "pydantic-settings>=2.0",
]

[project.optional-dependencies]
dev = [
    "pytest>=7.0",
    "pytest-cov",
    "ruff",
    "mypy",
]

[tool.ruff]
line-length = 88
target-version = "py310"

[tool.ruff.lint]
select = ["E", "F", "I", "UP", "B", "SIM"]

[tool.mypy]
python_version = "3.10"
strict = true
warn_return_any = true
warn_unused_ignores = true
```
````

### Pydantic Model Patterns

```python
from pydantic import BaseModel, Field, field_validator, model_validator
from typing import Annotated, Self
from datetime import datetime

class User(BaseModel):
    """User model with validated fields."""

    id: Annotated[str, Field(pattern=r'^[a-f0-9-]{36}$', description="UUID")]
    name: Annotated[str, Field(min_length=1, max_length=100)]
    email: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

    @field_validator('email')
    @classmethod
    def validate_email(cls, v: str) -> str:
        """Validate and normalize email."""
        if '@' not in v:
            raise ValueError('Invalid email format')
        return v.lower().strip()

    @model_validator(mode='after')
    def validate_model(self) -> Self:
        """Cross-field validation."""
        # Add cross-field validation logic here
        return self

    model_config = {
        'str_strip_whitespace': True,
        'validate_assignment': True,
        'frozen': False,
    }
```

### Pydantic Settings

```python
from pydantic_settings import BaseSettings, SettingsConfigDict

class AppSettings(BaseSettings):
    """Application settings with environment variable support."""

    api_url: str
    api_key: str
    debug: bool = False
    log_level: str = 'INFO'
    max_retries: int = 3

    model_config = SettingsConfigDict(
        env_prefix='APP_',
        env_file='.env',
        env_file_encoding='utf-8',
        case_sensitive=False,
    )

# Usage
settings = AppSettings()  # Reads from environment
```

### FastAPI Integration

```python
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel

app = FastAPI(title="API", version="1.0.0")

class CreateUserRequest(BaseModel):
    name: str
    email: str

class UserResponse(BaseModel):
    id: str
    name: str
    email: str

@app.post(
    "/users",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_user(request: CreateUserRequest) -> UserResponse:
    """Create a new user."""
    # Pydantic validates request automatically
    user_id = generate_uuid()
    return UserResponse(
        id=user_id,
        name=request.name,
        email=request.email,
    )
```

## Testing Patterns

### pytest with Pydantic

```python
import pytest
from pydantic import ValidationError

class TestUserModel:
    """Tests for User model validation."""

    def test_valid_user(self):
        """Should accept valid user data."""
        user = User(
            id="550e8400-e29b-41d4-a716-446655440000",
            name="Test User",
            email="test@example.com",
        )
        assert user.email == "test@example.com"

    def test_invalid_email(self):
        """Should reject invalid email format."""
        with pytest.raises(ValidationError) as exc_info:
            User(
                id="550e8400-e29b-41d4-a716-446655440000",
                name="Test",
                email="not-an-email",
            )
        assert 'email' in str(exc_info.value)

    @pytest.mark.parametrize("email,expected", [
        ("Test@Example.COM", "test@example.com"),
        ("  user@test.com  ", "user@test.com"),
    ])
    def test_email_normalization(self, email: str, expected: str):
        """Should normalize email to lowercase and strip whitespace."""
        user = User(
            id="550e8400-e29b-41d4-a716-446655440000",
            name="Test",
            email=email,
        )
        assert user.email == expected
```

### Hypothesis Property-Based Testing

```python
from hypothesis import given, strategies as st

@given(
    name=st.text(min_size=1, max_size=100),
    email=st.emails(),
)
def test_user_creation_with_valid_data(name: str, email: str):
    """User creation should succeed with any valid inputs."""
    user = User(
        id="550e8400-e29b-41d4-a716-446655440000",
        name=name,
        email=email,
    )
    assert user.name == name
    assert '@' in user.email
```

## CLI Tool Patterns

### Typer CLI

```python
import typer
from typing import Annotated

app = typer.Typer(help="CLI tool for managing users.")

@app.command()
def create(
    name: Annotated[str, typer.Argument(help="User's name")],
    email: Annotated[str, typer.Option("--email", "-e", help="User's email")],
    verbose: Annotated[bool, typer.Option("--verbose", "-v")] = False,
) -> None:
    """Create a new user."""
    if verbose:
        typer.echo(f"Creating user: {name}")

    # Create user logic
    typer.echo(f"✅ User {name} created with email {email}")

if __name__ == "__main__":
    app()
```

## Discriminated Unions

```python
from pydantic import BaseModel
from typing import Literal, Union, Annotated
from pydantic import Field

class Cat(BaseModel):
    pet_type: Literal['cat']
    meow_volume: int

class Dog(BaseModel):
    pet_type: Literal['dog']
    bark_volume: int

# Discriminated union
Pet = Annotated[
    Union[Cat, Dog],
    Field(discriminator='pet_type'),
]

class Owner(BaseModel):
    name: str
    pet: Pet
```

## References

- [Pydantic V2 Documentation](https://docs.pydantic.dev/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [pytest Documentation](https://docs.pytest.org/)
- [Typer Documentation](https://typer.tiangolo.com/)

```

```
