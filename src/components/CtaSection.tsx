import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-botconversa-green text-white">
      <div className="container-custom text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Use O BotConversa E Extraia O Máximo Do Marketing de Conversa
        </motion.h2>
        <motion.p
          className="text-lg mb-10 text-white/90 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Criar robôs é fácil, divertido e comprovado para obter resultados!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            className="bg-white text-botconversa-green hover:bg-white/90 text-lg px-10 py-6 shadow-lg"
            asChild
          >
            <a href="https://go.botconversa.com.br/subscribe/botconversa-starter" target="_blank" rel="noopener noreferrer">
              COMEÇAR AGORA
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-white/90">
            Quando o assunto é automação pelo WhatsApp, nós somos especialistas.
          </p>
          <p className="text-white/90">
            Conte com o time do BotConversa para criar automações que realmente geram em agendamentos, visitas e vendas para o seu negócio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
