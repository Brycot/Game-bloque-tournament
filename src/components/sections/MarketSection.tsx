import { useMarket } from '../../hooks/useMarket';
import MarketSkeleton from '../skeletons/MarketSkeleton';
import MarketList from '../MarketList';
import ErrorMessage from '../common/ErrorMessage';

const MarketSection = () => {
  const { 
    data: marketData, 
    error: marketError, 
    isLoading: marketLoading, 
    refresh 
  } = useMarket();

  return (
    <section className="h-min bg-white dark:bg-custom-dark-gray p-6 rounded-lg shadow-lg lg:col-span-2 order-2 lg:order-2">
      <h2 className="text-2xl font-semibold mb-4 text-custom-accent-blue dark:text-custom-accent-blue">🛒 Market</h2>
      {marketLoading && <MarketSkeleton />}
      {marketError && (
        <ErrorMessage 
          message={marketError.message} 
          onRetry={refresh} 
        />
      )}
      {!marketLoading && !marketError && marketData && (
        <MarketList items={marketData.items} />
      )}
    </section>
  );
};

export default MarketSection; 