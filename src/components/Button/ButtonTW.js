import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import styled from 'styled-components';

const invertedButtonStyled = tw`
    text-white  
    
    hover:(
        text-black
    bg-white
    )

`

const googleSignInButtonStyled = tw`
    text-white
    bg-blue-500
    border-none
    hover:(
        text-blue-500
        bg-blue-200
    )

`
const defaultButtonStyled = tw`
    text-black
    bg-white
    hover:(
        text-white
    bg-transparent
    )
`

const getButtonStyle= (props) => {
    if (props.isInverted) {
        return invertedButtonStyled
    } else if (props.isGoogleSignIn) {
        return googleSignInButtonStyled
    } else {
        return defaultButtonStyled
    }

}
const ButtonTW = styled.button`
${tw`
        duration-500
        ease-in-out 
        border
        px-5
        py-3
        text-sm
        rounded-3xl
        text-center
        // text-white 
        sm:(
          text-lg
        )
        `}
${getButtonStyle}
`

export const CustomButtonBTW = ({
  children,
  type,
  onClick,
  isInverted,
  isGoogleSignIn
}) => {


  return (
    <Link to='/sign-up'>
      <ButtonTW 
      isInverted={isInverted}
      isGoogleSignIn={isGoogleSignIn}
        onClick={onClick}
        type={type}
      >
        {children}
      </ButtonTW>
    </Link>
  );
};
