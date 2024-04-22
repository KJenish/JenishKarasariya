import React from 'react';
import './Work.css';
import { Card, Button } from 'react-bootstrap';

// This is one of our simplest components
const projectContent = [
  {
    name: 'Event Ticketing System',
    description: 'Developed an iOS application in Swift and website in AngularJS and NodeJS, leveraging Ticketmaster APIs. Integrated with social media and interactive maps for enhanced user experience. Deployed in AWS EC2 and GCP.',
    link: '#'
  },
  {
    name: 'Faculty recommendation system',
    description: 'Designed a system to recommend faculties to students for upcoming semesters using student preferences. Leveraged Item Collaborative Filtering and Hadoop Map-Reduce in Java.',
    link: '#'
  },
  {
    name: 'Event Ticketing System',
    description: 'Developed an iOS application in Swift and website in AngularJS and NodeJS, leveraging Ticketmaster APIs. Integrated with social media and interactive maps for enhanced user experience. Deployed in AWS EC2 and GCP.',
    link: '#'
  },
  {
    name: 'Faculty recommendation system',
    description: 'Designed a system to recommend faculties to students for upcoming semesters using student preferences. Leveraged Item Collaborative Filtering and Hadoop Map-Reduce in Java.',
    link: '#'
  },
  {
    name: 'Faculty recommendation system',
    description: 'Designed a system to recommend faculties to students for upcoming semesters using student preferences. Leveraged Item Collaborative Filtering and Hadoop Map-Reduce in Java.',
    link: '#'
  },
];


const Work = () => {
  return (
    <div className="projectContainer">
      <h2 className="heading">Projects</h2>
      <div className="projectGrid">
        {projectContent.map((project, index) => (
          <Card className="projectCard" key={index}
          style ={{
            textAlign: 'center'
          }}
          >
            <Card.Body style={{padding:'0px'}}>
              <Card.Header>{project.name}</Card.Header>
              <Card.Text style={{marginTop:'20px'}}>
                {project.description}
              </Card.Text>
              <Button variant="primary" href={project.link} style={{marginBottom:'20px'}}>Source Code</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Work;