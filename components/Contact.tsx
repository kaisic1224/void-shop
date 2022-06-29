import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div id='contact'>
      <h2 className='font-bold text-6xl'>
        Have <span className='text-red-accent'>questions?</span>
      </h2>
      <motion.form>
        <motion.input type='text' className='' />
      </motion.form>
    </motion.div>
  );
};
export default Contact;
