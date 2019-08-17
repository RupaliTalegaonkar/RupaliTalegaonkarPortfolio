import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

// Design and photography
import pic2 from '../assets/images/illustrator.png';
import pic3 from '../assets/images/photoshop.png';
import pic4 from '../assets/images/xd.png';
import pic5 from '../assets/images/aftereffect.png';
// database
import pic6 from '../assets/images/mongodb.png';
import pic7 from '../assets/images/sql.png';
// Version Control
import pic8 from '../assets/images/github.png';
import pic9 from '../assets/images/bitbucket.png';

// Project Management
import pic10 from '../assets/images/jira.png';
// Programing Langauage
import pic11 from '../assets/images/node.png';
import pic12 from '../assets/images/react.png';
import pic13 from '../assets/images/jquery.png';

//Web presentation technology
import pic14 from '../assets/images/html.png';
import pic15 from '../assets/images/css.png';
import pic16 from '../assets/images/framework.png';
// import pic2 from '../assets/images/pic02.jpg';
// import pic3 from '../assets/images/pic03.jpg';
// import pic4 from '../assets/images/pic04.jpg';
// import pic5 from '../assets/images/pic05.jpg';
// import pic6 from '../assets/images/pic06.jpg';
// import pic7 from '../assets/images/pic07.jpg';
import pic17 from '../assets/img/website-icon.png';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'blog', name:'Blog', icon:'fab fa-blogger'},
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h4 className="alt">
              Hi! I'm <strong>Rupali</strong>
              <br />
              Web developer and Designer
            </h4>
            <p>I have made few things check it out with GitHub.</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h4>Portfolio</h4>
          </header>

          <p>
            As a recent graduate from Humber College with a certificate, 
            I believe I am an excellent fit for the Web Designer opportunity. 
            I look forward to the chance to demonstrate you how my educational 
            background and other experience have prepared me to make an 
            immediate contribution to organisation.
            {/* in this position, particularly Visual design and Web design.
            Life will feel it is always a great need for eu valley, the valley
            CNN ridiculous smile at any time chat mainstream clinical homes.
            Mauris floor was very warm and we need it. One customer now nibh
            Bureau dark pools behavior. */}
          </p>
          <p>Technical Skills</p>
{/* Technical Skills */}
          <div className="row">
            <div className="col-4 col-12-mobile">
             <h4>Design and Photography</h4>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic2} alt="" />
                </a>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic3} alt="" />
                </a>
                </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic4} alt="" />
                </a>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic5} alt="" />
                </a>
              </article>
            </div>
            {/* ** Database** */}
            <div className="col-4 col-12-mobile">
             <h4>Database</h4>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic6} alt="" />
                </a>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic7} alt="" />
                </a>
              </article>
          </div>
            {/* *****version control***** */}
            <div className="col-4 col-12-mobile">
              <h4>Version Control</h4>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic8} alt="" />
                </a>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic9} alt="" />
                </a>
              </article>
            </div>
            {/* ******Project management****** */}
            <div className="col-4 col-12-mobile">
              <h4>Project Management Tracking</h4>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic10} alt="" />
                </a>
                </article>
             </div>
             {/* ***********Programing Language ******* */}
             <div className="col-4 col-12-mobile">
               <h4>Programing Langauage</h4>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic11} alt="" />
                </a>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic12} alt="" />
                </a>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic13} alt="" />
                </a>
              </article>
             </div>
             {/* *******Web Presentations Technology****** */}
             <div className="col-4 col-12-mobile">
               <h4>Web Presentation Technology</h4>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic14} alt="" />
                </a>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic15} alt="" />
                </a>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic16} alt="" />
                </a>
              </article>
             </div>

          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h4>About Me</h4>
          </header>

          <a href="/#" className="image featured">
            <img src={pic17} alt="" />
          </a>

          <p>
          <li>5+ years of experience in Software Industry with Computer Science background & software environment with    
                proven ability to handle multiple projects of fluctuating complexity and magnitude.</li>
            <li>Highly motivated Designer adept at conceptualizing, designing and maintaining product interfaces to foster 
                exceptional user experiences. </li>
            <li>Excellent understanding of Software Development Life (SDLC), Waterfall and Agile Software Development 
                Methodology utilizing Scrum & Sprint development method.</li>
            <li>Identified, managed and reported defects in management tools like JIRA</li>
            <li>Managed and administrated testing projects with tools.</li>
            <li>Experienced in collaborating with project stakeholders, developers, end users, vendors/ consultants</li>
            <li>Managed multiple tasks and prioritize responsibilities with specific deadlines and manage tasks under high     
                pressure environment</li>
          </p>
        </div>
      </section>
      <section id="blog" className="five">
        <div className="container">
          <header>
            <h2>My Blog</h2>
            <p>Creating a Starter :Starters are boilerplate projects that Gatsby developers can use to set up a new site quickly. Before creating a starter, it may be helpful to peruse the Gatsby Starter Library to see what already exists and determine how your starter will provide value.</p>
          </header>
        </div>
      </section>
      <section id="contact" className="four">
        <div className="container">
          <header>
            <h4>Hire Me</h4>
          </header>

          <p>
            Please send your contact details.
          </p>

          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
