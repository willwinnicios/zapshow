import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function SimpleHero() {
  return (
    <section className="py-16 md:py-24 bg-botconversa-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            A Ferramenta Mais Fácil Para Criar Chatbots Sem Código Do Brasil
          </motion.h1>

          <motion.p
            className="text-lg mb-8 text-botconversa-dark/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Agora você pode automatizar seu marketing, geração de lead, atendimento e muito mais com um robô.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button className="bg-botconversa-green text-white px-8 py-6">
              Começar Agora
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
