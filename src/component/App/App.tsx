// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import css from './App.module.css';
import { useState } from 'react';

function App() {
  const [vote, setVote] = useState(null);

  const handleVote = (value) => {
    setVote(value);
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions />
    </div>
  );
}

export default App;
