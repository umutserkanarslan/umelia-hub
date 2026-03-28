"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CustomCTA() {
  return (
    <section className="relative w-full py-24 bg-navy overflow-hidden flex flex-col items-center justify-center px-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center max-w-[800px] text-center will-change-transform"
      >
        <h2 className="text-[32px] md:text-[48px] font-bold text-off-white font-plus-jakarta tracking-tight mb-6">
          Farklı Bir Otomasyon mu Arıyorsunuz?
        </h2>
        <p className="text-[16px] md:text-[18px] font-inter text-white/70 tracking-wide leading-relaxed mb-10 max-w-[600px]">
          İşletmenize özel çözümler tasarlıyoruz. İhtiyacınızı anlatın, size en uygun sistemi birlikte kuralım.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* WhatsApp Button */}
          <Link
            href="https://wa.me/905316745900"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-gold text-navy font-semibold text-[15px] font-inter px-8 py-4 rounded-full w-full sm:w-auto transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.37 0-4.557-.7-6.396-1.9l-.459-.296-2.652.889.889-2.652-.296-.459A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            Bize Yazın
          </Link>

          {/* Phone Button */}
          <Link
            href="tel:+905316745900"
            className="flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white font-semibold text-[15px] font-inter px-8 py-4 rounded-full w-full sm:w-auto transition-all duration-300 hover:bg-white/5 hover:border-white/40 active:scale-[0.98]"
          >
            📞 Hemen Arayın
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
