# Front-end task for Senior and Principal roles

Firstly, thanks for applying to work with us at BrightHR. We ask all potential candidates to complete a small task to help assess your technical skills.

We appreciate your time is precious, so please don’t spend much more than a couple of hours on on it.

You are free to decide what aspects of the solution you want to show off/focus on, but here are a few guidelines as to what we will be looking for:

- Evidence of TDD
- Typescript usage
- Attention to detail

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

- We'll begin by getting you to talk through your solution, there is no structure to this we're interested in how you think about code and how you communicate what you've done.

- Secondly, once we're settled, we'll work on a new requirement together. This will NOT be an exam - we'll work through the solution together with you doing as much of the coding as you feel comfortable with. The aim isn't to finish, but to see how you approach new requirements and how you work with others.
