'use client'

import { clsx } from 'clsx'
import MusicWaves from '@/components/MusicWaves'
import useNowPlaying from '@/hooks/useNowPlaying'
import Image from '@/components/Image'
import Link from '@/components/Link'
import { Spotify } from '@/components/social-icons/icons'

const SpotifyNowPlaying = ({
  className,
  showCover = false,
}: {
  className?: string
  showCover?: boolean
}) => {
  const { songUrl, title, artist, albumImageUrl } = useNowPlaying()

  return (
    <div className={clsx(['flex items-center', className])}>
      {showCover && albumImageUrl ? (
        <Image
          src={albumImageUrl}
          alt={title!}
          width={40}
          height={40}
          className="h-7 w-7 shrink-0 animate-spin rounded-full border border-gray-300 [animation-duration:6s] dark:border-gray-700"
        />
      ) : (
        <Spotify className="h-7 w-7 shrink-0 fill-current text-spotify" />
      )}
      <div className="ml-2 inline-flex truncate">
        {songUrl ? (
          <>
            <MusicWaves className="mr-2" />
            <Link
              href={songUrl}
              className="font-medium text-gray-800"
              title={`${title} - ${artist || 'Spotify'}`}
            >
              <span data-umami-event="spotify-now-playing-view-song">{title}</span>
            </Link>
          </>
        ) : (
          <p className="font-medium text-gray-800">Not Playing</p>
        )}
        <span className="mx-2 text-gray-900">{' – '}</span>
        <p className="spotify-artist max-w-max truncate text-gray-900">{artist || 'Spotify'}</p>
      </div>
    </div>
  )
}

export default SpotifyNowPlaying
