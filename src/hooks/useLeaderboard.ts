import useSWR from 'swr'
import { LeaderboardResponse } from '../dto/leaderboard.dto'

export const useLeaderboard = () => {
  const { data, error, isLoading, mutate } = useSWR<LeaderboardResponse>(
    `${import.meta.env.VITE_API_URL}/game/leaderboard`
  )

  return { data, error, isLoading, refresh: mutate }
}
