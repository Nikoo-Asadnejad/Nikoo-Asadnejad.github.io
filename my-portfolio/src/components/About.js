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
      With a degree in Software Engineering and a deep passion for technology, I specialize in crafting scalable, high-performance back-end solutions using ASP.NET Core and C#. My expertise spans SQL Server, Entity Framework, RESTful APIs, and Git, enabling me to deliver robust, efficient web applications.
      Driven by a love for problem-solving, I thrive on tackling complex challenges and staying ahead of industry trends. Alongside my core skills, I’m well-versed in modern technologies like Microservices, DDD, CQRS, gRPC, Redis, MongoDB, RabbitMQ, and front-end essentials like HTML, CSS, JavaScript, and MVC.
      I’m passionate about continuous learning and growth, always eager to connect with like-minded professionals and explore innovative ideas in the tech community. 
     Let’s connect and build the future of technology together!
     - As a Software Engineer and i'm trying to build applications which solve people problems.
     - Always looking forward to learn cutting-edge technologies and explore tech world.
      </p>
    </section>
  );
}

export default About;
