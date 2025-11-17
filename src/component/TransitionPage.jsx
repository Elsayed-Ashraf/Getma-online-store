import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useLocation } from "react-router";
const TransitionPage = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname} // مهم جدًا علشان يميز كل صفحة أو منتج جديد
        initial={{ opacity: 0, y: 0 }} // المنتج داخل من اليمين بشفافية 0
        animate={{ opacity: 1, y: 0 }} // بعد الدخول يظهر بالكامل
        exit={{ opacity: 0, y: 100 }} // قبل الخروج، يختفي تدريجيًا
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionPage;
