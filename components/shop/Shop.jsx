import React from "react";
import { shopData } from "@/data/shop";
import ItemShop from "./ItemShop";

const Shop = () => {
  return (
    <section className="shop-page py-100-70">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-3">
          {shopData.map((item, index) => (
            <div key={`shop-${index}`} className="w-full md:w-1/2 lg:w-1/3 px-3">
              <ItemShop data={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
