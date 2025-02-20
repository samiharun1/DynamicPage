import cvData from "../assets/CV.json";

export default function CV() {
  return (
    <section id="CV" className="section">
      <div className="section-container">
        <h2>My CV</h2>
        <p>Take a look at my professional experience, education, and skills in detail. You can download my CV below.</p>
        <a href="files/Sami_Harun_-_Fullstack.net_utvecklare_.pdf" target="_blank" className="button">Download My CV</a>

        <h3>Education</h3>
        <ul>
          {cvData.utbildningar.map((utbildning, index) => (
            <li key={index}>
              <h4>{utbildning.namn}</h4>
              <p>{utbildning.skola}</p>
              <p>{utbildning.period}</p>
            </li>
          ))}
        </ul>

        <h3>Work Experience</h3>
        <ul>
          {cvData.arbetslivserfarenhet.map((jobb, index) => (
            <li key={index}>
              <h4>{jobb.titel} - {jobb.företag}</h4>
              <p>{jobb.period}</p>
              <p>{jobb.beskrivning}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
