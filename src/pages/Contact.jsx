import React from 'react'
import Navbar from '../component/Navbar'
import { FaDotCircle, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Fotter from '../component/Fotter';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Contact = () => {

  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="imagee w-full md:h-[350px] h-[180px]">
          <section className="flex w-full h-full text-white items-center justify-center">
            <FaDotCircle />
            <p className="md:text-6xl text-3xl font-bold ml-5">Contact Us</p>
          </section>
        </div>

        <div className="md:py-22 md:px-10 px-5 py-10">
          <section className="pb-10">
            <p className="md:text-4xl text-2xl font-medium">
              📞 Let’s Secure Your Future
            </p>
            <p className="md:mt-5 mt-3 md:text-lg">
              Whether you’re looking to audit your systems, train your staff,
              recover stolen crypto, or restore a hacked account — we’re here to
              help.
            </p>
          </section>
          <div className="md:flex">
            <section className="md:w-[60%]">
              <form action="" className="bg-[#140641] md:p-10 p-5">
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
                      type="text"
                      className="p-3 bg-white md:w-[50%] w-full outline-none"
                      placeholder="Your Email"
                    />
                    <input
                      type="text"
                      required
                      className="p-3 bg-white md:w-[50%] w-full mt-5 md:mt-0  outline-none"
                      placeholder="Your Phone Number"
                    />
                  </section>
                  <section>
                    <div>
                      <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">
                          <p className="text-white md:mt-10 mt-5">
                            Have you lost money to scam?
                          </p>
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={value}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="Yes"
                            control={
                              <Radio
                                sx={{
                                  color: "white",
                                  "&.Mui-checked": { color: "white" },
                                }}
                              />
                            }
                            label={
                              <span style={{ color: "white" }}>Yes</span>
                            }
                          />
                          <FormControlLabel
                            value="No"
                            control={
                              <Radio
                                sx={{
                                  color: "white",
                                  "&.Mui-checked": { color: "white" },
                                }}
                              />
                            }
                            label={<span style={{ color: "white" }}>No</span>}
                          />
                        </RadioGroup>
                      </FormControl>
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
            <section className="border-[#140641] border-8 md:w-[40%] border-l-none p-5">
              <p className="font-bold mt-10">
                For fast response contact our agents via telegram:
              </p>

              <div>
                <section className="md:mt-10 mt-5 flex gap-3 items-center">
                  <div className="border-2 w-[70px] rounded-full h-[70px]"></div>
                  <div>
                    <p className="font-bold text-sm">ALEX STEVE</p>
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
                    <p className="font-bold text-sm">ALEX STEVE</p>
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
                    <p className="font-bold text-sm">ALEX STEVE</p>
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
                    <p className="font-bold text-sm">ALEX STEVE</p>
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