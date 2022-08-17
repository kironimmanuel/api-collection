import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiTransfer } from 'react-icons/bi'
import { BsCurrencyBitcoin, BsFillChatRightQuoteFill } from 'react-icons/bs'
import { CgWorkAlt } from 'react-icons/cg'
import { GrContactInfo } from 'react-icons/gr'
import { MdOutlineRealEstateAgent, MdOutlineTour } from 'react-icons/md'
import { SiWikidata } from 'react-icons/si'

export default [
  {
    title: 'Products API',
    description: 'RESTful API with an Array of 20 products',
    icon: <SiWikidata />,
    features: ['basic json structure'],
    url: 'https://kb-furniture-api.herokuapp.com/api/v1/products',
  },
  {
    title: 'Contacts API',
    description: 'For implementing a contact database',
    icon: <GrContactInfo />,
    features: ['cors', 'helmet', 'bcryptjs'],
    url: 'https://kb-contact-api.herokuapp.com/',
  },
  {
    title: 'E-Commerce API',
    description: 'For implementing an e-commerce backend',
    icon: <AiOutlineShoppingCart />,
    features: ['cors', 'helmet', 'bcryptjs'],
    url: 'https://kb-e-commerce-api.herokuapp.com/',
  },
  // {
  //   title: 'Jobs API',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptas aliquid suscipit doloribus, deserunt molestias dolor eaque error maiores fugit!',
  //   icon: <CgWorkAlt />,
  //   features: ['cors', 'helmet', 'bcryptjs'],
  //   url: '#',
  // },
  // {
  //   title: 'Crypto API',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptas aliquid suscipit doloribus, deserunt molestias dolor eaque error maiores fugit!',
  //   icon: <BsCurrencyBitcoin />,
  //   features: ['cors', 'helmet', 'bcryptjs'],
  //   url: '#',
  // },
  // {
  //   title: 'Online Banking API',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptas aliquid suscipit doloribus, deserunt molestias dolor eaque error maiores fugit!',
  //   icon: <BiTransfer />,
  //   features: ['cors', 'helmet', 'bcryptjs'],
  //   url: '#',
  // },
  // {
  //   title: 'Flights API',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptas aliquid suscipit doloribus, deserunt molestias dolor eaque error maiores fugit!',
  //   icon: <MdOutlineTour />,
  //   features: ['cors', 'helmet', 'bcryptjs'],
  //   url: '#',
  // },
  // {
  //   title: 'Real Estate API',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptas aliquid suscipit doloribus, deserunt molestias dolor eaque error maiores fugit!',
  //   icon: <MdOutlineRealEstateAgent />,
  //   features: ['cors', 'helmet', 'bcryptjs'],
  //   url: '#',
  // },
  // {
  //   title: 'Reviews API',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptas aliquid suscipit doloribus, deserunt molestias dolor eaque error maiores fugit!',
  //   icon: <BsFillChatRightQuoteFill />,
  //   features: ['cors', 'helmet', 'bcryptjs'],
  //   url: '#',
  // },
]
