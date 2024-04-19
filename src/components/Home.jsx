import { BrowserRouter as Link } from "react-router-dom";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Home() {
  const pictures = [
    {
      url: "https://images.unsplash.com/photo-1614529168796-cb235d6a2557?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1672842056361-1838711c5aeb?q=80&w=1570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1680713660046-67b7350ed679?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1559873800-8ae14dc18adc?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1527529422472-65e6c7fd9f6a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const previousPic = () => {
    const isFirstPic = currentIndex === 0;
    setCurrentIndex(isFirstPic ? pictures.length - 1 : currentIndex - 1);
  };

  const nextPic = () => {
    const isLastPic = currentIndex === pictures.length - 1;
    setCurrentIndex(isLastPic ? 0 : currentIndex + 1);
  };

  const goToPicture = (pictureIndex) => {
    setCurrentIndex(pictureIndex);
  };

  const handleClick = (event) => {
  event.preventDefault();

  }

  return (
    <>
    <div className="homepage-container h-full bg-brand-background" > </div>
    
      <div className=" flex bg-ombre-text h-12">
        <h1 className="text-4xl pl-5 p-2  text-brand-accent inline-block ">
          ThriveHive
        </h1>
        <div className="ml-auto p-2">
          <form onSubmit={handleClick}>
          <select className="mr-1 border-gray-300 py-2 px-4 rounded leading-tight focus:outline-none">
            <option value="" disabled selected>
              Shop By Category
            </option>
            <option value='option1'>Arts and Crafts</option>
            <option value='option2'>Baby Products</option>
            {/* <option value='option3'>Beauty and Personal Care</option> */}
            <option value='option4'>Books</option>
            <option value='option5'>Clothing</option>
            <option value='option6'>Electronics</option>
            <option value='option7'>Footwear</option>
            <option value='option8'>Furniture</option>
            <option value='option9'>Garden and Outdoor</option>
            <option value='option10'>Groceries</option>
            <option value='option11'>Health and Wellness</option>
            <option value='option12'>Jewelry</option>
            <option value='option13'>Mobile Accessories</option>
            <option value='option14'>Souvenirs</option>
            <option value='option15'>Tools</option>
            <option value='option16'>Toys and Games</option>
            <option value='option17'>Travel Accessories</option>
          </select>
          <input
            type="search"
            className=" p-1.5 rounded"
            placeholder="Search for anything"
          />  
          </form>
          
          <button></button>
        </div>
      </div>

      <div className="container ">
        <div className="max-w-[1000px] h-[700px] w-full m-auto py-16 px-4 relative group">
          <div
            style={{ backgroundImage: `url(${pictures[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={previousPic} size={30} />
          </div>
          {/* Right Arrow */}
          <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextPic} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {pictures.map((_, pictureIndex) => (
              <div
                key={pictureIndex}
                onClick={() => goToPicture(pictureIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled
                  color={pictureIndex === currentIndex ? "white" : "gray"}
                />
              </div>
            ))}
          </div>
          
        </div>
        <div className="footer bg-ombre-text h-12 w-full "></div>
      </div>
    </>
  );
}

export default Home;
