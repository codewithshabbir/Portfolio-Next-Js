import Image from "next/image";
import bannerModel from "/public/images/banner-modal.png";
import upRightArrow from "/public/images/up-right.svg";
import servicesBg from "/public/images/services-bg.png";
import project1 from "/public/images/services/frontend-web-development.png";
import project2 from "/public/images/services/wordPress-website-creation.png";
import project3 from "/public/images/services/figma-to-HTML-conversion.png";
import aboutMe from "/public/images/about-me.png";
import helloTop from "/public/images/hello-top.svg";
import nameBottom from "/public/images/name-bottom.svg";
import { FaGithub } from 'react-icons/fa';
import { FaDownload } from "react-icons/fa6";
import { HiAcademicCap, HiBriefcase, HiBookOpen, HiPhone, HiMail } from 'react-icons/hi';
import ResponsiveGrid from "./components/ResponsiveGrid";
import SectionHeadings from "./components/SectionHeadings";
import ServicesCards from "./components/ServicesCards";
import ProgressBar from "./components/ProgressBar";
import SoftSkillsSlide from "./components/SoftSkillsSlide";
import Projects from "./components/Projects";



export default function Home() {
  return (
   <>
      <section className="banner relative overflow-hidden">
        <ResponsiveGrid itemCount={128}/>
            <div className="relative">
                <div className="flex flex-col items-center pt-40">
                    <div className="relative">
                        <h4 className="text-xl font-semibold border border-black px-6 py-1 rounded-full">Hello</h4>
                        <Image className="absolute -top-6 -right-6" src={helloTop} alt=""/>
                    </div>
                    <div className="relative">
                        <h1 className="cursor-scale text-4xl sm:text-5xl lg:text-6xl font-bold text-center tracking-wide word leading-tight">I'm <span className="underline stroke-orange-500">Muhammad Shabbir,</span> <br/>
                            Website Developer
                        </h1>
                        <Image className="absolute -bottom-12 left-0 sm:left-3 lg:left-4 w-[55px] sm:w-[60px] lg:w-auto" src={nameBottom} alt=""/>
                    </div>
                </div>
                <div className="flex flex-col items-center relative -m-16 mb-0">
                    <div className="image relative flex justify-center">
                        <Image src={bannerModel} alt="Model"/>
                    </div>
    
                    <div className="absolute z-[2] bottom-10">
                        <div className="slide-button-wrapper relative bg-white bg-opacity-25 rounded-full w-auto p-3">
                            <input className="hidden" type="radio" name="slide" id="button-one"/>
                            <input className="hidden" type="radio" name="slide" id="button-two"/>
                        
                            <div className=" cursor-scale button-container flex">
                                <a className="z-[2]" href="">
                                    <label className="text-md sm:text-xl cursor-pointer text-white flex justify-center items-center w-32 sm:w-40 h-14" htmlFor="button-one">
                                        Portfolio
                                        <Image src={upRightArrow} alt="Arrow"/>
                                    </label>
                                </a>
                                
                                <a className="z-[2]" href="">
                                    <label className="text-md sm:text-xl cursor-pointer text-white flex justify-center items-center w-32 sm:w-40 h-14" htmlFor="button-two">
                                        Hire Me
                                        <Image src={upRightArrow} alt="Arrow"/>
                                    </label>
                                </a>
                            </div>                        
                        
                            <div className="slide-buttons z-[1] absolute top-3 bg-orange-500 w-32 sm:w-40 h-14 transition-transform duration-300 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
      <section className="service relative px-4 md:px-20">
            <Image className="absolute w-full rounded-[45px] bottom-0 left-0" src={servicesBg} alt=""/>
            <div className="relative py-20">
                <SectionHeadings heading="My Services"/>
                <ServicesCards/>
            </div>
      </section>
      <section className="about-me relative py-20">
            <div className="container mx-auto px-4 sm:px-10">
                <div className="grid grid-cols-12 gap-6 mt-10">
                    <div className="col-span-12 lg:col-span-6">
                        <Image className="w-full h-auto object-cover" src={aboutMe} alt=""/>
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex flex-col relative items-start">
                        <h1 className="relative text-black text-4xl sm:text-5xl">About Me</h1>
                        <div className="flex mt-2">
                            <div className="relative ms-24 w-3 h-3 border border-black rounded-full before:absolute before:h-0.5 before:top-1 before:bg-black before:w-16 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-black after:w-16 after:left-5"></div>
                        </div>
                        <p className="text-black mt-5 text-sm sm:text-base">Passionate Front-End and Back-End Developer with over 1+ years of experience in web development. Proficient in creating custom, SEO-friendly websites, with a strong expertise in WordPress. Currently advancing my skills in the MERN stack and AI to deliver cutting-edge solutions. Committed to providing high-quality, user-focused digital experiences.</p>
        
                        <div className="mt-3 w-full">
                            <label className="text-black inline-block mb-1">Figma to HTML Conversion</label>
                            <ProgressBar percentage={'100%'} width="w-full"/>
                        </div>
                        
                        <div className="mt-3 w-full">
                            <label className="text-black inline-block mb-1">Frontend Web Development</label>
                            <ProgressBar percentage={'95%'} width="w-[95%]"/>
                        </div>
        
                        <div className="mt-3 w-full">
                            <label className="text-black inline-block mb-1">WordPress Website Creation</label>
                            <ProgressBar percentage={'85%'} width="w-[85%]"/>
                        </div>
        
                        <div className="relative block mt-8 line">
                            <a className="about-btn border-2 border-orange-500 relative inline-block text-[16px] leading-[50px] font-bold bg-transparent rounded-xl px-[35px] pt-[1px] pb-0 overflow-hidden font-sans capitalize transition-all ease-linear duration-300 stroke-orange-500 hover:text-white z-[1]" target="_blank" href="about">
                                Download Resume
                                <FaDownload className="ml-1 inline-block text-sm font-bold" width={24} height={24}/>
                                <span className="hover-btn hover-bx"></span>
                                <span className="hover-btn hover-bx2"></span>
                                <span className="hover-btn hover-bx3"></span>
                                <span className="hover-btn hover-bx4"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
      </section>

    <SoftSkillsSlide/>
      
      <section className="skills py-20">
            <div>
                <h1 className="relative text-5xl text-center">My Skills</h1>
                <div className="flex justify-center mt-2">
                    <div className="relative w-3 h-3 border border-black rounded-full before:absolute before:h-0.5 before:top-1 before:bg-black before:w-16 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-black after:w-16 after:left-5"></div>
                </div>
                <div className="flex flex-col md:flex-row px-0 md:px-10 py-10">
                    <div className="w-full md:w-2/4 px-5 md:px-10 mb-10 md:mb-0">
                        <h2 className="text-2xl underline">Languages:</h2>
                        <div>
                            <label className="inline-block mt-3 mb-1">HTML</label>
                            <ProgressBar percentage={'98%'} width="w-[98%]"/>
                        </div>
                        <div>
                            <label className="inline-block mt-3 mb-1">CSS</label>
                            <ProgressBar percentage={'94%'} width="w-[94%]"/>
                        </div>
                        <div>
                            <label className="inline-block mt-3 mb-1">JavaScript</label>
                            <ProgressBar percentage={'86%'} width="w-[86%]"/>
                        </div>
                        <div>
                            <label className="inline-block mt-3 mb-1">TypeScript</label>
                            <ProgressBar percentage={'80%'} width="w-[80%]"/>
                        </div>
                        <div>
                            <label className="inline-block mt-3 mb-1">PHP</label>
                            <ProgressBar percentage={'75%'} width="w-[75%]"/>
                        </div>
        
                        <h2 className="text-2xl underline mt-10">Version Control:</h2>
        
                        <div>
                            <label className="inline-block mt-3 mb-1">Git</label>
                            <ProgressBar percentage={'80%'} width="w-[80%]"/>
                            <label className="inline-block mt-3 mb-1">Github</label>
                            <ProgressBar percentage={'80%'} width="w-[80%]"/>
                        </div>
                    </div>
                    <div className="w-full md:w-2/4 px-5 md:px-10">
                        <h2 className="text-2xl underline">Frameworks:</h2>
                        <div>
                            <label className="inline-block mt-3 mb-1">Bootstrap 5</label>
                            <ProgressBar percentage={'98%'} width="w-[98%]"/>
                        </div>
                        <div>
                            <label className="inline-block mt-3 mb-1">Tailwind CSS</label>
                            <ProgressBar percentage={'80%'} width="w-[80%]"/>
                        </div>
                        <div>
                            <label className="inline-block mt-3 mb-1">Laravel</label>
                            <ProgressBar percentage={'60%'} width="w-[60%]"/>
                        </div>
        
                        <h2 className="text-2xl underline mt-10">Databases:</h2>
        
                        <div>
                            <label className="inline-block mt-3 mb-1">MySQL</label>
                            <ProgressBar percentage={'80%'} width="w-[80%]"/>
                            <label className="inline-block mt-3 mb-1">Firebase</label>
                            <ProgressBar percentage={'60%'} width="w-[60%]"/>
                        </div>
        
                        <h2 className="text-2xl underline mt-10">CMS:</h2>
        
                        <div>
                            <label className="inline-block mt-3 mb-1">WordPress</label>
                            <ProgressBar percentage={'80%'} width="w-[80%]"/>
                            <label className="inline-block mt-3 mb-1">Shopify</label>
                            <ProgressBar percentage={'70%'} width="w-[70%]"/>
                        </div>
        
                    </div>
                </div>
            </div>
      </section>

      <SoftSkillsSlide/>

      <section className="my-journey py-20">
            <h1 className="relative text-5xl text-center">My Journey</h1>
                <div className="flex justify-center mt-2 mb-14">
                    <div className="relative w-3 h-3 border border-black rounded-full before:absolute before:h-0.5 before:top-1 before:bg-black before:w-16 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-black after:w-16 after:left-5"></div>
                </div>
                <div className="grid grid-rows-1 grid-cols-12 gap-6 mx-4 md:mx-20">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="card rounded-lg border-gray-300 shadow-2xl bg-gray-100 p-6">
                            <div className="border-b-2 flex items-center pb-4 gap-4">
                                <HiAcademicCap className="bg-orange-400 text-white w-16 h-16 p-4 flex justify-center items-center rounded-full" />
                                <h2 className="text-3xl">Certificates</h2>
                            </div>
                            <div className="card-body py-4">
                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <h2 className="text-xl font-medium">Saylani Mass IT Training Program</h2>
                                        <p className="text-sm text-gray-500">MERN Stack Development Course – In Progress</p>
                                    </div>
                                    <div>
                                        <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">Enrolled 2024 - Ongoing</p>
                                    </div>
                                </div>
                                
                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <h2 className="text-xl font-medium">Governor Sindh Initiative</h2>
                                        <p className="text-sm text-gray-500">Artificial Intelligence, Web 3.0 & Metaverse – In Progress</p>
                                    </div>
                                    <div>
                                        <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">Enrolled 2024 - Ongoing</p>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <h2 className="text-xl font-medium">Bano Qabil 2.0</h2>
                                        <p className="text-sm text-gray-500">Amazon FBA Virtual Assistant</p>
                                    </div>
                                    <div>
                                        <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">Dec 2023 - Mar 2024</p>
                                    </div>
                                </div>
                                
                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <h2 className="text-xl font-medium">Jawan Pakistan</h2>
                                        <p className="text-sm text-gray-500">Front-End Development Course</p>
                                    </div>
                                    <div>
                                        <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">5 Months Duration</p>
                                    </div>
                                </div>
                                
                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <h2 className="text-xl font-medium">Aptech</h2>
                                        <p className="text-sm text-gray-500">ACCP Prime Diploma in Software Engineering</p>
                                    </div>
                                    <div>
                                        <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">2018 - 2021</p>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div className="card rounded-lg border-gray-300 shadow-2xl bg-gray-100 p-6 mb-6">
                            <div className="border-b-2 flex items-center pb-4 gap-4">
                                <HiBriefcase className="bg-orange-400 text-white w-16 h-16 p-4 flex justify-center items-center rounded-full" />
                                <h2 className="text-3xl">Work Experince</h2>
                            </div>
                            <div className="card-body py-4">
                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <h2 className="text-xl font-medium">ISMAIL INDUSTRIES LIMITED (FMCG)</h2>
                                        <p className="text-sm text-gray-500">Front-End Intern</p>
                                    </div>
                                    <div>
                                        <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">Sep 2021 to Aug 2022</p>
                                    </div>
                                </div>
                                
                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <h2 className="text-xl font-medium">ISMAIL INDUSTRIES LIMITED (FMCG)</h2>
                                        <p className="text-sm text-gray-500">Senior Frontend & Junior Laravel Developer</p>
                                    </div>
                                    <div>
                                        <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">Sep 2022 – Feb 2023</p>
                                    </div>
                                </div>                                                             
                            </div>
                        </div>

                        <div className="card rounded-lg border-gray-300 shadow-2xl bg-gray-100 p-6">
                            <div className="border-b-2 flex items-center pb-4 gap-4">
                                <HiBookOpen className="bg-orange-400 text-white w-16 h-16 p-4 flex justify-center items-center rounded-full" />
                                <h2 className="text-3xl">Education</h2>
                            </div>
                            <div className="card-body py-4">
                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <h2 className="text-xl font-medium">Virtual University</h2>
                                        <p className="text-sm text-gray-500">BS Software Engineering (In Progress)</p>
                                    </div>
                                    <div>
                                        <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">Sep 2021 to Aug 2022</p>
                                    </div>
                                </div>                                                           
                            </div>
                        </div>
                    </div>
                </div>
      </section>

      <section className="projects relative p-5 md:p-20 bg-black">
            <Image className="absolute w-full rounded-[45px] bottom-0 left-0" src={servicesBg} alt=""/>
            <div className="mb-14">
                <h1 className="relative text-white text-3xl md:text-5xl text-center">My Projects</h1>
                <div className="flex justify-center mt-2">
                    <div className="relative w-3 h-3 border border-white rounded-full before:absolute before:h-0.5 before:top-1 before:bg-white before:w-24 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-white after:w-24 after:left-5"></div>
                </div>
            </div>
            <Projects/>
      </section>
        
        <section className="contact py-20 px-4 md:px-20">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6">
                    <h2 className="text-5xl font-">Let's <span className="stroke-orange-500">Connect</span> & 
                        <br/> <span className="stroke-orange-500">Collaborate</span>
                    </h2>
                    <p className="my-6">Thank you for visiting my portfolio! If you have any questions, inquiries, or collaboration opportunities, I’d love to hear from you. Please fill out the contact form or reach out through the provided social media links, and I’ll get back to you as soon as possible.</p>

                    <ul>
                        <li className="my-2"><a className="flex gap-4 items-center" href="tel:+923153987478"><HiPhone className="bg-orange-500 text-white text-sm w-10 h-10 p-2 rounded-full flex items-center justify-center"/>  +92 3153987478</a></li>
                        <li className="my-2"><a className="flex gap-4 items-center" href="mailto:muhammadshabbir4589@gmail.com"><HiMail className="bg-orange-500 text-white text-sm w-10 h-10 p-2 rounded-full flex items-center justify-center"/> muhammadshabbir4589@gmail.com</a></li>
                        <li className="my-2"><a className="flex gap-4 items-center" target="_blank" href="https://github.com/codewithshabbir"> <FaGithub className="bg-orange-500 text-white text-sm w-10 h-10 p-2 rounded-full flex items-center justify-center"/> codewithshabbir</a></li>
                    </ul>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className="bg-orange-500 p-8 rounded-lg w-full max-w-xl">
                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-white text-sm mb-2" htmlFor="first-name">First Name *</label>
                                    <input type="text" id="first-name" className="w-full p-3 rounded-lg contact-input focus:ring-transparent focus-visible:outline-none text-white border-none focus:ring-2 focus:ring-purple-300" required/>
                                </div>
                                <div>
                                    <label className="block text-white text-sm mb-2" htmlFor="last-name">Last Name *</label>
                                    <input type="text" id="last-name" className="w-full p-3 rounded-lg contact-input focus:ring-transparent focus-visible:outline-none text-white border-none focus:ring-2 focus:ring-purple-300" required/>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="block text-white text-sm mb-2" htmlFor="email">Email *</label>
                                    <input type="email" id="email" className="w-full p-3 rounded-lg contact-input focus:ring-transparent focus-visible:outline-none text-white border-none focus:ring-2 focus:ring-purple-300" required/>
                                </div>
                                <div>
                                    <label className="block text-white text-sm mb-2" htmlFor="phone">Phone Number *</label>
                                    <input type="text" id="phone" className="w-full p-3 rounded-lg contact-input focus:ring-transparent focus-visible:outline-none text-white border-none focus:ring-2 focus:ring-purple-300" required/>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="block text-white text-sm mb-2" htmlFor="subject">Subject *</label>
                                <input type="text" id="subject" className="w-full p-3 rounded-lg contact-input focus:ring-transparent focus-visible:outline-none text-white border-none focus:ring-2 focus:ring-purple-300" required/>
                            </div>
                            <div className="mt-4">
                                <label className="block text-white text-sm mb-2" htmlFor="message">Message *</label>
                                <textarea id="message" className="w-full p-3 rounded-lg contact-input focus:ring-transparent focus-visible:outline-none text-white border-none focus:ring-2 focus:ring-purple-300 h-32" required></textarea>
                            </div>
                            <div className="mt-6">
                                <div className="relative block mt-8 line">
                                    <a className="contact-btn border-2 border-white relative inline-block text-[16px] leading-[50px] font-bold bg-transparent rounded-xl px-[35px] pt-[1px] pb-0 overflow-hidden font-sans capitalize transition-all ease-linear duration-300 text-white hover:stroke-orange-500 z-[1]" target="_blank" href="https://html-template-task.netlify.app/">
                                      Submit
                                      <i className="fa fa-arrow-right ml-1 inline-block text-sm font-bold"></i>
                                      <span className="hover-btn hover-bx"></span>
                                      <span className="hover-btn hover-bx2"></span>
                                      <span className="hover-btn hover-bx3"></span>
                                      <span className="hover-btn hover-bx4"></span>
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
   </>
  );
}