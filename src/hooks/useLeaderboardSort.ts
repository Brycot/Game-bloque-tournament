import { useState, useMemo } from 'react';
import { LeaderboardResponse } from '../dto/leaderboard.dto';

export type SortKey = 'rank' | 'level' | 'xp' | 'gold';
export type SortDirection = 'asc' | 'desc';
export interface SortConfig {
  key: SortKey;
  direction: SortDirection;
}

const EXCLUDED_SUBSTRINGS = ["carlosaroca", "gueri360", "rex"];

export const useLeaderboardSort = (leaderboardData: LeaderboardResponse | undefined) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'rank', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const sortedPlayers = useMemo(() => {
    if (!leaderboardData?.players) return []; 
    
    const sortablePlayers = [...leaderboardData.players];
    
    sortablePlayers.sort((a, b) => {
      const key = sortConfig.key;
      if (a[key] < b[key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    return sortablePlayers;
  }, [leaderboardData, sortConfig]);

  const filteredPlayers = useMemo(() => {
    return sortedPlayers.filter(player => 
      !EXCLUDED_SUBSTRINGS.some(substring => player.username.includes(substring))
    );
  }, [sortedPlayers]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredPlayers.length / itemsPerPage);
  }, [filteredPlayers, itemsPerPage]);

  const paginatedPlayers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredPlayers.slice(startIndex, endIndex);
  }, [filteredPlayers, currentPage, itemsPerPage]);

  const requestSort = (key: SortKey) => {
    let direction: SortDirection = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    setCurrentPage(1);
  };

  const getSortIndicator = (key: SortKey): string | null => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? ' ▲' : ' ▼';
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return { 
    paginatedPlayers,
    sortConfig, 
    requestSort, 
    getSortIndicator,
    currentPage,
    totalPages,
    nextPage,
    prevPage
  };
}; 