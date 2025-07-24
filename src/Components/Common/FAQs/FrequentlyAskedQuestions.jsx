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
        animate={{
          rotate: 0,
        }}
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

const FAQItem = ({ key, id, activeId, setActiveId, question, answer }) => {
  const isOpen = id === activeId;
  const toggle = () => setActiveId(isOpen ? null : id);
  return (
    <div className="quetionItem flex flex-col items-start justify-center pb-2">
      <div onClick={toggle} className="flex cursor-pointer w-full items-center justify-between pb-4">
        <div
          className="numberQuetion flex items-center justify-start gap-2"
        >
          <div className="number text-white border border-gray-15 rounded-md flex items-center justify-center bg-gray-08 lg:h-11 h-10 lg:w-11 w-10">
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
      <div>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-2 text-gray-600"
          >
            <div className="ans text-gray-60 w-full pb-4">
              <span className="w-full text-sm">{answer}</span>
            </div>
          </motion.div>
        )}
      </div>
      <div
        className="line h-[0.092rem] w-[90%]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(0, 0, 0,0.5) 0%, rgb(220, 0, 0) 50%, rgb(0, 0, 0, 0.5) 100%)",
        }}
      ></div>
    </div>
  );
};

const FrequentlyAskedQuestions = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <AnimatePresence>
      <div className="quetionsWraper">
        <div className="quetions grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 gap-4">
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              id={item.id}
              activeId={activeId}
              setActiveId={setActiveId}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default FrequentlyAskedQuestions;
