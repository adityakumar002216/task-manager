### 1. How long did you spend on the coding test? 
"I spent a total of 12 hours on the Task Manager project, divided into the following stages:"

 (i) Analysis & Planning (2 hours): I began by reviewing the requirements and planning out the overall structure of the project. I chose a tech stack (React for front-end) and mapped out the core features and user stories.

(ii) Coding & Implementation (7 hours): I focused on building the key functionalities, such as task creation, editing, and deletion, as well as implementing user authentication. I also worked on developing a responsive UI with React, setting up API routes for communication with the back-end, and ensuring smooth data flow.

(iii) Testing & Debugging (2 hours): I dedicated time to testing the app for bugs, fixing issues with the UI (like responsiveness on mobile), and ensuring tasks were being correctly stored and retrieved from the database. I also tested edge cases like task deadlines and data validation.

(iv) Refinements & Final Touches (1 hour): After implementing the core features, I spent time refining the UI, adding some animations, and improving the overall performance of the app.

### 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
 The useEffect hook, which is a feature that has been available in React since version 16.8 (released in February 2019)
 the code
 ``` javascript
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setDueDate(taskToEdit.dueDate);
      setPriority(taskToEdit.priority);
      setStatus(taskToEdit.status);
    }
  }, [taskToEdit]);
```
  
### 3. How would you track down a performance issue in production? Have you ever had to do this?
When tracking down a performance issue in a Task Manager project (or any React application), the approach is fairly similar to what I outlined before, but tailored to a React-based front-end application. Below is a more focused response on how I would track down and resolve performance issues in the Task Manager project specifically, as well as some insights from experience with handling such issues in similar projects.

Steps to Track Down Performance Issues in a Task Manager Project
1. Identify Symptoms and Gather Metrics
User Experience Symptoms:
Common issues in a Task Manager project could include:

Slow page loads (e.g., the task list is slow to display).
Slow interactions (e.g., adding, editing, or deleting tasks takes too long).
UI lags when filtering or sorting tasks.
Overwhelming server response times (especially if tasks are being fetched from a backend or API).
Metrics to Monitor:

Frontend: Time to Interactive (TTI), task list rendering times, and JavaScript execution times.
Backend: API response times for CRUD operations on tasks (e.g., adding a task, fetching tasks, etc.), especially if you’re connecting to a database.
Network: Check for excessive API calls or large data payloads.
Tools for Metrics:

Google Chrome DevTools: The Performance tab can help visualize load times, scripting times, and layout shifts.
React Developer Tools: The Profiler tab helps identify slow renders or unnecessary re-renders in React components.
Real User Monitoring (RUM): Services like New Relic, Datadog, or Sentry to track user interactions and performance in production.


### 4. If you had more time, what additional features or improvements would you consider adding to the task management application?
 If I had to focus on the most valuable and impactful additions based on time and feasibility, I’d prioritize the following:
  (i) User Authentication and Authorization: Essential for security and personal data management.
 
  (ii) Task Sorting and Filtering: Enhances task management and makes the app more useful.
 
 (iii) Drag-and-Drop and Calendar Integration: Improves the user experience and productivity.
 
 (iii) Email or Push Notifications: Keeps users informed about due dates and task progress.
 
 (iv) Analytics and Reporting: Provides valuable insights into task completion and user productivity.
These improvements would make the application more feature-rich, useful, and scalable for a wider range of users.


