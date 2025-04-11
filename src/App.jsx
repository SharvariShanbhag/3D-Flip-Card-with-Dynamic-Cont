import React from 'react';
import { Container } from 'react-bootstrap';
import FlipCard from './components/FlipCard';
import './App.css';

function App() {
  return (
    <Container fluid className="app-container">
      {/* <h1 className="text-center mb-5">3D Flip Profile Card</h1> */}
      <FlipCard />
    </Container>
  );
}

export default App;