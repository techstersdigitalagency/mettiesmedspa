import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Plus } from 'lucide-react';
import Modal from '../../components/Modal';
import { mockAppointments, treatmentTypes, aestheticians } from '../../data/mockData';

const ClientAppointments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [formData, setFormData] = useState({
    treatmentType: '',
    date: '',
    time: '',
    aesthetician: ''
  });

  const filteredAppointments = mockAppointments.filter(apt =>
    activeTab === 'upcoming' ? apt.status === 'upcoming' : apt.status === 'completed'
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setFormData({ treatmentType: '', date: '', time: '', aesthetician: '' });
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
          <p className="text-gray-600 mt-1">View and manage your appointments</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          Book New Appointment
        </button>
      </motion.div>

      <div className="card p-6">
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'upcoming'
                ? 'bg-primary text-white'
                : 'bg-accent text-gray-600 hover:bg-gray-200'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'completed'
                ? 'bg-primary text-white'
                : 'bg-accent text-gray-600 hover:bg-gray-200'
            }`}
          >
            Completed
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date & Time</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Treatment</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Aesthetician</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Duration</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((appointment) => (
                <motion.tr
                  key={appointment.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b border-gray-100 hover:bg-accent transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                        <Calendar size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{appointment.date}</p>
                        <p className="text-sm text-gray-600">{appointment.time}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-900">{appointment.treatmentType}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-gray-400" />
                      <span className="text-gray-900">{appointment.aesthetician}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{appointment.duration}</td>
                  <td className="py-4 px-4">
                    {activeTab === 'upcoming' && (
                      <button className="text-primary hover:underline text-sm font-medium">
                        Reschedule
                      </button>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Book New Appointment">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Treatment Type
            </label>
            <select
              value={formData.treatmentType}
              onChange={(e) => setFormData({ ...formData, treatmentType: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select a treatment</option>
              {treatmentTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time
            </label>
            <input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Aesthetician
            </label>
            <select
              value={formData.aesthetician}
              onChange={(e) => setFormData({ ...formData, aesthetician: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select an aesthetician</option>
              {aestheticians.map((person) => (
                <option key={person} value={person}>{person}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn-primary w-full">
            Confirm Booking
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ClientAppointments;
