import React from 'react'
import Navbar from '../component/Navbar';
import { FaDotCircle } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Fotter from '../component/Fotter';

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="imagee w-full md:h-[350px] h-[180px]">
        <section
          data-aos="fade-right"
          className="flex w-full h-full text-white items-center justify-center"
        >
          <FaDotCircle />
          <p className="md:text-6xl text-3xl font-bold ml-5">Services</p>
        </section>
      </div>
      <div className="md:pt-10">
        <p
          data-aos="zoom-in"
          className="md:text-5xl text-3xl font-bold text-center pt-10"
        >
          We offer the best range of Security Services.
        </p>
        <div className="md:p-10 p-5">
          <div className="grid md:grid-cols-2 gap-5">
            <section data-aos="fade-right" className="border-2 p-5">
              <div className="flex items-center gap-2">
                <FaLongArrowAltRight />
                <p className="font-bold text-xl underline">
                  🔓 Cyber Recovery & Account Restoration
                </p>
              </div>
              <p className="md:text-lg mt-2">
                Lost access? Scammed? We help you bounce back. We specialize in
                fast, discreet, and professional recovery services to restore
                your accounts and reclaim lost assets.
              </p>

              <ol className="text-red-500 text-sm md:text-base mt-2 lkl ml-4 font-medium">
                <li>
                  Recovery of Hacked or Disabled Accounts (Facebook, Gmail,
                  Instagram, WhatsApp, etc.)
                </li>
                <li>Crypto Theft & Stolen Funds Recovery Support</li>
                <li>Bank Scam & Wire Fraud Investigation Assistance</li>
                <li>Identity Theft Resolution</li>
                <li>Legal Documentation & Law Enforcement Coordination</li>
              </ol>
            </section>

            <section data-aos="fade-left" className="border-2 p-5">
              <div className="flex items-center gap-2">
                <FaLongArrowAltRight />
                <p className="font-bold text-xl underline">
                  🔐 Managed Security Services (MSSP)
                </p>
              </div>
              <p className="md:text-lg mt-2">
                End-to-end, always-on protection for your IT infrastructure. Our
                managed security solutions offer continuous threat monitoring,
                real-time response, and infrastructure hardening — so you can
                focus on growth, not breaches.
              </p>

              <ol className="text-red-500 text-sm md:text-base mt-2 lkl ml-4 font-medium">
                <li>24/7 Security Monitoring & Threat Detection</li>
                <li>Endpoint Detection & Response (EDR)</li>
                <li>Firewall Configuration & Management</li>
                <li>ntrusion Detection/Prevention Systems (IDS/IPS)</li>
                <li>SIEM Integration & Monitoring</li>
              </ol>
            </section>

            <section data-aos="fade-right" className="border-2 p-5">
              <div className="flex items-center gap-2">
                <FaLongArrowAltRight />
                <p className="font-bold text-xl underline">
                  🔍 Security Testing & Assessments
                </p>
              </div>
              <p className="md:text-lg mt-2">
                Uncover hidden risks before attackers do. We simulate real-world
                cyberattacks and assess your infrastructure for vulnerabilities
                to fortify your defenses.
              </p>

              <ol className="text-red-500 text-sm md:text-base mt-2 lkl ml-4 font-medium">
                <li>Penetration Testing (Web, Mobile, Network, API)</li>
                <li>Vulnerability Scanning & Risk Assessments</li>
                <li>Red Team / Blue Team / Purple Team Engagements</li>
                <li>Cloud & Network Security Audits</li>
                <li>Architecture & Configuration Reviews</li>
              </ol>
            </section>

            <section data-aos="fade-left" className="border-2 p-5">
              <div className="flex items-center gap-2">
                <FaLongArrowAltRight />
                <p className="font-bold text-xl underline">
                  🧠 Strategic Security Consulting
                </p>
              </div>
              <p className="md:text-lg mt-2">
                Cybersecurity that aligns with your business goals. Our experts
                develop custom strategies, policies, and infrastructure designs
                to secure your operations and enable sustainable growth.
              </p>

              <ol className="text-red-500 text-sm md:text-base mt-2 lkl ml-4 font-medium">
                <li>Virtual CISO (vCISO) Services</li>
                <li>Zero Trust Security Architecture</li>
                <li>Cloud Security Strategy (AWS, Azure, GCP)</li>
                <li>Third-Party Risk Management</li>
                <li>Policy Development & Staff Security Guidelines</li>
              </ol>
            </section>

            <section data-aos="fade-right" className="border-2 p-5">
              <div className="flex items-center gap-2">
                <FaLongArrowAltRight />
                <p className="font-bold text-xl underline">
                  🌐 Network & Infrastructure Protection
                </p>
              </div>
              <p className="md:text-lg mt-2">
                Fortify your digital backbone. From architecture to
                implementation, we safeguard your network against internal and
                external threats.
              </p>

              <ol className="text-red-500 text-sm md:text-base mt-2 lkl ml-4 font-medium">
                <li>Network Segmentation & Traffic Control</li>
                <li>Firewall Deployment & Maintenance</li>
                <li>VPN & Remote Access Security</li>
                <li>Wireless Network Hardening</li>
                <li>DDoS Mitigation & Traffic Filtering</li>
              </ol>
            </section>

            <section data-aos="fade-left" className="border-2 p-5">
              <div className="flex items-center gap-2">
                <FaLongArrowAltRight />
                <p className="font-bold text-xl underline">
                  👨‍💻 Endpoint & Device Security
                </p>
              </div>
              <p className="md:text-lg mt-2">
                Protect every access point. We secure your devices with
                cutting-edge defense against malware, phishing, and data leaks.
              </p>

              <ol className="text-red-500 text-sm md:text-base mt-2 lkl ml-4 font-medium">
                <li>Managed Antivirus & Anti-Malware Solutions</li>
                <li>Mobile Device Management (MDM)</li>
                <li>USB & External Device Access Control</li>
                <li>Operating System Hardening</li>
                <li>Remote Wipe & Device Tracking</li>
              </ol>
            </section>
          </div>
        </div>
      </div>

      <Fotter />
    </div>
  );
}

export default Services