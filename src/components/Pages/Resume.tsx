import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

// I might eventually migrate to just rendering my PDFs from scratch.
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

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
  const resume = "./helloworld.pdf"
  return (
    <div className="py-5">
      <h2>Resume</h2>
      <Row>
        <Card style={{ 
          backgroundColor: '#d9dbda',
          margin: 10,
          float: 'left',
          overflow: 'hidden',
          position: 'relative',
          textAlign: 'center',
          boxShadow: "1px 1px 2px #e6e6e6",
          cursor: 'default',
          background: '#fff',
          padding: '0',
          height: 'auto'
        }} className="view">
          <embed src={resume} width="100%" height='400px' type="application/pdf" />
          {/* <Document>
            <Page size="LETTER" style={pdfStyleSheet.page}>
              <View style={pdfStyleSheet.section}>
                <Text>Jeneva Ray</Text>
              </View>
              <View style={pdfStyleSheet.section}>
                <Text>References</Text>
              </View>
            </Page>
          </Document> */}
        </Card>
      </Row>

      <p>
        Download my <a href={resume}>Resume</a>
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
