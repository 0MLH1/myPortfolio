
    import React, { useEffect, useState, useRef } from 'react';
    import { motion, useAnimation, AnimatePresence } from 'framer-motion';
    import { useInView } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Label } from '@/components/ui/label';
    import { useToast } from '@/components/ui/use-toast';
    import { Mail, Phone, MapPin, Download, Send, ChevronRight, Briefcase, Users, Database, FileText, Star, MessageCircle, PenTool, Users2 as UsersThree, Code as CodeIcon, Server, DatabaseZap, Laptop, Brain, Languages as LanguagesIcon, School, CalendarDays, Linkedin, Github, FileSpreadsheet } from 'lucide-react';
    import { FaLaravel, FaReact, FaBootstrap, FaNodeJs, FaJava, FaPython, FaPhp, FaDatabase  } from 'react-icons/fa';
    import { SiCplusplus, SiGnubash, SiMongodb, SiMariadb, SiMysql, SiOracle, SiC, SiCsharp, SiRedux} from 'react-icons/si';
    import { DiHtml5, DiCss3, DiJavascript1 } from 'react-icons/di';
    import { MdLaptopMac } from "react-icons/md";  // <- changed here



    const AnimatedTextLoop = () => {
      const texts = ["Full-Stack Developer", "Laravel Master", "React.js Builder", "Future Engineer"];
      const [index, setIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2500);
        return () => clearInterval(interval);
      }, [texts.length]);

      return (
        <div className="h-8 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={texts[index]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="block text-lg md:text-xl text-primary font-semibold"
            >
              {texts[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      );
    };
    
    const SectionWrapper = ({ children, id, className = "" }) => {
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true, amount: 0.2 });
      const controls = useAnimation();
    
      useEffect(() => {
        if (isInView) {
          controls.start("visible");
        }
      }, [isInView, controls]);
    
      return (
        <motion.section
          id={id}
          ref={ref}
          className={`py-16 md:py-24 container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
        >
          {children}
        </motion.section>
      );
    };

    // Inline laptop SVG — subtle and modern
const LaptopSVG = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-32 h-32 opacity-10 absolute bottom-6 right-6 rotate-12"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5h18m-6 3h-6a2.25 2.25 0 01-2.25-2.25v-9A2.25 2.25 0 019 6h6a2.25 2.25 0 012.25 2.25v9A2.25 2.25 0 0115 19.5z"
    />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const iconHoverEffect = {
  scale: 1.3,
  rotate: 20,
  transition: { type: "spring", stiffness: 250, damping: 15 },
};

const AdvancedFullStackSpecialization = () => {
  return (
    <motion.div
      className="relative max-w-md mx-auto bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl p-10 text-white overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Laptop SVG decoration */}
      <LaptopSVG />

      {/* Title */}
      <motion.h2
        className="text-center text-4xl font-extrabold mb-6 select-none"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Spécialisation Laravel / React
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-center text-gray-300 mb-10 px-4 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Maîtrise complète du développement Full-Stack avec{" "}
        <span className="font-semibold text-red-500">Laravel</span>,{" "}
        <span className="font-semibold text-blue-400">PHP</span> et{" "}
        <span className="font-semibold text-cyan-400">React</span>. Performance, qualité
        et architecture moderne.
      </motion.p>

      {/* Icons row */}
      <motion.div
        className="flex justify-center gap-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          whileHover={iconHoverEffect}
          className="cursor-pointer select-none"
          title="Laravel"
        >
          <FaLaravel className="text-8xl text-red-600 drop-shadow-lg" />
        </motion.div>


        <motion.div
          whileHover={iconHoverEffect}
          className="cursor-pointer select-none"
          title="React"
        >
          <FaReact className="text-8xl text-cyan-400 drop-shadow-lg" />
        </motion.div>
      </motion.div>

      {/* Animated underline */}
      <motion.div
        className="h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 rounded-full mt-12 mx-auto w-0"
        animate={{ width: "70%" }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
    </motion.div>
  );
};


    const HeroSection = () => {
      return (
        <SectionWrapper id="hero" className="min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 dark:opacity-5">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
                  <span className="block">Mohamed</span>
                  <span className="block text-primary">Lahmam</span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground mb-2">Software Engineering Student</p>
                <AnimatedTextLoop />
                <p className="text-lg text-muted-foreground mt-4 mb-6 italic">"Autonome, passionné, prêt à relever de nouveaux défis !"</p>
                <div className="space-y-2 mb-8 text-sm">
                  <motion.div whileHover={{ x: 5 }} className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                    <MapPin className="h-5 w-5 mr-3 text-primary/70" /> Casablanca, Maroc
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-5 w-5 mr-3 text-primary/70" /> <a href="mailto:lh186261@gmail.com" className="hover:underline">lh186261@gmail.com</a>
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="h-5 w-5 mr-3 text-primary/70" /> <a href="tel:+212*********" className="hover:underline">+212 *** *** ***</a>
                  </motion.div>
                </div>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button size="lg" asChild className="group">
                    <motion.a 
                      href="/mohamed_lahmam_cv.pdf" 
                      download 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center"
                    >
                      Télécharger CV <Download className="h-5 w-5 ml-2 group-hover:animate-bounce" />
                    </motion.a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="group">
                    <motion.a 
                      href="#contact" 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center"
                      onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                    >
                      Contactez-moi <Send className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </Button>
                </div>
              </motion.div>
              <motion.div 
                className="flex justify-center items-center mt-10 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 transform rotate-45 animate-pulse"></div>
                  <div className="absolute inset-2 rounded-full bg-gradient-to-tl from-primary/20 to-accent/20 transform -rotate-45 animate-pulse animation-delay-2000"></div>
                  <img  
                    className="relative w-full h-full rounded-full object-cover shadow-2xl border-4 border-background"
                    alt="Mohamed Lahmam profile picture placeholder"
                   src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg" />
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Scroll to projects section"
          >
            <ChevronRight className="h-8 w-8 text-primary/50 rotate-90" />
          </motion.div>
        </SectionWrapper>
      );
    };
    
    const projects = [
      {
        logo: "https://media.licdn.com/dms/image/v2/D4E3DAQEcImVStm3dMg/image-scale_191_1128/image-scale_191_1128/0/1725555837550/skoolution_cover?e=2147483647&v=beta&t=_Rz1IOPo9baZOWf-G5Ux9TDTeR3i2AjqQJIcNjG4_BA",
        title: "Skoolution",
        role: "Full-Stack Laravel / JavaScript Engineer Intern",
        date: "Mai 2025 - Aujourd’hui",
        location: "Agadir, Maroc",
        type: "hybride",
        description: "Développement de fonctionnalités full-stack pour les outils internes...",
        stack: ["Laravel", "React.js", "Node.js", "MongoDB", "TailwindCSS", "Bootstrap", "HTML/CSS/JS"],
        features: ["Composants UI réactifs avec TailwindCSS", "Intégration d’API tierces", "Participation aux revues de code et flux Git"],
        icons: [<FaLaravel key="laravel" className="text-red-500"/>, <FaReact key="react" className="text-blue-400"/>, <FaNodeJs key="node" className="text-green-600"/>, <SiMongodb key="mongo" className="text-green-500"/>, <FaBootstrap key="bootstrap" className="text-purple-500"/>],
      },
      {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2x_ypAajpUWnr2nQW7hlZa_MfF8pMCg7vRA&s",
        title: "Golden Success",
        role: "Full-Stack Developer (Freelance)",
        date: "Juin - Juillet 2024",
        location: "El Jaddida, Maroc",
        type: "à distance",
        description: "Application web dynamique pour la gestion de cours avec tableau de bord administrateur...",
        stack: ["Laravel", "MySQL", "Bootstrap", "JS"],
        features: ["CMS basé sur une base de données", "Tableau de bord", "Liste des offres/actualités"],
        icons: [<FaLaravel key="laravel" className="text-red-500"/>, <SiMysql key="mysql" className="text-blue-500"/>, <FaBootstrap key="bootstrap" className="text-purple-500"/>, <DiJavascript1 key="js" className="text-yellow-400"/>],
      },
    ];



    const ProjectCard = ({ project, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" }
        }
      }}
      initial="hidden"
      animate={controls}
    >
      <Card className="flex flex-row gap-6 items-start p-6 overflow-hidden shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 rounded-2xl h-full">
        <img src={project.logo} alt="Logo" className="w-20 h-20 object-contain rounded-md shadow-md border" />
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.role}</p>
              <p className="text-xs text-muted-foreground mt-1">{project.location} - <span className="font-semibold">{project.type}</span></p>
            </div>
            <span className="text-xs text-white bg-black/50 px-2 py-1 rounded">{project.date}</span>
          </div>
          <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
          <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1 mb-3">
            {project.features.map((feature, i) => <li key={i}>{feature}</li>)}
          </ul>
          <div className="flex flex-wrap gap-2">
            {project.icons.map((icon, i) => (
              <motion.div
                key={i}
                className="text-xl text-muted-foreground"
                whileHover={{ y: -3, color: 'hsl(var(--primary))' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

    
    const ProjectsSection = () => (
      <SectionWrapper id="projects">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">Mes <span className="text-primary">Expériences Professionnelles  </span></h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Mes expériences professionnelles constituent le cœur de mon parcours en développement full-stack.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </SectionWrapper>
    );

    const skills = {
      frontend: [
        { name: "HTML5", icon: <DiHtml5 className="w-10 h-10 text-orange-500" />, level: "Avancé" },
        { name: "CSS3", icon: <DiCss3 className="w-10 h-10 text-blue-500" />, level: "Avancé" },
        { name: "JavaScript", icon: <DiJavascript1 className="w-10 h-10 text-yellow-400" />, level: "Avancé" },
        { name: "React.js", icon: <FaReact className="w-10 h-10 text-sky-400" />, level: "Intermédiaire" },
        { name: "Bootstrap", icon: <FaBootstrap className="w-10 h-10 text-purple-500" />, level: "Avancé" },
      ],
      backend: [
        { name: "Laravel", icon: <FaLaravel className="w-10 h-10 text-red-500" />, level: "Avancé" },
        { name: "Node.js , Express", icon: <FaNodeJs className="w-10 h-10 text-green-500" />, level: "Intermédiaire" },
        { name: "JEE / Java EE", icon: <FaJava className="w-10 h-10 text-red-600" />, level: "Basique" },
      ],
      databases: [
        { name: "MySQL", icon: <SiMysql className="w-10 h-10 text-blue-600" />, level: "Avancé" },
        { name: "Oracle", icon: <SiOracle className="w-10 h-10 text-red-700" />, level: "Intermédiaire" },
        { name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-green-700" />, level: "Intermédiaire" },
        { name: "MariaDB", icon: <SiMariadb className="w-10 h-10 text-orange-600" />, level: "Intermédiaire" },
        { name: "SQL Server", icon: <FaDatabase className="w-10 h-10 text-purple-700" />, level: "Intermédiaire" },
      ],
      languages: [
        { name: "Java", icon: <FaJava className="w-10 h-10 text-red-600" />, level: "Avancé" },
        { name: "C", icon: <SiC className="w-10 h-10 text-blue-700" />, level: "Intermédiaire" },
        { name: "C#", icon: <SiCsharp className="w-10 h-10 text-purple-600" />, level: "Intermédiaire" },
        { name: "C++", icon: <SiCplusplus className="w-10 h-10 text-blue-500" />, level: "Intermédiaire" },
        { name: "PHP", icon: <FaPhp className="w-10 h-10 text-indigo-400" />, level: "Avancé" },
        { name: "Python", icon: <FaPython className="w-10 h-10 text-yellow-500" />, level: "Avancé" },
        { name: "Bash Scripting", icon: <SiGnubash className="w-10 h-10 text-green-600" />, level: "Intermédiaire" },
      ],
      softSkills: [
        { name: "Autonome", icon: <Star className="w-6 h-6 text-yellow-400" /> },
        { name: "Enthousiaste", icon: <UsersThree className="w-6 h-6 text-green-400" /> },
        { name: "Apprend rapidement", icon: <Brain className="w-6 h-6 text-purple-400" /> },
        { name: "Passionné par le développement web", icon: <CodeIcon className="w-6 h-6 text-sky-400" /> },
      ],
      spokenLanguages: [
        { name: "Arabe", level: "Natif", icon: <LanguagesIcon className="w-6 h-6 text-teal-400" /> },
        { name: "Français", level: "Courant", icon: <LanguagesIcon className="w-6 h-6 text-blue-400" /> },
        { name: "Anglais", level: "Courant", icon: <LanguagesIcon className="w-6 h-6 text-red-400" /> },
      ],
    };

    const SkillCategory = ({ title, skillsList, icon, indexOffset = 0 }) => {
      const controls = useAnimation();
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true, amount: 0.2 });
    
      useEffect(() => {
        if (isInView) {
          controls.start("visible");
        }
      }, [isInView, controls]);
    
      return (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="mb-10"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            {React.cloneElement(icon, { className: "w-7 h-7 mr-3 text-primary"})}
            {title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skillsList.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, delay: (index + indexOffset) * 0.05, ease:'easeOut' } }
                }}
                className="group flex flex-col items-center p-4 rounded-2xl glassmorphism hover:shadow-xl transition-all duration-300 ease-out"
              >
                <div className="p-3 rounded-full bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors">
                  {React.cloneElement(skill.icon, { className: skill.icon.props.className || "w-8 h-8" })}
                </div>
                <p className="text-sm font-medium text-center">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );
    };
    
    const SkillsSection = () => (
      <SectionWrapper id="skills">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">Mes <span className="text-primary">Compétences</span></h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Un aperçu des technologies et des compétences que j'utilise pour construire des applications web modernes et performantes.
        </p>
        <SkillCategory title="Frontend" skillsList={skills.frontend} icon={<Laptop />} indexOffset={0}/>
        <SkillCategory title="Backend" skillsList={skills.backend} icon={<Server />} indexOffset={skills.frontend.length} />
        <SkillCategory title="Bases de Données" skillsList={skills.databases} icon={<DatabaseZap />} indexOffset={skills.frontend.length + skills.backend.length} />
        <SkillCategory title="Langages de Programmation" skillsList={skills.languages} icon={<CodeIcon />} indexOffset={skills.frontend.length + skills.backend.length + skills.databases.length}/>
        
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <SkillCategory title="Soft Skills" skillsList={skills.softSkills} icon={<Brain />} />
          <SkillCategory title="Langues Parlées" skillsList={skills.spokenLanguages} icon={<LanguagesIcon />} />
        </div>
      </SectionWrapper>
    );

    const educationHistory = [
      {
        date: "2023 – Aujourd'hui",
        title: "Cycle d’Ingénieur – FST Marrakech",
        description: "Fillières : Ingénierie des Réseaux et Systèmes Informatiques (IRSI) -> Acquisition de compétences avancées en développement web, architecture réseau, et développement système.",
        icon: (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02M3Opt5mWYhHoiAGBTcLzj3BNnRC85RJiA&s"
            alt="FSTG Logo"
            className="w-32 h-32 object-contain"
          />
        )
      },
      {
        date: "2021 – 2023",
        title: "DEUST – FST Mohammedia",
        description: " Fillières : Mathématiques, Informatique, Physique (MIP) -> Bases solides en sciences fondamentales et algorithmique.",
        icon: (
          <img
            src="https://images.seeklogo.com/logo-png/53/1/faculte-des-sciences-et-techniques-de-mohammedia-logo-png_seeklogo-531871.png"
            alt="FSTM Logo"
            className="w-32 h-32 object-contain"
          />
        )
      },
      {
        date: "2018 – 2021",
        title: "Baccalauréat Sciences Physiques – Lycée BAJJA",
        description: "Région Settat. Option Arabe. Préparation intensive aux études supérieures scientifiques.",
        icon: <PenTool className="w-6 h-6 text-primary" />
      },
    ];


    const EducationSection = () => {
      const controls = useAnimation();
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true, amount: 0.1 });
    
      useEffect(() => {
        if (isInView) {
          controls.start('visible');
        }
      }, [isInView, controls]);
    
      return (
        <SectionWrapper id="education">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">Mon <span className="text-primary">Parcours Académique</span></h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Mon parcours éducatif, des fondations scientifiques à ma spécialisation actuelle en ingénierie informatique.
          </p>
          <div ref={ref} className="relative max-w-3xl mx-auto">
            <motion.div 
              className="absolute top-0 left-1/2 -ml-[2px] h-full w-1 bg-primary/20"
              initial={{ scaleY: 0, originY: 0 }}
              animate={isInView ? { scaleY: 1, transition: { duration: 1, ease: "easeOut" } } : {}}
            />
            {educationHistory.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: (i) => ({
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, delay: i * 0.2 + 0.5, ease: "easeOut" } 
                  })
                }}
                className={`mb-12 flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                <div className={`flex-shrink-0 mr-6 md:mr-0 ${index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'} z-10`}>
                  <div className="w-32 h-32">
                    {item.icon}
                  </div>
                </div>

                <div className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="flex items-center text-sm">
                        <CalendarDays className="w-4 h-4 mr-2 text-muted-foreground" />
                        {item.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      );
    };

    const ContactSection = () => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({ name: '', email: '', message: '' });
      const [isSubmitting, setIsSubmitting] = useState(false);

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
          const response = await fetch("https://formspree.io/f/xovdbrww", { 
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            toast({
              title: "Message envoyé!",
              description: "Merci de m'avoir contacté. Je vous répondrai bientôt.",
              variant: "default",
            });
            setFormData({ name: '', email: '', message: '' });
          } else {
            throw new Error("Échec de l'envoi du message");
          }
        } catch (error) {
          toast({
            title: "Erreur d'envoi",
            description: "Une erreur s'est produite. Veuillez réessayer plus tard ou me contacter directement.",
            variant: "destructive",
          });
        } finally {
          setIsSubmitting(false);
        }
      };
      
      const socialLinks = [
        { icon: <Github className="h-8 w-8" />, href: "https://github.com/0MLH1", label: "GitHub" },
        { icon: <Linkedin className="h-8 w-8" />, href: "https://www.linkedin.com/in/mohamed-lahmam-a4655b27a/", label: "LinkedIn" },
        { icon: <Mail className="h-8 w-8" />, href: "mailto:lh186261@gmail.com", label: "Email" },
      ];


      return (
        <SectionWrapper id="contact">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">Entrons en <span className="text-primary">Contact</span></h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour toute question, opportunité de collaboration ou simplement pour discuter.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Card className="p-6 sm:p-8 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">Nom complet</Label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Votre nom" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">Adresse e-mail</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="votre.email@example.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Votre message ici..." 
                      rows={5} 
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" className="w-full group" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                    <Send className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>
            </motion.div>
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay:0.2, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-semibold">Informations de Contact</h3>
              <div className="space-y-4">
                <motion.a href="mailto:lh186261@gmail.com" className="flex items-center group">
                  <Mail className="h-6 w-6 mr-4 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">lh186261@gmail.com</span>
                </motion.a>
                <motion.a href="tel:+212*********" className="flex items-center group">
                  <Phone className="h-6 w-6 mr-4 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">+212 *** *** ***</span>
                </motion.a>
                <div className="flex items-center group">
                  <MapPin className="h-6 w-6 mr-4 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">Casablanca, Maroc</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold pt-6">Suivez-moi</h3>
              <div className="flex space-x-6">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-primary/20 text-primary hover:text-primary transition-all duration-300 ease-in-out"
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </SectionWrapper>
      );
    };
    
    const HomePage = () => {
      return (
        <>
          <HeroSection />
          <AdvancedFullStackSpecialization />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </>
      );
    };

    export default HomePage;
  
