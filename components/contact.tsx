// app/components/TechMarqueeContact.tsx
'use client';

import { useEffect, useState } from 'react';
import Dither from '@/parts/dither';

interface MarqueeWord {
  word: string;
  rotation: 0 | 90;
  speed: number;
  direction: 'left' | 'right';
  delay: number;
  row: number;
  fontSize: number;
  opacity: number;
  spacing: number;
  fontWeight: number;
}

export default function TechMarqueeContact() {
  const technicalWords = [
    "TypeScript","JavaScript","Python","Java","C++","C#","Go","Rust","Swift","Kotlin","PHP","Ruby","Scala","Haskell","Elixir","Clojure",
    "React","NextJS","Vue","Svelte","Angular","Solid","Qwik","Astro","Nuxt","Gatsby","Remix","Preact","Alpine","Lit","Ember","Backbone",
    "Node.js","Express","NestJS","FastAPI","Spring","Django","Flask","Laravel","RubyOnRails","Phoenix","ASP.NET","GraphQL","gRPC","Socket.io",
    "PostgreSQL","MySQL","MongoDB","Redis","Elasticsearch","Cassandra","Firebase","Supabase","Neo4j","DynamoDB","SQLite","MariaDB","Oracle","CosmosDB",
    "Docker","Kubernetes","AWS","Azure","GCP","Terraform","Ansible","Jenkins","GitLab","GitHubActions","Prometheus","Grafana","Helm","Istio","Nginx",
    "TensorFlow","PyTorch","OpenAI","LangChain","HuggingFace","Scikit-learn","Pandas","NumPy","ComputerVision","NLP","MLOps","DeepLearning","ChatGPT","LLM",
    "WebGL","Three.js","WebAssembly","WebSockets","WebRTC","PWA","WebGPU","WebComponents","ServiceWorkers","IndexedDB","WebAudio","WebXR","Canvas","SVG",
    "VSCode","Vim","Git","Webpack","Vite","ESLint","Prettier","Jest","Cypress","Storybook","Figma","Tailwind","Bootstrap","Postman","Insomnia","Notion"
  ];

  const [marqueeWords, setMarqueeWords] = useState<MarqueeWord[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const generateMarqueeWords = () => {
      const rows = 12;
      const wordsArray: MarqueeWord[] = [];
      const wordsPerRow = Math.ceil(technicalWords.length / rows) * 2;

      for (let row = 0; row < rows; row++) {
        const rowSpeedBase = 50 + row * 5;
        const rowDirection = row % 2 === 0 ? 'left' : 'right';
        const rowOpacity = 0.08 + row * 0.015;

        for (let i = 0; i < wordsPerRow; i++) {
          const wordIndex = (row * wordsPerRow + i) % technicalWords.length;
          const rotation: 0 | 90 = Math.random() > 0.6 ? 90 : 0;

          wordsArray.push({
            word: technicalWords[wordIndex],
            rotation,
            speed: rowSpeedBase + Math.random() * 30,
            direction: rowDirection,
            delay: Math.random() * -80,
            row,
            fontSize: 0.8 + Math.random() * 2.2,
            opacity: rowOpacity + Math.random() * 0.1,
            spacing: 80 + Math.random() * 120,
            fontWeight: 200 + Math.floor(Math.random() * 3) * 100,
          });
        }
      }

      return wordsArray;
    };

    setMarqueeWords(generateMarqueeWords());
    setIsLoaded(true);

    const interval = setInterval(() => {
      setMarqueeWords(generateMarqueeWords());
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative mt-10 h-screen w-full overflow-hidden bg-[#535353] font-cascadia">

      {/* DITHER BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Dither
          mouseRadius={0.1}
          colorNum={90}
          waveAmplitude={0}
          waveFrequency={10}
          enableMouseInteraction={true}
          waveColor={[255,122,122]}
          disableAnimation={false}
        />
      </div>

      {/* MARQUEE BACKGROUND */}
      <div className="absolute inset-0 z-0 flex flex-col justify-between py-12 pointer-events-none">
        {isLoaded && [...Array(12)].map((_, rowIndex) => (
          <div key={rowIndex} className="relative h-12 my-8 overflow-visible">
            <div className="absolute top-0 left-0 flex">
              {marqueeWords
                .filter(w => w.row === rowIndex)
                .map((item, i) => (
                  <div
                    key={i}
                    className={`inline-flex animate-word-marquee-${item.direction}`}
                    style={{
                      animationDuration: `${item.speed}s`,
                      animationDelay: `${item.delay}s`,
                      marginInline: `${item.spacing}px`,
                    }}
                  >
                    <span
                      className="text-black font-light"
                      style={{
                        fontSize: `${item.fontSize}rem`,
                        opacity: item.opacity,
                        transform: `rotate(${item.rotation}deg)`,
                        writingMode: item.rotation === 90 ? 'vertical-rl' : 'horizontal-tb',
                        fontWeight: item.fontWeight,
                        letterSpacing: '0.08em',
                      }}
                    >
                      {item.word}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-6 px-4 text-black">
        <h1 className="text-center text-7xl font-extralight tracking-widest">
          HIRE A PURPOSE DRIVEN
        </h1>
        <h2 className="text-center text-7xl font-extralight tracking-widest">
          TECH INTEGRATOR: (me)
        </h2>

        {/* CONTACT LINKS */}
        <div className="mt-14 flex gap-10 flex-wrap justify-center">
          <a
            href="https://www.linkedin.com/in/shivansh-yadav-88a022366"
            target="_blank"
            className="border-2 border-black px-14 py-3 tracking-widest font-light transition-all hover:bg-black hover:text-white"
          >
            LINKEDIN
          </a>

          <a
            href="https://github.com/ius99"
            target="_blank"
            className="border-2 border-black px-14 py-3 tracking-widest font-light transition-all hover:bg-black hover:text-white"
          >
            GITHUB
          </a>
        </div>

        {/* FUN CTA */}
        <div className="mt-10 flex gap-12 flex-wrap justify-center">
          <button className="border-2 border-black px-14 py-2 tracking-widest font-light transition-all hover:bg-white/10">
            Yes you're amazing
          </button>
          <button className="border-2 border-black px-14 py-2 tracking-widest font-light transition-all hover:bg-white/10">
            No I hate you
          </button>
        </div>
      </div>
    </section>
  );
}
