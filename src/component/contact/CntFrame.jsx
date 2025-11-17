import { useState } from "react";
import toast from "react-hot-toast";

export default function CntFrame() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  function hundleSubmit(e) {
    if (!email || !name || !message) {
      toast.error("Please fill the required fields.");
      return;
    }
    e.preventDefault();
    setEmail("");
    setMessage("");
    setName("");
    toast.promise(
      new Promise((resolve, reject) => {
        e.preventDefault();
        setTimeout(() => {
          resolve("📨 Message Sent Successfully!");
        }, 2000);
      }),
      {
        loading: "Sending Message...",
        success: "📨 Message Sent Successfully!",
        error: "Failed to Send Message.",
      }
    );
  }
  return (
    <div className="w-full h-full flex flex-col justify-center gap-1.5 bg-white rounded-md p-2.5">
      <h1 className="font-bold text-xl font-[Karla] text-black">
        Contact The Owner:
      </h1>
      <div className="w-full h-fit flex flex-col-reverse items-start justify-center">
        <input
          className="w-full h-fit border-2 border-indigo-200 focus:border-indigo-400 placeholder:font-medium placeholder:font-[Karla] placeholder:text-lg placeholder:text-gray-500 rounded-md p-1 outline-none transition-all duration-300 ease-in-out"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@domain.com"
          required
        />
        <label
          className="pl-1 font-[Karla] font-medium text-lg"
          htmlFor="email"
        >
          Email<span className="text-red-500">*</span>
        </label>
      </div>
      <div className="w-full h-fit flex flex-col-reverse items-start justify-center">
        <input
          className="w-full h-fit border-2 border-indigo-200 focus:border-indigo-400 placeholder:font-medium placeholder:font-[Karla] placeholder:text-lg placeholder:text-gray-500 rounded-md p-1 outline-none transition-all duration-300 ease-in-out"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter your name"
        />
        <label className="pl-1 font-[Karla] font-medium text-lg" htmlFor="name">
          Full Name<span className="text-red-500">*</span>
        </label>
      </div>
      <div className="w-full h-fit flex flex-col-reverse items-start justify-center">
        <textarea
          cols={3}
          rows={3}
          className="w-full h-fit border-2 border-indigo-200 focus:border-indigo-400 placeholder:font-medium placeholder:font-[Karla] placeholder:text-lg placeholder:text-gray-500 rounded-md p-1 outline-none transition-all duration-300 ease-in-out"
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message"
        ></textarea>
        <label
          className="pl-1 font-[Karla] font-medium text-lg"
          htmlFor="message"
        >
          Message<span className="text-red-500">*</span>
        </label>
      </div>
      <button
        onClick={(e) => hundleSubmit(e)}
        className="w-full h-10 rounded-md bg-indigo-400 text-white font-[Karla] font-bold text-lg cursor-pointer hover:bg-sky-400 hover:text-[#eee] transition-all ease-in-out duration-300"
      >
        Send a Message
      </button>
    </div>
  );
}
