import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NotFound from './NotFound';
import Sidebar from './Components/ChatInput/Sidebar/Sidebar';
import Navbar from './Components/ChatInput/Navbar/Navbar';
import Container from './Components/ChatInput/Container/Container';
import ChatInput from './Components/ChatInput/Chatinput/ChatInput';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
            <Sidebar />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
              <Navbar />
              <Container />
              <ChatInput />
            </div>
          </div>
        } />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
