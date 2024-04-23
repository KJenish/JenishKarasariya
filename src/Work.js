import React from 'react';
import './Work.css';
import { Card, Button } from 'react-bootstrap';

// This is one of our simplest components
const projectContent = [
  {
    name: 'EventFinder',
    description: 'EventFinder is a versatile website and iOS app built with AngularJS, Bootstrap, Node.js, TypeScript, Swift, and Flask. It utilizes the Ticketmaster and Google Maps APIs to enhance user experience with features like location auto-detection, autocomplete search, and social media sharing. Users can also save favorites locally, making it easy to find and share events nearby with personalized recommendations.',
    link: 'https://github.com/KJenish/Web-Tech-Assignments/tree/main/CSCI571__Homework_8'
  },
  {
    name: 'Named Entity Recognition (NER) with BiLSTM and GloVe Embeddings',
    description: 'Developed Named Entity Recognition (NER) on the CoNLL-2003 dataset using Bidirectional LSTM and refined it with optimized GloVe embeddings. Used with PyTorch, TensorFlow, and sci-kit-learn neural networks for the project',
    link: '#'
  },
  {
    name: 'Chefguru',
    description: 'Designed a recipe app using Material Designing and Android Studio Widgets threw which users can upload the recipe and also learn the recipes. I used firebase database for authantication and to store the data and backend is done through JAVA.',
    link: 'https://github.com/KJenish/Chefguru/tree/main/ChefGuru'
  },
  {
    name: 'AI Agent for Little-Go',
    description: 'I developed an AI agent proficient in Little-Go, employing Alpha-Beta Pruning and Q-Learning. It dynamically adapts strategies based on game patterns. Results flaunt a 90% win rate against online opponents, demonstrating its superior gameplay.',
    link: 'https://github.com/KJenish/CSCI561--foundations-of-artificial-intelligence-assignments/tree/main/HW2'
  },
  {
    name: 'Credit Card Fraud Detection (Machine Learning)',
    description: 'it is a Python program, which is run with the given dataset that analyze the operations and give the result of actual and fraud transactions from the historical data, which is done through Decision Tree Classifier (Supervised Learning), Isolation Forest & Local Outlier factor algorithms, which do anomalies detection and compute the local density deviation of given data points.',
    link: 'https://ieeexplore.ieee.org/document/9716541'
  },
  {
    name: 'My Portfolio Website',
    description: 'This portfolio, crafted with React.js, showcases a dynamic range of projects and skills in web development. Leveraging Reacts component-based architecture, it offers an interactive and user-friendly experience. Explore my work, reflecting both technical proficiency and creative solutions.',
    link: 'https://github.com/KJenish/JenishKarasariya'
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
              <Card.Text style={{marginTop:'20px', padding:'10px'}}>
                {project.description}
              </Card.Text>
              <Button variant="primary" href={project.link} target="_blank" rel="noopener noreferrer" style={{marginBottom:'20px'}}>Source Code</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Work;