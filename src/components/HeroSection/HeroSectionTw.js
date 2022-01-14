import React from 'react';
import tw from 'twin.macro';
import { CustomButtonBTW } from '../Button/ButtonTW';

const HeroContainerTW = tw.div`
    h-screen
    w-screen
    flex
    flex-col
    justify-center
    items-center
    shadow-inner
    bg-opacity-20
    bg-black

`
const VideoContainerTW = tw.video`
    object-cover
    w-screen
    // overflow-hidden
    fixed
    z-[-1]
    
    h-screen
`
export const TitleTW = tw.h1`
    text-3xl
    
    text-white
    font-sans
    font-bold
    sm:(
      text-7xl
      pr-2
      pl-2
    )
`
const SubtitleTW = tw.h1`
    
    text-xl
    text-white
    font-sans
    pr-4
    pl-4
    font-weight[400]
    pt-5

    sm:(
        pt-7
        text-4xl
    )
`
const  HeroButtonContainerTW = tw.div`
    mt-14
    flex
    flex-col
    items-center
    gap-4
    px-2
    sm:(
      flex-row
    )

`
function HeroSectionTW() {
  return (
    <HeroContainerTW>
      <TitleTW>ADVENTURE AWAITS</TitleTW>
      <SubtitleTW>What are you waiting for?</SubtitleTW>
      <VideoContainerTW src='/videos/video-1.mp4' autoPlay loop muted />
      <HeroButtonContainerTW>
        <CustomButtonBTW>
          GET STARTED
        </CustomButtonBTW>
        <CustomButtonBTW isInverted
          onClick={console.log('hey')}
        >
          WATCH TRAILER! <i className='far fa-play-circle' />
        </CustomButtonBTW>
      </HeroButtonContainerTW>
    </HeroContainerTW>
  );
}

export default HeroSectionTW;
