import { MetricData, TimeSeriesData, CategoryData, TableRow } from '../types/analytics';

export const metricsData: MetricData[] = [
  {
    label: 'Total Revenue',
    value: 125840,
    change: 12.5,
    changeType: 'increase',
    icon: 'DollarSign',
    color: 'text-green-600'
  },
  {
    label: 'Active Users',
    value: 15420,
    change: 8.3,
    changeType: 'increase',
    icon: 'Users',
    color: 'text-blue-600'
  },
  {
    label: 'Conversions',
    value: 2340,
    change: -2.1,
    changeType: 'decrease',
    icon: 'Target',
    color: 'text-purple-600'
  },
  {
    label: 'Growth Rate',
    value: 18.7,
    change: 4.2,
    changeType: 'increase',
    icon: 'TrendingUp',
    color: 'text-orange-600'
  }
];

export const timeSeriesData: TimeSeriesData[] = [
  { date: '2024-01-01', revenue: 98000, users: 12000, conversions: 1800 },
  { date: '2024-01-02', revenue: 102000, users: 12500, conversions: 1950 },
  { date: '2024-01-03', revenue: 105000, users: 13000, conversions: 2100 },
  { date: '2024-01-04', revenue: 108000, users: 13200, conversions: 2200 },
  { date: '2024-01-05', revenue: 112000, users: 13800, conversions: 2300 },
  { date: '2024-01-06', revenue: 115000, users: 14200, conversions: 2250 },
  { date: '2024-01-07', revenue: 118000, users: 14800, conversions: 2400 },
  { date: '2024-01-08', revenue: 122000, users: 15100, conversions: 2350 },
  { date: '2024-01-09', revenue: 125000, users: 15400, conversions: 2340 },
  { date: '2024-01-10', revenue: 125840, users: 15420, conversions: 2340 }
];

export const categoryData: CategoryData[] = [
  { name: 'Social Media', value: 35, color: '#3B82F6' },
  { name: 'Email Marketing', value: 25, color: '#8B5CF6' },
  { name: 'Search Ads', value: 20, color: '#10B981' },
  { name: 'Display Ads', value: 12, color: '#F59E0B' },
  { name: 'Organic', value: 8, color: '#EF4444' }
];

export const tableData: TableRow[] = [
  {
    id: '1',
    campaign: 'Summer Sale 2024',
    impressions: 125000,
    clicks: 3200,
    ctr: 2.56,
    cost: 4800,
    conversions: 180,
    roas: 4.2,
    status: 'active'
  },
  {
    id: '2',
    campaign: 'Brand Awareness Q1',
    impressions: 98000,
    clicks: 2100,
    ctr: 2.14,
    cost: 3200,
    conversions: 95,
    roas: 2.8,
    status: 'active'
  },
  {
    id: '3',
    campaign: 'Holiday Special',
    impressions: 156000,
    clicks: 4200,
    ctr: 2.69,
    cost: 6800,
    conversions: 320,
    roas: 5.1,
    status: 'completed'
  },
  {
    id: '4',
    campaign: 'Product Launch',
    impressions: 87000,
    clicks: 1800,
    ctr: 2.07,
    cost: 2900,
    conversions: 78,
    roas: 2.3,
    status: 'paused'
  },
  {
    id: '5',
    campaign: 'Retargeting Campaign',
    impressions: 45000,
    clicks: 1200,
    ctr: 2.67,
    cost: 1800,
    conversions: 65,
    roas: 3.8,
    status: 'active'
  }
];