import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link, useNavigate } from 'react-router-dom'
import { useStateValue } from '../../StateProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
   const [{basket,user} , dispatch] = useStateValue()
   const navigate = useNavigate()

    const handleAuthentication = () => {
        if (user) {
            signOut(auth)
            navigate('/')
        }
    }
    
  return (
      <div className='header'>
          
          <Link to={'/'}>
               <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="AMAZON" className="header_logo" />

          </Link>
          <div className="header_search ">
              <input type="text" className="header_searchInput" />
              <SearchIcon className='header_searchIcon'></SearchIcon>
          </div>
          

          <div className="header_nav">
              <Link to={!user && '/login'}>
                 <div onClick={handleAuthentication} className="header_option ">
                      <span className="header_optionLineOne">{user ? user.email : "Hello Guest"}</span>
                      <span className="header_optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                 </div>
              </Link>
           
              <div className="header_option mediaHidden">
                   <span className="header_optionLineOne">Returns</span>
                  <span className="header_optionLineTwo">& Orders</span>
                  </div> 
              <div className="header_option mediaHidden">
                   <span className="header_optionLineOne">Your </span>
                  <span className="header_optionLineTwo">Prime</span>
              </div>
            </div>
              <div className="header_optionBasket">
                 <Link to={user ? '/checkout' : '/login'} style={{color:'white'}}>  <ShoppingBagIcon></ShoppingBagIcon></Link>
                  <span className="header_optionLineOne  header_basketCount">{basket.length }</span>
      
              </div>
              
          </div>
      
      
  )
}

export default Header