import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiTransfer } from 'react-icons/bi'
import { BsChatLeftDots, BsCurrencyBitcoin } from 'react-icons/bs'
import { CgWorkAlt } from 'react-icons/cg'
import { IoIosContacts } from 'react-icons/io'
import { MdOutlineRealEstateAgent, MdOutlineTour } from 'react-icons/md'
import { SiWikidata } from 'react-icons/si'

const apis = [
  {
    title: 'Products API',
    description: 'Array of 20 products',
    icon: <SiWikidata />,
    features: ['GET'],
    url: 'https://kb-products-api.herokuapp.com/api/v1/products',
  },
  {
    title: 'Reviews API',
    description: 'Array of 50 reviews',
    icon: <BsChatLeftDots />,
    features: ['GET'],
    url: 'https://kb-reviews-api.herokuapp.com/api/v1/reviews',
  },
  {
    title: 'Contacts API',
    description: 'For implementing a contact database',
    icon: <IoIosContacts />,
    features: ['crud functionality', 'bcryptjs'],
    url: 'https://kb-contacts-api.herokuapp.com/',
  },
  {
    title: 'E-Commerce API',
    description: 'For implementing an e-commerce backend',
    icon: <AiOutlineShoppingCart />,
    features: ['crud functionality', 'bcryptjs'],
    url: 'https://kb-e-commerce-api.herokuapp.com/',
  },
  {
    title: 'Real Estate API',
    description: 'Coming soon',
    icon: <MdOutlineRealEstateAgent />,
    features: ['GET'],
    url: '#',
    disabled: 'disabled',
  },
  {
    title: 'Flights API',
    description: 'Coming soon',
    icon: <MdOutlineTour />,
    features: ['GET'],
    url: '#',
    disabled: 'disabled',
  },
  {
    title: 'Jobs API',
    description: 'Coming soon',
    icon: <CgWorkAlt />,
    features: ['crud functionality', 'bcryptjs'],
    url: '#',
    disabled: 'disabled',
  },
  {
    title: 'Crypto API',
    description: 'Coming soon',
    icon: <BsCurrencyBitcoin />,
    features: ['crud functionality', 'bcryptjs'],
    url: '#',
    disabled: 'disabled',
  },
  {
    title: 'Online Banking API',
    description: 'Coming soon',
    icon: <BiTransfer />,
    features: ['crud functionality', 'bcryptjs'],
    url: '#',
    disabled: 'disabled',
  },
]

export default apis
