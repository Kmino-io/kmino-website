import { motion } from "framer-motion";

type FadeInProps = {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
};

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  duration = 0.8,
  delay = 0,
  className = "",
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);
