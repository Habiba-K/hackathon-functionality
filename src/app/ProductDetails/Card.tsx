import Tags from "../Components/tags";

interface Product {
  id: number;
  title: string;
  desc: string;
  price: string;
  originalPrice: string;
  img: string;
}

interface ProductCardProps {
  product: Product;
}

const Card: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex justify-center items-center bg-white">
      <div className=" justify-center relative aspect-square">
        <img
          src={product.img}
          alt={product.title}
          className="lg:w-[239px] lg:h-[327px] object-contain"
        />
        <div className="p-4">
         
          <h3 className="text-lg text-[#252B42] font-bold text-md  truncate hover:text-clip text">
            {product.title}
          </h3>
          <p className="text-sm text-[#737373] font-bold text-clip overflow-hidden">
            {product.desc}
          </p>
          <div className="flex gap-2 mt-2">
            <span className="text-[#BDBDBD] font-bold text-sm">
              {product.originalPrice}
            </span>
            <span className=" text-green-600 font-semibold text-sm">
              {product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
