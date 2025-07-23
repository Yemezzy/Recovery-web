import React, {useState} from 'react'
import Navbar from '../component/Navbar'
import { FaDotCircle, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Fotter from '../component/Fotter';


const Contact = () => {
  const [value, setValue] = useState("Yes");
  const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstname = e.target[0].value;
    const lastname = e.target[1].value;
    const email = e.target[2].value;
    const phone = e.target[3].value;
    const lostMoney = value;
    const comment = e.target[5].value;

    const message = `
🚨 New Form Submission:
👤 First Name: ${firstname}
👤 Last Name: ${lastname}
📧 Email: ${email}
📞 Phone: ${phone}
❓ Lost Money to Scam?: ${lostMoney}
📝 Comment: ${comment}
`;

    const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
      await fetch(TELEGRAM_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      });

      alert("Request submitted successfully!");
      setTimeout(() => {
        window.location.href = "/"
      }, 1000);
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      alert("Failed to send to Telegram.");
    }
  };

  // const [value, setValue] = React.useState("female");

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <div>
      <Navbar />
      <div>
        <div className="imagee w-full md:h-[350px] h-[180px]">
          <section
            data-aos="fade-right"
            className="flex w-full h-full text-white items-center justify-center"
          >
            <FaDotCircle />
            <p className="md:text-6xl text-3xl font-bold ml-5">Contact Us</p>
          </section>
        </div>

        <div className="md:py-22 md:px-10 px-5 py-10">
          <section data-aos="fade-right" className="pb-10">
            <p className="md:text-4xl text-2xl font-medium">
              📞 Let’s Secure Your Future
            </p>
            <p className="md:mt-5 mt-3 md:text-lg">
              Whether you’re looking to audit your systems, train your staff,
              recover stolen crypto, or restore a hacked account — we’re here to
              help.
            </p>
          </section>
          <div className="md:flex" data-aos="zoom-in">
            <section className="md:w-[60%]">
              <form
                action=""
                onSubmit={handleSubmit}
                className="bg-[#140641] md:p-10 p-5"
              >
                <div>
                  <section className="md:flex gap-5">
                    <input
                      type="text"
                      required
                      className="p-3 bg-white md:w-[50%] w-full outline-none"
                      placeholder="Your Firstname"
                    />
                    <input
                      type="text"
                      required
                      className="p-3 bg-white md:w-[50%] w-full mt-5 md:mt-0 outline-none"
                      placeholder="Your Lastname"
                    />
                  </section>
                  <section className="md:flex gap-5 mt-5">
                    <input
                      type="email"
                      className="p-3 bg-white md:w-[50%] w-full outline-none"
                      placeholder="Your Email"
                    />
                    <input
                      type="number"
                      required
                      className="p-3 bg-white md:w-[50%] w-full mt-5 md:mt-0  outline-none"
                      placeholder="Your Phone Number"
                    />
                  </section>
                  <section>
                    <div className="text-white md:mt-10 mt-5">
                      <p>Have you lost money to scam?</p>
                      <label className="mr-5">
                        <input
                          type="radio"
                          value="Yes"
                          checked={value === "Yes"}
                          onChange={handleChange}
                        />{" "}
                        Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="No"
                          checked={value === "No"}
                          onChange={handleChange}
                        />{" "}
                        No
                      </label>
                    </div>
                    <textarea
                      name=""
                      id=""
                      required
                      className="p-3 bg-white h-[200px] w-full mt-5 outline-none"
                      placeholder="Comment"
                    />
                  </section>
                  <button className="bg-red-800 text-white py-4 w-full mt-5 font-bold">
                    Submit
                  </button>
                </div>
              </form>
            </section>
            <section className="border-[#140641] mb:block hidden border-8 md:w-[40%] border-l-none p-5">
              <p className="font-bold mt-10">
                For fast response contact our agents via telegram:
              </p>

              <div>
                <section className="md:mt-10 mt-5 flex gap-3 items-center">
                  <div className="border-2 w-[70px] rounded-full h-[70px]"></div>
                  <div>
                    <p className="font-bold text-sm">Thomas Cooper</p>
                    <Link to="https://t.me/TheAmericaParty_official">
                      <div className="mt- text-xs flex gap-2 items-center">
                        <FaTelegram className="text-blue-700" />
                        <p className="underline text-blue-700">
                          https://t.me/TheAmericaParty_official
                        </p>
                      </div>
                    </Link>
                  </div>
                </section>
                <section className="mt-5 flex gap-3 items-center">
                  <div className="w-[70px] border-2 rounded-full h-[70px]"></div>
                  <div>
                    <p className="font-bold text-sm">Sophia Mitchell</p>
                    <Link to="https://t.me/TheAmericaParty_official">
                      <div className="mt- text-xs flex gap-2 items-center">
                        <FaTelegram className="text-blue-700" />
                        <p className="underline text-blue-700">
                          https://t.me/TheAmericaParty_official
                        </p>
                      </div>
                    </Link>
                  </div>
                </section>
                <section className="mt-5 flex gap-3 items-center">
                  <div className="border-2 w-[70px] rounded-full h-[70px]"></div>
                  <div>
                    <p className="font-bold text-sm">William Harris</p>
                    <Link to="https://t.me/TheAmericaParty_official">
                      <div className="mt- text-xs flex gap-2 items-center">
                        <FaTelegram className="text-blue-700" />
                        <p className="underline text-blue-700">
                          https://t.me/TheAmericaParty_official
                        </p>
                      </div>
                    </Link>
                  </div>
                </section>
                <section className="mt-5 flex gap-3 items-center">
                  <div className="border-2 w-[70px] rounded-full h-[70px]"></div>
                  <div>
                    <p className="font-bold text-sm">James Anderson</p>
                    <Link to="https://t.me/TheAmericaParty_official">
                      <div className="mt- text-xs flex gap-2 items-center">
                        <FaTelegram className="text-blue-700" />
                        <p className="underline text-blue-700">
                          https://t.me/TheAmericaParty_official
                        </p>
                      </div>
                    </Link>
                  </div>
                </section>
                <p className="mt-5 text-red-500 text-sm font-semibold">
                  Note: Kindly confirm the correct telegram username to avoid
                  impersonation
                </p>
              </div>
            </section>
          </div>
        </div>
        <Fotter />
      </div>
    </div>
  );
}

export default Contact