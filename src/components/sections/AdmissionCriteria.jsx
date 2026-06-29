import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Crown } from 'lucide-react';

const AdmissionCriteria = () => {
  return (
    <section className="py-10 md:py-16 bg-[#0B1C40]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-[700] text-[#FBBF24] mb-3">
            Admission Criteria
          </h2>
          <p className="text-white text-[15px] md:text-[16px]">
            Paramedical Courses at Sri Angalamman Paramedical College
          </p>
        </div>

        {/* Grid Box */}
        <div className="border border-white/20 w-full mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            
            {/* Column 1 */}
            <div className="p-8 md:p-10 flex flex-col gap-10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Crown size={20} className="text-[#FBBF24]" strokeWidth={2} />
                  <h3 className="text-white font-[700] text-xl">Course Duration</h3>
                </div>
                <p className="text-white/80 text-[14px] leading-relaxed ml-8">
                  1 to 3 years depending on the diploma/degree program.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Crown size={20} className="text-[#FBBF24]" strokeWidth={2} />
                  <h3 className="text-white font-[700] text-xl">Admission Procedure</h3>
                </div>
                <p className="text-white/80 text-[14px] leading-relaxed ml-8">
                  Submit an online/offline application with required documents.<br />
                  Confirm enrollment after fee payment and document verification.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="p-8 md:p-10 flex flex-col gap-10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Crown size={20} className="text-[#FBBF24]" strokeWidth={2} />
                  <h3 className="text-white font-[700] text-xl">Eligibility</h3>
                </div>
                <p className="text-white/80 text-[14px] leading-relaxed ml-8">
                  10th / +2 pass (Science group preferred) from a recognized board.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Crown size={20} className="text-[#FBBF24]" strokeWidth={2} />
                  <h3 className="text-white font-[700] text-xl">Course Fee</h3>
                </div>
                <p className="text-white/80 text-[14px] leading-relaxed ml-8">
                  Fees vary by program. Contact the admission office for detailed fee structures and installment options.
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="p-8 md:p-10 flex flex-col gap-10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Crown size={20} className="text-[#FBBF24]" strokeWidth={2} />
                  <h3 className="text-white font-[700] text-xl">Career Opportunities</h3>
                </div>
                <p className="text-white/80 text-[14px] leading-relaxed ml-8">
                  Lab Technician, OT Technician, Dialysis Technician, Radiologist, Patient Care Executive, Hospital Administrator.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Crown size={20} className="text-[#FBBF24]" strokeWidth={2} />
                  <h3 className="text-white font-[700] text-xl">Average Salary</h3>
                </div>
                <p className="text-white/80 text-[14px] leading-relaxed ml-8">
                  Entry-level: ₹2.5–5 LPA (varies by specialization and hospital).
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Apply Now Button */}
        <div className="flex justify-center">
          <Link
            to="/application"
            className="bg-[#F23B4E] hover:bg-[#D92B3E] text-white px-12 py-3.5 rounded-none font-bold text-[14px] tracking-wider uppercase transition-colors duration-300 shadow-lg shadow-[#F23B4E]/30"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdmissionCriteria;
