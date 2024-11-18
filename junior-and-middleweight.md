# Front-end task for Junior and Middleweight roles

Firstly, thanks for applying to work with us at BrightHR. We ask all potential candidates to complete a small task to help assess your technical skills.

We appreciate your time is precious, so please don’t spend much more than a couple of hours on on it.

You are free to decide what aspects of the solution you want to show off/focus on, but here are a few guidelines as to what we will be looking for:

- Evidence of TDD
- Typescript usage
- Attention to detail

# The task

BrightHR has a section for storing, uploading and viewing documents. We would like you to build a single page application where a user can view documents that an administrator user has previously uploaded. The application should show a list of folders and files.

For each file show at least:

- File type
- Name
- Date added

For each folder indicate that it's not a file and is clickable.

Please add at least **two** of the following features:

1. Allow a user to open a folder to see it’s contents
1. Sort by name/size/date
1. Filter by filename

Your solution readme should include:

- Clear instructions on how to run the application and tests.
- A brief outline of how you would approach any functionality that is left incomplete.

# The data

For this task you will not have to use an API for the data, instead use some mock data. The following is an example JSON structure you may want to use for the files and folders data, feel free to choose your own if you think of a more appropriate shape.

```
[
    {
        "type": "pdf",
        "name": "Employee Handbook",
        "added": "2017-01-06"
    },
    {
        "type": "pdf",
        "name": "Public Holiday policy",
        "added": "2016-12-06"
    },
    {
        "type": "folder",
        "name": "Expenses",
        "files":
        [
            {
                "type": "doc",
                "name": "Expenses claim form",
                "added": "2017-05-02"
            },
            {
                "type": "doc",
                "name": "Fuel allowances",
                "added": "2017-05-03"
            }
        ]
    },
    {
        "type": "csv",
        "name": "Cost centres",
        "added": "2016-08-12"
    },
    {
        "type": "folder",
        "name": "Misc",
        "files":
        [
            {
                "type": "doc",
                "name": "Christmas party",
                "added": "2017-12-01"
            },
            {
                "type": "mov",
                "name": "Welcome to the company!",
                "added": "2015-04-24"
            }
        ]
    }
]
```

# Next steps

When you’ve finished please make your solution repo available on GitHub and email a link back to us.

We will take a look as soon as we can and if you are successful at this stage your task solution will form the basis of the technical part of the interview stage.

- We'll begin by getting you to talk through your solution, there is no structure to this we're interested in how you think about code and how you communicate what you've done.

- Secondly, once we're settled, we'll work on a new requirement together. This will NOT be an exam - we'll work through the solution together with you doing as much of the coding as you feel comfortable with. The aim isn't to finish, but to see how you approach new requirements and how you work with others.
