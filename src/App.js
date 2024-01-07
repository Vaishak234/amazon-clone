import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter as Router,Routes,Route, useNavigate} from 'react-router-dom'
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { useEffect,useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from './StateProvider';
import Footer from './Footer/Footer';
import Flip  from './Flip';
import { getDocs, collection} from "firebase/firestore"
import { db } from './firebase';

function App() {
  const [{user}, dispatch] = useStateValue()
  const navigate = useNavigate()
  const [items, setItems] = useState([])
  const [results,setResults] = useState([])
  const basketCollection = collection(db, "basket")

  useEffect(() => {
  
    onAuthStateChanged(auth,(authUser) => {

      if (authUser) {
        
        dispatch({
          type: "SET_USER",
          user:authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user:null
        })
        
      }

    })
     
    
  }, [user])
  
  return (
    
      
    
    <div className="App">
      
             
      <Routes>
        
        
          <Route path="/login" element={
             <>
              <Login/>
            </>
          } />
        
          <Route  path="/" element={
            <>
             
              <Header />
                <Home />
               <Footer />
            </>
          } exact/>

     
        <Route path="/checkout" element={
            
          <>
            <Header />
            <Checkout />
            <Footer />
          </>
       
          } />
      
        <Route path="/flip" element={
          <Flip />
         }/>

        
          

          </Routes>

         
        </div>
         
   
   
  );
}

export default App;
