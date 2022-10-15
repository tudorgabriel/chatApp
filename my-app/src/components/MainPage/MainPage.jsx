import React, { useContext } from "react";
import "../MainPage/MainPage.scss";
import USERS from "../../_assets/users.json";
import ChatRoom from "./ChatRoom/ChatRoom";
import { ChatContext } from "../../context/chat.context";

function MainPage() {
  const { addUser } = useContext(ChatContext);
  return (
    <>
      <h1>The chat dashboard</h1>;
      <section className="main">
        <section className="users-section">
          {USERS.map((item, i) => {
            return (
              <div key={item.id} className="user-box">
                <a onClick={() => addUser(item)}>
                  <img
                    height="200"
                    alt="@profile-img"
                    src={item.image}
                    width="200"
                  />
                  <h3> {item.name}</h3>
                </a>
              </div>
            );
          })}
        </section>
        <div className="chat">
          <ChatRoom />
        </div>
      </section>
    </>
  );
}

export default MainPage;
