import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const FrontEndProficiencies = [
  'HTML',
  'CSS',
  'JavaScript',
  'jQuery',
  'responsive design',
  'React',
  'Bootstrap',
  'Progressive Web Apps',
];
const BackEndProficiencies = [
  'APIs',
  'NodeJS',
  'TypeScript',
  'Express',
  'MySQL',
  'MySQL using Sequelize',
  'Cassandra DB',
  'MongoDB',
  'MongoDB with Mongoose',
  'REST APIs',
  'GraphQL',
];
const OtherProficiencies = ['Python', 'Linux'];

function makeTitledList(title: String, list: String[]): JSX.Element {
  return (
    <div>
      <h3>{title}</h3>
      <ListGroup>
        {list.map((value: String, index: any) => {
          return (
            <ListGroup.Item as="li" variant="forest" key={index}>
              {value}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default function Resume(): JSX.Element {
  return (
    <div className="py-5">
      <h2>Resume</h2>
      <p>
        Download my <a href="#resume">Resume</a>
      </p>
      <div>
        {makeTitledList('Front End Proficiencies', FrontEndProficiencies)}
        {makeTitledList('Back End Proficiencies', BackEndProficiencies)}
        {makeTitledList('Other Proficiencies', OtherProficiencies)}
      </div>
      <div></div>
    </div>
  );
}
