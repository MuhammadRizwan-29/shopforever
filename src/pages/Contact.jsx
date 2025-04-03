import Title from "./../components/Title";
import { assets } from "./../assets/frontend_assets/assets";
import Newsletter from "./../components/Newsletter";

export default function Contact() {
  return (
    <section>
      <div className="text-center text-2xl pt-10 border-t">
        <Title title={"CONTACT"} innerTitle={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-14">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <h2 className="font-semibold text-xl text-gray-600">Our Store</h2>
          <p className="text-gray-500">
            1729 Hill Town Stattion <br />
            Suite 029, California, USA
          </p>
          <p className="text-gray-500">
            <b>Tel:</b> (415) 555-1729
            <br />
            <b>Email:</b> admin@shopforever.com
          </p>
          <h2 className="font-semibold text-xl text-gray-600">
            Careers at ShopForEver
          </h2>
          <p className="text-gray-500">
            Learn more about our teams and jobs openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore here
          </button>
        </div>
      </div>
      <Newsletter />
    </section>
  );
}
