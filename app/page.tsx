"use client";

import { Button } from "@/components/ui/button";
import { Card, { CardContent } from "@/components/ui/card";
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

export default function Home() {

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
        "Collaborated with product and operations teams"
      ],
      skills: [
        "AWS","Azure","Terraform","Docker","Kubernetes",
        "CI/CD","Jenkins","HELM","ArgoCD"
      ]
    }
  ];

  const projects = [
    {
      title: "FinTech Kubernetes Platform",
      description: "Built and operated a scalable EKS platform with zero-downtime deployments.",
      skills: ["AWS","EKS","Kubernetes","Terraform","ArgoCD","Helm"]
    }
  ];

  const skillsGrouped = {
    "Core DevOps": {
      Cloud: ["AWS", "Azure"],
      Orchestration: ["Kubernetes", "Docker", "EKS"],
      IaC: ["Terraform"],
      "CI / CD": ["Jenkins", "GitHub Actions", "ArgoCD", "HELM"],
      Observability: ["Prometheus", "Grafana", "New Relic"],
      Security: ["ORCA Security", "DevSecOps"]
    }
  };

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">

        {/* HERO */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col items-center text-center mb-16"
        >
          <img
            src="/images/roshan_profile_pic.jpeg"
            className="w-40 h-40 rounded-full mb-8 shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-4">Roshan Prasad</h1>
          <p className="text-xl text-muted-foreground mb-6">
            👩‍💻 DevOps ☁️ Cloud 🛡️ DevSecOps ⚙️ Engineer
          </p>
        </motion.div>

        <Tabs defaultValue="about" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-5">
            <TabsTrigger value="about"><User className="mr-2 h-4 w-4" />About</TabsTrigger>
            <TabsTrigger value="experience"><Briefcase className="mr-2 h-4 w-4" />Experience</TabsTrigger>
            <TabsTrigger value="projects"><Briefcase className="mr-2 h-4 w-4" />Projects</TabsTrigger>
            <TabsTrigger value="certifications"><GraduationCap className="mr-2 h-4 w-4" />Certifications</TabsTrigger>
            <TabsTrigger value="contact"><MessageSquare className="mr-2 h-4 w-4" />Contact</TabsTrigger>
          </TabsList>

          {/* ABOUT */}
          <TabsContent value="about" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>

                {Object.entries(skillsGrouped).map(([category, groups]) => (
                  <div key={category} className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">{category}</h3>
                    {Object.entries(groups).map(([sub, items]) => (
                      <div key={sub} className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-medium min-w-[140px]">{sub} :</span>
                        {items.map(skill => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* EXPERIENCE */}
          <TabsContent value="experience" className="mt-6">
            <ScrollArea className="h-[500px] pr-4">
              {experiences.map((exp, i) => (
                <Card key={i} className="mb-4">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground mb-2">
                      {exp.company} • {exp.period}
                    </p>
                    <ul className="list-disc pl-5 mb-4">
                      {exp.description.map((d, idx) => <li key={idx}>{d}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </ScrollArea>
          </TabsContent>

          {/* PROJECTS */}
          <TabsContent value="projects" className="mt-6">
            {projects.map((p, i) => (
              <Card key={i} className="mb-4">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-muted-foreground mb-4">{p.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* CERTIFICATIONS (FIXED) */}
          <TabsContent value="certifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p>AWS Solutions Architect – Associate (In Progress)</p>
                <p>Terraform Associate (003) – In Progress</p>
                <p>Kubernetes & Cloud Native Associate – In Progress</p>
                <p className="mt-4">
                  B.Tech (CSE) – JNTUH • 2016–2020
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* CONTACT (FIXED) */}
          <TabsContent value="contact" className="mt-6">
            <Card>
              <CardContent className="p-6 space-y-3">
                <p>Email: roshanpothabattula@gmail.com</p>
                <p>Phone: +91 9603457742</p>
                <p>GitHub: github.com/roshanprasadp</p>
                <p>LinkedIn: linkedin.com/in/iamroshanprasad</p>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </main>
  );
}
