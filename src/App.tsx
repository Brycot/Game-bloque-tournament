import Layout from './components/layout/Layout';
import LeaderboardSection from './components/sections/LeaderboardSection';
import MarketSection from './components/sections/MarketSection';
import LegendSection from './components/sections/LegendSection';
import './App.css'

function App() {

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 lg:order-1 flex flex-col gap-8">
            <LeaderboardSection />
            <LegendSection />
          </div>
          <MarketSection />
        </div>
      </div>
    </Layout>
  )
}

export default App
