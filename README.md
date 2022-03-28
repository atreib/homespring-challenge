# HomeSpring Tech Challenge

Task: develop a very basic application for users to search a corpus of
books via the Google Books API. Your application should have a basic frontend UI that prompts
the user for a search query or keywords then displays results from the Google Books database.

# Deploy

We've set a CI/CD pipeline using Github Actions and Heroku.
Every new pull-request (except on `develop` and `master` branches) triggers build and test scripts. And every new pull-request on develop triggers build, test and deploy on Heroku.

The Heroku secret is stored in the Github Secrets.

- Staging: https://homespring-challenge-backend.herokuapp.com/

# References

- Google Books API docs: https://developers.google.com/books/docs/v1/using
- Figma: https://www.figma.com/file/ysxUdtjaQ60ntYsWlVRsft/Book-search
