import Image from "next/image";
import { TListingCard } from "../../types/types";

const ListingCard = ({
  cardImg,
  title,
  price,
  bed,
  bathroom,
  sf,
}: TListingCard) => {
  return (
    <div className="relative group rounded-lg overflow-hidden mt-3 md:mt-0">
      <Image
        src={cardImg}
        alt="cardImg"
        width={400}
        height={400}
        className="rounded-lg bg-black bg-opacity-20 shadow-inner group-hover:scale-125 transition-all duration-700 ease-in-out"
      ></Image>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg group-hover:scale-125 transition-all duration-700 ease-in-out"></div>
      <div className="p-5 absolute bottom-0 text-white z-50">
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
