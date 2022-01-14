import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import styled from 'styled-components';

const LinkTW = styled(Link)`
  ${tw`
  flex
  flex-col
  w-full
  shadow-lg
  rounded-xl

  `}
`

const CardImageContainerTW = styled.div`
${tw`
relative
w-full
pt-[70%]
overflow-hidden
rounded-t-xl
after:(
  content[attr(data-category)]
  absolute
  bottom-0
  // mr-2.5
  w-20
  text-center
  right-0
  pl-2
  pr-2
  pt-1.5
  pb-1.5
  text-xs
  font-bold
  text-white
  bg-pink-500
  box-border
  // z-[-20]
)
`}
`
const CardImageTW = styled.img`

  ${tw`
    block
    absolute
    top-0 bottom-0 left-0 right-0
    object-cover
    w-full
    h-full
    max-w-full
    max-h-full
    duration-200
    ease-linear
    // z-[-20]
    // overflow-hidden

    hover:(
      scale-110
    )

  
  `}
`
const CardItemInfoContainerTW = styled.div`
      ${tw`
      pt-5 pb-5 
      pl-[30px] 
      pr-[30px]
      text-center
      md:(
         pb-4
      )
      lg:(
         pb-7
        )

      `}
`
const CardItemTitleH5TW = styled.h5`
        ${tw`
          text-gray-700
          text-lg
          leading-6
        `}

`
function CardItemTW(props) {
  return (
        <LinkTW to={props.path}>
          <CardImageContainerTW data-category={props.label}>
            <CardImageTW
              alt='Travel'
              src={props.src}
            />
          </CardImageContainerTW>
          <CardItemInfoContainerTW>
            <CardItemTitleH5TW>{props.text}</CardItemTitleH5TW>
          </CardItemInfoContainerTW>
        </LinkTW>
  );
}

export default CardItemTW;
