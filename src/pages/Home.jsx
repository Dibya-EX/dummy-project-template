import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import Container from '../components/Container/Container'
import ChatInput from '../components/ChatInput/ChatInput'
import './Home.css'

export default function Home() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main">
        <Navbar />
        <Container />
        <ChatInput />
      </div>
    </div>
  )
}
