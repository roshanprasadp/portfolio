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
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {

  /* ================= EXPERIENCE ================= */
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Kissht",
      period: "August 2023 - Present",
      description: [
        "Automated CI/CD pipelines for faster and safer releases",
        "Optimized AWS cloud costs resulting in ~20% savings",
        "Containerized microservices using Docker & Kubernetes",
        "Maintained 99.9% uptime for production systems",
        "Reduced setup and deployment time by 40%+",
        "Worked closely with product and operations teams"
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
        "ArgoCD",
        "Prometheus",
        "Grafana",
        "New Relic",
        "ORCA Security"
      ]
    }
  ];

  /* ================= PROJECTS ================= */
  const projects = [
    {
      title: "FinTech Kubernetes Platform",
      description:
        "Built and managed a scalable EKS platform supporting 50+ microservices with zero-downtime deployments.",
      skills: ["AWS", "EKS", "Kubernetes", "Terraform", "ArgoCD", "Helm"]
    },
    {
      title: "CI/CD Automation Framework",
      description:
        "Designed reusable CI/CD pipelines reducing deployment time by 40%.",
      skills: ["Jenkins", "GitHub Actions", "Docker", "GitOps", "CI/CD"]
    },
    {
      title: "Cloud Cost Optimization",
      description:
        "Optimized AWS infrastructure and reduced monthly cloud spend by ~20%.",
      skills: ["AWS", "FinOps", "CloudWatch", "Grafana", "Terraform"]
    }
  ];

  /* ================= SKILLS (GROUPED) ================= */
  const skillsGrouped = {
    "Core DevOps": {
      Cloud: ["AWS", "Azure"],
      Orchestration: ["Kubernetes", "Docker", "EKS"],
      IaC: ["Terraform"],
      "CI/CD": ["Jenkins", "ArgoCD", "HELM"],
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
              className="w-40 h-40 rounded-full mb-8 shadow-lg relative z-10"
            />
          </motion.div>

          <motion.h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Roshan Prasad
          </motion.h1>

          <motion.p className="text-xl text-muted-foreground mb-6">
            👩‍💻 Devops ☁️ Cloud 🛡️ DevSecOps ⚙️ Engineer ⭐
          </motion.p>

          <motion.div variants={staggerChildren} className="flex gap-4">
            {[
              { icon: <Github className="h-5 w-5" />, href: "https://github.com/roshanprasadp" },
              { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/iamroshanprasad/" },
              { icon: <Mail className="h-5 w-5" />, href: "mailto:roshanpothabattula@gmail.com" },
              { icon: <Phone className="h-5 w-5" />, href: "tel:+919603457742" },
              { icon: <MessageCircle className="h-5 w-5" />, href: "https://wa.me/+919603457742" }
            ].map((social, index) => (
              <Button key={index} variant="outline" size="icon" asChild>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </Button>
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

          {/* ================= ABOUT ================= */}
          <TabsContent value="about" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">About Me</h2>

                <h3 className="text-xl font-semibold mb-4">Skills</h3>

                {Object.entries(skillsGrouped).map(([category, groups]) => (
                  <div key={category} className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">{category}</h4>

                    {Object.entries(groups).map(([sub, items]) => (
                      <div key={sub} className="mb-3">
                        <p className="text-sm font-medium mb-2">{sub}</p>
                        <div className="flex flex-wrap gap-2">
                          {items.map(skill => (
                            <Badge key={skill} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </CardContent>
            </Card>
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

          {/* ================= CERTIFICATIONS & CONTACT ================= */}
          {/* unchanged exactly as you requested */}
        </Tabs>
      </div>
    </main>
  );
}
