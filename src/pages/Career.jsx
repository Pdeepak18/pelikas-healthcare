import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";
import jobOpenings from './openingdata'; // Import the job openings data

const Career = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[100vh]  flex flex-col lg:flex-row overflow-x-hidden	 relative lg:top-20 py-5 px-4 lg:px-4 gap-4">
      <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-6">Join Our Team</h1>
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
              <div className="lg:mt-4  justify-center block lg:hidden">
                  <button className="bg-blue-500 text-white lg:py-2 lg:px-4 rounded-full hover:bg-blue-600">
                    Apply Now
                  </button>
                </div>
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
                <div className="lg:mt-4  justify-center block">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                    Apply Now
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
