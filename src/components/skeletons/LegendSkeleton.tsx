const LegendSkeleton = () => {
  const skeletonItems = Array.from({ length: 6 });

  return (
    <section className="mx-auto max-w-6xl animate-pulse">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skeletonItems.map((_, i) => (
          <li
            key={i}
            className="
              relative overflow-hidden rounded-2xl
              bg-gray-200 dark:bg-custom-medium-gray
            "
          >
            <div className="flex flex-col gap-3 p-6">
              <div className="h-5 w-1/3 rounded bg-gray-300 dark:bg-gray-600"></div>

              <div className="h-4 w-3/4 rounded bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-4 w-1/4 rounded bg-gray-300 dark:bg-gray-600"></div>

              <ul className="flex flex-row flex-wrap w-full gap-2 mt-1">
                <li className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600"></li>
                <li className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600"></li>
                <li className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600"></li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LegendSkeleton; 