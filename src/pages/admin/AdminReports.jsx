import { motion } from "framer-motion";
import { Download, TrendingUp, Users, DollarSign, Heart } from "lucide-react";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import StatCard from "../../components/StatCard";
import { chartData } from "../../data/mockData";

const AdminReports = () => {
  const kpis = [
    {
      icon: Heart,
      title: "Treatments This Month",
      value: "45",
      change: "+12%",
    },
    { icon: Users, title: "New Clients", value: "8", change: "+5%" },
    { icon: DollarSign, title: "Revenue", value: "$28,450", change: "+18%" },
    { icon: TrendingUp, title: "Growth Rate", value: "15%", change: "+3%" },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Reports & Analytics
          </h1>
          <p className="text-gray-600 mt-1">
            Track your business performance and insights
          </p>
        </div>
        <div className="flex gap-2">
          <button className="btn-secondary flex items-center gap-2">
            <Download color="white" size={18} />
            Export CSV
          </button>
          <button className="btn-primary flex items-center gap-2">
            <Download color="white" size={18} />
            Export PDF
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-primary-main bg-opacity-10 rounded-lg flex items-center justify-center">
                <kpi.icon color="white" size={24} className="text-primary" />
              </div>
              <span className="text-green-600 text-sm font-semibold">
                {kpi.change}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-1">{kpi.title}</p>
            <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Revenue Trend
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData.revenue}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0a0b16" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#0a0b16" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#0a0b16"
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="card p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Client Growth
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData.monthly}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="clients"
                stroke="#0a0b16"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="card p-6"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Treatment Distribution
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData.monthly.slice(-6)}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip />
            <Bar dataKey="treatments" fill="#0d0e1dff" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Top Treatment",
            value: "Facial Treatment",
            subtitle: "45 sessions this month",
          },
          {
            title: "Best Performing Month",
            value: "September",
            subtitle: "42 treatments completed",
          },
          {
            title: "Average Session Duration",
            value: "65 minutes",
            subtitle: "Across all treatments",
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            className="card p-6"
          >
            <p className="text-sm text-gray-600 mb-2">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </p>
            <p className="text-sm text-gray-500">{stat.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminReports;
