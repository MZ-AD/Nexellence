import SectionTitle from "../Common/SectionTitle";


const TaxPageOne = () => {
  const List = ({ text }) => (
    <div className="bg-gray-200 p-6 rounded-md shadow-lg mb-6">
      <p className="flex items-center text-lg font-medium text-body-color">
       
          
       
        {text}
      </p>
    </div>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
           
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Our Services"
                paragraph="At Nexellence and Co, we deliver innovative AI and Machine Learning solutions that optimize operations and drive business growth. Our expert team leverages advanced technologies to transform data into actionable insights and automate processes for enhanced efficiency."
                mb="44px"
              />
            </div>

            
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex flex-wrap justify-start">

                <div className="w-full h-ful sm:w-1/2 lg:w-full xl:w-1/2 pr-4 ">
                  <List text="Predictive Analytics & Data Insights AI-Powered Automation" />
                </div>
               
                <div className="w-full sm:w-1/2 lg:w-full xl:w-1/2 pr-4">
                  <List text="Natural Language Processing (NLP) Solutions Machine Learning Model Development" />
                </div>
               
                <div className="w-full sm:w-1/2 lg:w-full xl:w-1/2 pr-4 mb-4">
                  <List text="AI-Driven Business Intelligence For Innovative Growth & Competitve Efficiency" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-full xl:w-1/2 pr-4 mb-4">
                  <List text="AI & ML Integration for Legacy Systems (Asessment of Legacy System)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxPageOne;
