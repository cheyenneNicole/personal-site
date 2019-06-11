import React from "react"
import { Link } from "gatsby"
import game from '../images/game.png';
import text from '../images/text.png';
import gamePlug from '../images/game_plug.png';
import me from '../images/blah.jpg';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>}
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <div class="container">
    <Image/>
    <header>
      <h1>Cheyenne Holland</h1>
      <p>Student.</p>
    </header>
 
    </div>
    
    <div class="container2" style = {{maxHeight:'40%'}}>
    <div class="box">
        <h1>
          About
        </h1>
        <p>
        Currently a computer science student Tarleton State University.
        I am up for working with any new tech I could get my hands on.
        I also love traveling, discovering new restaurants, and exploring.
        </p>
    </div>
    <div class="box" style = {{maxWidth:'50%'}}>
    <img style={{marginLeft:`50%`, maxWidth: `50%`}} src={me} alt="me" />
    </div>
    </div>
    
    <div class = "parent">
    <h1>Technical Skills</h1>
    <p class ="hidden"><h3>HTML CSS Javascript Java</h3></p>
    <h2>Tools I use</h2>
    <div class="box">
    <h2>Frameworks:</h2>
    <ul>
      <li>React</li>
      <li>Gatsby</li>
    </ul>
    </div>
    <div class="box">
    <h2>Software:</h2>
    <ul>
      <li>Windows</li>
      <li>Linux</li>
      <li>Git</li>
      <li>MySQL</li>
    </ul>
    </div>
    </div>
    <div style = {{maxWidth: '100%'}}>
      <h1>Projects</h1>
      <img  style={{marginLeft:'5%', maxWidth: '210px'}} src={game} alt="game" />
      <img  style={{marginLeft:'15%', maxWidth: '230px'}} src={gamePlug} alt="gameP" />
      <img  style={{marginLeft:'25%', maxWidth: '210px'}} src={text} alt="text" />
    </div>
    <div>
      <h1> Contact me </h1>
      <a href="https://github.com/cheyenneNicole">Github</a>
      <p></p>
      <a href="https://www.linkedin.com/in/cheyenne-holland-623255144">Linkedin</a>
      <p> </p>
      <a href="https://chey.dev/resume.pdf">Resume</a>
    </div>
  </Layout>
)

export default IndexPage
