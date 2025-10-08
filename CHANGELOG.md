# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned Features
- Database integration (SQLite/PostgreSQL)
- Advanced reporting and analytics
- Multiple language support
- Email notifications

## [0.1.0] - 2025-10-09
This release introduces the ability to **like and unlike posts** using asynchronous requests (AJAX) to prevent page refreshes. Also this ends the "Flask-Blog-Tutorial".

### Added
-   Implemented a **Like database model** to track which users have liked which posts, including relationships with the `User` and `Post` models.
-   Added **Font Awesome** library to use dynamic icons for the like button.
-   Added a **like counter** and a toggling **like button** (solid/hollow icon) to each post.
-   Created a new `like-post` route and view function to handle the liking and unliking logic.
-   Implemented **JavaScript (index.js)** to handle the like/unlike action via `fetch` requests, allowing the like count and button icon to update **without refreshing the page**.
-   The backend now returns a **JSON response** with the updated like count and the user's like status, instead of a redirect.

### Fixed
-   Corrected a database query in the `like` view by adding `.first()` to ensure a single post object is retrieved from the filter.

### Changed
- Update CHANGELOG.

## [0.0.4] - 2025-10-03
The focus of this release was the full implementation of **comment functionality** for posts.

### Added
-   Implemented a **Comment database model** to store user comments, including relationships with the `User` and `Post` models.
-   Added a **comment creation form** below each post to allow logged-in users to submit new comments.
-   Implemented logic to **display and hide comments** within a collapsible section on the post view.
-   Added functionality for **deleting comments** via a dedicated route, complete with authorization checks to ensure only the comment author or post author can delete a comment.

### Changed
-   Refactored the post fetching logic in the `post` route to use the efficient **SQLAlchemy relationship (`user.posts`)** instead of manually querying the `Post` table by author ID.
- Update CHANGELOG.

## [0.0.3] - 2025-10-03

### Added
- **Post Creation Feature:** Implemented functionality allowing authenticated users to create new text-based blog posts.
- **Post Deletion Feature:** Added the ability for users to delete their own posts, with appropriate authorization checks.
- **New Database Model:** Created the `Post` database model, including a required `text` field, `date_created`, and a foreign key to establish a one-to-many relationship with the `User` model (`author`).
- **Homepage Post Listing:** The application's homepage now displays all posts made by all users in a chronological order.
- **User-Specific Post View:** Implemented a dynamic route that displays all posts written by a specific user when their username is clicked.
- **Navigation Button:** Added a "Create a Post" button to the homepage for quick access to the creation form.

### Fixed
- **Database Persistence:** Resolved a critical bug by correcting a spelling mistake in the database configuration, ensuring that the `database.db` file is created and persists data (user accounts and posts) across server restarts.
- **Permission Check:** Ensured the post deletion button is only visible to the post's actual author.

### Changed
- **UI/UX (Navbar):** Modified the base HTML template to conditionally render the navigation bar links: showing "Login/Sign Up" when logged out and "Logout" when logged in.
- **Templating Refactor:** Consolidated the post display logic (Bootstrap card, text, author, date, delete button) into a reusable template (`post_div.html`) to maintain consistency and reduce code duplication between the home page and the new user-specific post page.
- **Post Presentation:** Updated the post display to use a structured Bootstrap **Card** format, enhancing readability.
- Update CHANGELOG.

## [0.0.2] - 2025-10-01

### Added

- **User Authentication System:** Implemented full user registration, login, and logout functionality using **Flask-Login** to manage user sessions and state.
- **Database Integration:**
    - Integrated **Flask-SQLAlchemy** and configured an **SQLite3** database (`database.db`) to persist user data.
    - Implemented the **`User` database model** (`models.py`) with fields for ID, Email, Username, Hashed Password, and Date Created.
- **Input Validation:** Added comprehensive server-side checks for user sign-up:
    - Verifying that a user's **email or username is not already in use**.
    - Ensuring **passwords match** and meet a **minimum length** requirement.
- **Session Management:** Initialized and configured the **Login Manager** to handle user sessions and automatically redirect unauthenticated users to the login page.
- **Feedback System:** Implemented a global **message flashing system** to display success and error alerts to the user using Bootstrap's `alert` classes.

### Changed

- **Route Handling:** Updated the `/sign-up` and `/login` routes to explicitly accept both **`GET` and `POST`** HTTP methods for rendering and submitting form data.
- **Homepage Access:** The main view (`views.home`) now requires a user to be logged in, enforced by the **`@login_required`** decorator.
- Update CHANGELOG, README.

### Security

- **Password Hashing:** Implemented mandatory one-way **password hashing** using the `generate_password_hash` function with **SHA-256** to ensure no plain-text passwords are stored in the database.
- **Access Control:** Applied the **`@login_required`** decorator to the logout route to prevent unauthorized or redundant access attempts.

## [0.0.1] - 2025-10-01

### Added

-   **Initial Flask Application Setup:**
    -   Created the basic project structure including the main entry point (`app.py`) and the website package (`__init__.py`).
    -   Configured the core Flask application, including setting the `SECRET_KEY`.

-   **Core Dependencies:**
    -   Added and installed fundamental Python libraries: **Flask**, **Flask-SQLAlchemy**, and **Flask-Login** for web serving, database integration, and user authentication, respectively.

-   **Modular Routing (Blueprints):**
    -   Introduced **Flask Blueprints** to organize application routes into separate, manageable files: `views.py` and `auth.py`.
    -   Defined initial endpoints for the core app (`/`, `/home`) and authentication (`/login`, `/sign-up`, `/logout`).

-   **Templating and UI:**
    -   Implemented the **Jinja Templating Engine** with template inheritance to reuse common UI components across pages.
    -   Created a master layout template (`base.html`) to hold consistent elements, such as the navigation bar and script imports.
    -   Integrated the **Bootstrap** CSS/JS framework via CDN for mobile-responsive and styled components.

-   **Base User Interface:**
    -   Created a functional, responsive **Navigation Bar** (navbar) with links to the core application routes (Home, Login, Sign Up).
    -   Created base HTML templates for the **Login** and **Sign Up** pages, including the necessary forms:
        -   **Login Form:** Email and Password fields.
        -   **Sign Up Form:** Username, Email, Password, and Confirm Password fields.

### Technical Details
- Python 3.7+ compatibility
- Git version control ready
- Virtual environment support

### Documentation
- Comprehensive README with quick start guide
- Installation instructions
- MIT license

