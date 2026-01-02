import { assets } from "../assets/assets.js";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm text-gray-600">
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            neque ipsum expedita nemo quam natus quae at incidunt deleniti nam
            enim quasi harum, perspiciatis quod eaque, dolorem commodi, eveniet
            excepturi.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>044-1234-2390</li>
            <li>contact@company.com</li>
            <li>123 Street, City, Country</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2023@ tomopee.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
