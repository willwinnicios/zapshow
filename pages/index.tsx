import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Animated BotConversa</title>
        <meta name="description" content="Animated BotConversa demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}
        >
          BotConversa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '2rem' }}
        >
          A Ferramenta Mais Fácil Para Criar Chatbots Sem Código Do Brasil
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: '#73c354',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Começar Agora
        </motion.button>
      </main>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          text-align: center;
          padding: 0 1rem;
          background-color: #f7fbfb;
        }

        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
