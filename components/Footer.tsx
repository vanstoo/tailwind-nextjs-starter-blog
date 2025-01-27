import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import BrandIcon from '@/components/BrandIcon'

export default function Footer() {
  return (
    <footer>
      <div className="mb-8 mt-16 items-center justify-between space-y-4 md:mb-10 md:flex md:space-y-0">
        <div className="flex items-center space-x-2 sm:justify-end ">
          <span className="mr-1 text-gray-500 dark:text-gray-400">Build with</span>
          <BrandIcon kind="vercel" href="https://vercel.com/" size={6} />
          <BrandIcon kind="nextJS" href="https://nextjs.org/" size={6} />
          <BrandIcon kind="tailwindCSS" href="https://tailwindcss.com/" size={6} />
          <BrandIcon kind="umami" href="https://umami.is/" size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400 sm:justify-end ">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}
