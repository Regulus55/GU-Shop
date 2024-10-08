import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ImageRarity = () => {
  return (
    <section className={"relative mt-2 md:mt-24 bg-black"}>
      <div
        className={"mx-auto max-w-7xl px-0 md:bg-transparent md:px-6 lg:px-8"}
      >
        <div className={"mx-auto flex flex-col rounded-3xl py-24 lg:mx-0"}>
          <LazyLoadImage
            src={"images/galaxybook4ad.png"}
            width={"100%"}
            height={"100%"}
            alt={"Image Alt"}
            className={"h-full w-full object-contain"}
          />

          <div className={"px-6 pt-2 md:px-0"}>
            <h1
              className={
                "text-center m-auto text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight text-gray-900 lg:max-w-1xl"
              }
            >
              New Items are updated{" "}
            </h1>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl md:text-2xl lg:text-3xl pt-8 text-white leading-8 text-gray-900 text-center">
              “Experience the cutting-edge technology and convenience of our
              latest products”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageRarity;
