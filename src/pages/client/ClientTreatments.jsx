import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Heart, User, Calendar, MessageSquare } from 'lucide-react';
import { mockTreatments } from '../../data/mockData';

const ClientTreatments = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">My Treatments</h1>
        <p className="text-gray-600 mt-1">View your treatment history and progress</p>
      </motion.div>

      <div className="space-y-4">
        {mockTreatments.map((treatment) => (
          <motion.div
            key={treatment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card overflow-hidden"
          >
            <div
              className="p-6 cursor-pointer hover:bg-accent transition-colors"
              onClick={() => toggleExpand(treatment.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                    <Heart size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{treatment.treatmentType}</h3>
                    <p className="text-sm text-gray-600">
                      Session {treatment.sessionNo} of {treatment.totalSessions}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right hidden md:block">
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-medium text-gray-900">{treatment.date}</p>
                  </div>
                  <div className="text-right hidden md:block">
                    <p className="text-sm text-gray-600">Aesthetician</p>
                    <p className="font-medium text-gray-900">{treatment.aesthetician}</p>
                  </div>
                  {expandedId === treatment.id ? (
                    <ChevronUp size={20} className="text-gray-400" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400" />
                  )}
                </div>
              </div>
            </div>

            {expandedId === treatment.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-gray-200 bg-accent"
              >
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={16} className="text-gray-400" />
                        <h4 className="font-semibold text-gray-900">Treatment Details</h4>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-600">
                          <span className="font-medium">Date:</span> {treatment.date}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Session:</span> {treatment.sessionNo} of {treatment.totalSessions}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Aesthetician:</span> {treatment.aesthetician}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare size={16} className="text-gray-400" />
                        <h4 className="font-semibold text-gray-900">Notes</h4>
                      </div>
                      <p className="text-sm text-gray-600">{treatment.notes}</p>
                    </div>
                  </div>

                  {treatment.feedback && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Your Feedback</h4>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-gray-700">{treatment.feedback}</p>
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Progress Photos</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[1, 2, 3, 4].map((index) => (
                        <div
                          key={index}
                          className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-400"
                        >
                          <span className="text-sm">Photo {index}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="btn-primary">
                    Submit Treatment Feedback
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ClientTreatments;
