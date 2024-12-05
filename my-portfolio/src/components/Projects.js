import React from 'react';

function Projects() {
  const projects = [
    { name: 'Project 1', url: 'https://github.com/nikoo-asadnejad/project1' },
    { name: 'Project 2', url: 'https://github.com/nikoo-asadnejad/project2' }
  ];

  return (
    <section id="projects" style={{ padding: '50px' }}>
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.url}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
