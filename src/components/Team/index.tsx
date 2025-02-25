"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const MeetTheTeam = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Meet The Team"
          paragraph="Our Amazing Team Of Experts,  Ready to Serve You!"
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap justify-center">
          {/* Team Member 1 */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-12">
            <div className="text-center">
              <div className="mb-4">
                <Image
                   src="/images/about/PHVI.jpg"
                  alt="Team Member 1"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto"
                />
              </div>
              <h3 className="text-black dark:text-white text-xl">Zaheer Abbas</h3>
              <p className="text-md text-gray-500">Founder</p>
              <p>MS degree in Accounting and Finance, Karakurrum International University</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-12">
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/images/about/PHVI.jpg"
                  alt="Team Member 2"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto"
                />
              </div>
              <h3 className="text-black dark:text-white text-xl">Nadia Abbas</h3>
              <p className="text-md text-gray-500">Co-Founder</p>
              <p>BS in Computer Science and Masters in Artificial Intelligence, Brandenburgische Technische Universität, Germany</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-12">
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/images/about/PHVI.jpg"
                  alt="Team Member 3"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto"
                />
              </div>
              <h3 className="text-black dark:text-white text-xl">Sunaina</h3>
              <p className="text-md text-gray-500">Co-Founder & CEO</p>
              <p>In CA program at Chartered Accountants of Pakistan and Associate degree in Finance</p>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
