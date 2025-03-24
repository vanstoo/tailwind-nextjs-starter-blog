import useSWR from 'swr'
import { fetcher } from '@/utils/index'
import type { SpotifyNowPlayingData } from 'types/server'

const useNowPlaying = () => {
  const { data } = useSWR<SpotifyNowPlayingData>('/api/spotify', fetcher)
  return data || { isPlaying: false }
}
export default useNowPlaying
