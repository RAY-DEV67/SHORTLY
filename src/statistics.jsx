import brand from "./images/icon-brand-recognition.svg";
import detail from "./images/icon-detailed-records.svg";
import customize from "./images/icon-fully-customizable.svg";

export function Statistics() {
  return (
    <div className="statistics pt-32 -mt-64 md:-mt-32 md:pt-12">
      <div className="mt-20 flex flex-col items-center pt-40">
        <h2 className="text-2xl md:text-4xl">Advanced Statistics</h2>
        <p className="w-10/12 mt-4 max-w-md">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
   <div className="flex flex-col md:items-center">
   <div className="flex flex-col items-center relative md:flex-row md:w-10/12 md:-mt-20">
      <div className="relative mt-32 w-10/12 bg-white rounded md:mt-24">
        <div className="brandimg -top-12 left-1/2 md:left-16 flex flex-col items-center justify-center">
          <img src={brand} alt="brand" className="brand" />
        </div>
        <h2 className="pt-16 text-2xl"> Brand Recognition</h2>
       <div className="flex flex-col items-center">
       <p className="my-4 w-9/12">
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
       </div>
      </div>

      <div className="relative mt-24 bg-white w-10/12 md:mx-4 rounded md:mt-36">
        <div className="brandimg -top-12 left-1/2 md:left-16 flex flex-col items-center justify-center">
          <img src={detail} alt="brand" className="brand" />
        </div>
        <h2 className="pt-16 text-2xl"> Detailed Records</h2>
       <div className="flex flex-col items-center">
       <p className="my-4 w-9/12">
       Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
        </p>
       </div>
      </div>

      <div className="relative mt-24 bg-white w-10/12 mb-8 rounded md:mt-64">
        <div className="brandimg -top-12 left-1/2 md:left-16 flex flex-col items-center justify-center">
          <img src={customize} alt="brand" className="brand" />
        </div>
        <h2 className="pt-16 text-2xl"> Fully Customizable</h2>
       <div className="flex flex-col items-center">
       <p className="my-4 w-9/12">
       Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
        </p>
       </div>
      </div>
      <div className="bluediv top-24 w-2 h-2/3 md:h-2 md:w-2/3 md:top-2/3 md:left-32"></div>
      </div>
   </div>
    </div>
  );
}


