interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => {
  return (
    <div 
      className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md dark:bg-red-900/30 dark:border-red-700 dark:text-red-300" 
      role="alert"
    >
      <p className="font-semibold">Error</p>
      <p className="mb-2">{message || 'An unexpected error occurred.'}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 dark:bg-red-700 dark:hover:bg-red-800"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorMessage; 