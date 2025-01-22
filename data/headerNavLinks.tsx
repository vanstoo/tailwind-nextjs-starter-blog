import { AiOutlineLineChart, AiOutlineEdit, AiOutlineHome } from 'react-icons/ai'

const headerNavLinks = [
  {
    href: '/',
    title: 'Home',
    icon: <AiOutlineHome className="mr-3  h-6 w-6" />,
  },
  {
    href: '/blog',
    title: 'Blog',
    icon: <AiOutlineEdit className="mr-3  h-6 w-6" />,
  },
  {
    href: 'https://umami.wangsitu666.top/share/zzpqgHmnNXoVwoJz/wangsitu666.top',
    title: 'Analysis',
    icon: <AiOutlineLineChart className="mr-3  h-6 w-6" />,
  },
  // { href: '/about', title: 'About' },
]

export default headerNavLinks
