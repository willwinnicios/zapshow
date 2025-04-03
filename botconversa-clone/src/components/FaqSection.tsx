import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    id: "faq-1",
    question: "Não sou bom com tecnologia. Como vou saber o que fazer?",
    answer: "Você terá acesso a uma área de membros com todos vídeos explicativos, sem enrolação e direto ao ponto para te ensinar tudo o que você precisa para vender no automático. Sempre que você tiver dúvidas você poderá recorrer ao nosso time de suporte."
  },
  {
    id: "faq-2",
    question: "Como consigo conectar meu WhatsApp ao BotConversa?",
    answer: "A conexão com o BotCovnersa é a mesma realizada com o WhatsApp web. Basta escanear o QR Code da plataforma e seu WhatsApp estará conectado."
  },
  {
    id: "faq-3",
    question: "Quantos números de WhatsApp consigo conectar na plataforma?",
    answer: "Você pode conectar um número de WhatsApp por conta. Para conectar mais de um número por favor entre em contato com nossa equipe pelo email suporte@botconversa.com.br."
  },
  {
    id: "faq-4",
    question: "Meu computador precisa ficar ligado ou com o navegador aberto para o robô funcionar?",
    answer: "Não. Após escanear o QR Code do BotConversa o seu WhatsApp estará conectado e não será necessário manter nada aberto. Você só precisa manter seu celular conectado a internet para o WhatsApp funcionar normalmente."
  },
  {
    id: "faq-5",
    question: "O que é um robô?",
    answer: "Um robô nada mais é do que um fluxo de conversa pré-definido. Pensa na conversa que precisa acontecer para você realizar um agendamento do cliente pelo WhatsApp. Toda essa conversa pode ser pré definida e automatizada. Esse fluxo de conversa pré definido é o que chamamos de robô."
  },
  {
    id: "faq-6",
    question: "Quantos robôs ou fluxos de conversas posso criar?",
    answer: "Você pode criar quantos robôs ou fluxos de conversas você quiser. Você pode literalmente automatizar todo tipo de conversa que acontece no seu WhatsApp."
  },
  {
    id: "faq-7",
    question: "Posso atender quantas pessoas com meus robôs?",
    answer: "No plano STARTER você pode conversar com até 1000 pessoas diferentes. No plano PRO você pode conversar com quantas pessoas quiser."
  },
  {
    id: "faq-8",
    question: "O que acontece após atender 1000 pessoas no mês com o plano Starter?",
    answer: "Você tem um custo de R$10 a cada 200 conversas extras no plano STARTER."
  },
  {
    id: "faq-9",
    question: "O que são palavras chaves?",
    answer: "São palavras ou frases que acionam os seus robôs. Você pode, por exemplo, criar a palavra chave preço para acionar o robô de cardápio/menu toda vez que um cliente enviar uma mensagem que contenha essa palavra."
  },
  {
    id: "faq-10",
    question: "Quantas pessoas podem atender no mesmo número pelo bate papo do BotConversa?",
    answer: "Você pode ter até 5 pessoas da sua equipe dentro do BotConversa a atendendo no bate papo utilizando o plano Starter. No plano PRO você pode colocar atendentes ilimitados na sua conta."
  }
];

export function FaqSection() {
  return (
    <section id="faqs" className="py-16 md:py-24 bg-botconversa-light">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Perguntas
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={faq.id}>
                  <AccordionTrigger className="text-left font-medium text-botconversa-dark hover:text-botconversa-green">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-botconversa-dark/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
