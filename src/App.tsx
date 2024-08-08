
import React from 'react';
import './App.css'; 
import PDFViewer from './PDFViewer'; 

const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <PDFViewer />
      </main>
    </div>
  );
};

export default App;