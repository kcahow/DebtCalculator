import { useState } from 'react';
import { CalcForm } from './components/CalcForm';
import { DebtInfo } from './components/DebtType';
import { Results } from './components/Results';
import './App.css'

function App() {
  const [info, setInfo] = useState<DebtInfo>();

  return (
    <>
    <div className="grid-container-element">
        <div className="grid-child-element" id="inputs">
            <CalcForm calcAction={setInfo}></CalcForm>
        </div>
        <div className="grid-child-element" id="inputs">
          {info && <Results info={info} />}
        </div>
      </div>
    </>
  )
}

export default App
