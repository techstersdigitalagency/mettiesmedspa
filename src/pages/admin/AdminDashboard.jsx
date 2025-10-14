import { motion } from "framer-motion";
import { Users, Heart, DollarSign, Calendar, TrendingUp } from "lucide-react";
import {
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
import { statsData, mockAppointments, chartData } from "../../data/mockData";

const AdminDashboard = () => {
  const upcomingAppointments = mockAppointments
    .filter((apt) => apt.status === "upcoming")
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, Admin 👋
        </h1>
        <p className="text-gray-600 mt-1">
          Here's what's happening with your medspa today
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          title="Total Clients"
          value={statsData.admin.totalClients}
          color="primary"
        />
        <StatCard
          icon={Heart}
          title="Total Treatments"
          value={statsData.admin.totalTreatments}
          color="primary"
        />
        <StatCard
          icon={DollarSign}
          title="Monthly Revenue"
          value={statsData.admin.monthlyRevenue}
          color="primary"
        />
        <StatCard
          icon={Calendar}
          title="Active Appointments"
          value={statsData.admin.activeAppointments}
          color="primary"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Monthly Performance
            </h2>
            <TrendingUp size={20} className="text-primary" />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData.monthly}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="treatments"
                stroke="#0d0e1dff"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="clients"
                stroke="#0d0e1d79"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-report-dim rounded-full"></div>
              <span className="text-sm text-gray-600">Treatments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-report-light rounded-full"></div>
              <span className="text-sm text-gray-600">Clients</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Revenue Overview
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData.revenue.slice(-6)}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip />
              <Bar dataKey="revenue" fill="#0d0e1dff" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="card p-6"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Upcoming Appointments
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Client
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Treatment
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Date & Time
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Aesthetician
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {upcomingAppointments.map((appointment) => (
                <tr
                  key={appointment.id}
                  className="border-b border-gray-100 hover:bg-accent transition-colors"
                >
                  <td className="py-4 px-4 text-gray-900">
                    {appointment.clientName}
                  </td>
                  <td className="py-4 px-4 text-gray-900">
                    {appointment.treatmentType}
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    {appointment.date} at {appointment.time}
                  </td>
                  <td className="py-4 px-4 text-gray-900">
                    {appointment.aesthetician}
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      Confirmed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
