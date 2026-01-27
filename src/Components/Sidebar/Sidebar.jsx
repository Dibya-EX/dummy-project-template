import Tool from "./Tool";
import ChatHistory from "./ChatHistory";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <button className="new-chat">＋ New chat</button>

      <Tool text="Search chats" />
      <Tool text="Images" />
      <Tool text="Apps" />

      <ChatHistory />

      <div className="user">Tapasi sethy</div>
    </div>
  );
}
