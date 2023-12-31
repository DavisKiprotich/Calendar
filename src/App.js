import React, {useState} from 'react'
import './App.css';
import { getMonth } from './util.js'
import CalendarHeader from './components/CalendarHeader'
import Sidebar from './components/Sidebar'
import Month from './components/Month'

function App() {
  console.log(getMonth(3))
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  return (
    <React.Fragment>
      <div className='h-screen flex flex-columns'>
        <CalendarHeader />
        <div className='flex flex-1'>
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
