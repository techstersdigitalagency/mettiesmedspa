import { motion } from 'framer-motion';

const StatCard = ({ icon: Icon, title, value, color = 'primary' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card p-6 hover:shadow-hover transition-shadow duration-200"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium mb-2">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`p-3 rounded-lg bg-${color} bg-opacity-10`}>
          <Icon size={24} className={`text-${color}`} style={{ color: color === 'primary' ? '#f10e6a' : undefined }} />
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;
