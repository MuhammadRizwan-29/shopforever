import { assets } from "../assets/frontend_assets/assets";

export default function OurPolicy() {
  return (
    <section>
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
        <div>
          <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
          <h4 className="font-medium">Easy Exchange Policy</h4>
          <p className="text-gray-400">We offer hassale free exchange policy</p>
        </div>
        <div>
          <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
          <h4 className="font-medium">7 Days Return Policy</h4>
          <p className="text-gray-400">We provide 7 days free return policy</p>
        </div>
        <div>
          <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
          <h4 className="font-medium">Best Customer Support</h4>
          <p className="text-gray-400">We provide 24/7 customer support</p>
        </div>
      </div>
    </section>
  );
}
