import "../ChatRoom/ChatRoom.scss";
import React, { createContext, useContext, useState } from "react";
import { ChatContext } from "../../../context/chat.context";

function ChatRoom() {
  const { chat } = useContext(ChatContext);
  const { updateChat } = useContext(ChatContext);
  const { setUpdateChat } = useContext(ChatContext);
  const [conversation, setConversation] = useState([]);
  const inputHandler = (e) => {
    setConversation(e.target.value);
  };
  const reset = () => {
    setConversation([]);
  };

  const formSubmitHandler = (event) => {
    if (conversation.length < 1) {
      event.preventDefault();
      return;
    }
    event.preventDefault();
    setUpdateChat((prevArray) => [...prevArray, conversation]);
    reset();
  };

  return (
    <div>
      {chat.length < 1 ? (
        <>
          <h2>No active Chat</h2>
          <p>Click on the profile image to start a conversation</p>
          <img
            height="300"
            alt="@profile-img"
            src="https://media2.giphy.com/media/QPQ3xlJhqR1BXl89RG/giphy.gif"
            width="300"
          />
        </>
      ) : (
        <>
          <header className="header-chat">
            <img height="150" alt="@profile-img" src={chat.image} width="150" />
            <div>
              <h2>{chat.name}</h2>
              <span>{chat.post}</span>
            </div>
          </header>
          <section className="conversation-area">
            <div className="reply">
              <p> {chat.lastMsg}</p>
            </div>
            <div className="own-msg">
              <p>{chat.lastReciveMsg}</p>
            </div>
          </section>
          <span>New message : </span>
          {updateChat.map((msg, index) => {
            return (
              <div key={index} className="own-msg">
                <p>{msg}</p>
              </div>
            );
          })}
          <section className="text-input">
            <form onSubmit={formSubmitHandler}>
              <input
                className="textarea"
                onChange={inputHandler}
                value={conversation}
                placeholder="Type a message..."
              ></input>
              {conversation.length > 0 && <button>Sent</button>}
            </form>
          </section>
        </>
      )}
    </div>
  );
}

export default ChatRoom;
