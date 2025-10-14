import { motion } from "framer-motion";

const StatCard = ({ icon: Icon, title, value, color = "primary" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card p-4 sm:p-6 hover:shadow-hover transition-shadow duration-200"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2">
            {title}
          </p>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div
          className="p-2 sm:p-3 rounded-lg"
          style={{ backgroundColor: "rgba(241, 14, 106, 0.1)" }}
        >
          <Icon
            size={20}
            className="sm:w-6 sm:h-6"
            style={{ color: "#0a0b16" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;
