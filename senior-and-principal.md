# Front-end task for Senior and Principal roles

Firstly, thanks for applying to work with us at BrightHR. We ask all potential candidates to complete a task to help assess your technical skills.

We appreciate your time is precious so don't spend too long on it - however it is important to let us know what you have left out in your Readme so we can understand what you _would_ do given more time.

You are free to decide what aspects of the solution you want to show off/focus on, but here are a few guidelines as to what we will be looking for:

- Typescript usage
- Modern React best practice
- Demonstration of unit/component testing
- Consideration for future requirements

With regards to styling we expect to see enough to demonstrate your command of CSS and web display considerations, but don't consider it a priority.

# The task

Use the endpoints provided at the urls below to create a simple SPA with a table displaying absences.

For each absence show:

- start date
- end date
- employee name
- approved/pending approval
- absence type

Please add at least **two** of the following features:

1. Include a visual indication that an absence has conflicts, using the conflict endpoint.
1. Allow the list to be sorted by dates, absence type, and name.
1. When an employee's name is clicked show all of their absences.

Your solution readme should include:

- Clear instructions on how to run the application and tests.
- A brief outline of how you would approach any functionality that is left incomplete.

# The endpoints

`https://front-end-kata.brighthr.workers.dev/api/absences` will return a full list of all absences.

`https://front-end-kata.brighthr.workers.dev/api/conflict/{id}` for a given absence id will indicate if there are conflicts or not.

# Next steps

When you’ve finished please make your solution repo available on GitHub and email a link back to us.

We will take a look as soon as we can and if you are successful at this stage your task solution will form the basis of the technical part of the interview stage.

- We'll begin by getting you to talk through your solution. There is no expected structure to this, we're interested in how you think about code and how you communicate what you've done.

- We may ask you to explain how you would approach a new requirement or a solve a specific problem in your solution.
  This will not be a live coding excercise, but we will expect you to be able to comprehensively describe what steps you would take in the context of your current solution.
