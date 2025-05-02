import { Player } from '../dto/leaderboard.dto';
import { SortKey, SortConfig } from '../hooks/useLeaderboardSort';
import clsx from 'clsx';

interface LeaderboardTableProps {
  players: Player[];
  sortConfig: SortConfig | null;
  requestSort: (key: SortKey) => void;
  getSortIndicator: (key: SortKey) => string | null;
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  maxGoldPlayerUsername: string | null;
}

const LeaderboardTable= ({ 
  players,
  sortConfig,
  requestSort,
  getSortIndicator,
  currentPage,
  totalPages,
  nextPage,
  prevPage,
  maxGoldPlayerUsername
}: LeaderboardTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left table-fixed">
        <thead className="bg-gray-100 dark:bg-custom-dark-gray">
          <tr>
            <th 
              scope="col" 
              className="p-3 cursor-pointer select-none text-gray-600 dark:text-custom-light-gray hover:bg-gray-200 dark:hover:bg-custom-medium-gray w-1/12" 
              onClick={() => requestSort('rank')}
              aria-sort={
                sortConfig?.key === 'rank' 
                  ? (sortConfig.direction === 'asc' ? 'ascending' : 'descending') 
                  : 'none'
              }
            >
              Rank{sortConfig && getSortIndicator('rank')}
            </th>
            <th scope="col" className="p-3 select-none text-gray-600 dark:text-custom-light-gray w-3/12">Username</th>
            <th 
              scope="col" 
              className="p-3 cursor-pointer select-none text-gray-600 dark:text-custom-light-gray hover:bg-gray-200 dark:hover:bg-custom-medium-gray w-1/12" 
              onClick={() => requestSort('level')}
              aria-sort={
                sortConfig?.key === 'level' 
                  ? (sortConfig.direction === 'asc' ? 'ascending' : 'descending') 
                  : 'none'
              }
            >
              Level{sortConfig && getSortIndicator('level')}
            </th>
            <th 
              scope="col" 
              className="p-3 cursor-pointer select-none text-gray-600 dark:text-custom-light-gray hover:bg-gray-200 dark:hover:bg-custom-medium-gray w-1/12" 
              onClick={() => requestSort('xp')}
              aria-sort={
                sortConfig?.key === 'xp' 
                  ? (sortConfig.direction === 'asc' ? 'ascending' : 'descending') 
                  : 'none'
              }
            >
              XP{sortConfig && getSortIndicator('xp')}
            </th>
            <th 
              scope="col" 
              className="p-3 cursor-pointer select-none text-gray-600 dark:text-custom-light-gray hover:bg-gray-200 dark:hover:bg-custom-medium-gray w-1/12" 
              onClick={() => requestSort('gold')}
              aria-sort={
                sortConfig?.key === 'gold' 
                  ? (sortConfig.direction === 'asc' ? 'ascending' : 'descending') 
                  : 'none'
              }
            >
              Gold{sortConfig && getSortIndicator('gold')}
            </th>
            <th scope="col" className="p-3 select-none text-gray-600 dark:text-custom-light-gray w-3/12">Player Details</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-custom-medium-gray">
          {players.map((player: Player) => {
            const isMaxGold = player.username === maxGoldPlayerUsername;
            const isInfected = player.isInfected;

            return (
              <tr 
                key={player.username} 
                className={clsx(
                  'h-17',
                  'hover:bg-gray-100',
                  'dark:hover:bg-custom-medium-gray',
                  {
                    'bg-yellow-100 dark:bg-yellow-900/30': isMaxGold && !isInfected,
                    'bg-purple-100 dark:bg-purple-900/30': isInfected && !isMaxGold,
                    'bg-gradient-to-r from-purple-100 to-yellow-100 dark:from-purple-900/30 dark:to-yellow-900/30': isMaxGold && isInfected,
                  }
                )}
              >
                <td className="p-3 dark:text-custom-primary-white">{player.rank}</td>
                <td className="p-3 font-medium dark:text-custom-primary-white overflow-hidden text-ellipsis whitespace-nowrap">{player.username}</td> 
                <td className="p-3 dark:text-custom-primary-white">{player.level}</td>
                <td className="p-3 dark:text-custom-primary-white">{player.xp}</td>
                <td className="p-3 text-yellow-600 dark:text-yellow-400">{player.gold}</td> 
                <td className="p-3 dark:text-custom-primary-white overflow-hidden">
                  <div className="text-ellipsis whitespace-nowrap overflow-hidden">{player.fishEmojis}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 text-ellipsis whitespace-nowrap overflow-hidden">{player.emojiDescription}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-4 px-3 select-none">
          <button 
            onClick={prevPage} 
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 dark:bg-custom-medium-gray rounded disabled:opacity-50 disabled:cursor-not-allowed text-gray-800 dark:text-custom-light-gray hover:bg-gray-400 dark:hover:bg-gray-600"
          >
            Previous
          </button>
          <span className="text-sm text-gray-700 dark:text-custom-light-gray">
            Page {currentPage} of {totalPages}
          </span>
          <button 
            onClick={nextPage} 
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 dark:bg-custom-medium-gray rounded disabled:opacity-50 disabled:cursor-not-allowed text-gray-800 dark:text-custom-light-gray hover:bg-gray-400 dark:hover:bg-gray-600"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default LeaderboardTable; 