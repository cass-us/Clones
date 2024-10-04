import { BsInstagram } from "react-icons/bs";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <footer className="bg-[#0b4a2e] w-full">
     
      <section id="header" className="p-4 sm:p-2">
        <div>
          <h1 className="font-bold text-2xl font-roboto text-white">FOOD LOVER'S MARKET</h1>
        </div>
        <div className="flex gap-2 mt-2">
          <BsInstagram className="bg-white p-2 rounded-xl text-[#00723f]" size={30} />
          <FaXTwitter className="bg-white p-2 rounded-xl text-[#00723f]" size={30} />
          <SlSocialFacebook className="bg-white p-2 rounded-xl text-[#00723f]" size={30} />
        </div>
      </section>

     
      <section
        id="explore"
        className="p-4 sm:p-2 grid grid-cols-2  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 text-white"
      >
        <div>
          <h1 className="font-semibold mb-2">EXPLORE</h1>
          <ul className="space-y-1">
            <li><a href="#">Specials</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Store Locator</a></li>
            <li><a href="#">Fresh News</a></li>
            <li><a href="#">Subscribe</a></li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold mb-2">EARTH LOVERS</h1>
          <ul className="space-y-1">
            <li><a href="#">About Earth Lovers</a></li>
            <li><a href="#">Our Family</a></li>
            <li><a href="#">Our Suppliers</a></li>
            <li><a href="#">Our Communities</a></li>
            <li><a href="#">Our Customers</a></li>
            <li><a href="#">Our World</a></li>
            <li><a href="#">Earth Lovers News</a></li>
            <li><a href="#">Sustainability Report</a></li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold mb-2">COMPANY</h1>
          <ul className="space-y-1">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Compliance & Legal</a></li>
            <li><a href="#">Email Disclaimer</a></li>
            <li><a href="#">Own a FLM Franchise</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold mb-2">CONTACT</h1>
          <ul className="space-y-1">
            <li><a href="#">Call us: 086 000 7728</a></li>
            <li><a href="#">Client Care</a></li>
          </ul>
        </div>
      </section>

    
      <section className="bg-[#00723f] sm:h-[150px] w-full">
    
      </section>
    </footer>
  );
}

export default FooterSection;
