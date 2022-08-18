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
    description: 'Array of 20 products',
    icon: <SiWikidata />,
    features: ['GET'],
    url: 'https://kb-furniture-api.herokuapp.com/api/v1/products',
  },
  {
    title: 'Reviews API',
    description: 'Array of 50 reviews',
    icon: <BsFillChatRightQuoteFill />,
    features: ['GET'],
    url: 'https://kb-reviews-api.herokuapp.com/api/v1/reviews',
  },
  {
    title: 'Contacts API',
    description: 'For implementing a contact database',
    icon: <GrContactInfo />,
    features: ['crud functionality', 'bcryptjs'],
    url: 'https://kb-contact-api.herokuapp.com/',
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
    disabled: true,
  },
  {
    title: 'Flights API',
    description: 'Coming soon',
    icon: <MdOutlineTour />,
    features: ['GET'],
    url: '#',
    disabled: true,
  },
  {
    title: 'Jobs API',
    description: 'Coming soon',
    icon: <CgWorkAlt />,
    features: ['crud functionality', 'bcryptjs'],
    url: '#',
    disabled: true,
  },
  {
    title: 'Crypto API',
    description: 'Coming soon',
    icon: <BsCurrencyBitcoin />,
    features: ['crud functionality', 'bcryptjs'],
    url: '#',
    disabled: true,
  },
  {
    title: 'Online Banking API',
    description: 'Coming soon',
    icon: <BiTransfer />,
    features: ['crud functionality', 'bcryptjs'],
    url: '#',
    disabled: true,
  },
]
