import React from "react";

function Contactus() {
  return (
    <div className=" ">
        <div className="">
            <form className="w-[400px] bg-slate-200 h-[500px] p-10 space-y-6 placeholder:text-center ">
                <h1> Contact us</h1>
                <input type="name" id="name" name="" className=" border-[1px] placeholder:text-xl border-slate-300" placeholder="Your name" ></input><br/>
                <input type="name" id="name" name="" className=" border-[1px] placeholder:text-xl border-slate-300" placeholder="Your name" ></input><br/>
                <input type="name" id="name" name="" className=" border-[1px] placeholder:text-xl border-slate-300" placeholder="Your name" ></input><br/>
                <textarea name="subject" placeholder="Your message" className="h-[150px] w-[340px]"></textarea>
            </form>
            
        </div>
    </div>
  );
}

export default Contactus;
