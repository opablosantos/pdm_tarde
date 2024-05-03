import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    
    margin: 0,
    padding: '4px'
  },
  container: {
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '25%',
    height: 150,
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  numeros: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '18px',
  },
  numero: {
    width: '40px',
    height: '40px',
    backgroundColor: '#4caf50',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },
  button: {
    marginTop: '20px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

function App() {
  const [numeros, setNumeros] = useState([]);

  const gerarJogo = () => {
    const novosNumeros = [];
    while (novosNumeros.length < 6) {
      const n = Math.floor(Math.random() * 60) + 1;
      if (!novosNumeros.includes(n)) {
        novosNumeros.push(n);
      }
    }
    setNumeros(novosNumeros);
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.title}>Mega Sena</div>
        <div style={styles.numeros}>
          {numeros.map((numero, index) => (
            <div key={index} style={styles.numero}>
              {numero}
            </div>
          ))}
        </div>
        <button style={styles.button} onClick={gerarJogo}>
          Gerar jogo
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));