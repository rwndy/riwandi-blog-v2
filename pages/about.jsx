import React from 'react'

const About = () => {
  return (
    <>
    <section className="section-about">
      <div className="container">
        <h1 className="text-center text-white mt-4 mb-3">About me</h1>
        <div className="about-image">
          <img src="../../assets/images/avatar.jpg" alt="Riwandi's avatar"/>
        </div>
        <div className="container">
          <div className="about-text">
            <p className=" text-white mt-5">My name is Riwandi. I am a Front-end Developer and also a Content Writer. I made this blog and wrote about daily activities</p>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default About
