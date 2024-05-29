import './Homesection.css';
import Typing from './Typing';
import logO from './laptop-boy.gif';
import './Typing.js';
import './fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Homesection() {
    return (
        <section class="home">
            <div id="first-home">
              <div className="first-img">
                <img src={logO} alt="Logo" />
            </div>
            <div class="first-col">
                <h1 class="hello">
                <Typing 
      Text={[
              "Hello All! I'm Gowtham"
      ]}
      typingSpeed = {50}
      deletingSpeed = {40}
      duration = {1000}
      />
                    {/* <span class="wave"></span> */}
                </h1>
                <p class="intro">
                    A passionate Student living his life by taking up challenging tasks and asspiring to build something crazy...!
                </p>
                <div class="social-media">
                <a class="bt" href="#">
                <FontAwesomeIcon class="fab" icon="fa-brands fa-instagram" />
                </a>
                <a class="bt" href="#">
                <FontAwesomeIcon class="fab" icon="fa-brands fa-linkedin" />
                </a>
                <a class="bt" href="#">
                <FontAwesomeIcon class="fab" icon="fa-brands fa-twitter" />
                </a>
                <a class="bt" href="#">
                <FontAwesomeIcon class="fab" icon="fa-brands fa-github" />
                </a>
                <a class="bt" href="#">
                <FontAwesomeIcon class="fab" icon="fa-brands fa-google" />
                </a>
            </div>
            </div>
           
            </div>
        </section>
    );
}

export default Homesection;
