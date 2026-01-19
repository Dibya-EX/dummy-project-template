import UserMessage from './UserMessage'
import AIResponse from './AIResponse'
import './Container.css'

export default function Container() {
  return (
    <div className="container">
      <UserMessage text="What can I help with?" />
      <AIResponse text="Ask anything." />
    </div>
  )
}
