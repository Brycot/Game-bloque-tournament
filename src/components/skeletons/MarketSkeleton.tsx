import SkeletonLoader from './SkeletonLoader';

const MarketSkeleton = () => {
  const skeletonItems = Array.from({ length: 3 });

  return (
    <ul className="space-y-4">
      {skeletonItems.map((_, index) => (
        <li key={index} className="p-4 bg-gray-100 dark:bg-custom-dark-gray rounded">
          <SkeletonLoader className="h-5 w-3/5 mb-2" />
          <SkeletonLoader className="h-3 w-1/4 mb-3" />
          <SkeletonLoader className="h-3 w-4/5 mb-1" />
          <SkeletonLoader className="h-3 w-3/5" />
        </li>
      ))}
    </ul>
  );
};

export default MarketSkeleton; 