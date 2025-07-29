import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: string;
  color: string;
  isLoading?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  change,
  changeType,
  icon,
  color,
  isLoading = false
}) => {
  const IconComponent = (Icons as any)[icon] as LucideIcon;

  const formatValue = (val: number) => {
    if (label === 'Total Revenue') {
      return `$${val.toLocaleString()}`;
    }
    if (label === 'Growth Rate') {
      return `${val}%`;
    }
    return val.toLocaleString();
  };

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-200 group cursor-pointer"
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-between mb-4">
        <motion.div 
          className={`p-2 rounded-lg bg-gray-50 dark:bg-gray-700`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {IconComponent && <IconComponent className={`w-5 h-5 ${color}`} />}
        </motion.div>
        <div className={`flex items-center text-sm font-medium ${
          changeType === 'increase' ? 'text-green-600' : 'text-red-600'
        }`}>
          {changeType === 'increase' ? (
            <Icons.TrendingUp className="w-4 h-4 mr-1" />
          ) : (
            <Icons.TrendingDown className="w-4 h-4 mr-1" />
          )}
          {Math.abs(change)}%
        </div>
      </div>
      <motion.div 
        className="text-2xl font-bold text-gray-900 dark:text-white mb-1"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {formatValue(value)}
      </motion.div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
    </motion.div>
  );
};

export default MetricCard;