import React, {useEffect} from 'react'
import Navbar from '../component/Navbar'
import { FaDotCircle } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Fotter from '../component/Fotter';
import Aos from "aos"
import "aos/dist/aos.css"

const About = () => {
useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div>
      <Navbar />
      <div className="imagee w-full md:h-[350px] h-[180px]">
        <section className="flex w-full h-full text-white items-center justify-center">
          <FaDotCircle />
          <p
            className="md:text-6xl text-3xl font-bold ml-5"
            data-aos="fade-right"
          >
            About Us
          </p>
        </section>
      </div>

      <div className=" md:px-10 px-5 md:py-22">
        <div className="">
          <section data-aos="fade-right" className="mt-10">
            <p className="md:text-4xl text-2xl font-medium">
              We Don’t Just Secure Data — We Restore Trust
            </p>
            <p className="md:mt-5 mt-3 md:text-lg">
              In today’s hyper-connected world, threats are evolving faster than
              most businesses can keep up. At [Your Company Name], we don’t just
              respond to these challenges — we anticipate, defend, and recover.
              Whether you’re a growing startup, a large enterprise, or an
              individual impacted by cybercrime, our mission is simple, To make
              the digital world safer — one system, one business, and one person
              at a time.
            </p>
            <ul className="mt-5 text-red-600">
              <li className="flex items-center mt-2 gap-2">
                <FaLongArrowAltRight />
                <p className="text-sm">Data Bridge</p>
              </li>
              <li className="flex items-center mt-2 gap-2">
                <FaLongArrowAltRight />
                <p className="text-sm">Secure Funds</p>
              </li>
              <li className="flex items-center mt-2 gap-2">
                <FaLongArrowAltRight />
                <p className="text-sm">Fraud Control</p>
              </li>
            </ul>
          </section>
          <section data-aos="fade-right" className="mt-10">
            <p className="md:text-4xl text-2xl font-medium">🧠 Who We Are</p>
            <p className="md:mt-5 mt-3 md:text-lg">
              We are a team of ethical hackers, cybersecurity engineers, digital
              forensic analysts, and recovery specialists united by a singular
              goal: to protect what matters most. From global enterprises to
              everyday users, our clients trust us to secure their systems and
              recover their stolen assets. Backed by years of experience across
              financial services, cloud infrastructure, regulatory compliance,
              and incident response — we bring technical expertise, strategic
              vision, and real-world solutions to every threat.
            </p>
          </section>
          <section data-aos="fade-right" className="mt-10">
            <p className="md:text-4xl text-2xl font-medium">
              🛡️ What Makes Us Different?
            </p>
            <p className="md:mt-5 mt-3 md:text-lg">
              Human-Centered Security We treat every case — from stolen crypto
              to hacked accounts — with urgency, empathy, and discretion. Global
              Recovery Expertise We specialize in stolen fund tracing, crypto
              scam investigations, and disabled account restoration with a
              proven track record. Compliance-First Approach Our solutions align
              with GDPR, HIPAA, ISO 27001, and other global standards — helping
              clients stay safe and audit-ready. Real-Time Response Our incident
              response team is available 24/7 for emergency breach support,
              ransomware cases, and account lockdowns. Cutting-Edge Technology
              We use AI-powered threat detection, forensic-grade tools, and
              advanced analytics to stay one step ahead of attackers.
            </p>
          </section>
        </div>
      </div>

      <div className="md:px-22 px-5 pb-10 bg-[#fbf9ff]">
        <p
          data-aos="fade-right"
          className="md:text-5xl text-2xl text-medium pt-10"
        >
          Platformization addresses critical <br /> cybersecurity challenges
          through
          <br /> <span className="text-red-600">Integration & Innovation.</span>
        </p>
        <div className="mt-10 grid md:grid-cols-4 gap-3">
          <section
            data-aos="zoom-in"
            className=" flex flex-col p-5 justify-center bg-white shadow-xl h-fit md:h-[300px]"
          >
            <p className="text-xl font-semibold">Trust</p>
            <p className="mt-5">
              We operate with transparency, discretion, and client-first
              principles.
            </p>
          </section>

          <section
            data-aos="zoom-in"
            className=" flex flex-col p-5 justify-center bg-white shadow-xl md:h-[300px]"
          >
            <p className="text-xl font-semibold">Precision</p>
            <p className="mt-5">
              Every line of code, every system hardening step, every recovery
              path — meticulously executed.
            </p>
          </section>

          <section
            data-aos="zoom-in"
            className=" flex flex-col p-5 justify-center bg-white shadow-xl md:h-[300px]"
          >
            <p className="text-xl font-semibold">Confidentiality </p>
            <p className="mt-5">
              Privacy is sacred. Every investigation and engagement is protected
              by strict NDAs. SOCy
            </p>
          </section>

          <section
            data-aos="zoom-in"
            className=" flex flex-col p-5 justify-center bg-white shadow-xl md:h-[300px]"
          >
            <p className="text-xl font-semibold">Justice</p>
            <p className="mt-5">
              We actively support victims of cybercrime in tracing and
              recovering stolen funds, while guiding them through legal steps.
            </p>
          </section>
        </div>
      </div>

      <div className="md:py-22 px-5 md:px-0">
        <section>
          <p
            data-aos="fade-right"
            className="font-bold md:text-5xl text-2xl pt-10 md:text-center"
          >
            CyberRecon protects:
          </p>
          <div className="md:flex justify-center">
            <div className="md:px-22 py-10 grid md:grid-cols-3 md:w-[90%] gap-10 ">
              <section data-aos="zoom-in" className="text-center smm py-10 ">
                <p className="text-5xl font-bold text-red-600">300</p>
                <p className="mt-5 text-3xl">of the Fortune 500</p>
              </section>

              <section data-aos="zoom-in" className="text-center smm py-10 ">
                <p className="text-5xl font-bold text-red-600">543</p>
                <p className="mt-5 text-3xl">of the Fortune 1,000</p>
              </section>

              <section data-aos="zoom-in" className="text-center smm py-10 ">
                <p className="text-5xl font-bold text-red-600">43</p>
                <p className="mt-5 text-3xl">of the 50 U.S. states</p>
              </section>

              <section data-aos="zoom-in" className="text-center smm py-10 ">
                <p className="text-3xl font-bold">8 out of the top 10</p>
                <p className="mt-5 text-xl">financial services firms</p>
              </section>
              <section data-aos="zoom-in" className="text-center smm py-10 ">
                <p className="text-3xl font-bold">7 out of the top 10</p>
                <p className="mt-5 text-xl">manufacturers</p>
              </section>
              <section data-aos="zoom-in" className="text-center smm py-10 ">
                <p className="text-3xl font-bold">88 out of the top 10</p>
                <p className="mt-5 text-xl">food & beverage companies</p>
              </section>
              <section data-aos="zoom-in" className="text-center smm py-10 ">
                <p className="text-3xl font-bold">8 out of the top 10</p>
                <p className="mt-5 text-xl">auto companies</p>
              </section>
              <section data-aos="zoom-in" className="text-center smm py-10 ">
                <p className="text-3xl font-bold">6 out of the top 10</p>
                <p className="mt-5 text-xl">healthcare providers</p>
              </section>
              <section data-aos="zoom-in" className="text-center smm py-10 ">
                <p className="text-3xl font-bold">8 out of the top 10</p>
                <p className="mt-5 text-xl">technology firms</p>
              </section>
            </div>
          </div>
        </section>
      </div>

      <Fotter />
    </div>
  );
}

export default About