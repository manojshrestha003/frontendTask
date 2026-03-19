import { motion } from 'framer-motion';
import DynamicSvg from './DynamicSvg';
import { reactIcon, task2icon, vueJsIocn, icon4 } from '@/public/icons';

const CourseIcons = () => {
    const icons = [reactIcon, task2icon, vueJsIocn, icon4];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0, scale: 0.8 },
        visible: { 
            y: 0, 
            opacity: 1, 
            scale: 1,
            transition: { type: 'spring' as const, stiffness: 300, damping: 20 }
        },
        hover: { 
            scale: 1.15, 
            rotate: 5,
            transition: { type: 'spring' as const, stiffness: 400, damping: 10 }
        }
    };

    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-15 mt-[126px] items-center"
        >
            {icons.map((icon, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover="hover"
                    className="cursor-pointer"
                >
                    <DynamicSvg svg={icon} className="w-[75px] h-[75px]" />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default CourseIcons;
