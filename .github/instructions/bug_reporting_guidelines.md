# Bug Reporting Guidelines

A well-written bug report is crucial for enabling developers to quickly identify and fix issues.

## 1. Principles of a Good Bug Report

- **Clear and Concise**: Be clear and to the point. Avoid ambiguity.
- **Reproducible**: Provide a step-by-step guide to reproduce the bug. If the bug is not consistently reproducible, provide as much detail as possible about the circumstances in which it occurred.
- **Specific**: Provide specific details about the environment, inputs, and observed behavior.

## 2. Components of a Bug Report

A good bug report should include the following information:

- **Title**: A brief, descriptive title that summarizes the bug.
    - *Bad*: "The app is broken."
    - *Good*: "Login fails with 'Invalid Credentials' error when using a valid username and password."
- **Description**: A more detailed description of the bug and its impact.
- **Steps to Reproduce**: A numbered list of the exact steps to reproduce the bug.
- **Expected Result**: What you expected to happen.
- **Actual Result**: What actually happened.
- **Environment**: The environment in which the bug was observed, including:
    - Operating System (e.g., Windows 11, macOS Sonoma)
    - Browser (e.g., Chrome 108, Firefox 107)
    - Application Version
- **Screenshots or Videos**: Visual evidence of the bug can be very helpful.
- **Logs**: Relevant logs from the browser console or server.

## 3. Example Bug Report

**Title**: User is redirected to a 404 page after successfully creating a new project.

**Description**: After a user fills out the "Create New Project" form and clicks "Submit", the project is successfully created in the database, but the user is redirected to a 404 error page instead of the project dashboard.

**Steps to Reproduce**:
1. Log in to the application as a standard user.
2. Navigate to the "Projects" page.
3. Click the "Create New Project" button.
4. Fill in all required fields in the form.
5. Click the "Submit" button.

**Expected Result**:
The user should be redirected to the dashboard for the newly created project (e.g., `/projects/123/dashboard`).

**Actual Result**:
The user is redirected to a 404 error page.

**Environment**:
- OS: macOS Sonoma
- Browser: Chrome 108
- App Version: 1.2.3

**Attachments**:
- `screenshot-of-404-page.png`
- `browser-console-logs.txt`
