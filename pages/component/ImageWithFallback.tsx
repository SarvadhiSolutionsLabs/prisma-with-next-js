import React, { useState } from "react";
import Image from "next/image";

const ImageWithFallback = (props: any) => {
  const imgUrl = `${process.env.PUBLIC_URL}static/images/`;
  const { img, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(`${imgUrl}${img}`);
  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(`${imgUrl}noUser.png`);
      }}
      alt="user"
      width={50}
      height={50}
      className="mx-auto object-cover rounded-full "
    />
  );
};

export default ImageWithFallback;
