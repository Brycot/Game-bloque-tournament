import useSWR from 'swr'
import { MarketResponse } from '../dto/market.dto'

export const useMarket = () => {
  const { data, error, isLoading, mutate } = useSWR<MarketResponse>(
    `${import.meta.env.VITE_API_URL}/game/market`
  )

  return { data, error, isLoading, refresh: mutate }
}
