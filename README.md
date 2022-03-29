# HomeSpring Tech Challenge

Task: develop a very basic application for users to search a corpus of
books via the Google Books API. Your application should have a basic frontend UI that prompts
the user for a search query or keywords then displays results from the Google Books database.

# Demo

- Front-end: https://homespring-challenge-frontend.vercel.app/
- Back-end: https://homespring-challenge-backend.herokuapp.com/docs/

_(Every front-end pull-request is going to deploy a Preview version on Vercel)_

# Deploy

We've set a CI/CD pipeline using Github Actions and Heroku.
Every new pull-request (except on `develop` and `master` branches) triggers build and test scripts. And every new pull-request on develop triggers build, test and deploy on Heroku.

The Heroku secret is stored in the Github Secrets.

# References

- Google Books API docs: https://developers.google.com/books/docs/v1/using
- Figma: https://www.figma.com/file/ysxUdtjaQ60ntYsWlVRsft/Book-search

# Contributing

You can read more about the development process and how to contribute through the CONTRIBUTING.md file or by accessing the modules directories (each one'll have its own README file, containing more information about it)
