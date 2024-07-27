import { useContext, useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import News from "./components/News";
import Paging from "./components/Paging";
import { AppContext } from './context/AppContext';

function App() {

  const {fetchBlogPosts} = useContext(AppContext);
  useEffect(()=>{
    fetchBlogPosts();
  },[]);

  return (
    <div>
      <Header/>
      <News/>
      <Paging/>
    </div>
  );
}

export default App;
