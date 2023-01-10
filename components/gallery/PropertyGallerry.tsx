import { useState } from "react";

interface Images {
  images: [string];
}

export default function PropetyGallery({ images }: Images) {
  const [mainImage, setMainImage] = useState(0)
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={images[mainImage]} height={400} width={500} className="rounded-xl" />
      <div className="grid grid-cols-4 gap-1 mt-4">
        {images.map((image, i) => (
          <a onClick={() => setMainImage(i)}>
            <img src={image} height={100} width={110} className="rounded-xl"/>
          </a>
        ))}
      </div>
    </div>
  );
}
