import React from 'react';

function About() {
  return (
    <section id="about" style={{ padding: '50px', textAlign: 'center' }}>
      <h2>About Me</h2>
      <img
        src="/profile.jpg" // Replace with the actual name of your image
        alt="Nikoo Asadnejad"
        style={{ width: '150px', borderRadius: '50%', marginBottom: '20px' }}
      />
      <p>
        With a degree in Software Engineering and a deep passion for technology, I specialize in
        crafting scalable, high-performance back-end solutions using ASP.NET Core and C#. My expertise
        spans SQL Server, Entity Framework, RESTful APIs, and Git, enabling me to deliver robust,
        efficient web applications.
      </p>
    </section>
  );
}

export default About;
