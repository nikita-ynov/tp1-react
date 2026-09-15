import { useState } from 'react';
import './App.css'
import HelloWorld from './components/HelloWorld'
import { Link } from 'react-router-dom';

function App() {
  const [counter, setCounter] = useState(0)
  let isValide: boolean = true;

  function handleClickCounter() {
    console.log("Counter: " + counter)
    setCounter(counter + 1)
  }
  const hc = () => setCounter(counter+1);
  return (
    <>
      <header>
        <Link to="/userList">Go to user</Link>
      </header>
      <section id="center">
        <div>
          {isValide && <HelloWorld name="Martin" />}
              {
                counter > 3 ?
                  <div>Important things COUNTER</div>
                  :
                  <div>Site things COUNTER</div>
              }
              <p>Counter: {counter}</p>
              <br />
              <button className='counter' onClick={handleClickCounter}>Click Counter</button> <br />
              <button className='counter' onClick={() => setCounter(counter+1)}>Click Counter</button>
              <br />
              <button className='counter' onClick={hc}>Click Counter</button>

          {
            ["Loise", "Jean-michel", "Marie", "Pierre"]
              .map((el) => <HelloWorld name={el} />)
          }
        </div>
      </section>
    </>
  )
}

export default App
