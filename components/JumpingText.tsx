import { motion } from "framer-motion";

interface JumpingTextProps {
  text: string;
  color : any;
  fontSize : any
}

const JumpingText: React.FC<JumpingTextProps> = ({ text, color , fontSize}) => {
  return (
    <span className={`${fontSize} font-bold ${color}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ y: 0 }}
          animate={{ y: [-5, 5, -5, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 0.5,
            delay: index * 0.3, // Delay each letter
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default JumpingText;
