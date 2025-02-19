# Eisenhower Matrix Task Manager

## Description
The Eisenhower Matrix Task Manager is a web application designed to help users manage their tasks based on the Eisenhower Matrix principle. This principle categorizes tasks into four quadrants based on their urgency and importance, allowing users to prioritize their tasks effectively.

## Project Structure
The project consists of the following files and directories:

- `app.py`: Main backend file using Flask to create a web server that handles HTTP requests. Defines routes for rendering the main page, adding tasks, retrieving tasks, and toggling task completion status.
- `requirements.txt`: Lists dependencies required for the project, specifically Flask and flask-cors.
- `static/`: Directory containing static files used in the project, including:
  - `style.css`: CSS file defining styles for the web application.
  - `script.js`: JavaScript file handling client-side logic for adding tasks, moving tasks between quadrants, and marking tasks as completed.
- `templates/`: Directory containing HTML templates used in the project, including:
  - `index.html`: Main HTML file defining the structure of the web application.

## Detailed Description
### app.py
The `app.py` file is the core of the backend functionality. It initializes a Flask application and sets up CORS to allow cross-origin requests. It maintains a list of tasks and a current ID counter to uniquely identify each task. It defines the following routes:
- `/`: Renders the main page of the application.
- `/add_task`: Handles POST requests to add a new task. Receives task data in JSON format, creates a new task object, and appends it to the task list.
- `/get_tasks`: Handles GET requests to retrieve the list of tasks. Returns the tasks in JSON format.
- `/toggle_task`: Handles POST requests to toggle the completion status of a task. Receives the task ID in JSON format, finds the corresponding task, and toggles its completion status.

### static/style.css
The `style.css` file defines the styles for the web application, including styles for the body, header, task form, quadrants, completed section, and various elements within these sections. The styles ensure a visually appealing and user-friendly interface.

### static/script.js
The `script.js` file handles the client-side logic of the application. It includes event listeners for form submission and checkbox changes. The file defines functions to add tasks, move tasks to the completed section, move tasks back to their respective quadrants, and determine the quadrant and priority label based on the task's urgency and importance.

### templates/index.html
The `index.html` file defines the structure of the web application. It includes a header, a task form, four quadrants for categorizing tasks, a completed section, and a back-to-top button. The file uses Flask's `url_for` function to link the CSS and JavaScript files.

## Design Choices
The key design choice in this project was to use the Eisenhower Matrix principle for task management. This principle helps users prioritize their tasks based on urgency and importance, making it easier to focus on what truly matters. The decision to use Flask for the backend was driven by its simplicity and ease of use for creating web applications. Flask's ability to handle HTTP requests and render templates made it a suitable choice for this project.

Another design choice was to use JavaScript for the client-side logic. JavaScript allows for dynamic interactions on the web page, such as adding tasks, moving tasks between quadrants, and marking tasks as completed. This enhances the user experience by providing immediate feedback and updates without requiring page reloads.

In terms of styling, the project uses CSS to create a visually appealing and user-friendly interface. The colors, fonts, and layout were carefully chosen to ensure readability and ease of use.

Overall, the Eisenhower Matrix Task Manager is a comprehensive web application that helps users manage their tasks effectively. The combination of Flask for the backend, JavaScript for the client-side logic, and CSS for styling results in a robust and user-friendly task management tool.
