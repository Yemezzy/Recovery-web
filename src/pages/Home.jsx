import React from 'react'
import Navbar from '../component/Navbar'
import { TbCloudLock } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { SiCompilerexplorer } from "react-icons/si";
import { useState } from 'react'
import Fotter from '../component/Fotter';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { FcGoogle } from "react-icons/fc";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { MdVerified } from "react-icons/md";
import { Link } from 'react-router-dom';


const Home = () => {
  const [value, setValue] = React.useState(5);

  return (
    <div>
      <Navbar />
      <div className="imagee w-full md:h-[600px] h-[400px] md:grid grid-cols-2 ">
        <section></section>
        <section className="md:p-10 pt-10">
          <>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              Navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>
                  <p className="md:text-5xl text-3xl font-bold text-white md:pt-20 md:m-10 m-5 mt-0 md:mt-5">
                    Cyber Investigators
                  </p>
                  <p className="md:text-xl text-lg font-medium text-white md:pt-10  md:m-10 m-5 mt-0 md:mt-5">
                    Fully Licensed, Accredited &amp; Insured Private Cyber
                    investigators. Experts in Cyber Fraud/Scam Investigations,
                    Crypto Tracing &amp; Social Media Harassment.
                  </p>
                  <div className="flex gap-5 md:ml-10 ml-5  md:pt-0">
                    <Link to="/services">
                      <button className="border-white hover:bg-white hover:text-[#140641] transition-all rounded-md border-2 md:text-lg font-semibold text-white md:px-10 px-3 py-3">
                        How we work
                      </button>
                    </Link>
                    <Link to="/contact-us">
                      <button className="hover:border-white hover:bg-transparent bg-white text-[#140641] transition-all rounded-md border-2 md:text-lg font-semibold hover:text-white px-3 md:px-10 py-3">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <p className="md:text-5xl text-3xl font-bold text-white md:pt-20 md:m-10 m-5 mt-0 md:mt-5">
                    Social Media Investigation
                  </p>
                  <p className="md:text-xl text-lg font-medium text-white md:pt-10  md:m-10 m-5 mt-0 md:mt-5">
                    Experiencing online harassment and impersonation? We expose
                    anonymous offenders.
                  </p>
                  <div className="flex gap-5 md:ml-10 ml-5 pt-5 md:pt-0">
                    <Link to="/services">
                      <button className="border-white hover:bg-white hover:text-[#140641] transition-all rounded-md border-2 md:text-lg font-semibold text-white md:px-10 px-3 py-3">
                        How we work
                      </button>
                    </Link>
                    <Link to="/contact-us">
                      <button className="hover:border-white hover:bg-transparent bg-white text-[#140641] transition-all rounded-md border-2 md:text-lg font-semibold hover:text-white px-3 md:px-10 py-3">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <p className="md:text-5xl text-3xl font-bold text-white md:pt-20 md:m-10 m-5 mt-0 md:mt-5">
                    Cybercrime Investigation
                  </p>
                  <p className="md:text-xl text-lg font-medium text-white md:pt-10 md:m-10 m-5 mt-0 md:mt-5">
                    International Private Intelligence Solutions. We empower
                    individuals and businesses by outpacing criminals and
                    unveiling hidden risks.
                  </p>
                  <div className="flex gap-5 md:ml-10 ml-5 pt-5 md:pt-0">
                    <Link to="/services">
                      <button className="border-white hover:bg-white hover:text-[#140641] transition-all rounded-md border-2 md:text-lg font-semibold text-white md:px-10 px-3 py-3">
                        How we work
                      </button>
                    </Link>
                    <Link to="/contact-us">
                      <button className="hover:border-white hover:bg-transparent bg-white text-[#140641] transition-all rounded-md border-2 md:text-lg font-semibold hover:text-white px-3 md:px-10 py-3">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <p className="md:text-5xl text-3xl font-bold text-white md:pt-20 md:m-10 m-5 mt-0 md:mt-5">
                    Cryptocurrency Tracing
                  </p>
                  <p className="md:text-xl text-lg font-medium text-white md:pt-10 md:m-10 m-5 mt-0 md:mt-5">
                    Using custom AI based tools, we help victims of
                    cryptocurrency scams through investigation, disruption and
                    recovery operations.
                  </p>
                  <div className="flex gap-5 md:ml-10 ml-5 pt-5 md:pt-0">
                    <Link to="/services">
                      <button className="border-white hover:bg-white hover:text-[#140641] transition-all rounded-md border-2 md:text-lg font-semibold text-white md:px-10 px-3 py-3">
                        How we work
                      </button>
                    </Link>
                    <Link to="/contact-us">
                      <button className="hover:border-white hover:bg-transparent bg-white text-[#140641] transition-all rounded-md border-2 md:text-lg font-semibold hover:text-white px-3 md:px-10 py-3">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <p className="md:text-5xl text-3xl font-bold text-white md:pt-20 md:m-10 m-5 mt-0 md:mt-5">
                    Cyber Fraud Investigation
                  </p>
                  <p className="md:text-xl md:text-lg font-medium text-white md:pt-10 md:m-10 m-5 mt-0 md:mt-5">
                    Victim of an online scam? Romance scams, investment fraud or
                    phishing attacks: We understand the methods used by scam
                    syndicates and can identify offenders.
                  </p>
                  <div className="flex gap-5 md:ml-10 ml-5 pt-3 pb-10 md:pt-0">
                    <button className="border-white hover:bg-white hover:text-[#140641] transition-all rounded-md border-2 md:text-lg font-semibold text-white px-3 md:px-10 py-3">
                      How we work
                    </button>
                    <button className="hover:border-white hover:bg-transparent bg-white text-[#140641] transition-all rounded-md border-2 md:text-lg font-semibold hover:text-white px-3 md:px-10 py-3">
                      Get Started
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </section>
      </div>

      <div className="md:pt-22 pt-5 bg-[#fbf9ff] pb-10">
        <p className="md:text-5xl px-5 md:px-0 text-2xl font-bold md:text-center pt-10">
          99% faster detection and response¹
        </p>
        <p className="md:text-3xl px-5 md:px-0 text-xl md:text-center md:pt-7 pt-3">
          CDR that’s faster and smarter than your adversaries
        </p>
        <div className="grid md:grid-cols-3 md:gap-10 gap-5 p-5 md:px-10 md:mt-16 mt-5">
          <section className=" bg-white rounded-lg shadow-md px-5 py-10">
            <TbCloudLock className="text-[#140641] text-7xl" />
            <p className="text-xl font-bold my-5">
              Accelerate investigations with complete cloud context
            </p>
            <div className="border-b-2 border-black pt-5"></div>
            <p className="pt-10 text-xl">
              Triage and investigate detections with broader cloud visibility
              and workload event correlation.
            </p>
          </section>

          <section className=" bg-white rounded-lg shadow-md px-5 py-10">
            <FaUsers className="text-[#140641] text-7xl" />
            <p className="text-xl font-bold my-5">
              Get industry-leading runtime protection and expert services
            </p>
            <div className="border-b-2 border-black pt-5"></div>
            <p className="pt-10 text-xl">
              Detect and disrupt advanced threats at speed and scale with our
              award-winning CrowdStrike Falcon® sensor and dedicated
              professional services.
            </p>
          </section>

          <section className=" bg-white rounded-lg shadow-md px-5 py-10">
            <SiCompilerexplorer className="text-[#140641] text-7xl" />
            <p className="text-xl font-bold my-5">
              Translate root cause of attacks into scalable remediation
            </p>
            <div className="border-b-2 border-black pt-5"></div>
            <p className="pt-10 text-xl">
              Slash your response times with automated workflows and drive
              actionable feedback across teams.
            </p>
          </section>
        </div>
      </div>

      <div className="md:pt-22">
        <div className="grid md:grid-cols-2 md:px-20 p-5 items-center">
          <section>
            <p className="font-semibold text-lg">Cyber Recon Consulting</p>
            <p className="md:text-2xl text-xl mt-2">
              Combat attackers with experts in incident response, strategic
              threat readiness, and transformative cyber defense
            </p>
            <p className="mt-2 text-sm">
              Cybersecurity incidents require diligent preparation, rapid
              action, and critical asset protection. Our Mandiant experts
              provide guidance so you can maintain confidence in business
              operations before, during, and after an incident.
            </p>
            <div className="grid md:grid-cols-3 gap-3 my-5">
              <section>
                <p className="font-bold text-xl">400k+</p>
                <p className="text-sm">hours responding to attacks in 2023</p>
              </section>

              <section>
                <p className="font-bold text-xl">2400+</p>
                <p className="text-sm md:px-2">
                  organizations assisted in preparing for and responding to
                  incidents in 2023
                </p>
              </section>

              <section>
                <p className="font-bold text-xl">80+</p>
                <p className="text-sm">
                  countries engagements performed in 2023
                </p>
              </section>
            </div>
            <button className="bg-[#140641] text-white px-10 md:text-lg rounded-sm md:w-[40%] py-3 md:mt-5 mt-3">
              Contact Us
            </button>
          </section>
          <section className="md:p-10 pt-5 md:pt-0">
            <img
              src="/img/team-working-animation-project.jpg"
              alt=""
              className="rounded-lg"
            />
          </section>
        </div>
      </div>

      <div className="py-10 bg-[#140641]">
        <div className="grid md:grid-cols-2 md:px-20 p-5 items-center">
          <section>
            <p className="md:text-5xl text-3xl text-white font-bold md:p-10 pt-2">
              In trusted collaboration and partnership with leading U.S.
              security and intelligence agencies.
            </p>
            <button className="bg-white hidden md:block text-black px-7 ml-10 py-2 rounded-lg font-semibold">
              Contact support
            </button>
          </section>
          <section>
            <div className="grid md:grid-cols-3 grid-cols-2 md:mt-0 mt-10 gap-5 text-white">
              <section className="flex flex-col items-center">
                <img src="/img/FBI.png" alt="" className="w-[60%]" />
                <p className="text-xs text-center md:text-sm mt-1 font-bold">
                  Federal Bureau of Investigation (FBI)
                </p>
              </section>
              <section className="flex flex-col items-center">
                <img src="/img/CIA.png" alt="" className="w-[60%]" />
                <p className="text-xs  text-center md:text-sm mt-1 font-bold">
                  {" "}
                  Central Intelligence Agency (CIA)
                </p>
              </section>
              <section className="flex flex-col items-center">
                <img src="/img/DHS.png" alt="" className="w-[60%]" />
                <p className="text-xs  text-center md:text-sm mt-1 font-bold">
                  Department of Homeland Security (DHS)
                </p>
              </section>
              <section className="flex flex-col items-center">
                <img
                  src="/img/HSI.jpg"
                  alt=""
                  className="w-[60%] rounded-full"
                />
                <p className="text-xs text-center md:text-sm mt-1 font-bold">
                  Homeland Security Investigations (HSI)
                </p>
              </section>
              <section className="flex flex-col items-center">
                <img src="/img/NSA.svg" alt="" className="w-[60%]" />
                <p className="text-xs  text-center md:text-sm mt-1 font-bold">
                  National Security Agency (NSA)
                </p>
              </section>
              <section className="flex flex-col items-center">
                <img
                  src="/img/DCIS.jpg"
                  alt=""
                  className="w-[60%] rounded-full"
                />
                <p className="text-xs  text-center md:text-sm mt-1 font-bold">
                  Defense Criminal Investigative Service (DCIS)
                </p>
              </section>
            </div>
          </section>
        </div>
      </div>

      <div className="md:pt-22  md:px-22 px-5">
        <p className="md:text-3xl text-xl font-bold mt-5 md:mt-0">
          WHAT OUR CLIENTS SAY
        </p>
        <div className="flex gap-5 md:mt-10 mt-5 overflow-x-scroll w-full no-scrollbar">
          <div className="flex gap-5 ">
            <section className="border-2 p-5 border-black w-[350px] shrink-0">
              <div className="flex justify-between">
                <section className="flex gap-2 items-center items-center">
                  <div className=" w-[50px] h-[50px] rounded-full ">
                    <img
                      src="https://lh3.googleusercontent.com/a-/ALV-UjUUBem_9-XXv8gr1CdQPc9l-hD0B-y1C9G2oe8KeF_3kG-DQ9NAOw=w80-h80-c-rp-mo-br100"
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Sarah M</p>
                    <p className="text-xs">27/06/2024</p>
                  </div>
                </section>
                <section>
                  <FcGoogle className="text-3xl" />
                </section>
              </div>
              <div>
                <section className="mt-3 flex items-center gap-2">
                  <Rating name="read-only" value={value} readOnly />
                  <Tooltip
                    placement="right-end"
                    title="Trustindex verifies that the original source of the review is Google."
                    arrow
                  >
                    <MdVerified className="text-lg text-blue-600" />
                  </Tooltip>
                </section>
                <section className="text-sm font-medium mt-2">
                  I recently had the pleasure of working with CyberRecon, and I
                  couldn't be more impressed with their service. Although the
                  circumstances requiring their assistance were stressful, their
                  professionalism was evident from start to finish. The team
                  kept me updated every step of the way, providing regular
                  progress updates and ensuring I was always in the loop.
                </section>
              </div>
            </section>

            <section className="border-2 p-5 border-black w-[350px] shrink-0">
              <div className="flex justify-between">
                <section className="flex gap-2 items-center items-center">
                  <div className="w-[50px] h-[50px] rounded-full ">
                    <img
                      src="https://lh3.googleusercontent.com/a-/ALV-UjVszAol7-AcHXDN-xr-0wf7gZyIA2HyT9Pu4wOgJ2tpbDhEn4_s=w80-h80-c-rp-mo-br100"
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Mark Richards</p>
                    <p className="text-xs">07/05/2024</p>
                  </div>
                </section>
                <section>
                  <FcGoogle className="text-3xl" />
                </section>
              </div>
              <div>
                <section className="mt-3 flex items-center gap-2">
                  <Rating name="read-only" value={value} readOnly />
                  <Tooltip
                    placement="right-end"
                    title="Trustindex verifies that the original source of the review is Google."
                    arrow
                  >
                    <MdVerified className="text-lg text-blue-600" />
                  </Tooltip>
                </section>
                <section className="text-sm font-medium mt-2">
                  Thanks very much to Sam for her wonderful support on a very
                  serious case involving cyber harassment of my daughter. Her
                  personal commitment to our situation was very real and
                  outstanding.
                </section>
              </div>
            </section>

            <section className="border-2 p-5 border-black w-[350px] shrink-0">
              <div className="flex justify-between">
                <section className="flex gap-2 items-center items-center">
                  <div className="w-[50px] h-[50px] rounded-full ">
                    <img
                      src="https://lh3.googleusercontent.com/a/ACg8ocLCLVcdVVbl3yd71rUIa-bKPvY2HPqY6X8ZCOtbYn3uotZbGg=w80-h80-c-rp-mo-br100"
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Kate Kearney</p>
                    <p className="text-xs">07/05/2024</p>
                  </div>
                </section>
                <section>
                  <FcGoogle className="text-3xl" />
                </section>
              </div>
              <div>
                <section className="mt-3 flex items-center gap-2">
                  <Rating name="read-only" value={value} readOnly />
                  <Tooltip
                    placement="right-end"
                    title="Trustindex verifies that the original source of the review is Google."
                    arrow
                  >
                    <MdVerified className="text-lg text-blue-600" />
                  </Tooltip>
                </section>
                <section className="text-sm font-medium mt-2">
                  CyberRecon are very professional and honest. I lost funds
                  through an investment fraud and they successfully conducted
                  tracing of my cryptocurrency. I highly recommend the services
                  of CyberRecon.
                </section>
              </div>
            </section>

            <section className="border-2 p-5 border-black w-[350px] shrink-0">
              <div className="flex justify-between">
                <section className="flex gap-2 items-center items-center">
                  <div className="w-[50px] h-[50px] rounded-full ">
                    <img
                      src="https://lh3.googleusercontent.com/a-/ALV-UjWRimgcJkN36LKuZDhkkDjhj_wkBjsWo86Vl4x4EwUpyW8vUD0l=w80-h80-c-rp-mo-br100"
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Tash Peterson</p>
                    <p className="text-xs">16/07/2024</p>
                  </div>
                </section>
                <section>
                  <FcGoogle className="text-3xl" />
                </section>
              </div>
              <div>
                <section className="mt-3 flex items-center gap-2">
                  <Rating name="read-only" value={value} readOnly />
                  <Tooltip
                    placement="right-end"
                    title="Trustindex verifies that the original source of the review is Google."
                    arrow
                  >
                    <MdVerified className="text-lg text-blue-600" />
                  </Tooltip>
                </section>
                <section className="text-sm font-medium mt-2">
                  They did an incredible job finding the identities of about 60
                  people who had been slandering me online and investigating
                  hate groups inciting harassment and violence towards me. They
                  even had extra work to do in the case but didn’t ask for more
                  costs. Thank you for helping victims of online bullying and
                  slander.
                </section>
              </div>
            </section>

            <section className="border-2 p-5 border-black w-[350px] shrink-0">
              <div className="flex justify-between">
                <section className="flex gap-2 items-center items-center">
                  <div className="w-[50px] h-[50px] rounded-full ">
                    <img
                      src="https://lh3.googleusercontent.com/a/ACg8ocJKmzQVeZ785HYnT5Zlh-TrccAM4EXYjBhqgboFMsEXGu1NHQ=w80-h80-c-rp-mo-br100"
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Stefanie F.</p>
                    <p className="text-xs">27/06/2024</p>
                  </div>
                </section>
                <section>
                  <FcGoogle className="text-3xl" />
                </section>
              </div>
              <div>
                <section className="mt-3 flex items-center gap-2">
                  <Rating name="read-only" value={value} readOnly />
                  <Tooltip
                    placement="right-end"
                    title="Trustindex verifies that the original source of the review is Google."
                    arrow
                  >
                    <MdVerified className="text-lg text-blue-600" />
                  </Tooltip>
                </section>
                <section className="text-sm font-medium mt-2">
                  I appreciated the work this team did to try and find my
                  stalker. It was a tricky situation, and they managed to find
                  the stalker online. What surprised me the most was the amount
                  of in-depth research they did into my case. The depth and
                  completeness really surprised me.
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className=" ">
        <div
          className="md:p-20 p-5 shadow-xl bg-[#140641] text-white md:my-28 mt-20 md:mt-28 md:mx-5 md:flex
             flex-row justify-between md:rounded-full "
        >
          <section>
            <div>
              <p className="md:text-3xl text-xl font-extrabold ">
                Get the latest news, invites <br /> to events, and threat alerts
              </p>
            </div>
          </section>
          <section>
            <form>
              <input
                type="text"
                required
                placeholder="Enter your Email now to subscribe"
                className="
                         outline-none mt-3 md:mt-0 p-2 border-2 border-l-2 border-gray-400 w-[400px] pb-3"
              />
              <button className="py-2  px-5 rounded-lg bg-white text-[#140641] mt-3 md:mt-0 md:ml-5">
                Sign up
              </button>
            </form>
            <div>
              <p className="md:text-sm text-xs pt-3">
                By submitting this form, you agree to our
                <a href="" className="font-semibold mx-1 border-b-1">
                  Terms of Use
                </a>
                and acknowledge our
                <a href="" className="font-semibold ml-1 border-b-1">
                  Privacy Statement
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </div>

      <Fotter />
    </div>
  );
}

export default Home