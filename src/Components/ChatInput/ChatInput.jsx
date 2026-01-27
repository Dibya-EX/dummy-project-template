import Attachment from "./Attachment";
import "./ChatInput.css";

export default function ChatInput() {
  return (
    <div className="chat-input">
      <Attachment />
      <input placeholder="Ask anything" />
      <button>↑</button>
    </div>
  );
}
