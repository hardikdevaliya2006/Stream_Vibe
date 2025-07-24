import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "../../../Helper/FAQs";
import { useState } from "react";

const PlusMinusIcon = ({ isOpen }) => {
  return (
    <div className="w-4 h-4 relative">
      <motion.span
        layout
        className="absolute top-1/2 left-0 w-full h-[0.02rem] bg-white"
        initial={false}
        animate={{ rotate: 0 }}
      />
      <motion.span
        layout
        className="absolute left-1/2 top-0 h-full w-[0.02rem] bg-white"
        initial={false}
        animate={{
          scaleY: isOpen ? 0 : 1,
          opacity: isOpen ? 0 : 1,
          transformOrigin: "center",
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

const FAQItem = ({ id, activeId, setActiveId, question, answer }) => {
  const isOpen = id === activeId;
  const toggle = () => setActiveId(isOpen ? null : id);

  return (
    <motion.div
      layout
      className="quetionItem flex flex-col items-start justify-center pb-2 w-full"
    >
      <div
        onClick={toggle}
        className="flex cursor-pointer w-full items-center justify-between pb-4"
      >
        <div className="numberQuetion flex items-center justify-start gap-2">
          <div className="number text-white border border-gray-15 rounded-md flex items-center justify-center bg-gray-08 lg:min-h-11 min-h-10 lg:min-w-11 min-w-10">
            <span>{id}</span>
          </div>
          <div className="quetion text-white">
            <h3>{question}</h3>
          </div>
        </div>
        <div className="icon w-[15%] flex items-center justify-end">
          <PlusMinusIcon isOpen={isOpen} />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-2 text-gray-400 w-full"
          >
            <div className="ans text-gray-60 w-full pb-4">
              <span className="w-full text-sm">{answer}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5 }}
        className="h-[1px]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.5), rgb(220,0,0), rgba(0,0,0,0.5))",
        }}
      />
    </motion.div>
  );
};

const FrequentlyAskedQuestions = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <AnimatePresence>
      <div className="quetionsWraper h-[25rem]">
        <div className="quetions flex flex-wrap gap-4">
          {faqs.map((item, index) => (
            <div key={index} className="w-full md:w-[48%]">
              <FAQItem
                id={item.id}
                activeId={activeId}
                setActiveId={setActiveId}
                question={item.question}
                answer={item.answer}
              />
            </div>
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default FrequentlyAskedQuestions;
