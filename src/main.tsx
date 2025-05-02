import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SWRConfig } from 'swr'
import './index.css'
import App from './App.tsx'

const fetcher = (url: string) => fetch(url).then(res => res.json())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SWRConfig value={{
      fetcher,
      refreshInterval: 50000,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    }}>
    <App />
    </SWRConfig>
  </StrictMode>,
)
