import "./tool.css";

export default function Tool() {
  return (
    <div className="tools">
      <button className="new-chat">＋ New chat</button>

      <div className="tool-item">🔍 Search chats</div>
      <div className="tool-item">🖼 Images</div>
      <div className="tool-item">🧩 Apps</div>
      <div className="tool-item">📁 Projects</div>
    </div>
  );
}
