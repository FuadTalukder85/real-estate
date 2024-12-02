import Image from "next/image";

const ListingCard = ({ cardImg, title, price, bed, bathroom, sf }) => {
  return (
    <div className="relative group rounded-lg overflow-hidden">
      <Image
        src={cardImg}
        alt="cardImg"
        width={400}
        height={400}
        className="rounded-lg bg-black bg-opacity-20 shadow-inner group-hover:scale-125 transition-all duration-700 ease-in-out"
      ></Image>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg group-hover:scale-125 transition-all duration-700 ease-in-out"></div>
      <div className="absolute bottom-5 left-5 text-white">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-2xl font-bold">${price}.00</p>
        <ul>
          <li>
            {bed} bed | {bathroom} bathroom | {sf} SF
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListingCard;
