import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import CardItemTW from '../CardItem/CardItemTW';


const CardSectionTw = styled.div`
${tw`

pt-16
bg-white
`}
`

const CardContainerTw = styled.div`
  ${tw`
    grid
    grid-cols-1
    w-full
    pl-4
    pr-4
    mt-10
    gap-10
    
    sm:(
      pl-20
      pr-20
    )

    md:(
      grid-cols-2
      pl-10
      pr-10
    )

    lg:(
      grid-cols-3
      pb-10
    )
  
  `}
`

const TitleCardsTW = styled.h2`
    
      ${tw`
      
      text-2xl

      sm:(
        text-5xl
      )

      `}

`
function CardsTW() {
  return (
    <CardSectionTw>
         
      <TitleCardsTW className='bg-cyan-500 shadow-lg '>Check out these EPIC Destinations!</TitleCardsTW>
      <CardContainerTw>

            <CardItemTW
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItemTW
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />


            <CardItemTW
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItemTW
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItemTW
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
      </CardContainerTw>
    </CardSectionTw>
  );
}
export default CardsTW;
