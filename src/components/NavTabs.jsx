
//*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for: 
// Destructure the object that contains the props and set it to local variables
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          /* 
          Ternary operator, checking for which page is active
          */
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for: 
          // Using the handlePageChange hook to update the state of the currentPage
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#work"
          onClick={() => handlePageChange('Work')}
          /* TODO: Add a comment explaining what this logic is doing
          Ternary operator, checking for which page is active
          */
          className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
        >
          Work
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          /* TODO: Add a comment explaining what this logic is doing
          Ternary operator, checking for which page is active
          */
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
