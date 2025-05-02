import { MarketItem } from '../dto/market.dto';

interface MarketListProps {
  items: MarketItem[];
}

const MarketList = ({ items }: MarketListProps) => {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li 
          key={item.id} 
          className="p-4 bg-gray-100 dark:bg-custom-medium-gray rounded-2xl hover:bg-gray-200 dark:hover:bg-custom-medium-gray/40"
        >
          <strong className="block text-lg text-custom-accent-blue">{item.name}</strong> 
          <span className="text-sm text-gray-500 dark:text-custom-light-gray">({item.type})</span>
          <span className="block mt-1 text-yellow-600 dark:text-yellow-400">Cost: {item.cost} Gold</span>
          <p className="mt-2 text-gray-600 dark:text-custom-light-gray">{item.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default MarketList; 