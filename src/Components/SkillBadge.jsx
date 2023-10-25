import { motion } from "framer-motion";

function SkillBadge(props) {
  return (
    <motion.div
      className="flex flex-col justify-center items-center py-0 w-32"
      initial={{
        opacity: 0,
        scale: 0.5,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{ duration: 0.7, type: "spring", delay: props.i * 0.3 }}
      viewport={{ once: true }}
    >
      <img
        src={props.logo}
        alt={props.name}
        className="h-[75px] object-contain"
      />
      <p>{props.name}</p>
    </motion.div>
  );
}

export default SkillBadge;
