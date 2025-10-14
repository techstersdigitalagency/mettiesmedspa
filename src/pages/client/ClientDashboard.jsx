import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Heart, TrendingUp } from 'lucide-react';
import StatCard from '../../components/StatCard';
import { statsData, mockAppointments } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';

const ClientDashboard = () => {
  const { user } = useAuth();
  const upcomingAppointments = mockAppointments.filter(apt => apt.status === 'upcoming').slice(0, 3);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">Hello, {user?.name || 'Client'} 👋</h1>
        <p className="text-gray-600 mt-1">Welcome back to your dashboard</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Calendar}
          title="Next Appointment"
          value={statsData.client.nextAppointment}
          color="primary"
        />
        <StatCard
          icon={CheckCircle}
          title="Sessions Completed"
          value={statsData.client.sessionsCompleted}
          color="primary"
        />
        <StatCard
          icon={Heart}
          title="Upcoming Treatments"
          value={statsData.client.upcomingTreatments}
          color="primary"
        />
        <StatCard
          icon={TrendingUp}
          title="Total Visits"
          value={statsData.client.totalVisits}
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
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Appointment Timeline</h2>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-start gap-4 p-4 bg-accent rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Calendar size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{appointment.treatmentType}</h3>
                  <p className="text-sm text-gray-600">{appointment.date} at {appointment.time}</p>
                  <p className="text-sm text-gray-500">with {appointment.aesthetician}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Progress Tracker</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700">Facial Treatment Series</span>
                <span className="text-gray-900 font-semibold">8/12 Sessions</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '67%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700">Microdermabrasion Package</span>
                <span className="text-gray-900 font-semibold">3/6 Sessions</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-accent rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-gray-900">Great progress!</span> You're on track with your treatment plan. Keep up the consistency for optimal results.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="card p-6"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Documents</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Consent Form - Oct 2025.pdf', 'Treatment Plan.pdf', 'Aftercare Instructions.pdf'].map((doc, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{doc}</p>
                  <p className="text-xs text-gray-500">PDF Document</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ClientDashboard;
