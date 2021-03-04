import React, {useState} from 'react';

const ImageCarousel = ({images}) => {
  const [imageUrl, setImageUrl] = useState(images[0])
  return (
    <div className="product-image-wrapper flex items-center">
      <div className="py-4 mr-6">
        {
          images.map(src => (
            <div onClick={() => setImageUrl(src)} className="w-16">
              <img className="w-full my-4" src={src} alt="product display"/>
            </div>
          ))
        }
      </div>
      <div>
        <img
          className="w-full"
          src={imageUrl}
          alt="product display"
        />
      </div>
    </div>
  );
};

export default ImageCarousel;