import Container from "../Components/Container/Container";
import ChatInput from "../Components/ChatInput/ChatInput";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Container />
      <ChatInput />
    </div>
  );
}
