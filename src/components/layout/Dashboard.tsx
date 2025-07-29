import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import MetricCard from '../ui/MetricCard';
import LoadingSkeleton from '../ui/LoadingSkeleton';
import LineChart from '../charts/LineChart';
import BarChart from '../charts/BarChart';
import DonutChart from '../charts/DonutChart';
import DataTable from '../table/DataTable';
import { metricsData, timeSeriesData, categoryData, tableData } from '../../data/mockData';

const Dashboard: React.FC = () => {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [dateRange, setDateRange] = useState({
    start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    end: new Date(),
    label: 'Last 30 days'
  });
  const [currentData, setCurrentData] = useState({
    metrics: metricsData,
    timeSeries: timeSeriesData,
    categories: categoryData,
    table: tableData
  });

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Simulate real-time updates
  useEffect(() => {
    if (isLoading) return;

    const interval = setInterval(() => {
      setCurrentData(prev => ({
        ...prev,
        metrics: prev.metrics.map(metric => ({
          ...metric,
          value: metric.value + Math.floor(Math.random() * 100) - 50,
          change: +(Math.random() * 20 - 10).toFixed(1),
          changeType: Math.random() > 0.5 ? 'increase' : 'decrease'
        }))
      }));
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, [isLoading]);

  const handleDateRangeChange = (range: any) => {
    setDateRange(range);
    // In a real app, you would fetch new data based on the date range
    console.log('Date range changed:', range);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header 
        onDateRangeChange={handleDateRangeChange}
        dashboardRef={dashboardRef}
      />
      
      <main className="p-6" ref={dashboardRef}>
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Welcome Section */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Welcome back! 👋
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Here's what's happening with your marketing campaigns for {dateRange.label.toLowerCase()}.
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Live data • Updated 2 min ago
              </div>
            </div>
          </motion.div>

          {/* Metrics Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {isLoading ? (
              <LoadingSkeleton type="card" count={4} />
            ) : (
              currentData.metrics.map((metric, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <MetricCard {...metric} />
                </motion.div>
              ))
            )}
          </motion.div>

          {/* Charts Section */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {isLoading ? (
              <LoadingSkeleton type="chart" count={2} />
            ) : (
              <>
                <motion.div variants={itemVariants}>
                  <LineChart
                    data={currentData.timeSeries}
                    title="Revenue & Users Trend"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <BarChart
                    data={currentData.timeSeries}
                    title="Daily Conversions"
                  />
                </motion.div>
              </>
            )}
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {isLoading ? (
              <>
                <LoadingSkeleton type="chart" className="lg:col-span-1" />
                <LoadingSkeleton type="table" className="lg:col-span-2" />
              </>
            ) : (
              <>
                <motion.div className="lg:col-span-1" variants={itemVariants}>
                  <DonutChart
                    data={currentData.categories}
                    title="Traffic Sources"
                  />
                </motion.div>
                <motion.div className="lg:col-span-2" variants={itemVariants}>
                  <DataTable
                    data={currentData.table}
                    title="Campaign Performance"
                  />
                </motion.div>
              </>
            )}
          </motion.div>

          {/* Performance Insights */}
          <motion.div
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                🎯 Performance Insights
              </h3>
              <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                AI Generated
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div className="text-2xl mb-2">📈</div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">Top Performer</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Holiday Special campaign shows 5.1x ROAS - consider scaling budget
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div className="text-2xl mb-2">⚠️</div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">Needs Attention</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Product Launch CTR is below 2.1% - optimize ad creative
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div className="text-2xl mb-2">💡</div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">Opportunity</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Social Media traffic up 35% - increase content investment
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;