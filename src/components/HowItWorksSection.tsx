import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    id: "step1",
    title: "Conecte o seu WhatsApp",
    description: "Conecte o seu WhatsApp ao BotConversa escaneando o QR Code na plataforma.",
    icon: "🔄",
  },
  {
    id: "step2",
    title: "Convide o seu time",
    description: "Convide o seu time inteiro para atender e vender utilizando o inteligente Bate Papo ao vivo do BotConversa!",
    icon: "👥",
  },
  {
    id: "step3",
    title: "Selecione os robôs",
    description: "Selecione quais robôs você vai utilizar no seu atendimento (temos uma biblioteca de robôs prontos)",
    icon: "🤖",
  },
  {
    id: "step4",
    title: "Defina palavras-chave",
    description: "Defina quais palavras chaves, quando digitadas pelos seus clientes, irão acionar os robôs selecionados.",
    icon: "🔑",
  },
  {
    id: "step5",
    title: "Relaxe e veja os resultados",
    description: "Sente, relaxe e veja na prática os robôs atenderem e venderem no automático para o seu negócio.",
    icon: "😎",
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-botconversa-light">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O Que É Um Robô?
          </h2>
          <p className="text-lg text-botconversa-dark/80 max-w-3xl mx-auto">
            O Que Exatamente Um Robô Pode Fazer Pelo Seu Negócio?
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="bg-white p-6 md:p-10 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-botconversa-dark/80 mb-6">
              <strong>BotConversa é Um Construtor De Robôs Para Empresários Que Não São Cientistas do Marketing</strong>
            </p>
            <p className="text-md md:text-lg text-botconversa-dark/80">
              Sim, o BotConversa foi criado para que empresários como você, que não é um programador e que não sabe como criar códigos, consiga facilmente criar conversas inteligentes paras o WhatsApp para ajudar seu negócio crescer de forma automática.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Deixa eu te mostrar como funciona!
          </h3>
        </motion.div>

        <div className="grid gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex flex-col md:flex-row items-start md:items-center gap-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <motion.div
                className="bg-white rounded-full h-16 w-16 flex items-center justify-center text-3xl shadow-md flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.icon}
              </motion.div>
              <div>
                <motion.h4
                  className="text-xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
                >
                  {step.title}
                </motion.h4>
                <motion.p
                  className="text-botconversa-dark/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                >
                  {step.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
