import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import ChanelListContainer from "./components/ChanelListContainer";
import ChanelContainer from "./components/ChanelContainer";

const apiKey = "wqjd846ujssw";

const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <div className="app_wrapper">
      <Chat client={client} theme="team light">
        <ChanelListContainer />
        <ChanelContainer />
      </Chat>
    </div>
  );
}

export default App;
