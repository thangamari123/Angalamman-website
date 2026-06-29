import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What courses are available?",
      answer: "We offer various diploma and certificate programs including DMLT, Nursing (DHA), OT Technician, Dialysis Technician, Physiotherapy Assistant, Pharmacy Assistant, and First Aid Training."
    },
    {
      question: "What is the eligibility for admission?",
      answer: "Eligibility varies by course. Generally, students who have passed 10th or 12th standard (Science preferred for some courses) are eligible to apply."
    },
    {
      question: "Do you provide placement support?",
      answer: "Yes, we provide 100% placement assistance. We offer interview training, resume preparation, and direct recruitment opportunities with affiliated hospitals and healthcare companies."
    },
    {
      question: "Do students receive practical hospital training?",
      answer: "Absolutely. Practical hospital training is a core component of all our courses. Students gain hands-on clinical exposure in real healthcare environments."
    },
    {
      question: "Are hostel facilities available?",
      answer: "Yes, we provide separate, secure, and comfortable hostel facilities for both boys and girls within the campus vicinity."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Find answers to the most common questions about our courses, admission process, and facilities.
            </p>
            <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
              <h4 className="font-bold text-primary mb-2">Still have questions?</h4>
              <p className="text-gray-700 text-sm mb-4">Can't find the answer you're looking for? Please contact our friendly team.</p>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors w-full">
                Contact Us
              </a>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl border ${activeIndex === index ? 'border-primary shadow-md' : 'border-gray-200'} overflow-hidden transition-all duration-300`}
                >
                  <button
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                    onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                  >
                    <h3 className={`font-bold text-lg pr-4 ${activeIndex === index ? 'text-primary' : 'text-gray-900'}`}>
                      {faq.question}
                    </h3>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${activeIndex === index ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 pt-1 border-t border-gray-50 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
