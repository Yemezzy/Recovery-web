import React from 'react'
import Navbar from '../component/Navbar'
import { TbCloudLock } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { SiCompilerexplorer } from "react-icons/si";
import { useState } from 'react'
import Fotter from '../component/Fotter';

const Home = () => {


  return (
    <div>
      <Navbar />
      <div className="imagee w-full md:h-[600px] h-[330px] md:grid grid-cols-2 ">
        <section></section>
        <section>
          {" "}
          <p className="md:text-6xl text-3xl font-bold text-white md:pt-24 pt-18 md:m-10 m-5 mt-0 md:mt-5">
            Guiding your product <br /> journey to drive <br />
            secure outcomes.
          </p>
          <div className="flex gap-5 md:ml-10 ml-5 pt-5 md:pt-0">
            <button className="border-white hover:bg-white hover:text-[#140641] transition-all rounded-md border-2 text-lg font-semibold text-white px-10 py-3">
              How we work
            </button>
            <button className="hover:border-white hover:bg-transparent bg-white text-[#140641] transition-all rounded-md border-2 text-lg font-semibold hover:text-white px-10 py-3">
              Get Started
            </button>
          </div>
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
            <p className="font-semibold text-lg">Cybersecurity Consulting</p>
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
                <p className="text-xs md:text-sm mt-1 font-bold">
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
                <p className="text-xs md:text-sm mt-1 font-bold">
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

      <div className=" ">
        <div
          className="md:p-20 p-5 shadow-xl bg-[#140641] text-white md:my-28 my-20 md:mx-5 md:flex
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
            <div>
              <input
                type="text"
                placeholder="Enter your Email now to subscribe"
                className="
                         outline-none mt-3 md:mt-0 p-2 border-2 border-l-2 border-gray-400 w-[400px] pb-3"
              />
              <button className="py-2  px-5 rounded-lg bg-white text-[#140641] mt-3 md:mt-0 md:ml-5">
                Sign up
              </button>
            </div>
            <div>
              <p className="md:text-sm text-xs pt-3">
                By submitting this form, you agree to our
                <a href="" className="font-semibold border-b-1">
                  Terms of Use
                </a>
                and acknowledge our
                <a href="" className="font-semibold border-b-1">
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