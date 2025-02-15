"use client"
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import Product from "@/types/product";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { addToWhiteList } from "@/redux/slices/whiteListSlice";



const ProductCard: React.FC<Product> = ({ imageUrl, name, price, orignalPrice, badge, _id }) => {

  const item = { imageUrl, title:name, price:orignalPrice, orignalPrice, badge, id:_id }
  console.log(item)

  const dispatch = useDispatch()
  return (
    <div className="relative bg-white rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* Badge */}
      {badge && (
        <div
          className={`absolute top-2 left-2 px-3 py-1 text-xs font-bold text-white rounded-md ${badge === "New" ? "bg-[#01AD5A]" : "bg-[#F5813F]"
            }`}
        >
          {badge}
        </div>
      )}

      {/* Image */}
      <Image
        src={imageUrl}
        alt={name}
        width={300}
        height={400}
        className="w-full h-72 object-fill"
      />

      {/* Content */}
      <div className="p-4 text-start text-black">
        <Link href={`/products/${_id}`}>
        <h3 className="text-lg font-semibold cursor-pointer text-[#007580]">{name}</h3>
        </Link>
        <div className="flex items-center justify-start space-x-2">
          <p className=" font-bold">{orignalPrice}</p>
          {price && (
            <p className="text-gray-500 line-through text-sm">{price||0}</p>
          )}
        </div>
      </div>

      {/* Cart Icon */}
      <div onClick={()=>dispatch(addToCart(item))} className="absolute bottom-2 cursor-pointer right-2 bg-gray-200 rounded-full p-2 hover:bg-[#029FAE]">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:stroke-white"
        >
          <path
            d="M2.52081 2.97916L4.42748 3.30916L5.31023 13.8261C5.34414 14.2399 5.53284 14.6258 5.83867 14.9066C6.14451 15.1875 6.545 15.3427 6.96023 15.3413H16.9611C17.3586 15.3418 17.743 15.1986 18.0435 14.9383C18.344 14.6779 18.5403 14.3178 18.5964 13.9242L19.4672 7.91266C19.4904 7.75278 19.4819 7.5899 19.4421 7.43332C19.4023 7.27674 19.3321 7.12954 19.2354 7.00014C19.1387 6.87073 19.0174 6.76166 18.8785 6.67916C18.7396 6.59666 18.5858 6.54234 18.4259 6.51932C18.3672 6.51291 4.73365 6.50832 4.73365 6.50832"
            stroke="#272343"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.9479 9.89539H15.4898"
            stroke="#272343"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5578 18.5194C6.62502 18.5165 6.69213 18.5273 6.75509 18.551C6.81805 18.5748 6.87556 18.611 6.92414 18.6575C6.97273 18.7041 7.01139 18.76 7.03781 18.8219C7.06422 18.8837 7.07784 18.9503 7.07784 19.0176C7.07784 19.0849 7.06422 19.1515 7.03781 19.2134C7.01139 19.2753 6.97273 19.3312 6.92414 19.3777C6.87556 19.4243 6.81805 19.4605 6.75509 19.4842C6.69213 19.508 6.62502 19.5187 6.5578 19.5158C6.42936 19.5103 6.30801 19.4554 6.21908 19.3626C6.13015 19.2698 6.08051 19.1462 6.08051 19.0176C6.08051 18.8891 6.13015 18.7655 6.21908 18.6726C6.30801 18.5798 6.42936 18.5249 6.5578 18.5194Z"
            fill="#272343"
            stroke="#272343"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.8988 18.5194C17.0312 18.5194 17.1583 18.572 17.252 18.6657C17.3457 18.7594 17.3983 18.8865 17.3983 19.019C17.3983 19.1515 17.3457 19.2786 17.252 19.3723C17.1583 19.4659 17.0312 19.5186 16.8988 19.5186C16.7663 19.5186 16.6392 19.4659 16.5455 19.3723C16.4518 19.2786 16.3992 19.1515 16.3992 19.019C16.3992 18.8865 16.4518 18.7594 16.5455 18.6657C16.6392 18.572 16.7663 18.5194 16.8988 18.5194Z"
            fill="#272343"
            stroke="#272343"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div onClick={()=>dispatch(addToWhiteList(item))} className="absolute bottom-2 cursor-pointer right-12 bg-gray-200 rounded-full p-2 hover:bg-[#029FAE]">
      <CiHeart className="" size={24} />
      </div>

    </div>
  );
};

export default ProductCard;
