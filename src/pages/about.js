
import { useState } from 'react'
import { ABOUT_PAGE_DATA } from '../assets/constants'

const Section = ({title , description ,  isVisible , setVisibleSection }) => {
    return (
        <div className=" border border-black p-4 m-2 relative">
        <div className='text-3xl font-semibold '>{title}</div>
        {isVisible? (
            <>
            <button className="cursor-pointer underline" onClick={() => setVisibleSection('') } >hide</button>
            <p>{description}</p>
            </>
        ):(
            <button className="cursor-pointer underline" onClick={() => setVisibleSection(title) } >show</button> 
          )
        }
        </div>
    )
}

//when clicking hide button - it should set isVisible to false 
// we can make it by setVisibleSection value to '' .

const About = () => {
    const [visibleSection , setVisibleSection] = useState('');


       
    return (
        <div>{ABOUT_PAGE_DATA.map((value) => 
                <Section 
                    key={value.title}
                    {...value}
                    isVisible={value.title === visibleSection}
                    setVisibleSection={setVisibleSection}
                ></Section>
                )}
        </div>
    )
}

export default About