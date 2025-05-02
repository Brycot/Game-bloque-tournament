import LegendSkeleton from '../skeletons/LegendSkeleton';
import LegendDisplay from '../LegendDisplay';
import { useLeaderboard } from '../../hooks/useLeaderboard';
import ErrorMessage from '../common/ErrorMessage';

const LegendSection = () => {
  const { 
    data: leaderboardData, 
    error: leaderboardError, 
    isLoading: leaderboardLoading, 
    refresh 
  } = useLeaderboard();

  return (
    <section className="h-min bg-white dark:bg-custom-dark-gray p-6 rounded-lg shadow-lg order-3">
      <h2 className="text-2xl font-semibold mb-4 text-custom-accent-blue dark:text-custom-accent-blue">✨ Legend</h2>
      {leaderboardLoading && <LegendSkeleton />}
      {leaderboardError && (
        <ErrorMessage 
          message={leaderboardError.message} 
          onRetry={refresh} 
        />
      )} 
      {!leaderboardLoading && !leaderboardError && leaderboardData && leaderboardData.legend && (
        <LegendDisplay legend={leaderboardData.legend} />
      )}
      {!leaderboardLoading && !leaderboardError && leaderboardData && !leaderboardData.legend && (
        <p className="text-center text-gray-500 py-4 dark:text-gray-400">Legend data not available.</p>
      )}
    </section>
  );
};

export default LegendSection; 