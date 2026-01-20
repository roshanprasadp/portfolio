"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Briefcase, 
  GraduationCap,
  User,
  MessageSquare,
  Phone,
  MessageCircle
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Kissht",
      period: "August 2023 - Present",
      description: "Led DevOps initiatives by automating deployments, optimizing cloud costs, and containerizing services with Docker & Kubernetes; improved scalability, uptime (99.9%), and reduced setup/deployment time by 40%+ while ensuring seamless collaboration across product and operations teams.",
      Skills: ["AWS", "Azure", "Terraform", "GitOps", "Docker", "Kubernetes", "CI/CD", "Jenkins", "HELM", "ArgoCD", "Linux", "Prometheus", "Grafana", "New Relic", "ORCA Security", "Python", "SQL", "Automation", "Snowflake", ]
    }
  ];
/*
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Built a full-featured e-commerce platform with Next.js and Stripe integration.",
      link: "https://github.com/yourusername/ecommerce",
      skills: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"]
    },
    {
      title: "Task Management App",
      description: "Developed a real-time task management application with collaborative features.",
      link: "https://github.com/yourusername/task-manager",
      skills: ["React", "Firebase", "Material-UI", "TypeScript"]
    }
  ];
*/
  const skills = [
    "AWS", "Azure", "Kubernetes", "AWS", "Terraform",
    "Linux", "Bash", "Docker", "Git", "Prometheus", "Grafana",
    "Git", "Jenkins", "CI/CD", "Agile", "Team Leadership", "EKS"
  ];

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl transform -translate-y-2"></div>
            <img
              src="/images/roshan_profile_pic.jpeg"
              alt="Profile"
              className="w-40 h-40 rounded-full mb-8 shadow-lg relative z-10 transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
          <motion.h1 
            variants={fadeIn}
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
          >
            Roshan Prasad
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-muted-foreground mb-6"
          >
            👩‍💻 Devops ☁️ Cloud 🛡️ DevSecOps ⚙️ Engineer ⭐
          </motion.p>
          <motion.div 
            variants={staggerChildren}
            className="flex gap-4"
          >
            {[
              { icon: <Github className="h-5 w-5" />, href: "https://github.com/roshanprasadp" },
              { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/iamroshanprasad/" },
              { icon: <Mail className="h-5 w-5" />, href: "mailto:roshanpothabattula@gmail.com" },
              { icon: <Phone className="h-5 w-5" />, href: "tel:+919603457742" },
              { icon: <MessageCircle className="h-5 w-5" />, href: "https://wa.me/+919603457742" }
            ].map((social, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <Tabs defaultValue="about" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            {[
              { value: "about", icon: <User className="h-4 w-4 mr-2" />, label: "About" },
              { value: "experience", icon: <Briefcase className="h-4 w-4 mr-2" />, label: "Experience" },
              { value: "Certifications", icon: <GraduationCap className="h-4 w-4 mr-2" />, label: "Certifications" },
              { value: "contact", icon: <MessageSquare className="h-4 w-4 mr-2" />, label: "Contact" }
            ].map(tab => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {tab.icon}
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                     👋 I’m Roshan Prasad, a results-driven DevOps Engineer specializing in automation and cloud cost optimization, with hands-on expertise in AWS, Kubernetes, Terraform, and CI/CD pipelines for scalable, resilient systems. 🚀💼
                      <br /><br />   
                      ✨ I have a proven record of reducing deployment cycles by 40%, cutting cloud spend by 20%, and ensuring 99.9% uptime for microservices in high-traffic fintech environments through smart automation and containerization.
                      <br /><br />          
                      💡 My passion lies in designing efficient cloud infrastructures and enabling zero-downtime deployments, while aligning infrastructure goals with business needs to deliver reliable, cost-effective, and future-ready solutions.🌍✨
                  </p>
                  <h3 className="text-xl font-semibold mb-4">Skills</h3>
                  <motion.div 
                    variants={staggerChildren}
                    className="flex flex-wrap gap-2"
                  >
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        variants={fadeIn}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary"
                          className="transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="experience" className="mt-6">
            <ScrollArea className="h-[600px] pr-4">
              <motion.div
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
              >
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="mb-4"
                  >
                    <Card className="transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-muted-foreground mb-2">{exp.company} • {exp.period}</p>
                        <p className="mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="transition-colors duration-300 hover:bg-primary hover:text-primary-foreground">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="Certifications" className="mt-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <motion.div 
                    className="mb-6"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-xl font-semibold">Certifications</h3>
                    <p className="text-muted-foreground">AWS Solutions Architect Associate - Inprogress</p>
                    <p className="text-muted-foreground">Terraform Associate (003) - Inprogress</p>
                    <p className="text-muted-foreground">Kubernetes and Cloud Native Associate - Inprogress</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-xl font-semibold">Bachelor of Technology (CSE)</h3>
                    <p className="text-muted-foreground">Jawaharlal Nehru Technological University Hyderabad(JNTUH) • 2016 - 2020</p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="contact" className="mt-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                  <motion.div 
                    className="space-y-4"
                    variants={staggerChildren}
                  >
                    {[
                      { icon: <Mail className="h-5 w-5" />, href: "mailto:roshanpothabattula@gmail.com", text: "roshanpothabattula@gmail.com" },
                      { icon: <Phone className="h-5 w-5" />, href: "tel:+919603457742", text: "+91 9603457742" },
                      { icon: <MessageCircle className="h-5 w-5" />, href: "https://wa.me/9603457742", text: "WhatsApp" },
                      { icon: <Github className="h-5 w-5" />, href: "https://github.com/roshanprasadp", text: "https://github.com/roshanprasadp" },
                      { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/iamroshanprasad/", text: "https://www.linkedin.com/in/iamroshanprasad/" }
                    ].map((contact, index) => (
                      <motion.div
                        key={index}
                        variants={fadeIn}
                        className="flex items-center gap-4"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {contact.icon}
                        <a 
                          href={contact.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary hover:underline transition-colors duration-300"
                        >
                          {contact.text}
                        </a>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
