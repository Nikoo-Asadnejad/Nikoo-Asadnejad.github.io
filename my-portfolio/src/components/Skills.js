import React from 'react';

function Skills() {
  const skills = [
    { name: 'Csharp', src: 'https://github.com/devicons/devicon/blob/master/icons/csharp/csharp-original.svg' },
    { name: 'DotNet Core', src: 'https://github.com/devicons/devicon/blob/master/icons/dotnetcore/dotnetcore-original.svg' },
    { name: 'SQL Server', src: 'https://github.com/devicons/devicon/blob/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    { name: 'RabbitMQ', src: 'https://cdn.cdnlogo.com/logos/r/32/rabbitmq.svg' },
    { name: 'MongoDB', src: 'https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original.svg' },
    { name: 'Redis', src: 'https://github.com/devicons/devicon/blob/master/icons/redis/redis-original.svg' },
    { name: 'Git', src: 'https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg' },
    { name: 'Linux', src: 'https://github.com/marwin1991/profile-technology-icons/assets/76662862/2481dc48-be6b-4ebb-9e8c-3b957efe69fa' },
    { name: 'Http', src: 'https://user-images.githubusercontent.com/25181517/192107854-765620d7-f909-4953-a6da-36e1ef69eea6.png' },
    { name: 'RestAPI', src: 'https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png' },
    { name: 'GraphQL', src: 'https://github.com/devicons/devicon/blob/master/icons/graphql/graphql-plain.svg' },
    { name: 'gRPC', src: 'https://user-images.githubusercontent.com/25181517/192107855-e669c777-9172-49c5-b7e0-404e29df0fee.png' },
    { name: 'ElasticSearch', src: 'https://user-images.githubusercontent.com/25181517/183569191-f32cdf03-673f-4ae3-809b-3a8b376bb8a2.png' },
    { name: 'HTML5', src: 'https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg' },
    { name: 'CSS3', src: 'https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg' },
    { name: 'JavaScript', src: 'https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg' }
  ];

  return (
    <section id="skills" style={{ padding: '50px', background: '#f8f9fa', textAlign: 'center' }}>
      <h2>Skills</h2>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {skills.map(skill => (
          <li
            key={skill.name}
            style={{
              margin: '15px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '80px'
            }}
          >
            <img
              src={skill.src}
              alt={skill.name}
              title={skill.name}
              style={{ width: '40px', height: '40px', marginBottom: '10px' }}
            />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
