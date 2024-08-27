import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const pageSize = 10;
  const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0NzQ1MTg4LCJpYXQiOjE3MjQ3NDQ4ODgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjI5NzAyZmNiLThhMTgtNDc0NS05Yzk1LWU4NWJmNDc1NjM5OCIsInN1YiI6InNtYW5zYW5pQGdpdGFtLmluIn0sImNvbXBhbnlOYW1lIjoiZ29tYXJ0IiwiY2xpZW50SUQiOiIyOTcwMmZjYi04YTE4LTQ3NDUtOWM5NS1lODViZjQ3NTYzOTgiLCJjbGllbnRTZWNyZXQiOiJLbWNzVHFUdFFTY3BPTWZhIiwib3duZXJOYW1lIjoiTS5TcmVlaGFyc2hhIiwib3duZXJFbWFpbCI6InNtYW5zYW5pQGdpdGFtLmluIiwicm9sbE5vIjoiVlUyMUNTRU4wMTAwMjE2In0.jyFUVOh7Dx2uFHOxgXfTW1fJKds7OA99K9O3naNtrRI";

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={<Home apiKey={apiKey} pageSize={pageSize} />} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
