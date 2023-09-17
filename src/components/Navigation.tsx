import React from 'react'
import { useAppSelector } from '../redux/hooks'
import { Contact, Portfolio, Resume, AboutMe } from './Pages'

function Navigation(): JSX.Element {
    const style = {
        backgroundColor: '#003b1b',
        color: 'white',
        height: window.innerHeight
    }
    const innerClasses = 'mx-auto w-75'

    const { page } = useAppSelector((state) => state.page)

    const renderPage = () : any => {
        switch (page) {
            case 'About Me': 
                return <AboutMe />
            case 'Contact':
                return <Contact />
            case 'Resume':
                return <Resume />
            case undefined:
                console.log(window.location.pathname)
                return <Portfolio />
            default:
                return <Portfolio />
        }
    }
    return (
        <div style={style}>
            <div className={innerClasses}>
                {renderPage()}
            </div>
        </div>
    )
}

export default Navigation