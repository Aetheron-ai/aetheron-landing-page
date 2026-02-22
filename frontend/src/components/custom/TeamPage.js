import React from 'react';
import { motion } from 'framer-motion';

const teamData = {
  founders: [
    { name: 'Ayush Pardeshi', role: 'Founder & MD' },
    { name: 'Ahana Kulkarni', role: 'Co-founder & TD' },
  ],
  leadership: [
    { name: 'Yash Yadav', role: 'CEO ABAR' },
    { name: 'Diya Tailor', role: 'COO ABAR' },
    { name: 'Pawan Shetty', role: 'Product Manager' },
  ],
};

const TeamMemberCard = ({ member, index, isFounder }) => (
  <motion.div
    className={`relative group ${isFounder ? 'w-full max-w-sm' : 'w-full'}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <motion.div
      className="relative bg-surface border border-border-subtle rounded-sm p-8 overflow-hidden"
      whileHover={{ 
        borderColor: 'rgba(255,255,255,0.2)',
        y: -5
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Avatar placeholder */}
      <motion.div
        className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-2xl font-heading text-white/60">
          {member.name.split(' ').map(n => n[0]).join('')}
        </span>
      </motion.div>

      {/* Name */}
      <h3 className="font-heading text-xl text-white text-center mb-2">
        {member.name}
      </h3>

      {/* Role */}
      <p className="font-mono text-xs text-text-muted text-center tracking-wider">
        {member.role.toUpperCase()}
      </p>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-white/20 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-transparent group-hover:border-white/20 transition-colors duration-300" />
    </motion.div>
  </motion.div>
);

const TeamPage = ({ id }) => {
  return (
    <div id={id} className="min-h-screen bg-black pt-24 pb-20" data-testid="team-page">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="font-mono text-xs text-text-muted tracking-[0.3em] block mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            [ THE TEAM ]
          </motion.span>
          <motion.h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Meet the <span className="text-metallic">Minds</span>
          </motion.h1>
          <motion.p
            className="font-body text-text-secondary max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Engineering the future of intelligent machines
          </motion.p>
        </motion.div>

        {/* Founders Row */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-mono text-xs text-text-muted tracking-[0.2em] text-center mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            FOUNDERS
          </motion.h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {teamData.founders.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} isFounder={true} />
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Leadership Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-mono text-xs text-text-muted tracking-[0.2em] text-center mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            LEADERSHIP
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teamData.leadership.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} isFounder={false} />
            ))}
          </div>
        </motion.div>

        {/* Bottom quote */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-heading text-2xl md:text-3xl text-white/30 italic">
            "Building tomorrow's intelligence, today."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;