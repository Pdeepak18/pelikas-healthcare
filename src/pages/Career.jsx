import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";
import jobOpenings from "./openingdata"; // Import the job openings data

const Career = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[100vh]  flex flex-col lg:flex-row overflow-x-hidden	 relative lg:top-20 py-5 px-4 lg:px-4 gap-4">
        <div className="bg-gray-100 w-[100%]">
          <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold text-center mb-6">
              Join Our Team
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobOpenings.length === 0 ? (
                <p className="text-center text-gray-600 text-lg">
                  We currently have no job openings. Please check back later.
                </p>
              ) : (
                jobOpenings.map((job, index) => (
                  <div
                    key={index}
                    className="bg-white h-[300px] rounded-lg p-6 shadow-md"
                  >
                    <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                    <p className="text-gray-600 mb-4">{job.department}</p>
                    <p className="text-gray-700">{job.description}</p>
                    <div className="mt-4">
                      <p className="text-gray-600">Location: {job.location}</p>
                      <p className="text-gray-600">Type: {job.type}</p>
                      <p className="text-gray-600">
                        Posted on: {job.postedDate}
                      </p>
                    </div>
                    <div className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 block lg:hidden text-center mt-4">
                    <a
                          href={`mailto:pelikashealthcare@gmail.com?Subject=Applying for  ${job.title} Role :&body=Thank you for applying to the ${job.title} at Pelikas Healthcare. %0A%0A I’d like to inform you that we have received your resume. Our hiring team is currently reviewing all applications and we are planning to schedule interviews over the course of a week.%0A
If you are among qualified candidates, you will receive a mail/call from one of our recruiters to schedule Video interviews In any case, we will keep you posted on the status of your application. %0A
In the interim, request to update us about the following thing to action immediately. %0A%0A
Full Name: %0A
Date Of Birth :  %0A
Current Company:   %0A
Total-experience: %0A
Current Compensation:%0A
Expected Compensation:%0A
Notice period Details:    %0A
Offer in hand?: %0A
Offer in Hand Compensation: If applicable: %0A%0A

Thank you, again, for taking the time to apply for this role at Pelikas Healthcare %0A%0A

 `}
                        >
                          {" "}
                          Apply Now
                        </a>
                    </div>
                    <div className="lg:mt-4  justify-center block">
                      <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 hidden lg:block">
                        <a
                          href={`mailto:pelikashealthcare@gmail.com?Subject=Applying for  ${job.title} Role :&body=Thank you for applying to the ${job.title} at Pelikas Healthcare. %0A%0A I’d like to inform you that we have received your resume. Our hiring team is currently reviewing all applications and we are planning to schedule interviews over the course of a week.%0A
If you are among qualified candidates, you will receive a mail/call from one of our recruiters to schedule Video interviews In any case, we will keep you posted on the status of your application. %0A
In the interim, request to update us about the following thing to action immediately. %0A%0A
Full Name: %0A
Date Of Birth :  %0A
Current Company:   %0A
Total-experience: %0A
Current Compensation:%0A
Expected Compensation:%0A
Notice period Details:    %0A
Offer in hand?: %0A
Offer in Hand Compensation: If applicable: %0A%0A

Thank you, again, for taking the time to apply for this role at Pelikas Healthcare %0A%0A

 `}
                        >
                          {" "}
                          Apply Now
                        </a>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Career;
