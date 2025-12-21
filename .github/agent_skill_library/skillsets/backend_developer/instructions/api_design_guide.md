# API Design Guide

This guide provides best practices for designing robust, consistent, and easy-to-use RESTful APIs.

## 1. Principles of REST

- **Statelessness**: Each request from a client to the server must contain all the information needed to understand and process the request. The server should not store any client context between requests.
- **Client-Server Architecture**: The client and server are separate concerns. The server provides the API, and the client consumes it.
- **Cacheability**: Responses should be defined as cacheable or not cacheable to improve performance.

## 2. Naming Conventions

- **Use Nouns for Resources**: API endpoints should represent resources, so use nouns in your endpoint paths (e.g., `/users`, `/products`).
- **Plural Nouns**: Use plural nouns for collections (e.g., `/users`, not `/user`).
- **Consistent Path Casing**: Use a consistent casing for your paths (e.g., `kebab-case`).

## 3. HTTP Methods (Verbs)

Use the appropriate HTTP method for the action being performed:

- `GET`: Retrieve a resource or a collection of resources.
- `POST`: Create a new resource.
- `PUT`: Update an existing resource completely.
- `PATCH`: Partially update an existing resource.
- `DELETE`: Delete a resource.

## 4. Status Codes

Use standard HTTP status codes to indicate the outcome of a request:

- **2xx (Success)**:
    - `200 OK`: The request was successful.
    - `201 Created`: A new resource was successfully created.
    - `204 No Content`: The request was successful, but there is no content to return (e.g., for a `DELETE` request).
- **3xx (Redirection)**:
    - `301 Moved Permanently`: The resource has been permanently moved to a new URL.
- **4xx (Client Errors)**:
    - `400 Bad Request`: The request was malformed or invalid.
    - `401 Unauthorized`: The request requires authentication.
    - `403 Forbidden`: The authenticated user does not have permission to access the resource.
    - `404 Not Found`: The requested resource could not be found.
- **5xx (Server Errors)**:
    - `500 Internal Server Error`: A generic error occurred on the server.
    - `503 Service Unavailable`: The server is temporarily unable to handle the request.

## 5. Request and Response Bodies

- **Use JSON**: Use JSON for request and response bodies.
- **Consistent Casing**: Use a consistent casing for JSON keys (e.g., `camelCase` or `snake_case`).
- **Error Responses**: Provide meaningful error messages in a consistent format, for example:
  ```json
  {
    "error": {
      "message": "Invalid email address.",
      "code": "INVALID_INPUT"
    }
  }
  ```

## 6. Versioning

Prefix your API with a version number (e.g., `/api/v1/users`). This allows you to introduce breaking changes without affecting existing clients.
