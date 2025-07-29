export interface MetricData {
  label: string;
  value: number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: string;
  color: string;
}

export interface TimeSeriesData {
  date: string;
  revenue: number;
  users: number;
  conversions: number;
}

export interface CategoryData {
  name: string;
  value: number;
  color: string;
}

export interface TableRow {
  id: string;
  campaign: string;
  impressions: number;
  clicks: number;
  ctr: number;
  cost: number;
  conversions: number;
  roas: number;
  status: 'active' | 'paused' | 'completed';
}