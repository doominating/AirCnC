# AirCnC (NodeJS, ReactJS & React-Native)

Rocketseat OminiStack Week #9 Challenge Project

- [AirCnC (NodeJS, ReactJS & React-Native)](#aircnc-nodejs-reactjs--react-native)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Roadmap](#roadmap)
  - [License](#license)

## Usage

On the web app, you can login you user session and add spots of your company or similar, that you want to devs can visit for free or a specific price, for specific techs. Then, after some dev require the schedule the date, you can approve or reject then. On the mobile app, the devs can search for spots for specific techsand require on a determinated date for visit it.

## Technologies

This app features all the latest tools and practices in javascript stack!

- ⚛️ **React JS** — A JavaScript library for building user interfaces - [site](https://reactjs.org/)
- ⚛️ **React Native** — A lib that provides a way to create native apps for Android and iOS - [site](https://facebook.github.io/react-native/)
- 💹 **Node JS** — A web framework for Node Js - [site](https://nodejs.org/)
- 📄 **MongoDB** — A cross-platform and open-source document-oriented database - [site](https://www.mongodb.com/)
- ♻️ **Socket IO** — A library for realtime web applications - [site](https://socket.io/)
- **Express** - A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications - [site](https://expressjs.com/pt-br/)
- **Nodemon** - A utility that will monitor for any changes in the source code and automatically restart the server - [site](https://nodemon.io/)

## Installation

Clone the project with the following command:

```sh
git clone https://github.com/doominating/AirCnC.git
```

Then, get in the project dir and install the dependencies for each enviroment (backend, frontend and mobile):

```sh
cd AirCnC/backend
yarn install

cd AirCnC/frontend
yarn install

cd AirCnC/mobile
yarn install
```

Then, you have to fill your MongoDB configuration in .env file.

Finally, you can start the applications (backend/frontend/mobile) with:

```sh
yarn start
```

If you are in development environment, you can use the development server for backend:

```sh
yarn dev
```

## Roadmap

- (**OK**) Create backend, frontend and mobile just like the OmniStack Challenge;
- Add update spot;
- Add delete spot;
- Add sign out user;
- Refactoring to improve the code readability;

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
