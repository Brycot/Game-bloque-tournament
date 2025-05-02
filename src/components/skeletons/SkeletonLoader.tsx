interface SkeletonLoaderProps {
  className?: string;
}

const SkeletonLoader = ({ className = '' }: SkeletonLoaderProps) => {
  return (
    <div className={`bg-gray-200 dark:bg-custom-medium-gray rounded animate-pulse ${className}`}></div>
  );
};

export default SkeletonLoader; 