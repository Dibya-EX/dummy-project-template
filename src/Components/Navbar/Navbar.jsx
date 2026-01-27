import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">ChatGPT</div>
      <div className="nav-right">
        <span className="icon">⟳</span>
        <span className="icon">⋮</span>
      </div>
    </div>
  );
}
