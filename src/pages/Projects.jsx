import React, { useState, useEffect } from 'react';
import projectsData from '../assets/projects.json';

export default function Projects() {
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/samiharun1/repos')
      .then((response) => response.json())
      .then((data) => {
        setGithubProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Github projects:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="Projects" className="section">
      <div className="section-container">
        <h2>My Projects</h2>

        <h3>Personal Projects</h3>
        <ul>
          {projectsData.projects.map((project, index) => (
            <li key={index}>
              <h4>{project.title}</h4>
              <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: '8px' }} />
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View on Github</a>
            </li>
          ))}
        </ul>

        <h3>Github Projects</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {githubProjects.map((project, index) => (
              <li key={index}>
                <h4>{project.name}</h4>
                <p>{project.description || 'No description available'}</p>
                <a href={project.html_url} target="_blank" rel="noopener noreferrer">View on Github</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
