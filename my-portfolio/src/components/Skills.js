import React from 'react';

function Skills() {
  const skills = [
    'ASP.NET Core', 'C#', 'SQL Server', 'Entity Framework',
    'RESTful APIs', 'Microservices', 'CQRS', 'RabbitMQ',
    'gRPC', 'Redis', 'MongoDB', 'JavaScript', 'HTML', 'CSS'
  ];

  return (
    <section id="skills" style={{ padding: '50px', background: '#f8f9fa' }}>
      <h2>Skills</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {skills.map(skill => (
          <li key={skill} style={{ padding: '5px 0' }}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
