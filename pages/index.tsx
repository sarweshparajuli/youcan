import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Landing from '@components/index/Landing';
import Head from 'next/head';
import GridMenu from '@components/index/GridMenu';
import SideContent from '@components/index/SideContent'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/themes';
import rvNight from '../public/images/rv-night.png'
import rvPeople from '../public/images/rv-people.png'
import { StaticImageData } from 'next/image';

type FeatObject = {
  title: string,
  bgColor: string,
  btnText: string,
  content: string,
  img: StaticImageData,
  flexDir: string,
  id: number
}

function Home() {
  const featureObjects : FeatObject[] =[
    {
      title: 'Retirement Calculator',
      bgColor: '#cfd4ca',
      btnText: 'Calculate Now',
      content: 'Find how much it takes to retire in a particular city. Retirement calculator for full-time RVers coming soon.',
      img: rvNight,
      flexDir: 'row-reverse',
      id: 1
    },
    {
      title: 'Tax Calculator',
      bgColor: 'white',
      btnText: 'Estimate Your Tax',
      content: 'See how much tax you have to pay depending on where you live.',
      img: rvPeople,
      flexDir: 'row',
      id: 2
    }
  ]
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>YouCan</title>
      </Head>
      <Navbar />
      <Landing />
      <GridMenu />
      {featureObjects.map((object : FeatObject) => <SideContent featureObject={object} key={(object.id)}/>)}
      <Footer />
    </ThemeProvider>
  );
}

export default Home;
