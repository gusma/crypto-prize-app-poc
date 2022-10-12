import { Link, Route, Routes } from 'react-router-dom'
import { MainComponent, PricingTable } from './components'
import './App.css'

const App = () => (
    <div className="App"> 
      <nav><div className='topMenu'>
      <Link to="/">Home</Link><Link to="/pricingTable">Pricing Table</Link></div></nav>  
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path='/pricingTable' element={<PricingTable />} />
      </Routes>
    </div>
)

export default App
