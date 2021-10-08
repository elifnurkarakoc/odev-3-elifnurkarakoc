import "./App.css";
import Container from "./layout/Container";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { io } from "socket.io-client";
export const socket =io(process.env.REACT_APP_BACKEND_ENDPOINT, {
  transports: ["websocket"],
})

function App() {
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
}

export default App;
