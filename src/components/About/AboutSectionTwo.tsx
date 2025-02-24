import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/mann.jpg"
                alt="about image"
                fill
                className=""
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Expert Accounting Solutions
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  At Nexellence and Co, we provide professional accounting services designed to optimize your financial strategies and ensure accurate reporting for your business.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Comprehensive Taxation Services
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our expert team offers tailored tax planning and strategy solutions to help businesses minimize liabilities and stay compliant with evolving tax regulations.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  AI & Machine Learning Integration
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Leverage the power of AI and machine learning with Nexellence and Co to enhance decision-making, automate processes, and drive business growth through advanced data analytics.
                </p>
              </div>
              {/* Founder Info Section */}
              <div className="mt-12">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Meet Our Founders
                </h3>
                <div className="space-y-6">
                <div className="text-base font-medium text-body-color sm:text-lg sm:leading-relaxed">
    <p><strong className="text-black dark:text-white">Founder:</strong> <strong className="text-black dark:text-white ">Zaheer Abbas</strong> - MS degree in Accounting and Finance, Karakurrum International University</p>
  </div><div className="text-base font-medium text-body-color sm:text-lg sm:leading-relaxed">
    <p><strong className="text-black dark:text-white">Co-Founder:</strong> <strong className="text-black dark:text-white">Nadia Abbas</strong> - BS in Computer Science and Masters in Artificial Intelligence, Brandenburgische Technische Universität, Germany</p>
  </div>
  <div className="text-base font-medium text-body-color sm:text-lg sm:leading-relaxed">
    <p><strong className="text-black dark:text-white">Co-Founder and CEO:</strong> <strong className="text-black dark:text-white">Sunaina</strong> - In CA program at Chartered Accountants of Pakistan and Associate degree in Finance</p>
  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
