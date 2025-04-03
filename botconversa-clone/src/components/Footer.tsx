import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-botconversa-dark text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/logo.svg"
                alt="BotConversa"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              CNPJ: 39.994.996/0001-33<br />
              Contato: suporte@botconversa.com.br
            </p>
            <p className="text-gray-300">BotConversa © 2022</p>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-medium text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-300 hover:text-botconversa-green transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-gray-300 hover:text-botconversa-green transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-300 hover:text-botconversa-green transition-colors">
                  Preços
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="text-gray-300 hover:text-botconversa-green transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-medium text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-botconversa-green transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/terms-of-services" className="text-gray-300 hover:text-botconversa-green transition-colors">
                  Termos de Serviço
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-medium text-lg mb-4">Contato</h4>
            <p className="text-gray-300 mb-4">
              Fale conosco<br />
              suporte@botconversa.com.br
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://fb.me/botconversa" className="text-gray-300 hover:text-botconversa-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/botconversa" className="text-gray-300 hover:text-botconversa-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
              <Link href="https://www.youtube.com/c/BotConversa" className="text-gray-300 hover:text-botconversa-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/company/botconversa/about/" className="text-gray-300 hover:text-botconversa-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2022 BotConversa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
