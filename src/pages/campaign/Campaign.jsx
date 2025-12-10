import React from 'react';
import Banner from './Banner';
import Wrapper from './Wrapper';
import DBASection from "../../components/DesignSolution/DBASection";


const Campaign = () => {
  return (
    <>
      <div>
        <Banner />
        <Wrapper />
        <DBASection />

        <div className="w-full max-w-[90%] mx-auto h-0.5 bg-[#9C0300] mt-2 mb-4" />
      </div>
    </>
  );
}

export default Campaign;
