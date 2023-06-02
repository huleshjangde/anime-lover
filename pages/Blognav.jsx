import React, { useState } from "react";
import Tcard from "./Tcard";
import SectionHeader from "./components/SectionHeader";
import { data } from "../data";

const Blognav = () => {
  const [category, setCategory] = useState("comedy"); // Default category 

  const categories = [
    { id: 1, name: "comedy" },
    { id: 2, name: "fantasy" },
    { id: 3, name: "drama" },
    { id: 4, name: "action" },
    { id: 5, name: "history" },
    { id: 6, name: "military" },
  ];

  // Filter the data based on the selected category
  const filteredData = data.filter((item) => item.categorie === category);

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
    console.log(categoryName);
  };

  return (
    <>
      <section className="md:px-20 md:py-10 w-screen h-full ">
        <p className="heading text-lg font-medium px-2 md:px-10 mb-2 w-fit">
          Blog
        </p>
        <SectionHeader />
        <div className=" md:flex gap-5 px-10 mt-10 text-lg font-medium flex overflow-hidden">
          {categories.slice(0,5).map((category) => (
            <div key={category.id}>
              <button onClick={() => handleCategoryClick(category.name)}>
                {category.name}
              </button>
            </div>
          ))}
        </div>
        <SectionHeader />

        <div className="blogs flex gap-5 mt-8 justify-center items-center px-2 md:px-10">
          {filteredData.map((item) => (
            <Tcard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Blognav;
