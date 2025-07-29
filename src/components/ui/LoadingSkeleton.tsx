import React from 'react';

interface LoadingSkeletonProps {
  type: 'card' | 'chart' | 'table' | 'text';
  count?: number;
  className?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
  type, 
  count = 1, 
  className = '' 
}) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 animate-pulse ${className}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              <div className="w-16 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="w-20 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        );

      case 'chart':
        return (
          <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 animate-pulse ${className}`}>
            <div className="w-40 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
            <div className="h-80 bg-gray-100 dark:bg-gray-700 rounded"></div>
          </div>
        );

      case 'table':
        return (
          <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 animate-pulse ${className}`}>
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <div className="w-40 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
              <div className="flex gap-4">
                <div className="flex-1 h-10 bg-gray-100 dark:bg-gray-700 rounded"></div>
                <div className="w-32 h-10 bg-gray-100 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-12 bg-gray-100 dark:bg-gray-700 rounded"></div>
              ))}
            </div>
          </div>
        );

      case 'text':
        return (
          <div className={`animate-pulse ${className}`}>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {[...Array(count)].map((_, index) => (
        <div key={index}>
          {renderSkeleton()}
        </div>
      ))}
    </>
  );
};

export default LoadingSkeleton;