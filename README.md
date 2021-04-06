# LAB: Bearer Authorization

Authentication Server Phase 2: Token (Bearer) Authentication

**Author:** Afnan Damra
**Version:** 2.0.0

**Links:**

- [Repo Link](https://github.com/afnandamra/bearer-auth)
- [GitHub Actions](https://github.com/afnandamra/bearer-auth/actions)
- [Deployed Site](https://afnan-bearer-auth.herokuapp.com/)
- [PR Link](https://github.com/afnandamra/bearer-auth/pull/1)

## Setup

### Install

- Clone the repository from GitHub
- Run the command `npm i express dotenv morgan base-64 bcrypt cors mongoose jsonwebtoken jest @code-fellows/supergoose` to install dependencies
- create .env file with PORT variable and `MONGODB_URI=mongodb://localhost:27017/auth_2` and a secret key `SECRET=xyz`

### Test

- Run the command `npm test` to test and verify the server and the midddlewares are working.
- Run the command `npm run lint` for testing lint.

### Run

- Start the server using `nodemon`
- Visit http://localhost:PORT at the PORT number you've assigned in your .env
- put the [Heroku Link](https://afnan-bearer-auth.herokuapp.com/) inside this one [front-end app](https://javascript-401.netlify.app/bearer-auth), choose Bearer Auth, and have fun :smile:

## Documentation

### UML Diagram

Below is a UML of my application (created at https://app.diagrams.net)

![UML Lab7](assets/lab7.jpg)

## Resources

[Starter code](https://github.com/LTUC/amman-javascript-401d7/tree/main/class-07/lab/starter-code)
