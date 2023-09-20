import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { Contact, Portfolio, Resume, AboutMe } from './Pages';
// import { pageActions } from '../redux/page/slice';

function Navigation(): JSX.Element {
  const style = {
    backgroundColor: '#003b1b',
    color: 'white',
  };
  const innerClasses = 'mx-auto my-auto w-75';

  const { page } = useAppSelector((state) => state.page);

  const renderPage = (): any => {
    switch (page) {
      case 'about me':
        return <AboutMe />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />
      default:
        return <Portfolio />;
    }
  };
  return (
    <div style={style}>
      <div className={innerClasses}>{renderPage()}</div>
    </div>
  );
}

export default Navigation;
