import React, { useEffect,useState } from 'react'
import styled from 'styled-components'

function NavBar() {
 const [show , handleshow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            handleshow(true)
        } else {
            handleshow(false)
        }
            return () => {
            window.removeEventListener('scroll')
        }
     })
    },[])
  
  return (
      <>
          <Nav show={show?true:false}>
              <NavLogo  src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='NETFLIX LOGO'/>
              <NavAvatar src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' />
          </Nav>
      </>
  )
}

export default NavBar

const Nav = styled.nav`
width: 100%;
display: flex;
justify-content: space-between;
position: fixed;
align-items: center;
padding: 15px;
top: 0;
background-color: ${props => props.show ? 'black' : ''};
transition: all 0.3s ease-in;
z-index: 2;
`

const NavLogo = styled.img`
left: 20px;
width: 130px;
object-fit: contain;
`
const NavAvatar = styled.img`
position: fixed;
right: 20px;
width: 30px;
object-fit: contain;

`