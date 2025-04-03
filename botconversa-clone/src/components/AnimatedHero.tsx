import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function AnimatedHero() {
  return (
    <section className="bg-botconversa-light py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              A Ferramenta Mais Fácil Para Criar Chatbots Sem Código Do Brasil
            </motion.h1>
            <motion.p
              className="text-lg mb-8 text-botconversa-dark/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Agora você pode automatizar seu marketing, geração de lead, atendimento e muito mais com um robô. Em uma tarde você constrói o seu utilizando o nosso construtor arrasta e solta.
            </motion.p>
            <Button className="bg-botconversa-green text-white text-lg px-8 py-6 rounded-md hover:bg-botconversa-green/90">
              Começar Agora
            </Button>
            <p className="mt-4 text-sm text-botconversa-dark/60">
              Chega de perder tempo com o que pode ser automatizado!
            </p>
          </div>

          <div className="relative">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images/phone-mockup.svg"
                alt="BotConversa Phone Mockup"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
