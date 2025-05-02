import { useLeaderboardSort } from '../../hooks/useLeaderboardSort';
import LeaderboardSkeleton from '../skeletons/LeaderboardSkeleton';
import LeaderboardTable from '../LeaderboardTable';
import { LeaderboardResponse, Player } from '../../dto/leaderboard.dto'; 
import { useLeaderboard } from '../../hooks/useLeaderboard';
import ErrorMessage from '../common/ErrorMessage';

const LeaderboardSection = () => {
  const { 
    data: leaderboardData, 
    error: leaderboardError, 
    isLoading: leaderboardLoading, 
    refresh 
  } = useLeaderboard();

  const { 
    paginatedPlayers,
    sortConfig, 
    requestSort, 
    getSortIndicator,
    currentPage,
    totalPages,
    nextPage,
    prevPage
  } = useLeaderboardSort(leaderboardData);

  const maxGoldPlayerUsername = (leaderboardData && leaderboardData.players && leaderboardData.players.length > 0)
    ? leaderboardData.players.reduce((maxPlayer: Player, currentPlayer: Player) =>
        currentPlayer.gold > maxPlayer.gold ? currentPlayer : maxPlayer
      ).username
    : null;

  return (
    <section className="h-min bg-white dark:bg-custom-dark-gray p-6 rounded-lg shadow-lg overflow-y-auto order-1">
      <h2 className="text-2xl font-semibold mb-4 text-custom-accent-blue dark:text-custom-accent-blue">🏆 Leaderboard</h2>
      {leaderboardLoading && <LeaderboardSkeleton />}
      {leaderboardError && (
        <ErrorMessage 
          message={leaderboardError.message} 
          onRetry={refresh} 
        />
      )}
      {!leaderboardLoading && !leaderboardError && leaderboardData && (
        <LeaderboardTable 
          players={paginatedPlayers}
          sortConfig={sortConfig}
          requestSort={requestSort}
          getSortIndicator={getSortIndicator}
          currentPage={currentPage}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
          maxGoldPlayerUsername={maxGoldPlayerUsername}
        />
      )}
    </section>
  );
};

export default LeaderboardSection; 