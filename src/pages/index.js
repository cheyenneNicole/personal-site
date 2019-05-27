import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>}
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <div class="container">
    <Image/>
    <div class="top-left"><h1>Cheyenne Holland</h1>
    <p>Student.</p>
    </div>
    </div>
    
    <div style={{ maxWidth: `1200px`,backgroundColor: 'pink' }}>
    <img src="images/random.jpg" alt="random" align="right"></img>
    <div style={{ maxWidth: `600px`, marginRight: 'right', backgroundColor: 'yellow', height: '400px'}}>
      <h1>
        About
      </h1>
      <p>
      Currently a computer science student Tarleton State University.
      I am up for working with any new tech I could get my hands on.
      I also love traveling, discovering new restaurants, and exploring.
      </p>
    </div>
    <div>
    </div>
    </div>
    <div class = "parent">
    <h1>Knowledge</h1>
    <p class ="hidden">Java, Javascript,etc</p>
    </div>
    <div>
      <h1>Projects</h1>
    </div>
    <div>
      <h1> Contact me </h1>
      <a href="https://github.com/cheyenneNicole">Github</a>
      <p></p>
      <a href="https://www.linkedin.com/in/cheyenne-holland-623255144">Linkedin</a>
    </div>
  </Layout>
)

export default IndexPage
