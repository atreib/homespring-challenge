# Challenge front-end module

Front-end module created using Next.js and Typescript. We're running ESLint to format our code style, following the AirBnb model. Also, we've set Prettier to be another formatter to our code style. It's rules are also set in the ESLint configuration. We're using Tailwind as our CSS Framework.

Also, we're working with TDD in the front-end as well, using Cypress. We don't aim a specific coverage, but is good to cover at least the main features that are developed.

A CI and a CD pipelines are set using Github Actions. For CI, every pull-request into develop is going to run the build and the automated tests. For CD, every pull-request is going to generate a preview on Vercel.

# Environment setup

## Requirements

- Node 12.22.5+
- Yarn 1.22.5+

## Tools

- VS Code
- Git 2.31.0+

# Commands

- `dev`: Compile and run the application
- `cypress`: Opens cypress for automated e2e testing
