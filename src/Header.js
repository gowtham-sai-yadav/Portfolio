import './Header.css'
import Typing  from './Typing';

function Header() {
    return (
        <div>
       <header class="header">
        <nav class="entire-nav">
            <a href="index.html" class="navbar-brand-name">Gowtham Sai G</a>
            <ul class="nav-bar list-navigator">
                <li class="nav-item">
                    <a href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a href="skills.html">Skills</a>
                </li>
                <li class="nav-item">
                    <a href="Projects.html">Projects</a>
                </li>
                <li class="nav-item">
                    <a href="Contactme.html">Contactme</a>
                </li>
            </ul>
        </nav>
       </header>
      
      </div>
    
  
    )

}
// function containet-1() {
//     return(<div>
//         <section id="home">

//         </section>
//     </div>)
// }

export default Header;