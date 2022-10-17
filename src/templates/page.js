import * as React from 'react'
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import ColoredBanner from '../components/ColoredBanner';
import Layout from '../components/Layout';
import PlainText from '../components/PlainText';
import Text from '../components/Text';
import Services from '../components/Services';
import Images from '../components/Images';
import Slider from '../components/Slider';
import Contact from '../components/Contact';

const page = ({ pageContext: { page }}) => {
    let sections = page.sections.sections 
    
    return (
        <main>
        <Layout slug={page.slug}>
            {
                sections.map((section, index) => {
                    const typeName = section.__typename;
                    switch(typeName){
                    case 'WpPage_Sections_Sections_Text':
                        return <Text {...section} key={index}/>
                    case 'WpPage_Sections_Sections_Banner':
                        return <Banner {...section} key={index}/>
                    case 'WpPage_Sections_Sections_BannerWithColor':
                        return <ColoredBanner {...section} key={index}/>
                    case 'WpPage_Sections_Sections_PlainText':
                        return <PlainText {...section} key={index}/>
                    case 'WpPage_Sections_Sections_Services':
                        return <Services {...section} key={index}/>
                    case 'WpPage_Sections_Sections_AboutUs':
                        return <AboutUs {...section} key={index}/>
                    case 'WpPage_Sections_Sections_Images':
                        return <Images {...section} key={index}/>
                    case 'WpPage_Sections_Sections_Slider':
                            return <Slider {...section} key={index}/>
                    case 'WpPage_Sections_Sections_ContactForm' :
                        return<Contact {...section} key={index} />
                    
                    default: 
                    return <p>No section</p>
                    
                    }              
                })
            }
        </Layout>
        </main>
  )
}

export default page

  