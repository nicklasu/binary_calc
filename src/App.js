import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import UnsignedComponent from './Components/UnsignedComponent/UnsignedComponent';
import SignedComponent from './Components/SignedComponent/SignedComponent';
import Button from './Components/Button/Button';

function App() {
  const [sign, setSign] = useState('unsigned');

  return (
    <main className="main-content">
      <Header sign={sign} />
      <Button text="unsgnd" setValue={setSign} />
      <Button text="signed" setValue={setSign} />

      {
      // Signed pressed, show signed component. Otherwise show unsigned component
      sign === 'signed'
        ? (
          <SignedComponent />
        )
        : (
          <UnsignedComponent />
        )
}
    </main>
  );
}

export default App;
