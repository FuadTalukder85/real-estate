import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import proImg from "../../assets/images/profileImg01.jpg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useGetReviewQuery } from "../../redux/reviewApi/reviewApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect } from "react";
const RecentReview = () => {
  const { data, refetch } = useGetReviewQuery("");
  const recentReview = data
    ? [...data].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    : [];
  // custom button
  const NextArrow = ({ onClick }) => {
    return (
      <div className="absolute -bottom-20 right-0 flex md:px-0 ">
        <div
          className="custom-arrow prev-arrow bg-[#ffac37] p-3 rounded-md shadow-md cursor-pointer hover:bg-[#2A4766] transition-all duration-700"
          onClick={onClick}
        >
          <MdChevronRight className="text-2xl text-white" />
        </div>
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="absolute -bottom-20 right-16 flex md:px-0 z-10">
        <div
          className="custom-arrow next-arrow bg-white border border-gray-200 p-3 rounded-md shadow-md cursor-pointer hover:bg-[#2A4766] transition-all duration-700 z-10"
          onClick={onClick}
        >
          <MdChevronLeft className="text-2xl text-[#ffac37]" />
        </div>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [refetch]);
  return (
    <div className="mt-10 p-5 text-[#2A4766] bg-white pb-24 shadow-md">
      <h5 className="font-semibold">Recent Reviews</h5>
      <Slider {...settings}>
        {recentReview?.map((review) => (
          <div key={review._id} className="bg-gray-50 p-3 mt-2">
            <div className="flex justify-between mt-5">
              <div className="flex gap-3 items-center">
                <Image
                  className="rounded-full"
                  src={proImg}
                  alt="proImg"
                  width={45}
                ></Image>
                <div>
                  <p className="font-semibold">{review?.name}</p>
                  <p>{review?.date}</p>
                </div>
              </div>
              <span className="">
                <Rating style={{ maxWidth: 90 }} value={review?.rating} />
              </span>
            </div>
            <p className="mt-3">{review?.review}</p>
          </div>
        ))}
      </Slider>

      {/* <div className="flex gap-3 mt-5 justify-end">
        <button className="bg-white border border-gray-200 p-3 rounded-md shadow-md">
          <MdChevronLeft className="text-2xl text-[#ffac37]" />
        </button>
        <button className="bg-[#ffac37] p-3 rounded-md shadow-md">
          <MdChevronRight className="text-2xl text-white" />
        </button>
      </div> */}
    </div>
  );
};

export default RecentReview;
