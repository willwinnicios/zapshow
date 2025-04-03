"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  {
    id: "agendamento",
    title: "Agendamento",
    description: "Simplifique o agendamento para seus clientes com nosso chatbot de atendimento automático.",
    icon: "📅",
  },
  {
    id: "ebook",
    title: "Ebook",
    description: "Ofereça acesso instantâneo a uma variedade de eBooks exclusivos através do nosso chatbot com atendimento automático.",
    icon: "📚",
  },
  {
    id: "orcamento",
    title: "Orçamento",
    description: "Agilize a elaboração de orçamentos para seus clientes usando nosso chatbot com atendimento automático.",
    icon: "💰",
  },
  {
    id: "indicacao",
    title: "Indicação",
    description: "Impulsione suas indicações com nosso chatbot automático. Facilite o compartilhamento e conquiste novos clientes de forma rápida e eficiente.",
    icon: "👥",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    }
  }
};

export default function Home() {
  return (
    <main>
      <header className="py-4 border-b border-gray-100">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/images/logo.svg"
              alt="BotConversa"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </div>
        </div>
      </header>

      <section className="bg-[#f7fbfb] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                A Ferramenta Mais Fácil Para Criar Chatbots Sem Código Do Brasil
              </motion.h1>
              <motion.p
                className="text-lg mb-8 text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Agora você pode automatizar seu marketing, geração de lead, atendimento e muito mais com um robô. Em uma tarde você constrói o seu utilizando o nosso construtor arrasta e solta.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-[#73c354] text-white text-lg px-8 py-6 rounded-md hover:bg-[#73c354]/90">
                  Começar Agora
                </Button>
              </motion.div>
              <motion.p
                className="mt-4 text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                Chega de perder tempo com o que pode ser automatizado!
              </motion.p>
            </div>

            <div className="relative">
              <motion.div
                className="relative h-[400px] md:h-[500px]"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <img
                  src="/images/phone-mockup.svg"
                  alt="BotConversa Phone Mockup"
                  className="object-contain h-full w-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Chegue de perder tempo com o que pode ser automatizado
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Com o BotConversa, você pode automatizar várias tarefas do seu negócio, otimizando seu tempo e recursos.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature) => (
              <motion.div key={feature.id} variants={item}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full border border-gray-100">
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="text-lg text-gray-700">e muito mais!</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
