# Frontend assesment

## Goals of the assesment

Evaluate implementation of concepts related to component-based architectures, testing and frontend related knowledge in general.

## Requirements

![schema](schema.jpg)

Build a React application that allow to create users with name and friends (friends are also users) with the following:

- A page that lists all users and links to a user detail page and to a "create user" page (1 in schema)
- A page to create a new user (2 in schema)

  - in this page a user must insert a name
  - a friend can optionally be selected by users already existing
  - if "new friend" is clicked a new "create user" page is stacked on top of the current one while showing a slice of the previous
    NB: this can we done infinitely - when two or more creation are stacked clicking on a lower item in the stack asks the user to save or abort current user creation

- A page that allow edit of a user (3 in schema)

## constrains

- a user creation or user update can randomly fail.
- if a creation fails, try again without the user knowing
- if a creation fails two times in a row inform the user that something went wrong and show a button that allow for a retry
- cannot have two or more users with the same name

## Faq

Q: Should I create a server for the API?  
A: No, an in-memory implementation is enought

Q: Is the visual styling relevant for this test  
A: No

Q: Should it work on mobile?  
A: This is unimportant

Q: Can I use an existing component library? (material-ui, reactstrap etc)  
A: No, it creates too much unnecessary clutter, defeating the purpose of this test.

Q: Can I use library XXX or framework YYY ?  
A: Use anything you think is most appropriate for the usecase

Q: What should I test and how should I test it?  
A: This decision is open to developer.
