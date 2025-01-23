import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  title: string;
  desc: string;
  img: string;
}

interface ProductCardProps {
  product: Product;
}

const TeamCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex justify-center items-center text-center">
      <div className=" justify-center relative aspect-square">
        <img
          src={product.img}
          alt={product.title}
          className="lg:w-[239px] lg:h-[240px] object-contain"
        />
        <div className="p-1">
          <h3 className="py-2 text-lg text-[#252B42] font-bold text-md  truncate hover:text-clip text">
            {product.title}
          </h3>
          <p className="text-sm text-[#737373] font-bold text-clip overflow-hidden">
            {product.desc}
          </p>
          <div className="flex  justify-center">
            <div className="flex  ">
              <Button size={"icon"} className="rounded-full">
                <FaFacebook className="text-blue-500 w-5 h-5 " />
              </Button>
              <Button size={"icon"} className="rounded-full">
                <FaInstagram className="text-blue-500 w-5 h-5 " />
              </Button>
              <Button size={"icon"} className="rounded-full">
                <FaTwitter className="text-blue-500 w-5 h-5  " />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
