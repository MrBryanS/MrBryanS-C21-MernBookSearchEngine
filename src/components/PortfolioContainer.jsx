import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');


  // TODO: Add a comment describing the functionality of this method:
  // Use the current page state to conditionally return the component for the selected page
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/*TODO: Add a comment describing what we are passing as props:
      currentPage (prop) 
      {currentPage} (expression) 
      handlePageChange (prop) 
      {handlePageChange} (expression) 
      */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/*TODO: Add a comment explaining what is happening on the following line:  
      Use render page to return the component and react is rendering it
      */}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}
