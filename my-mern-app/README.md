# My MERN App

This is a MERN stack application. MERN stands for MongoDB, Express.js, React.js, and Node.js. This application is containerized using Docker and orchestrated using Docker Compose.

## Project Structure

The project is divided into two main parts: the client-side and the server-side. The client-side is a React application and the server-side is an Express server that connects to a MongoDB database.

The client-side code is located in the `client` directory and the server-side code is located in the `server` directory. Each directory has its own Dockerfile for building a Docker image.

The `docker-compose.yml` file is used to define and run the multi-container Docker application.

## How to Run the Application

1. Install Docker and Docker Compose on your machine.

2. Clone this repository.

3. Navigate to the root directory of the project.

4. Run the following command to build and start the application:

```bash
docker-compose up --build
```

The React application will be available at `http://localhost:3000` and the Express server will be available at `http://localhost:5000`.

## How to Stop the Application

1. Press `Ctrl+C` in the terminal where the application is running.

2. Run the following command to stop and remove the containers:

```bash

```

## How to Run the Tests

The server-side tests are located in the `server/tests` directory. To run the tests, navigate to the `server` directory and run the following command:

```bash
npm test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)