import React from 'react';
import { Moon, Sun, BarChart3, Settings } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import NotificationCenter from '../ui/NotificationCenter';
import ExportButton from '../ui/ExportButton';
import DateRangePicker from '../ui/DateRangePicker';
import { subDays } from 'date-fns';

interface HeaderProps {
  onDateRangeChange?: (range: any) => void;
  onExport?: () => void;
  dashboardRef?: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({ onDateRangeChange, onExport, dashboardRef }) => {
  const { isDark, toggleTheme } = useTheme();
  
  const defaultRange = {
    start: subDays(new Date(), 30),
    end: new Date(),
    label: 'Last 30 days'
  };

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              ADmyBRAND Insights
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Analytics Dashboard
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <DateRangePicker 
            currentRange={defaultRange}
            onRangeChange={onDateRangeChange || (() => {})}
          />
          
          <ExportButton 
            data={[]} 
            filename="admybrand-analytics"
            dashboardRef={dashboardRef}
          />
          
          <NotificationCenter />
          
          <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
            <Settings className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;