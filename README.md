<p align="center">
    <h3 align="center">Voting App with ReactJS, Socket.IO & Redis</h3>
    <br />
        <p align="center">
        <a href="https://voting-app-react-redis.netlify.app/">View Demo</a>
         • 
        <a href="https://votingapp.elifnurkarakoc.com/">Backend</a>
    </p>
</p>


<hr>

### Built With

- [ReactJS](https://reactjs.org/)
- [Socket.IO](https://socket.io/)
- [Redis](https://redis.io/)
- [Tailwind CSS](https://tailwindcss.com/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```
- [redis](https://redis.io/download)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/patika-hepsiburada-react-bootcamp/odev-3-elifnurkarakoc.git
   cd backend
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create .env file and write
   ```sh
   REDIS_HOST=localhost
   REDIS_PORT=6379
   ```
4. Run command

   ```sh
   npm start
   ```

5. Run command for frontend in second terminal
   ```
   cd frontend
   ```
6. Install NPM packages
   ```sh
   npm install
   ```
7. Create .env file and write
   ```sh
   REACT_APP_BACKEND_ENDPOINT=http://localhost:3000
   ```
8. Run command
   ```sh
   npm start
   ```
