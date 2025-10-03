import { useState, useEffect} from 'react'
import Home from './pages/home'
import About from './pages/about';
import Jobs from './pages/jobs';
import Contacts from './pages/contacts';
import Login from './pages/login';
import Register from './pages/register';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

function LoadingScreen (){
  return (
    <div className='flex items-center justify-center h-screen bg-linear-to-l from-blue-400 to-blue-800 text-white'>
      <div className='w-12 h-12 border-3 border-white border-t-transparent border-b-transparent rounded-full animate-spin'></div>
    </div>
  );
}
function PageWrapper({children}){
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() =>{
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);
  return loading ? <LoadingScreen /> : children
}
function App() {
  return (
    <Router>
      <PageWrapper >
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/jobs' element={<Jobs />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>


        </Routes>
      </PageWrapper>
    </Router>
  )
}

export default App
