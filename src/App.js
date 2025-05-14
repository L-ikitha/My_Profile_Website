import React, { useState } from 'react';
import { IoMenu, IoLogoGithub, IoMail, IoCall, IoLocationSharp, IoLogoTwitter, IoLogoLinkedin, IoHome, IoInformationCircle, IoAlbums, IoPerson, IoBriefcase } from 'react-icons/io5';
import profile from './Images/profile.jpg';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { Experience, Projects, SocialLinks } from './data';

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
      {/* Navigation Bar */}
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
        <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
          <p className="text-lg text-slate-200 font-medium">LIKITHA</p>
          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
            <a href="#home" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out flex items-center gap-2"><IoHome />Home</a>
            <a href="#about" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out flex items-center gap-2"><IoInformationCircle />About</a>
            <a href="#experience" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out flex items-center gap-2"><IoBriefcase />Experience</a>
            <a href="#projects" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out flex items-center gap-2"><IoAlbums />Projects</a>
            <a href="#contacts" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out flex items-center gap-2"><IoPerson />Contact</a>
            <a href="#" className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 ease-in-out">Download</a>
          </div>
          <div className="block md:hidden ml-auto cursor-pointer" onClick={() => setIsActive(!isActive)} aria-label="Menu">
            <IoMenu className="text-2xl text-textBase" />
          </div>
          {isActive && (
            <div className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">
              <a href="#home" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out flex items-center gap-2" onClick={() => setIsActive(false)}><IoHome />Home</a>
              <a href="#about" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out flex items-center gap-2" onClick={() => setIsActive(false)}><IoInformationCircle />About</a>
              <a href="#experience" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out flex items-center gap-2" onClick={() => setIsActive(false)}><IoBriefcase />Experience</a>
              <a href="#projects" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out flex items-center gap-2" onClick={() => setIsActive(false)}><IoAlbums />Projects</a>
              <a href="#contacts" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out flex items-center gap-2" onClick={() => setIsActive(false)}><IoPerson />Contact</a>
              <a href="#" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 ease-in-out">Download</a>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section with Spline 3D Model */}
      <div className="relative w-full h-[calc(100vh-5rem)]" id="home">
        <iframe
          src="https://my.spline.design/roomgirlworkingcopy-b195da47addf348693303a5f793e1d83/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
          title="3D Model"
        ></iframe>
        <div className="absolute bottom-10 w-full flex justify-center items-center">
          <div className="shadow-md p-4 flex items-center justify-center bg-red-900 rounded-3xl">
            <p className="text-stone-400">Know More </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-[60%] mt-5">
        {/* About Section */}
        <section className="w-50% my-24" id="about">
          <h2 className="text-3xl text-gray-400 mb-8 w-full text-center md:text-left">About</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image Box */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img className="w-full h-auto object-cover rounded-lg shadow-lg" src={profile} alt="Profile picture" />
            </div>
            {/* Content Box */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
              <p className="text-lg text-textBase text-center md:text-left">
                Hi, I’m Likitha, a Front-End Developer at Jurident specializing in React.js. I craft dynamic, responsive web applications and excel in turning designs into seamless user experiences. With expertise in JavaScript, React, and performance optimization, I’m passionate about creating high-quality, scalable solutions. Let’s connect and explore how we can build something amazing together!
              </p>
              <button className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                <span className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Download
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="w-full flex items-center justify-center" id="experience">
          <h2 className="text-3xl text-gray-400 mb-8 w-full text-center md:text-left">Experience</h2>
          <VerticalTimeline>
            {Experience && Experience.map((n) => (
              <VerticalTimelineElement
                key={n.id}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
                contentArrowStyle={{ borderRight: "7px solid  rgb(21, 24, 31)" }}
                date={n.date}
                iconStyle={{ background: "yellow", color: "#fff", borderRadius: "50%", boxShadow: "0 0 15px rgba(255, 255, 0, 0.8)" }}
                icon={
                  <div className="bg-yellow-400 rounded-full shadow-md"></div>
                }
              >
                <h3 className="vertical-timeline-element-title">{n.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{n.location}</h4>
                <p>{n.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </section>

        {/* Projects Section */}
        <section className="flex flex-wrap items-center justify-evenly my-24 gap-4" id="projects">
          {Projects && Projects.map((n, i) => (
            <motion.div
              key={n.id}
              className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
            >
              <p className="text-lg text-textBase font-medium uppercase">{n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}</p>
              <img
                src={n.imageSrc}
                className="w-full h-full object-cover rounded-md my-4"
                alt={n.name}
              />
              <div className="flex flex-1 items-center justify-between">
                <p className="text-lg text-gray-300">
                  project details...
                  <span className="block text-sm text-gray-500">
                    {n.techs.length > 10 ? `${n.techs.slice(0, 10)}...` : n.techs}
                  </span>
                </p>
                <a href={n.github}>
                  <div>
                    <IoLogoGithub className="text-textBase text-3xl" />
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Contact Section */}
        <section className="flex flex-col items-center justify-center w-full my-24" id="contacts">
          <h2 className="text-3xl text-gray-400 mb-8 w-full text-center md:text-left">Contact</h2>
          <div className="flex items-center justify-evenly w-full my-4 flex-wrap gap-4">
            {SocialLinks && SocialLinks.map((n) => (
              <motion.a
                href={n.link}
                key={n.id}
                className="w-full md:w-auto px-3 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
              >
                {n.iconSrc}
                <p className="text-lg text-textBase">{n.name}</p>
              </motion.a>
            ))}
          </div>
          <div className="w-full md:w-[50%] border border-zinc-800 rounded-md p-4 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img src="https://via.placeholder.com/400" className="w-full h-full object-cover" alt="Contact background" />
            </div>
            <div className="relative z-10 bg-white p-4 rounded-md shadow-lg">
              <form>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm text-gray-700">Name</label>
                    <input type="text" id="name" className="border border-gray-300 p-2 rounded-md" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm text-gray-700">Email</label>
                    <input type="email" id="email" className="border border-gray-300 p-2 rounded-md" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-sm text-gray-700">Message</label>
                    <textarea id="message" rows="4" className="border border-gray-300 p-2 rounded-md"></textarea>
                  </div>
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
