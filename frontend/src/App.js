import './App.css';
import Header from './components/Header';
import { useState, useEffect, createContext } from 'react';
import Mainmenu from './components/Mainmenu';
import Footer from './components/Footer';
import Passenger from './components/Passenger';
import {users} from './components/pessengers';

export const menuContext = createContext(null)
export const passengerContext = createContext()


function App() {
  const [data, setdata] = useState([])
  const [passengers, setPessengers] = useState(users)
  const [filteredData, setfilteredData] = useState(data)
  const [currPage, setcurrPage] = useState(1)
  const mealPerpage = 3;
  const lastIdx = currPage * mealPerpage;
  const firstIdx = lastIdx - mealPerpage;
  const mealsForCurrPage = filteredData.slice(firstIdx, lastIdx);

  const updateCurrPage = (curr) => {
    setcurrPage(curr)
  }


  useEffect(() => {

    const  fetchData = async() => {
        try {
          let res = await fetch("http://localhost:8000/api/menu")
          let datares = await res.json();
          setdata(datares.meals);
        }
        catch (err) {
          console.error("fetching error")
        }
    }

    fetchData();
  }, [])

  return (
    <div className='webBody'>
      <menuContext.Provider value={data}>
        <passengerContext.Provider value={{passengers,setPessengers}}>
        <div className="App">
          <Header
            setfilteredData={setfilteredData} />

          <Mainmenu
            mealsForCurrPage={mealsForCurrPage}/>
          <Footer
            updateCurrPage={updateCurrPage}
            filteredData={filteredData}
          />
        </div>
          <Passenger />
        </passengerContext.Provider>
      </menuContext.Provider>
    </div>
  );
}


export default App;
