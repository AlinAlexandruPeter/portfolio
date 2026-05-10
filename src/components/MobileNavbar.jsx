import StaggeredMenu from './StaggeredMenu';
import logoGray from '../assets/images/logo-gray.png';
import logoWhite from '../assets/images/logo-white.png';
import { useContext } from 'react';
import { ScreenContext } from '../context/screen-context';

const socialItems = [
  { 
    label: 'LinkedIn', 
    link: 'https://www.linkedin.com/in/alin-alexandru-peter-3b1b93232' 
  },
  { 
    label: 'Instagram', 
    link: 'https://www.instagram.com/peter_aa21' 
  },
  { 
    label: 'Facebook', 
    link: 'https://www.facebook.com/alin.alex.peter' 
  }
];


const MobileNavbar = () => {
  const { screen } = useContext(ScreenContext);
  const grayLogoPages = ["home", "project", "projects"]

  const menuItems = [
    { label: 'Home', link: 'home' },
    { label: 'Projects', link: 'projects' },
    { label: 'Experience', link: 'experience' },
    { label: 'About Me', link: 'about' },
    { label: 'Contact', link: 'contact' },
  ];

  return (
    <div 
      style={{ height: '100vh', background: 'transparent' }} 
      className='w-full absolute lg:hidden'
    >
      <StaggeredMenu
        position='right'
        isFixed
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={false}
        menuButtonColor={'#74cac1'}
        openMenuButtonColor='#74cac1'
        changeMenuColorOnOpen={true}
        colors={['#74cac1', '#000']}
        logoUrl={
          grayLogoPages.includes(screen)
            ? logoGray
            : logoWhite
        }
        accentColor='#000'
        className='lg:hidden z-10'
      />
    </div>
  )
}

export default MobileNavbar