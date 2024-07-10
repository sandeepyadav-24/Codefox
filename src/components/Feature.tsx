import React from "react";
import ShimmerButton from "./magicui/shimmer-button";

const Feature = () => {
  return (
    <div className="">
      {/** Her eWe have A FIrst  feature Section  */}
      <div className="feature-1 flex flex-row px-32 py-20 bg-gradient-to-r from-[#EFF7FD] to-[#FEFCEF] ">
        <div className="w-1/2">
          <h1 className="text-[#1C4980] text-6xl font-bold">
            Stay Ahead with Upcoming Company Visits
          </h1>
          <h3 className="text-[#747474] my-5">
            Get all the details about the companies visiting our campus soon.
            From company profiles to preparation tips and recruitment rounds,
            we’ve got you covered.
          </h3>
          <ShimmerButton shimmerColor="#EAE8FD" />
        </div>
        <div className="w-1/2">Here we will have a nice pictorial diagram </div>
      </div>
      {/** Here We have A second Feature Section  */}
      <div className="feature-2 flex flex-row mx-20 my-20">
        <div className="w-1/2 bg-[#FEDD80] rounded-3xl px-20 py-40">
          Here we will have a nice pictorial diagram{" "}
        </div>
        <div className="w-1/2 px-10">
          <h1 className="text-[#1C4980] text-6xl font-bold">
            Explore Past Company Visits
          </h1>
          <h3 className="text-[#747474] my-5  ">
            Dive into our archive of past company visits, including detailed
            profiles, course relevance, and event dates. Learn from the past to
            prepare for the future.
          </h3>
          <ShimmerButton shimmerColor="#EAE8FD" />
        </div>
      </div>
      {/** Here We have A third Feature  Scetion  */}
      <div className="feature-3 flex flex-row px-20 my-20 py-20 bg-gradient-to-r from-[#EFF7FD] to-[#FEFCEF]">
        <div className="headline w-1/2">
          <h1 className="text-[#1C4980] text-4xl font-bold">
            Compete and Shine on the Leaderboard
          </h1>
          <h3 className="text-[#747474]">
            Participate in our weekly/biweekly DSA tests and see how you rank
            among your peers. Track your progress and aim for the top.
          </h3>
        </div>
        <div className="card-ui w-1/2"></div>
      </div>
    </div>
  );
};

export default Feature;
