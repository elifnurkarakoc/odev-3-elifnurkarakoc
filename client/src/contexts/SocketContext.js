import { createContext, useState, useContext } from "react";
import { io } from "socket.io-client";
import { useQuestion } from "../contexts/QuestionContext";
import { useEffect } from "react";
import { socket } from "../App";
const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { options, setOptions } = useQuestion();
  // const [socket, setSocket] = useState(
  //   io(process.env.REACT_APP_BACKEND_ENDPOINT, {
  //     transports: ["websocket"],
  //   })
  // );
  // const socket =io(process.env.REACT_APP_BACKEND_ENDPOINT, {
  //   transports: ["websocket"],
  // })
  // useEffect(() => {
  //   connectSocket();
  //   console.log("connect socket run");
  //   subscribeVote((options) => {
  //     setOptions(options);
  //   });
  //   console.log("container options",options)
  // }, []);
  const connectSocket = (cb) => {
    //console.log("1-connect socket function");
    socket.on("connect", (data) => {
      console.log("connect");
      initialData((data) => {
      //  console.log("initialdata", data);
        setOptions(data);
        //console.log("connectsocket options", options);
      });
    });
    socket.on("connect_error", () => {
      console.error("connection failed");
    });
  };
  const sendVote = (topic, data) => {
    if (!socket) {
      return false;
    }
    socket.emit(topic, data);
  };
  const subscribeVote = (cb) => {
    if (!socket) {
      return false;
    }
    socket.on("vote", (data) => {
      cb(data);
    });
  };
  const initialData = (cb) => {
    if (!socket) {
      return false;
    }
    socket.on("joinsuccess", (data) => {
      cb(data);
    });
  };
  const values = {
    
    connectSocket,
    sendVote,
    subscribeVote,
    initialData,
  };

  return (
    <SocketContext.Provider value={values}>{children}</SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
