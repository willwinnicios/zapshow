import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    id: "starter",
    name: "STARTER",
    price: "R$199",
    period: "/mês",
    description: "Todas as funcionalidades que um pequeno/médio negócio precisa para automatizar o atendimento e vendas do WhatsApp.",
    subtitle: "Entregue as respostas que seus clientes estão procurando.",
    features: [
      "1 número de WhatsApp conectado",
      "Acesso a um painel de controle",
      "Acesso a um CRM para contatos",
      "Acesso a criação de etiquetas",
      "Acesso a criação de campos personalizados",
      "Acesso a campanhas de link",
      "Acesso ao bate papo (5 atendentes inclusos)",
      "Acesso a campanhas de QR code",
      "Acesso ao criador de automações (sequências e palavras chave)",
      "Acesso ao construtor arrasta e solta mais simples do Brasil",
      "Fluxos de conversa (robôs) ilimitados",
      "Palavras chaves ilimitadas",
      "Sequências Ilimitadas",
    ],
    buttonText: "COMEÇAR AGORA",
    buttonLink: "https://go.botconversa.com.br/subscribe/botconversa-starter",
    isPopular: false,
  },
  {
    id: "pro",
    name: "PRO",
    price: "R$297",
    period: "/mês",
    description: "A melhor escolha para quem atende muitas pessoas todos os dias e precisa de uma ferramenta poderosa para escalar as vendas no WhatsApp.",
    subtitle: "Não coloque limites nas suas vendas.",
    features: [
      "TODAS Funcionalidades do STARTER",
      "Acesso a campanhas com grupos – em breve",
      "Acesso ao gerenciador de grupos – em breve",
      "Acesso ao disparador de mensagens",
      "Acesso a integrações",
      "Atendentes ilimitados",
      "Integração via Zapier",
      "Integração via Webhook",
      "Integração via API",
    ],
    buttonText: "COMEÇAR AGORA",
    buttonLink: "https://go.botconversa.com.br/subscribe/botconversa-pro",
    isPopular: true,
  },
  {
    id: "agency",
    name: "AGÊNCIAS",
    price: "Contato",
    period: "",
    description: "A melhor escolha para quem atende muitas pessoas todos os dias e precisa de",
    subtitle: "Quer se tornar um parceiro BotConversa?",
    features: [
      "TODAS Funcionalidades do STARTER",
      "TODAS Funcionalidades do Plano PRO",
      "Acesso a campanhas com grupos – em breve",
      "Acesso ao gerenciador de grupos – em breve",
      "Acesso ao disparador de mensagens",
      "Acesso a integrações",
      "Atendentes ilimitados",
      "Integração via Zapier",
      "Integração via Webhook",
      "Integração via API",
    ],
    buttonText: "COMEÇAR AGORA",
    buttonLink: "https://go.botconversa.com.br/lead/plano-agencia-wpp",
    isPopular: false,
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Escolha Um Plano BotConversa Que É Certo Para Você
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ y: -5 }}
            >
              <Card
                className={`border-2 ${plan.isPopular ? 'border-botconversa-green shadow-lg' : 'border-gray-200'}`}
              >
                <CardHeader className={`text-center pb-6 ${plan.isPopular ? 'bg-botconversa-green/10' : ''}`}>
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                  <motion.div
                    className="mt-4"
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + 0.2 * index, duration: 0.5, type: "spring" }}
                  >
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-botconversa-dark/70">{plan.period}</span>
                  </motion.div>
                  <CardDescription className="mt-2 text-sm">{plan.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-6 text-botconversa-dark/80">
                    {plan.description}
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={`${plan.id}-feature-${idx}`}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3 + 0.02 * idx + 0.1 * index,
                          duration: 0.3
                        }}
                      >
                        <Check className="h-5 w-5 text-botconversa-green mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-botconversa-dark/80 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <motion.div
                    className="w-full"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      className={`w-full py-6 ${plan.isPopular ? 'bg-botconversa-green hover:bg-botconversa-green/90' : 'bg-botconversa-dark hover:bg-botconversa-dark/90'}`}
                      asChild
                    >
                      <a href={plan.buttonLink} target="_blank" rel="noopener noreferrer">
                        {plan.buttonText}
                      </a>
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
