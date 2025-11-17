import { Copyright, Mail, LocateIcon, PhoneCall } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [Fname, setFname] = useState("");
  const [Sname, setSname] = useState("");
  function hundleSubmit(e) {
    if (!email || !Fname || !Sname || !message) {
      toast.error("Please fill the required fields.");
      return;
    }
    e.preventDefault();
    setEmail("");
    setMessage("");
    setFname("");
    setSname("");
    toast.promise(
      new Promise((resolve, reject) => {
        e.preventDefault();
        setTimeout(() => resolve("You're Request Message Sent ✔️"), 3000);
      }),
      {
        success: "You're Request Message Sent ✔️",
        loading: "Sending...",
        error: "Error has Occured!",
      }
    );
  }
  return (
    <div className="w-full h-full grid grid-cols-1 mx:grid-cols-[60%_40%] flex-1">
      <div className="w-full h-full flex flex-col items-start justify-between p-2.5">
        <div className="w-full h-fit flex flex-col ">
          <h1 className="text-3xl font-bold font-[Karla] text-indigo-950">
            Contact Us:
          </h1>
          <h4 className="text-xl font-semibold text-gray-700 font-[Karla]">
            You have anything on mind{" "}
            <span className="text-indigo-600">
              Idea, Question, or Feedback?
            </span>{" "}
            Don't ever hesitate to reach us out!
          </h4>
          <h2 className="text-xl font-semibold font-[Karla] text-blue-950">
            Our Infos:
          </h2>
          <ul className="w-fit self-start items-start gap-2.5 pl-2">
            <li className="w-fit h-fit flex gap-2 text-lg items-center font-[Karla] font-normal text-emerald-950">
              <LocateIcon size={20} /> Gaza, Palestine
            </li>
            <li className="w-fit h-fit flex gap-2 text-lg items-center font-[Karla] font-normal text-emerald-950">
              <PhoneCall size={20} /> +213 435345233
            </li>
            <li className="w-fit h-fit flex gap-2 text-lg items-center font-[Karla] font-normal text-emerald-950">
              <Mail size={20} /> Rently@rently.com
            </li>
            <li className="w-fit h-fit flex gap-2 text-lg items-center font-[Karla] font-normal text-emerald-950">
              <Copyright size={20} /> ZooplaApi
            </li>
          </ul>
        </div>
        <h5 className="w-full text-lg text-gray-700 font-[Karla] flex flex-col bg-white drop-shadow-lg drop-shadow-red-200 rounded-md hover:-translate-y-1.5 transition-all duration-300 ease-in-out  p-2.5 mt-auto">
          <span className="text-red-400">Note:</span> We are here to assist you
          with any inquiries or feedback you may have. Feel free to reach out!
        </h5>
      </div>
      <div className="w-full h-fit p-2.5">
        <form
          onSubmit={(e) => hundleSubmit(e)}
          className="w-full h-fit flex flex-col items-start justify-start gap-2.5 bg-white p-2.5 rounded-md drop-shadow-lg drop-shadow-indigo-400"
        >
          <div className="w-full h-fit flex gap-2.5">
            <div className="w-full h-fit flex-nowrap items-center justify-between ">
              <label
                className="pl-1 font-[Karla] font-medium text-lg"
                htmlFor="Fname"
              >
                First Name:<span className="text-red-500">*</span>
              </label>
              <input
                required
                value={Fname}
                onChange={(e) => setFname(e.target.value)}
                className="w-full h-fit border-2 border-indigo-200 focus:border-indigo-400 placeholder:font-medium placeholder:font-[Karla] placeholder:text-lg placeholder:text-gray-500 rounded-md p-1 outline-none transition-all duration-300 ease-in-out"
                type="text"
                name=""
                id="Fname"
                placeholder="First Name"
              />
            </div>
            <div className="w-full h-fit flex-nowrap items-center justify-between gap-1">
              <label
                className="pl-1 font-[Karla] font-medium text-lg"
                htmlFor="Sname"
              >
                Second Name:<span className="text-red-500">*</span>
              </label>
              <input
                value={Sname}
                onChange={(e) => setSname(e.target.value)}
                required
                className="w-full h-fit border-2 border-indigo-200 focus:border-indigo-400 placeholder:font-medium placeholder:font-[Karla] placeholder:text-lg placeholder:text-gray-500 rounded-md p-1 outline-none transition-all duration-300 ease-in-out"
                type="text"
                name=""
                id="Sname"
                placeholder="Second Name"
              />
            </div>
          </div>
          <div className="w-full h-fit">
            <label
              className="pl-1 font-[Karla] font-medium text-lg"
              htmlFor="email"
            >
              Email:<span className="text-red-500">*</span>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-fit border-2 border-indigo-200 focus:border-indigo-400 placeholder:font-medium placeholder:font-[Karla] placeholder:text-lg placeholder:text-gray-500 rounded-md p-1 outline-none transition-all duration-300 ease-in-out"
              type="email"
              name=""
              id="email"
              placeholder="email@rently.com"
            />
          </div>
          <div className="w-full h-fit">
            <label
              className="pl-1 font-[Karla] font-medium text-lg"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="w-full h-fit border-2 border-indigo-200 focus:border-indigo-400 placeholder:font-medium placeholder:font-[Karla] placeholder:text-lg placeholder:text-gray-500 rounded-md p-1 outline-none transition-all duration-300 ease-in-out"
              type="tel"
              name=""
              id="phone"
              placeholder="+213 57878574"
            />
          </div>
          <div className="w-full h-fit">
            <label
              className="pl-1 font-[Karla] font-medium text-lg"
              htmlFor="message"
            >
              Message:<span className="text-red-500">*</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full h-fit border-2 border-indigo-200 focus:border-indigo-400 placeholder:font-medium placeholder:font-[Karla] placeholder:text-lg placeholder:text-gray-500 rounded-md p-1 outline-none transition-all duration-300 ease-in-out"
              rows={4}
              name=""
              id="message"
              placeholder="Message"
            ></textarea>
          </div>
          <button className="w-full h-10 flex justify-center items-center font-bold font-[Karla] relative rounded-md bg-white z-0 drop-shadow-sm drop-shadow-indigo-950 before:absolute before:left-0 before:top-0  before:w-0 hover:before:w-full before:bg-indigo-400 before:z-[-1] before:h-full hover:text-white before:transition-all before:duration-500 before:ease-in-out before:rounded-md cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
