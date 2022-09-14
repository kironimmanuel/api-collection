import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsChatLeftDots, BsCurrencyBitcoin } from "react-icons/bs";
import { CgWorkAlt } from "react-icons/cg";
import { ImBooks } from "react-icons/im";
import { IoIosContacts } from "react-icons/io";
import { MdOutlineRealEstateAgent, MdOutlineTour } from "react-icons/md";
import { SiWikidata } from "react-icons/si";

const apis = [
  {
    title: "Products API",
    description: "Array of 20 products",
    icon: <SiWikidata />,
    features: ["GET"],
    url: "https://kb-products-api.herokuapp.com/api/v1/products",
    disabled: false,
  },
  {
    title: "Books API",
    description: "Array of 20 books",
    icon: <ImBooks />,
    features: ["GET"],
    url: "https://kb-books-api.herokuapp.com/api/v1/books",
    disabled: false,
  },
  {
    title: "Contacts API",
    description: "For implementing a contact database",
    icon: <IoIosContacts />,
    features: ["crud functionality", "bcryptjs"],
    url: "https://kb-contacts-api.herokuapp.com/",
    disabled: false,
  },
  {
    title: "E-Commerce API",
    description: "For implementing an e-commerce backend",
    icon: <AiOutlineShoppingCart />,
    features: ["crud functionality", "bcryptjs"],
    url: "https://kb-e-commerce-api.herokuapp.com/",
    disabled: false,
  },
  {
    title: "Reviews API",
    description: "Array of 50 reviews",
    icon: <BsChatLeftDots />,
    features: ["GET"],
    url: "https://kb-reviews-api.herokuapp.com/api/v1/reviews",
    disabled: true,
  },
  {
    title: "Real Estate API",
    description: "Coming soon",
    icon: <MdOutlineRealEstateAgent />,
    features: ["GET"],
    url: "#",
    disabled: true,
  },
  {
    title: "Flights API",
    description: "Coming soon",
    icon: <MdOutlineTour />,
    features: ["GET"],
    url: "#",
    disabled: true,
  },
  {
    title: "Jobs API",
    description: "Coming soon",
    icon: <CgWorkAlt />,
    features: ["crud functionality", "bcryptjs"],
    url: "#",
    disabled: true,
  },
  {
    title: "Crypto API",
    description: "Coming soon",
    icon: <BsCurrencyBitcoin />,
    features: ["crud functionality", "bcryptjs"],
    url: "#",
    disabled: true,
  },
];

export default apis;
