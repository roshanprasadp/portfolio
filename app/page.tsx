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

  /* ===================== EXPERIENCE ===================== */
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Kissht",
      period: "August 2023 - Present",
      description: [
        "Automated CI/CD pipelines enabling faster and safer releases",
        "Optimized AWS cloud costs resulting in ~20% monthly savings",
        "Containerized microservices using Docker & Kubernetes",
        "Maintained 99.9% uptime for production workloads",
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

  /* ===================== PROJECTS ===================== */
  const projects = [
    {
      title: "FinTech Kubernetes Platform",
      description:
        "Designed and operated a highly available EKS platform supporting 50+ microservices with zero-downtime deployments.",
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
        "Built reusable CI/CD pipelines reducing deployment time by 40% and enabling secure GitOps workflows.",
      skills: [
        "Jenkins",
        "GitHub Actions",
        "Docker",
        "GitOps",
        "ArgoCD",
        "CI/CD"
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

  /* ===================== SKILLS ===================== */
  const skillsGrouped = {
    "Core DevOps": {
      Cloud: ["AWS", "Azure"],
      Orchestration: ["Kubernetes", "Docker", "EKS"],
      IaC: ["Terraform"],
      "CI / CD": ["Jenkins", "GitHub Actions", "ArgoCD", "HELM"],
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
      Leadership: ["Mentoring", "Ownership"],
      Process: ["Agile", "Problem Solving"]
    }
  };

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">

        {/* ===================== HERO ===================== */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col items-center text-center mb-16"
        >
          <img
            src="/images/roshan_profile_pic.jpeg"
            alt="Profile"
            className="w-40 h-40 rounded-full mb-8 shadow-lg"
          />

          <h1 className="text-4xl font-bold mb-4">Roshan Prasad</h1>
          <p className="text-xl text-muted-foreground mb-6">
            👩‍💻 DevOps ☁️ Cloud 🛡️ DevSecOps ⚙️ Engineer ⭐
          </p>

          <div className="flex gap-4">
            <Button asChild variant="outline" size="icon">
              <a href="https://github.com/roshanprasadp" target="_blank"><Github /></a>
            </Button>
            <Button asChild variant="outline" size="icon">
              <a href="https://www.linkedin.com/in/iamroshanprasad/" target="_blank"><Linkedin /></a>
            </Button>
            <Button asChild variant="outline" size="icon">
              <a href="mailto:roshanbattula@gmail.com"><Mail /></a>
            </Button>
          </div>
        </motion.div>

        {/* ===================== TABS ===================== */}
        <Tabs defaultValue="about" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-5 w-full">
            <TabsTrigger value="about"><User className="mr-2 h-4 w-4" />About</TabsTrigger>
            <TabsTrigger value="experience"><Briefcase className="mr-2 h-4 w-4" />Experience</TabsTrigger>
            <TabsTrigger value="projects"><Briefcase className="mr-2 h-4 w-4" />Projects</TabsTrigger>
            <TabsTrigger value="certifications"><GraduationCap className="mr-2 h-4 w-4" />Certifications</TabsTrigger>
            <TabsTrigger value="contact"><MessageSquare className="mr-2 h-4 w-4" />Contact</TabsTrigger>
          </TabsList>

          {/* ===================== ABOUT ===================== */}
          <TabsContent value="about" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                <p className="text-muted-foreground mb-6">
                  Results-driven DevOps Engineer specializing in automation,
                  cloud cost optimization, and scalable infrastructure.
                </p>

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

          {/* ===================== EXPERIENCE ===================== */}
          <TabsContent value="experience" className="mt-6">
            <ScrollArea className="h-[600px] pr-4">
              {experiences.map((exp, i) => (
                <Card key={i} className="mb-4">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground mb-2">
                      {exp.company} • {exp.period}
                    </p>

                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      {exp.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
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

          {/* ===================== PROJECTS ===================== */}
          <TabsContent value="projects" className="mt-6">
            {projects.map((project, i) => (
              <Card key={i} className="mb-4">
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

          {/* ===================== CERTIFICATIONS ===================== */}
          <TabsContent value="certifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p>AWS Solutions Architect – Associate (In Progress)</p>
                <p>Terraform Associate (003) – In Progress</p>
                <p>Kubernetes & Cloud Native Associate – In Progress</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ===================== CONTACT ===================== */}
          <TabsContent value="contact" className="mt-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <p>Email: roshanpothabattula@gmail.com</p>
                <p>Phone: +91 9603457742</p>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </main>
  );
}
