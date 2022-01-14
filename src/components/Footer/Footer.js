import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import styled from 'styled-components';
import { CustomButtonBTW } from '../Button/ButtonTW';
import {GiGlobe} from 'react-icons/gi'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa'


const FooterContainerTW = styled.div`
${tw`
  bg-[#242424]
  // w-screen
  flex
  flex-col
  justify-center
  items-center
  text-white
  text-center


`}
`
const NewsLetterContainerTW = styled.div`
 }
${tw`
p-6
text-white
// mb-6
flex
flex-col
items-center


mt-10
flex-wrap

`}
`
const NewsLetterTitleTW = styled.p`
${tw`
 mb-6
 text-2xl
 px-5
`}
`

const NewsLetterSubTitleTW = styled.p`
${tw`
mb-6
text-xl

`}
`

const InputTW = styled.input`
${tw`
    w-full
    // w-screen
    px-5
    py-3
    outline-none
    border-none
    rounded-2xl
    // mb-4
    // mr-4
    // ml-4
    // text-2xl
    // float-right
    // cursor-pointer

`}
`
const FormTW = styled.form`
${tw`
  w-[95%]
 flex
 gap-5
 flex-col
 items-center
//  w-screen
//  px-10

`}

`

const NewsLetterComponent = () => {

    return (
      <NewsLetterContainerTW>

        <NewsLetterTitleTW>Join the Adventure newsletter to receive our best vacation deals
        </NewsLetterTitleTW>
        <NewsLetterSubTitleTW>You can unsubscribe at any time.</NewsLetterSubTitleTW>
        <FormTW>
            <InputTW
              name='email'
              type='email'
              placeholder='Your Email'
              /> 
            <CustomButtonBTW isInverted>Subscribe</CustomButtonBTW>
          </FormTW>

      </NewsLetterContainerTW>
    )

}

const FooterLinkContainerTW = styled.div`
${tw`
  flex
  // flex-col
  flex-row
  flex-wrap

  justify-center
  items-center
  md:(
    flex-row

  )
`}
`

const FooterColumnContainerTW = styled.div`
 ${tw`
      flex
      flex-col
      // justify-center
      // justify-evenly
      mx-10
      px-5
 `}
`
const LinksContainerTW = styled.div`
 ${tw`

      flex
      flex-col
      // justify-center
      // justify-evenly
      px-5
        min-h-[120px]
 `}
`


const FooterColumnTitle = styled.h2`
${tw`
relative
// top-5
  
text-white
pb-4
pt-6

`}

`
const FooterEndingTW = styled.div`
${tw`
    w-full
    flex
    justify-around
    text-center
    flex-col
    items-center
    gap-5
    min-h-full
    mb-5
    

    sm:(
      flex-row
      mt-10
      px-5
    )
`}

`
const FooterEndingLogo = styled.div`
${tw`
    flex
    text-center
    text-5xl
    
`}
`

const FooterEndingCopyRight = styled.div`
${tw`
    flex
`}
`
const FooterSocialMedia = styled.div`
${tw`
    flex
    justify-center
    text-white
    text-2xl
    flex-wrap
    gap-4
    px-2
    sm:(
    gap-6
      
    )
    lg:(
      gap-8

    )
    
   
`}
`

const IconGiGlobeTW = styled(GiGlobe)`
${tw`
text-white
// text-2xl



`}

`
function Footer() {
  return (
    <>
      <FooterContainerTW>
        {/* <p>hello</p> */}
      <NewsLetterComponent/>
      <FooterLinkContainerTW>
        <FooterColumnContainerTW>
            <FooterColumnTitle>About Us</FooterColumnTitle>
            <LinksContainerTW>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
            </LinksContainerTW>
        </FooterColumnContainerTW>
        <FooterColumnContainerTW>
            <FooterColumnTitle>Contact Us</FooterColumnTitle>
            <LinksContainerTW>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
            </LinksContainerTW>
        </FooterColumnContainerTW>
        <FooterColumnContainerTW>
            <FooterColumnTitle>Videos</FooterColumnTitle>
            <LinksContainerTW>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
            </LinksContainerTW>
        </FooterColumnContainerTW>

      </FooterLinkContainerTW>
    
      <FooterEndingTW>
        <FooterEndingLogo>
        TRVL<IconGiGlobeTW/>
        </FooterEndingLogo>
        <FooterEndingCopyRight>
        TRVL Ⓒ 2022
        </FooterEndingCopyRight>
        <FooterSocialMedia>
          <Link
              to='/'
              target='_blank'
              aria-label='Facebook'
              >
                <FaFacebook/>
            </Link>
            <Link
              to='/'
              target='_blank'
              aria-label='Instagram'
              >
                <FaInstagram/>
            </Link>
            <Link
              to='/'
              target='_blank'
              aria-label='Youtube'
              >
              <FaYoutube/>
            </Link>
            <Link
              to='/'
              target='_blank'
              aria-label='Twitter'
              >
              <FaTwitter/>
            </Link>
            <Link
              to='/'
              target='_blank'
              aria-label='LinkedIn'
              >
              <FaLinkedin/>
            </Link>
        </FooterSocialMedia>
      </FooterEndingTW>      
                </FooterContainerTW>
    </>
  );
}
export default Footer;