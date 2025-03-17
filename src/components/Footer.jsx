import { Link } from "react-router-dom";
import { assets } from "./../assets/frontend_assets/assets";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <Link to={"/"}>
            <img src={assets.logo} className="w-32 mb-5" alt="Logo icon..." />
          </Link>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nam
            illo deleniti, itaque error ex atque fuga. Modi similique fugit est
            ducimus inventore molestiae minus, veniam, autem adipisci sit quo.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-medium mb-5">COMPANY</h4>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>DELIEVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-medium mb-5">GET IN TOUCH</h4>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+92-300-000-0000</li>
            <li>info@shopforever.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright &copy; 2025 - shopforever.com - All Right Reserved. 
        </p>
      </div>
    </footer>
  );
}
