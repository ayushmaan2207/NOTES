import './App.css';
import Form from './components/Form'
import Counter from './components/Counter'
import {Route,Routes,NavLink} from 'react-router-dom'
// navlink active class lgayega

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/Form" > Form</NavLink>
          </li>
          <li>
            <NavLink to="/Counter" > Counter</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/Form" element={<Form/>}/>
        <Route path="/Counter" element={<Counter/>}/>
      </Routes>
    </div>
  );
}

export default App;
