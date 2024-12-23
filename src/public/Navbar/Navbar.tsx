import './Navbar.css'

export const Navbar = () => {
    return (
        <div className='navbar-container'>
          <div className='navbar-logo'>
            <a href="/">NIÑO GUAPO</a>
          </div> 
          <div className='navbar-links'>
          <a href="/">Work</a>
          <a href="/">About</a>
          <a href="/">Ideas</a>
          <a href="/">Contact</a>
          <a href="/">Newsletter</a>
          </div>
        </div>
    )
}