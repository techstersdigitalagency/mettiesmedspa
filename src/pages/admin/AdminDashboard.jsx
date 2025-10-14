import { motion } from 'framer-motion';
import { Users, Heart, DollarSign, Calendar, TrendingUp, Activity, Droplet, Scale } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import StatCard from '../../components/StatCard';
import { statsData, mockAppointments, chartData } from '../../data/mockData';

const AdminDashboard = () => {
  const upcomingAppointments = mockAppointments.filter(apt => apt.status === 'upcoming').slice(0, 5);

  const healthMetrics = [
    { name: 'Heart Rate', value: '230/ml', percentage: 68, color: '#f10e6a' },
    { name: 'Dermatology', value: '0.07%', percentage: 81, color: '#ff6b9d' },
    { name: 'Weight', value: '79kg', percentage: 23, color: '#ffb4d4' },
    { name: 'Hits', value: '132', percentage: 68, color: '#ffd4e8' }
  ];

  const appointments = [
    {
      date: '04-Aug-23',
      time: '14:00 - 15:00',
      type: 'Diagnostic Tests',
      attendees: ['avatar1', 'avatar2', 'avatar3']
    },
    {
      date: '06-Aug-23',
      time: '16:00 - 17:00',
      type: 'Consultations',
      attendees: ['avatar1', 'avatar2', 'avatar3']
    },
    {
      date: '07-Aug-23',
      time: '10:00 - 17:00',
      type: 'Dental Treatment',
      attendees: ['avatar1', 'avatar2', 'avatar3']
    }
  ];

  const doctors = [
    { name: 'Bradley Lawlor', specialty: 'Endoscopy', status: 60, phone: '(617) 623-2338', date: 'August 14, 2023' },
    { name: 'James Hall', specialty: 'MRI Scan', status: 54, phone: '(785) 712-6532', date: 'August 14, 2023' }
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">Hello, Makareya 👋</h1>
        <p className="text-gray-600 mt-1">Detailed information about your health</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="card p-8 bg-gradient-to-r from-[#f10e6a] to-[#ff6b9d] text-white relative overflow-hidden rounded-3xl">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">Welcome to Patient Service</h2>
              <h2 className="text-2xl font-bold mb-6">Management Dashboard 😊</h2>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors font-medium">
                  See Appointment
                </button>
                <button className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors font-medium border border-white/30">
                  Regular Checkup
                </button>
              </div>
            </div>
            <div className="absolute right-0 top-0 w-64 h-full opacity-20">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <rect x="60" y="40" width="80" height="100" fill="white" rx="4" />
                <rect x="70" y="60" width="60" height="60" fill="currentColor" rx="2" />
                <line x1="100" y1="30" x2="100" y2="40" stroke="white" strokeWidth="2" />
                <circle cx="90" cy="140" r="3" fill="white" />
                <circle cx="110" cy="140" r="3" fill="white" />
              </svg>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card p-6 bg-gradient-to-br from-[#f10e6a] to-[#ff6b9d] text-white rounded-3xl relative overflow-hidden"
        >
          <h3 className="text-xl font-bold mb-4">Overall Health Condition</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="text-sm">Heart Rate</span>
              <span className="ml-auto text-sm">—</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="text-sm">Blood Count</span>
              <span className="ml-auto text-sm">—</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="text-sm">Glucose Level</span>
              <span className="ml-auto text-sm">—</span>
            </div>
          </div>
          <div className="absolute -right-8 -bottom-8 w-40 h-40 opacity-20">
            <div className="w-full h-full rounded-full border-8 border-white"></div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {healthMetrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="card p-6 rounded-2xl"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">{metric.name}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
              <div className="relative w-16 h-16">
                <svg className="transform -rotate-90 w-16 h-16">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#f0f0f0"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke={metric.color}
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${metric.percentage * 1.76} 176`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold" style={{ color: metric.color }}>
                    {metric.percentage}%
                  </span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500">Weekly Report</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="lg:col-span-2 card p-6 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Doctor's List</h2>
            <button className="text-primary text-sm hover:underline">See All →</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Doctor Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Diagnosis</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Phone</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-accent transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f10e6a] to-[#ff6b9d] flex items-center justify-center text-white font-medium">
                          {doctor.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{doctor.name}</p>
                          <p className="text-xs text-gray-500">Male, 36 Years</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-900">{doctor.specialty}</td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium" style={{
                        backgroundColor: `rgba(241, 14, 106, ${doctor.status / 100})`,
                        color: doctor.status > 50 ? '#fff' : '#f10e6a'
                      }}>
                        {doctor.status}%
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-600 text-sm">{doctor.date}</td>
                    <td className="py-4 px-4 text-gray-900 text-sm">{doctor.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="card p-6 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Appointment Timeline</h3>
            <button className="text-primary text-sm hover:underline">See All →</button>
          </div>
          <div className="space-y-6">
            {appointments.map((appointment, index) => (
              <div key={index} className="relative pl-6">
                <div
                  className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-white shadow"
                  style={{ backgroundColor: index === 0 ? '#10b981' : index === 1 ? '#f59e0b' : '#f10e6a' }}
                ></div>
                {index < appointments.length - 1 && (
                  <div className="absolute left-2 top-5 w-0.5 h-full bg-gray-200"></div>
                )}
                <div className="pb-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900">{appointment.date}</p>
                    <p className="text-xs text-gray-500">{appointment.type}</p>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">{appointment.time}</p>
                  <div className="flex -space-x-2">
                    {appointment.attendees.map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium text-white"
                        style={{ backgroundColor: ['#f10e6a', '#ff6b9d', '#ffb4d4'][i] }}
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="card p-6 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Messages</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 hover:bg-accent rounded-lg transition-colors cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f10e6a] to-[#ff6b9d] flex items-center justify-center text-white font-medium">
                CG
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900">Chris Glasser</p>
                  <span className="text-xs text-gray-500">07:00</span>
                </div>
                <p className="text-sm text-gray-600 truncate">Hi @Angel, I hope you are doing well...</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 hover:bg-accent rounded-lg transition-colors cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff6b9d] to-[#ffb4d4] flex items-center justify-center text-white font-medium">
                SN
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900">Stephanie Nicol</p>
                  <span className="text-xs text-gray-500">07:00</span>
                </div>
                <p className="text-sm text-gray-600 truncate">kurt_bates@outlook.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="card p-6 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Schedule</h3>
            <div className="flex gap-2">
              <button className="text-gray-400 hover:text-gray-600">←</button>
              <span className="text-sm text-gray-600">August 2023</span>
              <button className="text-gray-400 hover:text-gray-600">→</button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className="text-center text-xs font-medium text-gray-500 mb-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 1;
              const isToday = day === 10;
              const hasEvent = [3, 10, 17, 18].includes(day);
              return (
                <div
                  key={i}
                  className={`aspect-square flex items-center justify-center text-sm rounded-lg cursor-pointer transition-colors ${
                    day < 1 ? 'text-gray-300' :
                    isToday ? 'bg-[#f10e6a] text-white font-medium' :
                    hasEvent ? 'bg-[#f10e6a] text-white' :
                    'text-gray-700 hover:bg-accent'
                  }`}
                >
                  {day > 0 ? day : ''}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="card p-6 rounded-2xl"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Documents By Doctors</h3>
          <button className="text-primary text-sm hover:underline">See All →</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-primary transition-colors cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#f10e6a]/10 to-[#ff6b9d]/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900">Visit: Neurology</p>
              <p className="text-xs text-gray-500">Judith Rodriguez</p>
            </div>
            <span className="text-xs text-gray-500">16/07/23</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
