import Tool from "./tool";
import ChatHistory from "./chathistory";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* Top tools */}
      <Tool />

      {/* Chat history */}
      <ChatHistory />

      {/* User profile */}
      <div className="sidebar-profile">
        <div className="avatar">T</div>
        <div>
          <p className="name">Tapasi sethy</p>
          <span className="plan">Free</span>
        </div>
      </div>
    </div>
  );
}
