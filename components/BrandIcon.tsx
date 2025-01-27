import {
  Github,
  Javascript,
  Markdown,
  NextJS,
  Node,
  React,
  Spotify,
  TailwindCSS,
  Typescript,
  Umami,
  Vercel,
} from './social-icons/icons'

const components = {
  github: Github,
  javascript: Javascript,
  markdown: Markdown,
  nextJS: NextJS,
  node: Node,
  spotify: Spotify,
  tailwindCSS: TailwindCSS,
  typescript: Typescript,
  umami: Umami,
  vercel: Vercel,
}

type BrandIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
}

const BrandIcon = ({ kind, href, size = 8 }: BrandIconProps) => {
  if (!href) return null

  const BrandSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <BrandSvg
        className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default BrandIcon
