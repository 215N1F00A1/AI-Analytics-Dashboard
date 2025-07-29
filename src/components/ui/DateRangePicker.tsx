import React, { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import { format, subDays, startOfMonth, endOfMonth, subMonths } from 'date-fns';

interface DateRange {
  start: Date;
  end: Date;
  label: string;
}

interface DateRangePickerProps {
  onRangeChange: (range: DateRange) => void;
  currentRange: DateRange;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onRangeChange, currentRange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const presetRanges: DateRange[] = [
    {
      start: subDays(new Date(), 7),
      end: new Date(),
      label: 'Last 7 days'
    },
    {
      start: subDays(new Date(), 30),
      end: new Date(),
      label: 'Last 30 days'
    },
    {
      start: subDays(new Date(), 90),
      end: new Date(),
      label: 'Last 90 days'
    },
    {
      start: startOfMonth(new Date()),
      end: endOfMonth(new Date()),
      label: 'This month'
    },
    {
      start: startOfMonth(subMonths(new Date(), 1)),
      end: endOfMonth(subMonths(new Date(), 1)),
      label: 'Last month'
    }
  ];

  const handleRangeSelect = (range: DateRange) => {
    onRangeChange(range);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {currentRange.label}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-50">
          <div className="p-2">
            {presetRanges.map((range, index) => (
              <button
                key={index}
                onClick={() => handleRangeSelect(range)}
                className={`w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                  currentRange.label === range.label 
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;