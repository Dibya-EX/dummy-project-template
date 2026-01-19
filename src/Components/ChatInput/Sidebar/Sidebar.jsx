import Tool from './Tool'
import ChatHistory from './ChatHistory'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Tool />
      <ChatHistory />
    </aside>
  )
}
