import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Our Office Location
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Visit us at our office or use the map below for directions.
              </p>
              <div className="w-full mb-12">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.942108288225!2d144.9559283153178!3d-37.81720967975194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5bfa3a5bdb%3A0x507b5f8b8d6188e0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1637574536221!5m2!1sen!2sau"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
