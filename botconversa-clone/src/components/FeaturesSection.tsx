import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
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

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
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
          <p className="text-lg text-botconversa-dark/80 max-w-3xl mx-auto">
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
              <Card className="shadow-md hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-botconversa-dark/80">{feature.description}</p>
                </CardContent>
              </Card>
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
          <p className="text-lg text-botconversa-dark/80">e muito mais!</p>
        </motion.div>
      </div>
    </section>
  );
}
