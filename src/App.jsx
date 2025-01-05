import { useEffect } from 'react'

function App() {

  useEffect(() => {
    function showOnScrollRepeated(entries) {
      entries.forEach(entry => {
          console.log(entry)
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          }
          else {
              entry.target.classList.remove('show');
          }
      });
  }
  
  const observer = new IntersectionObserver(showOnScrollRepeated);
  const hiddenElements = document.querySelectorAll('*');
  hiddenElements.forEach((el) => observer.observe(el))
  }, [])
  
  return (
    <>
      <div className="wrapper">
      <div className="container-main">
        <div className="about-banner">
          <h3 className="hidden">Hazim Razak<br></br></h3>
          <h5 className="hidden">Engineer, Programmer</h5>
          <p className="hidden"><br></br>I build projects, both hardware and software.<br></br><br></br><br></br></p>
          <span className="hidden">
            <a href="mailto:azizul.hazim.00@gmail.com"><i className="fa fa-envelope fa-xl" aria-hidden="true"></i></a>
            <a href="https://github.com/hazimrzk"><i className="fa fa-github fa-xl" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/hazim-razak-261620237/"><i className="fa fa-linkedin-square fa-xl" aria-hidden="true"></i></a>
          </span>
          <p><br></br><br></br></p>
          <a href="/resume.pdf" className="hidden" target="_blank"><button className="primary-button"> <strong>View Resume</strong> </button></a>
        </div>
        <div className="about-content">
          <div className="about-details">
            <h6 className="hidden">OVER THE YEARS</h6>
            <h6><br></br></h6>
            <p className="hidden">In my undergraduate years, I chose to enrol in engineering school at University
              Malaya and plan to pursue and hone my programming skills in my own terms. Hence, I was able to
              bring extra 'oomph' to complement my academic projects.</p>
            <p className="hidden">During my foundation studies, programming became one of my strongest subject. I
              become a person whom my peers refer to when they encountered programming-related problems.</p>
            <p className="hidden">Back in high school, I represented my school for many competitions, including
              mathematical and computational olympiads. That is when I was first exposed to programming and
              decided I was going to do it more as a hobby.</p>
          </div>
          <div className="about-languages">
            <h6 className="hidden">TECH STACKS</h6>
            <h6><br></br></h6>
            <h6 className="hidden">LANGUAGES</h6>
            <h6><br></br></h6>
            <span className='tech-icon'>
              <img src="assets/icons/dart.svg" alt="Dart"></img>
              <span>Dart</span>
            </span>
            <span className='tech-icon'>
              <img src="assets/icons/html.svg" alt="HTML"></img>
              <span>HTML</span>
            </span>

            <span className='tech-icon'>
              <img src="assets/icons/swift.svg" alt="Swift"></img>
              <span>Swift</span>
            </span>
            <span className='tech-icon'>
              <img src="assets/icons/python.svg" alt="Python"></img>
              <span>Python</span>
            </span>
            <span className='tech-icon'>
              <img src="assets/icons/cpp.svg" alt="CPP"></img>
              <span>C++</span>
            </span>
            <span className='tech-icon'>
              <img src="assets/icons/c-lang.svg" alt="C"></img>
              <span>C</span>
            </span>
            <span className='tech-icon'>
              <img src="assets/icons/sql.svg" alt="SQL"></img>
              <span>SQL</span>
            </span>
            <span className='tech-icon'>
              <img src="assets/icons/arm.svg" alt="ARM Assembly"></img>
              <span className="tech-small">ARM Assembly</span>
            </span>
            <span className='tech-icon'>
              <img src="assets/icons/javascript-alt.svg" alt="JavaScript"></img>
              <span className="tech-small">JavaScript</span>
            </span>
            <span className='tech-icon'>
              <img src="assets/icons/matlab.svg" alt="MATLAB"></img>
              <span>MATLAB</span>
            </span>
          </div>
          <div className="about-frameworks">
            <h6><br></br></h6>
            <h6><br></br></h6>
            <h6 className="hidden">FRAMEWORKS / LIBRARIES</h6>
            <h6><br></br></h6>
            <span className='tech-icon'>
              <img src="assets/icons/flutter.svg" alt="Flutter"></img>
              <span>Flutter</span>
            </span>
            <span className='tech-icon'>
              <img src="assets/icons/swiftui.svg" alt="SwiftUI"></img>
              <span>SwiftUI</span>
            </span>
            <span className='tech-icon'>
              <img src="assets/icons/uikit.svg" alt="UIKit"></img>
              <span>UIKit</span>
            </span>
            <span className='tech-icon'>
              <img src="assets/icons/flask.svg" alt="Flask"></img>
              <span>Flask</span>
            </span>
            <span className='tech-icon'>
              <img src="assets/icons/firebase.svg" alt="Firebase"></img>
              <span className="tech-small">Firebase</span>
            </span>
            <span className='tech-icon'>
              <img src="assets/icons/opencv.svg" alt="OpenCV"></img>
              <span>OpenCV</span>
            </span>
            <span className='tech-icon'>
              <img src="assets/icons/sqlite.svg" alt="SQlite"></img>
              <span>SQLite</span>
            </span>
            <span className='tech-icon'>
              <img src="assets/icons/numpy.svg" alt="SQlite"></img>
              <span>NumPy</span>
            </span>
            <span className='tech-icon'>
              <img src="assets/icons/git.svg" alt="Git"></img>
              <span>Git</span>
            </span>
            <span className='tech-icon'>
              <img src="assets/icons/github.svg" alt="GitHub"></img>
              <span>GitHub</span>
            </span>
          </div>
        </div>
      </div>

      <div className="container-main">

        <div className="container-projects project-1">
          <div className="project-title">

            <div className="project-title-image">
              <img className="image-21 hidden project-image" src="assets/images/p1/ss3.png" alt=""></img>
              <img className="image-22 hidden project-image" src="assets/images/p1/ss2.png" alt=""></img>
              <img className="image-23 hidden project-image" src="assets/images/p1/ss1.png" alt=""></img>
            </div>

            <div className="project-title-description">
              <h6 className="hidden">ACADEMIC PROJECT</h6>
              <h2 className="hidden">SPark</h2>
              <div className="project-tech">
                <span className='tech-icon'>
                  <img src="assets/icons/dart.svg" alt="Dart"></img>
                  <span>Dart</span>
                </span>
                <span className='tech-icon'>
                  <img src="assets/icons/flutter.svg" alt="Flutter"></img>
                  <span>Flutter</span>
                </span>
                <span className='tech-icon'>
                  <img src="assets/icons/firebase.svg" alt="Firebase"></img>
                  <span>Firebase</span>
                </span>
                <span className='tech-icon'>
                  <img src="assets/icons/python.svg" alt="Python"></img>
                  <span>Python</span>
                </span>
                <span className='tech-icon'>
                  <img src="assets/icons/opencv.svg" alt="OpenCV"></img>
                  <span>OpenCV</span>
                </span>
              </div>
              <div className="project-role hidden">
                <span>Project Lead</span>
                <span>&nbsp; • &nbsp;</span>
                <span>UI Design</span>
                <span>&nbsp; • &nbsp;</span>
                <span>Fullstack Development</span>
              </div>
              <p className="hidden">A project that aims to help our fellow engineering school students to find
                empty parking spots around the faculty. Helped to build an e-wallet app mockup for the
                project that
                shows vacant parking lots and automate payments via plate recognition system.</p>
              <div className="project-actions hidden">
                <a href="https://www.youtube.com/playlist?list=PLSXjISPUq6Yu_NI-gJ7qmAB4NZ4hJx08s"><button className="secondary-button">View Demo</button></a>
                <a href="https://github.com/hazimrzk/idp_parking_app"><button className="primary-button">Github
                  Link</button></a>
              </div>
            </div>
          </div>
        </div>

        <div className="container-projects project-2">
          <div className="project-title">

            <div className="project-title-image">
              <img className="image-21 hidden project-image" src="assets/images/p2/ss3.png" alt=""></img>
              <img className="image-22 hidden project-image" src="assets/images/p2/ss2.png" alt=""></img>
              <img className="image-23 hidden project-image" src="assets/images/p2/ss1.png" alt=""></img>
            </div>

            <div className="project-title-description">
              <h6 className="hidden">PERSONAL PROJECT</h6>
              <h2 className="hidden">Memorize!</h2>
              <div className="project-tech hidden">
                <span className='tech-icon'>
                  <img src="assets/icons/swift.svg" alt="Swift"></img>
                  <span>Swift</span>
                </span>
                <span className='tech-icon'>
                  <img src="assets/icons/swiftui.svg" alt="SwiftUI"></img>
                  <span>SwiftUI</span>
                </span>
                <span className='tech-icon'>
                  <img src="assets/icons/uikit.svg" alt="UIKit"></img>
                  <span>UIKit</span>
                </span>
              </div>
              <div className="project-role hidden">
                <span>Frontend Development</span>
              </div>
              <p className="hidden">Memorize! card game is a native iOS app developed via SwiftUI framework to
                offers a smooth & familiar user experience (UX). The project was done as one of my
                self-directed learning initiatives during the semester break.</p>
              <div className="project-actions hidden">
                <a href="https://youtu.be/ByD285S2UhQ"><button className="secondary-button">View
                  Demo</button></a>
                <a href="https://github.com/hazimrzk/Memorize-"><button className="primary-button">Github
                  Link</button></a>
              </div>
            </div>
          </div>
        </div>

        <div className="container-projects project-3">
          <div className="project-title">

            <div className="project-title-image">
              <img className="image-33 hidden project-image" src="assets/images/p3/ss3.png" alt=""></img>
              <img className="image-32 hidden project-image" src="assets/images/p3/ss2.png" alt=""></img>
            </div>

            <div className="project-title-description">
              <h6 className="hidden">ACADEMIC PROJECT</h6>
              <h2 className="hidden">CovAid</h2>
              <div className="project-tech hidden">
                <span className='tech-icon'>
                  <img src="assets/icons/dart.svg" alt="Dart"></img>
                  <span>Dart</span>
                </span>
                <span className='tech-icon'>
                  <img src="assets/icons/flutter.svg" alt="Flutter"></img>
                  <span>Flutter</span>
                </span>
                <span className='tech-icon'>
                  <img src="assets/icons/firebase.svg" alt="Firebase"></img>
                  <span>Firebase</span>
                </span>
                <span className='tech-icon'>
                  <img src="assets/icons/python.svg" alt="Python"></img>
                  <span>Python</span>
                </span>
              </div>
              <div className="project-role hidden">
                <span>UI Design</span>
                <span>&nbsp; • &nbsp;</span>
                <span>Frontend Development</span>
              </div>
              <p className="hidden">A CoVid-19 case tracking app that provides a quick insight on the current
                cases in Malaysia. The data was gathered from a verified source, Kementerian Kesihatan
                Malaysia (KKM) and simple yet effective analytics were presented to the users.</p>
              <div className="project-actions hidden">
                <a href="https://www.youtube.com/watch?v=o73hYmH77yQ"><button className="secondary-button">View
                  Demo</button></a>
                <a href="https://github.com/hazimrzk/CovAid"><button className="primary-button">Github
                  Link</button></a>
              </div>
            </div>
          </div>
        </div>

        <div className="container-projects project-4">
          <div className="project-title">

            <div className="project-title-image">
              <img className="image-41 hidden project-image" src="assets/images/p4/ss2.png" alt=""></img>
              <img className="image-42 hidden project-image" src="assets/images/p4/ss1.png" alt=""></img>
            </div>
            <div className="project-title-description">
              <h6 className="hidden">PERSONAL PROJECT</h6>
              <h2 className="hidden">Dev Portfolio</h2>
              <div className="project-tech hidden">
                <span className='tech-icon'>
                  <img src="assets/icons/html.svg" alt="HTML"></img>
                  <span>HTML</span>
                </span>
                <span className='tech-icon'>
                  <img src="assets/icons/css.svg" alt="CSS"></img>
                  <span>CSS</span>
                </span>
                <span className='tech-icon'>
                  <img src="assets/icons/javascript.svg" alt="JavaScript"></img>
                  <span>JavaScript</span>
                </span>
              </div>
              <div className="project-role hidden">
                <span>UI Design</span>
                <span>&nbsp; • &nbsp;</span>
                <span>Web Development</span>
              </div>
              <p className="hidden">A personal project written to highlight all my significant projects througout
                the undergraduate years in a more enticing and digestable manner.</p>
              <div className="project-actions hidden">
                <a href="https://github.com/hazimrzk/hazimrzk.github.io"><button className="primary-button">Github
                  Link</button></a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="container-main container-contacts">
        <h3 className="hidden">Send a message!</h3>
        <p className="hidden">Have any inquiries? Don't hesitate to <strong>reach out</strong>.</p>
        <span className="contacts-icons hidden">
          <a href="mailto:azizul.hazim.00@gmail.com"><i className="fa fa-envelope fa-xl" aria-hidden="true"></i></a>
          <a href="https://github.com/hazimrzk"><i className="fa fa-github fa-xl" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/hazim-razak-261620237/"><i className="fa fa-linkedin-square fa-xl" aria-hidden="true"></i></a>
        </span>
      </div>
      </div>

    </>
  )
}

export default App
