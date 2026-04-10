import React, { useState } from 'react';

interface GreetingHeaderProps {
  nama: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CounterBoxProps {
  nilai: number;
  tambah: () => void;
  kurang: () => void;
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '20px',
  margin: '0 10px',
  cursor: 'pointer',
  borderRadius: '8px',
  border: 'none',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
};

const GreetingHeader: React.FC<GreetingHeaderProps> = (props) => {
  return (
    <div style={{ marginBottom: '40px', textAlign: 'center' }}>
      <h1>Halo {props.nama || '...'}!</h1>
      <input 
        type="text" 
        placeholder="Ketik namamu..." 
        value={props.nama}
        onChange={props.onNameChange}
        aria-label="Input nama"
        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
    </div>
  );
};

const CounterBox: React.FC<CounterBoxProps> = ({ nilai, tambah, kurang }) => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', border: '2px solid #333', borderRadius: '15px', backgroundColor: 'rgba(255,255,255,0.7)' }}>
      <h2>Counter System</h2>
      <h1 style={{ fontSize: '50px' }}>{nilai}</h1>
      
      <button onClick={kurang} style={buttonStyle} aria-label="Kurangi counter">-</button>
      <button onClick={tambah} style={buttonStyle} aria-label="Tambah counter">+</button>
    </div>
  );
};

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');

  const changeColor = () => {
    // Generate warna acak yang lebih terang/readable
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    setBgColor(randomColor);
  };

  const decrementCounter = () => {
    setCount(prevCount => Math.max(0, prevCount - 1));
  };

  return (
    <div style={{ 
      backgroundColor: bgColor, 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      transition: 'background-color 0.5s ease'
    }}>
      
      <GreetingHeader 
        nama={name} 
        onNameChange={(e) => setName(e.target.value)} 
      />

      <CounterBox 
        nilai={count} 
        tambah={() => setCount(count + 1)} 
        kurang={decrementCounter}
      />

      <button 
        onClick={changeColor} 
        style={{ 
            ...buttonStyle, 
            marginTop: '30px', 
            width: '250px', 
            backgroundColor: '#333', 
            color: 'white' 
        }}
        aria-label="Ganti warna background"
      >
        Ganti Warna Background
      </button>

    </div>
  );
};

export default App;