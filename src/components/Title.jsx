export default function Title({ title, innerTitle }) {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <h2 className="text-gray-500">
        {title} <span className="text-gray-700 font-medium">{innerTitle}</span>
      </h2>
      <p className="w-8 md:w-11 h-[2px] bg-[#414141] bg-gray-700"></p>
    </div>
  );
}
