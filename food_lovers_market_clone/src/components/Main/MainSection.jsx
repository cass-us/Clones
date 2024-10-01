import poster1 from "./assets/A4-Poster-pdf.webp";
import poster2 from "./assets/INL-1.jpg";
import image from "./assets/Biltong-Monday-Promo-01.jpg";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const MainSection = () => {
  return (
    <section>
      <div className="md:flex ml-4 mt-8">
        <h2 className="font-roboto text-2xl text-[#00723f]">
          <h1>
            GET A LOAD OF <span className="font-bold">THESE DEALS</span>
          </h1>
        </h2>
        <h2 className="text-sm pb-4 mt-4 gap-4">
          Viewing deals at Food Lover’s Market Lynnwood Lane
          <a href="# " className="underline sm:mt-4 md:mt-0">
            {" "}
            View deals at a different store
          </a>
        </h2>
      </div>
      <section className="flex gap-4 p-2  *:mt-8">
        <div className="w-[200px]">
          <img src={image} className="w-52 mb-4" />
          <h2 className="mb-8 font-roboto font-bold">
            Biltong Monday Promotion
          </h2>
          <h2>
            <span className="font-roboto font-bold text-[#00723f]">
              {" "}
              R199 99 per kg
            </span>
          </h2>
          <p className="text-sm">
            Valid from 30 Sep to 06 Oct 2024. Select SA stores only. We reserve
            the right to limit quantities.
          </p>
        </div>
        <div className="w-[200px]">
          <img src={poster1} className="w-52 mb-4" />
          <h2 className="mb-4 font-roboto font-bold">
            50Buck Inland - 30 September - 6 October 2024
          </h2>
          <a href="#" className="mb-8 mt-4 underline">
            click to view
          </a>
          <p className="text-sm">
            Valid from 30 Sep to 06 Oct 2024. Select SA stores only. We reserve
            the right to limit quantities.
          </p>
        </div>
        <div className="w-[200px]">
          <img src={poster2} className="w-52 mb-4" />
          <h2 className="mb-8 font-roboto font-bold">Fontignac Poster</h2>
          <a href="#" className="mb-8 mt-4 underline ">
            click to view
          </a>
          <p className="text-sm">
            Valid from 30 Sep to 06 Oct 2024. Select SA stores only. We reserve
            the right to limit quantities.
          </p>
        </div>
      </section>
      <section className="md:flex h-[200px] w-[98%] bg-[#57325f] mt-20 mb-20 pb-8">
      <div className="p-4 text-white font-roboto">
      <h2 className="text-2xl pb-2"><span className="font bold">Hear it through the grapevine</span></h2>
      
      Sign up to our weekly newsletter to be informed of our freshest deals and mouthwatering recipes
      </div>
      <div className="flex gap-3 ml-4">
        <div className="text-center justify-center item-center">
         <input
          type="text"
          placeholder=" your email"
          className="rounded-md w-[200px] h-10"
        />
        </div>
        <div className="text-black bg-white rounded-lg w-8 ">
        <ArrowRightAltIcon size={20} className="p-1"/>
        </div>
      </div>
      
      </section>
    </section>
  );
};

export default MainSection;
