import React, {useState, useEffect} from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Sidebar from './pages/Sidebar';
import Content from './pages/Content';

const GET_API = 'https://api.spaceXdata.com/v3/launches?limit=100';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const response = await fetch(GET_API);
    const result = await response.json();
    setData(result);
  }

  async function showLaunchBasedonYear(year) {
    const response = await fetch(`${GET_API}&launch_year=${year}`);
    const result = await response.json();
    setData(result);
  }
  
  async function showSuccessLaunch(value) {
    const response = await fetch(`${GET_API}&launch_success=${value}`);
    const result = await response.json();
    setData(result);
  }
  
  async function showSuccessLanding(value) {
    const response = await fetch(`${GET_API}&launch_success=${value}&land_success=${value}`);
    const result = await response.json();
    setData(result);
  }

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar 
          showLaunchBasedonYear={showLaunchBasedonYear} 
          showSuccessLaunch={showSuccessLaunch}
          showSuccessLanding={showSuccessLanding}
        />
        <Content data={data} />
      </div>
      <Footer />
    </>
  );
}

export default App;
