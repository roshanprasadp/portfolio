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
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {

  /* ================= EXPERIENCE ================= */
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Kissht",
      period: "August 2023 - Present",
      description: [
        "Automated CI/CD pipelines enabling faster and safer releases",
        "Optimized AWS cloud costs resulting in ~20% savings",
        "Containerized microservices using Docker & Kubernetes",
        "Maintained 99.9% uptime for production systems",
        "Reduced setup and deployment time by 40%+",
        "Collaborated closely with product and operations teams"
      ],
      skills: [
        "AWS",
        "Azure",
        "Terraform",
        "GitOps",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Jenkins",
        "HELM",
        "ArgoCD"
      ]
    }
  ];

  /* ================= PROJECTS ================= */
  const projects = [
    {
      title: "FinTech Kubernetes Platform",
      description:
        "Designed and operated a scalable EKS platform supporting 50+ microservices with zero-downtime deployments.",
      skills: [
        "AWS",
        "EKS",
        "Kubernetes",
        "Terraform",
        "ArgoCD",
        "Helm",
        "Prometheus",
        "Grafana"
      ]
    },
    {
      title: "CI/CD Automation Framework",
      description:
        "Built reusable CI/CD pipelines reducing deployment time by 40% and enabling GitOps workflows.",
      skills: [
        "Jenkins",
        "GitHub Actions",
        "Docker",
        "GitOps",
        "CI/CD",
        "ArgoCD"
      ]
    },
    {
      title: "Cloud Cost Optimization",
      description:
        "Reduced AWS monthly spend by ~20% using right-sizing, auto-scaling, and observability-driven decisions.",
      skills: [
        "AWS",
        "FinOps",
        "CloudWatch",
        "Terraform",
        "Grafana"
      ]
    }
  ];

  /* ================= SKILLS (3 SECTIONS) ================= */
  const skillsGrouped = {
    "Core DevOps": {
      Cloud: ["AWS", "Azure"],
      Orchestration: ["Kubernetes", "Docker", "EKS"],
      IaC: ["Terraform"],
      "CI / CD": ["Jenkins", "ArgoCD", "HELM"],
      Observability: ["Prometheus", "Grafana", "New Relic"],
      Security: ["ORCA Security", "DevSecOps"]
    },
    "Coding / Platforms": {
      Languages: ["Python", "Bash", "SQL"],
      Platforms: ["Linux", "Snowflake"],
      SCM: ["Git"]
    },
    "Soft Skills": {
      Collaboration: ["Cross-team Collaboration", "Stakeholder Communication"],
      Leadership: ["Ownership", "Mentoring"],
      Process: ["Agile", "Problem Solving"]
    }
  };

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">

        {/* ================= HERO ================= */}
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

          <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-6">
            👩‍💻 DevOps ☁️ Cloud 🛡️ DevSecOps ⚙️ Engineer ⭐
          </motion.p>

          <motion.div variants={staggerChildren} className="flex gap-4">
            {[
              { icon: <Github className="h-5 w-5" />, href: "https://github.com/roshanprasadp" },
              { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/iamroshanprasad/" },
              { icon: <Mail className="h-5 w-5" />, href: "mailto:roshanpothabattula@gmail.com" },
              { icon: <Phone className="h-5 w-5" />, href: "tel:+919603457742" },
              { icon: <MessageCircle className="h-5 w-5" />, href: "https://wa.me/+919603457742" }
            ].map((social, index) => (
              <motion.div key={index} variants={fadeIn} whileHover={{ scale: 1.1 }}>
                <Button variant="outline" size="icon" asChild>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ================= TABS ================= */}
        <Tabs defaultValue="about" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="about"><User className="mr-2 h-4 w-4" />About</TabsTrigger>
            <TabsTrigger value="experience"><Briefcase className="mr-2 h-4 w-4" />Experience</TabsTrigger>
            <TabsTrigger value="projects"><Briefcase className="mr-2 h-4 w-4" />Projects</TabsTrigger>
            <TabsTrigger value="Certifications"><GraduationCap className="mr-2 h-4 w-4" />Certifications</TabsTrigger>
            <TabsTrigger value="contact"><MessageSquare className="mr-2 h-4 w-4" />Contact</TabsTrigger>
          </TabsList>

          {/* ================= ABOUT / SKILLS ================= */}
<TabsContent value="about" className="mt-6">
  <motion.div initial="hidden" animate="visible" variants={fadeIn}>
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          👋 I’m Roshan Prasad, a results-driven DevOps Engineer specializing in
          automation and cloud cost optimization, with hands-on expertise in
          AWS, Kubernetes, Terraform, and CI/CD pipelines for scalable,
          resilient systems. 🚀💼
          <br /><br />
          ✨ I have a proven record of reducing deployment cycles by 40%,
          cutting cloud spend by 20%, and ensuring 99.9% uptime for
          microservices in high-traffic fintech environments through smart
          automation and containerization.
          <br /><br />
          💡 My passion lies in designing efficient cloud infrastructures and
          enabling zero-downtime deployments, while aligning infrastructure
          goals with business needs to deliver reliable, cost-effective, and
          future-ready solutions. 🌍✨
        </p>

        {Object.entries(skillsGrouped).map(([category, groups]) => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>

            {Object.entries(groups).map(([sub, items]) => (
              <div
                key={sub}
                className="flex flex-wrap items-center gap-2 mb-3"
              >
                <span className="font-medium min-w-[160px]">
                  {sub} :
                </span>
                {items.map(skill => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  </motion.div>
</TabsContent>

          {/* ================= EXPERIENCE ================= */}
          <TabsContent value="experience" className="mt-6">
            <ScrollArea className="h-[600px] pr-4">
              {experiences.map((exp, index) => (
                <Card key={index} className="mb-4">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground mb-2">
                      {exp.company} • {exp.period}
                    </p>

                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </ScrollArea>
          </TabsContent>

          {/* ================= PROJECTS ================= */}
          <TabsContent value="projects" className="mt-6">
            {projects.map((project, index) => (
              <Card key={index} className="mb-4">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map(skill => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* ================= CERTIFICATIONS ================= */}
          <TabsContent value="Certifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p>AWS Solutions Architect Associate – In Progress</p>
                <p>Terraform Associate (003) – In Progress</p>
                <p>Kubernetes and Cloud Native Associate – In Progress</p>
                <p className="mt-4">
                  Bachelor of Technology (CSE) – JNTUH • 2016–2020
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ================= CONTACT ================= */}
          <TabsContent value="contact" className="mt-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4"><Mail className="h-5 w-5" /> roshanpothabattula@gmail.com</div>
                <div className="flex items-center gap-4"><Phone className="h-5 w-5" /> +91 9603457742</div>
                <div className="flex items-center gap-4"><MessageCircle className="h-5 w-5" /> WhatsApp</div>
                <div className="flex items-center gap-4"><Github className="h-5 w-5" /> github.com/roshanprasadp</div>
                <div className="flex items-center gap-4"><Linkedin className="h-5 w-5" /> linkedin.com/in/iamroshanprasad</div>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </main>
  );
}
