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
            "Executed 30+ monthly production releases across AWS ECS/EC2, handling patches, hotfixes, and incidents while maintaining 99%+ uptime",
            "Enhanced CI/CD pipelines by fixing build and deployment failures and optimising Dockerfiles, improving deployment success by 20%+ and reducing release time",
            "Designed and managed Terraform-based AWS infrastructure including ECS, VPC, IAM, and networking, cutting environment provisioning time by 80% from days to hours",
            "Refactored and modularised Terraform codebases to eliminate configuration drift and enable reliable multi-environment deployments",
            "Supported 150+ microservices serving 54M+ users and $0.5B+ loan disbursals, ensuring scalability, fault tolerance, and high availability",
            "Implemented zero-downtime deployment strategies such as Blue/Green and Canary releases, significantly reducing production risk and customer impact",
            "Achieved $10K+ cloud cost savings through ECS and EC2 rightsizing, autoscaling optimisation, lifecycle policies, and stale resource cleanup",
            "Strengthened AWS security posture by enforcing least-privilege IAM, hardening security groups, resolving public exposures, and improving observability and incident response"
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
      title: "Kissht - Kubernetes, Terraform, Observability",
      description: [
        "Delivered 30+ monthly production releases across AWS, resolving incidents while sustaining 99 percent uptime at scale.",
        "Supported 50+ microservices serving 54M+ users with 0.5B loans, improving reliability via observability and alerts.",
        "Mentored engineers and drove PoC’s, optimizing Terraform, CI/CD, and performance to reduce deployment failures."
      ],
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
      title: "Ring - CI/CD Automation Project",
      description: [
        "Improved CI/CD reliability with Docker image optimisation, pipeline fixes, and boosting deployment success by 20 percent.",
        "Migrated monolithic workloads to containerised, event-driven architectures, lowering maintenance overhead.",
        "Applied networking best practices, optimized Docker images, and built high-throughput architectures."
        
      ],
      skills: [
        "Jenkins",
        "AWS Code Pipeline",
        "Docker",
        "EC2",
        "CI/CD",
        "Cloud",
        "Linux and Netowking"
      ]
    },
    {
      title: "Onemi - Cloud and APP Security",
      description: [
        "Strengthened AWS security by removing public exposures, dangling DNS, and enforcing least-privilege IAM.",
        "Hardened network and app security using security groups, firewalls, WAF rules, ORCA fixes, and CORS remediation.",
        "Reduced operational risk through security documentation, patching workflows, and proactive vulnerability fixes."
      ],
      skills: [
        "AWS GuardDuty",
        "WAF / Web Application Firewall",
        "ORCA Security",
        "Cloud Security",
        "KMS Encryption",
        "SonarQube",
        "Trivy"
      ]
    },
    {
      title: "Onemi - Cloud Cost Optimisation Project",
      description: [
        "Achieved 10K+ dollar cloud savings via rightsizing, automated cleanup, storage tiering, and serverless adoption.",
        "Migrated eligible services from ECS to AWS Lambda, improving scalability and cutting compute and ops overhead.",
        "Automated cost-optimisation scripts and dashboards, improving visibility and ongoing FinOps governance."
        
      ],
      skills: [
        "Amnic",
        "AWS Cost Explorer",
        "FinOps Techniques",
        "Python Scripting",
        "Bash",
        "Automation Flow",
        "AWS"
      ]
    },
    {
      title: "Internal Automation Projected",
      description: [
        "Built cross-account S3 replication pipelines transferring 10TB+ data using AWS DataSync, batch operations, and replication rules.",
        "Automated infrastructure provisioning with Terraform, reducing environment setup time from days to hours.",
        "Streamlined reporting and ops automation with Python and AWS services, eliminating manual effort by 25 percent."
      ],
      skills: [
        "Snowflake",
        "MySql",
        "Python Scripting",
        "Bash",
        "AWS Lambda",
        "EventBridge",
        "Airflow"
      ]
    }
  ];

  /* ================= SKILLS (3 SECTIONS) ================= */
  const skillsGrouped = {
    "Core DevOps": {
      Cloud: ["AWS", "Azure"],
      Orchestration: ["Kubernetes", "Docker", "EKS"],
      IaC: ["Terraform", "Ansible"],
      "CI/CD": ["Jenkins", "AWS CodePipeline", "Git Lab"],
      "GitOps" : ["ArgoCD", "HELM"],
      "Observability" : ["Prometheus", "Grafana", "New Relic"],
      "Security" : ["ORCA Security", "Guard Duty", "WAF", "Cloud Security", "SonarQube"],
      "FinOps" : ["Amnic", "AWS Cost Explorer"]
      
    },
    "Coding / Platforms": {
      Scripting: ["Python", "Bash"],
      "Version Control" : ["Git", "Bitbucket", "Github"],
      "Operating Systems" : ["Linux", "Mac", "Windows"],
      "Databases" : ["MySql", "MongoDB", "Redis"],
      Platforms: ["Linux", "Snowflake"],
    },
    "Soft Skills": {
      Ownership: ["Production Ownership", "Accountability"],
      Reliability: ["Incident Response", "RCA", "Blameless Postmortems"],
      Collaboration: ["Stakeholder Communication", "Cross-functional Alignment"],
      Mindset: ["Automation First", "Continuous Improvement"],
      Decision: ["Risk-based Decision Making", "Operational Excellence"],
      Knowledge: ["Runbooks", "Technical Documentation"]
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
            🛡️ DevSecOps    ☁️ Cloud    📈 SRE    🤖 Agentic AI
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
            {/* <TabsTrigger value="Certifications"><GraduationCap className="mr-2 h-4 w-4" />Certifications</TabsTrigger> */}
            <TabsTrigger value="contact"><MessageSquare className="mr-2 h-4 w-4" />Contact</TabsTrigger>
          </TabsList>

          {/* ================= ABOUT / SKILLS ================= */}
<TabsContent value="about" className="mt-6">
  <motion.div initial="hidden" animate="visible" variants={fadeIn}>
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          👋 I design, scale, and operate production-grade cloud platforms, delivering 30+ monthly AWS releases, supporting 150+ microservices, and consistently maintaining 99.9%+ uptime in high-traffic fintech environments.
          <br /><br />
          ✨ I drive measurable business impact through automation, cutting deployment time by 40%, reducing cloud costs by 20%+, and accelerating infrastructure provisioning from days to hours using Terraform, CI/CD, and containerisation.
          <br /><br />
          💡 I specialise in building resilient, zero-downtime systems, implementing Blue/Green and Canary deployments, strengthening cloud security, and aligning infrastructure architecture with business growth, reliability, and cost efficiency.
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

        <ul className="list-disc pl-5 mb-4 space-y-1">
          {project.description.map((point, i) => (
            <li key={i} className="text-muted-foreground">
              {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.skills.map(skill => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  ))}
</TabsContent>

          {/* ================= CERTIFICATIONS ================= */}
          {/* <TabsContent value="Certifications" className="mt-6">
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
          </TabsContent> */}

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
