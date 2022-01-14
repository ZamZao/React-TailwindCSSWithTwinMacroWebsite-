import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { CustomButtonBTW } from '../Button/ButtonTW';


const NavBarTW = styled.div`

background: ${({pageIsScrolled})=>(pageIsScrolled ? "#6b21a8" : "transparent")};

${tw`
  duration-500
  ease-in-out
  w-screen
  z-[100]
  fixed
  lg:(
    flex
  )
`}
`
const NavHeaderTW = styled.div`
  span {
    color: #ec4899;
  }

  ${tw`
  h-24
  flex
    justify-between
    lg:(
      w-[50%]
    )
  `}
`
const NavBarLogo = styled.h2`
${tw`
w-[70%]
  text-white
  pl-4
  pb-4
  pt-4
  text-xl
  flex
  gap-2
  flex-wrap
  items-center
  sm:(
    text-4xl
    pl-10
    w-[100%]
  )
`}
`

const HamburgerMenu = styled(BiMenu)`

${tw`
w-[30%]
text-white
text-4xl
self-center
sm:(
  translate-x-10

)

lg:(
  hidden
)
`}
`
const openedSMMenu = tw`
pt-16
flex
flex-col
h-screen
z-[100]
fixed
bg-pink-500
w-full

`
const closedSMMenu = tw`
h-0
overflow-hidden
`

const NavBarLinksTW = styled.div`

${({isMenuOpen})=> isMenuOpen ?openedSMMenu:closedSMMenu}

${tw`
text-center
text-white
self-center
lg:(
  pr-20
  flex
  items-center
  justify-center
  absolute
  right-0
  gap-4
  h-full
  text-xl

)

`}
`

const NavLinkTW = styled(NavLink)`

${tw`

  flex
  items-center
  justify-center
  text-5xl
  pt-4
  pb-4

  lg:(
  flex
  text-xl
  h-[60%]
  items-center
  rounded-3xl
  pl-4
  pr-4
  )
  lg:hover:(
    text-black
    bg-pink-500
    duration-300
    ease-in-out
  )
`}
`
function NavbarTW() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageIsScrolled,setpageIsScrolled]= useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    
  };

  const changeBackground = () => {
      const scrollY=window.scrollY;
    scrollY >= 100 ? setpageIsScrolled(true) : setpageIsScrolled(false);
    console.log(pageIsScrolled);
  }

  window.addEventListener('scroll', changeBackground); 

  return (
    <>
      <NavBarTW pageIsScrolled={pageIsScrolled}>
        <NavHeaderTW>
          <NavBarLogo >My<span>Awesome </span> Website</NavBarLogo>
          <HamburgerMenu onClick={handleClick}/>
        </NavHeaderTW>
        <NavBarLinksTW isMenuOpen={isMenuOpen}>
          <NavLinkTW to="/"> Home</NavLinkTW>
          <NavLinkTW to="/services"> Services</NavLinkTW>
          <NavLinkTW to="/Products"> Products</NavLinkTW>
          <CustomButtonBTW isInverted><Link to="/Sign Up"> Sign Up</Link></CustomButtonBTW>
        </NavBarLinksTW>
      </NavBarTW>
      
    </>
  );
}

export default NavbarTW;
