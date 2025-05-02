export interface Player {
  rank: number;
  username: string;
  level: number;
  xp: number;
  gold: number;
  fishEmojis: string;
  emojiDescription: string;
  isInfected: boolean;
}

export interface Tier {
  range: string;
  representation: string;
  example: string
}

export interface Legend {
  tiers: Tier[];
}

export interface LeaderboardResponse {
  players: Player[];
  legend: Legend
} 