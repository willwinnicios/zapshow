import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="py-4 border-b border-gray-100">
      <div className="container-custom flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="BotConversa"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </motion.div>

        <motion.nav
          className="hidden md:flex space-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="#features" className="text-botconversa-dark/80 hover:text-botconversa-green transition-colors">Recursos</Link>
          <Link href="#how-it-works" className="text-botconversa-dark/80 hover:text-botconversa-green transition-colors">Como Funciona</Link>
          <Link href="#pricing" className="text-botconversa-dark/80 hover:text-botconversa-green transition-colors">Preços</Link>
          <Link href="#faqs" className="text-botconversa-dark/80 hover:text-botconversa-green transition-colors">FAQ</Link>
        </motion.nav>

        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="https://go.botconversa.com.br/login" className="hidden md:inline-block text-botconversa-dark/80 hover:text-botconversa-green transition-colors">
            Entrar
          </Link>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-botconversa-green hover:bg-botconversa-green/90">
              Começar Agora
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
