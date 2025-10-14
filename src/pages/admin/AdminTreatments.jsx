import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import Modal from '../../components/Modal';
import { mockClients, treatmentTypes, aestheticians } from '../../data/mockData';

const AdminTreatments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    clientId: '',
    date: '',
    time: '',
    treatmentType: '',
    sessionNo: '',
    totalSessions: '',
    aesthetician: '',
    notes: ''
  });

  const treatments = [
    { id: 1, client: 'Emily Johnson', date: '2025-10-10', treatment: 'Facial Treatment', session: '8/12', aesthetician: 'Dr. Lisa Park' },
    { id: 2, client: 'Sarah Williams', date: '2025-10-08', treatment: 'Laser Hair Removal', session: '4/8', aesthetician: 'Dr. Maria Chen' },
    { id: 3, client: 'Jessica Martinez', date: '2025-10-05', treatment: 'Chemical Peel', session: '6/10', aesthetician: 'Dr. Lisa Park' },
    { id: 4, client: 'Amanda Brown', date: '2025-10-12', treatment: 'Botox', session: '2/4', aesthetician: 'Dr. Sarah Thompson' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setFormData({
      clientId: '',
      date: '',
      time: '',
      treatmentType: '',
      sessionNo: '',
      totalSessions: '',
      aesthetician: '',
      notes: ''
    });
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
          <h1 className="text-3xl font-bold text-gray-900">Treatments Management</h1>
          <p className="text-gray-600 mt-1">Manage all treatment sessions and records</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          Add Treatment Session
        </button>
      </motion.div>

      <div className="card p-6">
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search treatments..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Client</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Treatment</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Session</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Aesthetician</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {treatments.map((treatment) => (
                <tr key={treatment.id} className="border-b border-gray-100 hover:bg-accent transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                        {treatment.client.charAt(0)}
                      </div>
                      <span className="font-medium text-gray-900">{treatment.client}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{treatment.date}</td>
                  <td className="py-4 px-4 text-gray-900">{treatment.treatment}</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-accent rounded-full text-sm font-medium text-gray-900">
                      {treatment.session}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-900">{treatment.aesthetician}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit size={18} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={18} className="text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Treatment Session">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Client</label>
            <select
              value={formData.clientId}
              onChange={(e) => setFormData({ ...formData, clientId: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select a client</option>
              {mockClients.map((client) => (
                <option key={client.id} value={client.id}>{client.name}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Treatment Type</label>
            <select
              value={formData.treatmentType}
              onChange={(e) => setFormData({ ...formData, treatmentType: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select treatment type</option>
              {treatmentTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Session Number</label>
              <input
                type="number"
                value={formData.sessionNo}
                onChange={(e) => setFormData({ ...formData, sessionNo: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                min="1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Total Sessions</label>
              <input
                type="number"
                value={formData.totalSessions}
                onChange={(e) => setFormData({ ...formData, totalSessions: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                min="1"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Aesthetician</label>
            <select
              value={formData.aesthetician}
              onChange={(e) => setFormData({ ...formData, aesthetician: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select aesthetician</option>
              {aestheticians.map((person) => (
                <option key={person} value={person}>{person}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              rows="3"
              placeholder="Treatment notes..."
            ></textarea>
          </div>

          <button type="submit" className="btn-primary w-full">
            Add Treatment
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AdminTreatments;
