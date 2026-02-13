import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative bg-black border-t border-border-subtle"
      data-testid="footer"
    >
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full bg-noise" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {/* Left - Brand */}
          <div>
            <motion.h3
              className="font-heading text-2xl md:text-3xl font-light tracking-[-0.02em] text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Aetheron AI Technologies
            </motion.h3>
            <motion.p
              className="font-heading text-lg text-text-metallic text-metallic mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Pvt Ltd
            </motion.p>
            <motion.p
              className="font-body text-sm text-text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Engineering Intelligence.
            </motion.p>

            {/* Copyright */}
            <motion.p
              className="font-mono text-xs text-text-muted mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              © {currentYear} Aetheron AI Technologies Pvt Ltd. All rights reserved.
            </motion.p>
          </div>

          {/* Right - Links */}
          <div className="md:text-right">
            <motion.p
              className="font-mono text-xs text-text-muted tracking-[0.3em] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              [ CONNECT ]
            </motion.p>

            <div className="space-y-4">
              {/* Contact Link */}
              <motion.a
                href="mailto:contact@aetheron.ai"
                className="group flex items-center gap-3 md:justify-end text-text-secondary hover:text-white transition-colors duration-300"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                data-cursor="MAIL"
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4" />
                <span className="font-body text-sm">contact@aetheron.ai</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              {/* LinkedIn Link */}
              <motion.a
                href="https://linkedin.com/company/aetheron-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 md:justify-end text-text-secondary hover:text-white transition-colors duration-300"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                data-cursor="ENTER"
                data-testid="footer-linkedin"
              >
                <Linkedin className="w-4 h-4" />
                <span className="font-body text-sm">LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </div>

            {/* Status */}
            <motion.div
              className="flex items-center gap-2 mt-8 md:justify-end"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-green-500"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-mono text-[10px] text-text-muted tracking-wider">SYSTEMS OPERATIONAL</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
    </footer>
  );
};

export default Footer;
