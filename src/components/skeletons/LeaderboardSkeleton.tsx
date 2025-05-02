import SkeletonLoader from './SkeletonLoader';

const LeaderboardSkeleton = () => {
  const skeletonRows = Array.from({ length: 5 });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto text-left">
        <thead className="bg-gray-100 dark:bg-custom-dark-gray">
          <tr>
            <th className="p-3"><SkeletonLoader className="h-4 w-10" /></th>
            <th className="p-3"><SkeletonLoader className="h-4 w-24" /></th>
            <th className="p-3"><SkeletonLoader className="h-4 w-12" /></th>
            <th className="p-3"><SkeletonLoader className="h-4 w-10" /></th>
            <th className="p-3"><SkeletonLoader className="h-4 w-10" /></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-custom-medium-gray">
          {skeletonRows.map((_, index) => (
            <tr key={index}>
              <td className="p-3"><SkeletonLoader className="h-4 w-10" /></td>
              <td className="p-3"><SkeletonLoader className="h-4 w-32" /></td>
              <td className="p-3"><SkeletonLoader className="h-4 w-12" /></td>
              <td className="p-3"><SkeletonLoader className="h-4 w-10" /></td>
              <td className="p-3"><SkeletonLoader className="h-4 w-10" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardSkeleton; 