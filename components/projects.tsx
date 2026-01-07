"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Work from "@/parts/work";
import Image from "next/image";

type CursorType = {
  top: number;
  height: number;
  opacity: number;
};

type ActiveProjectType = {
  image: string;
} | null;

export default function Projects() {
  const [cursor, setCursor] = useState<CursorType>({
    top: 0,
    height: 0,
    opacity: 0,
  });

  const [activeProject, setActiveProject] =
    useState<ActiveProjectType>(null);

  return (
    <section className="relative mt-40 bg-white min-h-screen px-10 text-black">
      <h1 className="text-2xl mb-12 text-gray-700">Projects</h1>

      <div
        className="relative"
        onMouseLeave={() => {
          setCursor((prev) => ({ ...prev, opacity: 0 }));
          setActiveProject(null);
        }}
      >
        <Work
          num={1}
          text="Chaos Theory: Lorenz Attractor"
          description="Mathematical visualization of chaotic systems using numerical solvers."
          github="https://github.com/ius99"
          image="/la.jpg"
          setCursor={setCursor}
          setActiveProject={setActiveProject}
        />

        <Work
          num={2}
          text="Custom Unix Shell"
          description="POSIX-compliant shell written in C with job control and piping."
          github="https://github.com/ius99"
          image="/code.jpg"
          setCursor={setCursor}
          setActiveProject={setActiveProject}
        />

        <Work
          num={3}
          text="Particle Simulator"
          description="Physics engine simulating gravity, collisions, and constraints."
          github="https://github.com/ius99/ParticleSimulator"
          image="/ps.jpg"
          setCursor={setCursor}
          setActiveProject={setActiveProject}
        />

        <Work
          num={4}
          text="C++ HTTP Server"
          description="Event-driven HTTP server with routing and static file support."
          github="https://github.com/ius99/cpp-http-server"
          image="/code.jpg"
          setCursor={setCursor}
          setActiveProject={setActiveProject}
        />

        <Work
          num={5}
          text="Satellite Telemetry Backend"
          description="FastAPI backend for ingesting and querying telemetry data."
          github="https://github.com/ius99/sattrack"
          image="/tt.jpg"
          setCursor={setCursor}
          setActiveProject={setActiveProject}
        />


        <Cursor cursor={cursor} />
      </div>

      <ProjectPreview activeProject={activeProject} />
    </section>
  );
}

/* ---------- SLIDING BACKGROUND CURSOR ---------- */
function Cursor({ cursor }: { cursor: CursorType }) {
  return (
    <motion.div
      animate={cursor}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="absolute left-0 right-0 bg-gray-200 rounded-lg z-0"
    />
  );
}

/* ---------- FLOATING IMAGE PREVIEW ---------- */
function ProjectPreview({
  activeProject,
}: {
  activeProject: ActiveProjectType;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.95 }}
      animate={{
        opacity: activeProject ? 1 : 0,
        x: activeProject ? 0 : 40,
        scale: activeProject ? 1 : 0.95,
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="
        pointer-events-none
        fixed
        top-1/2
        right-60
        -translate-y-1/2
        w-[480px]
        h-[320px]
        z-50
      "
    >
      {activeProject && (
        <Image
          src={activeProject.image}
          alt="Project preview"
          fill
          className="object-cover"
        />
      )}
    </motion.div>
  );
}
