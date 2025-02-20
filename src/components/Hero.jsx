export default Hero;
import "./styles.css";

function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Sami Harun</h1>
        <p>A Fullstack .NET Developer</p>
        <a href="/projects" className="button">View My Work</a>
      </div>
    </header>
  );
}

