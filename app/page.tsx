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
      title: "Cloud Security Engineer",
      company: "DAZN",
      period: "June 2026 - Present",
      description: [
          "Developed centralized Wiz Security dashboards to monitor cloud risks, vulnerabilities, misconfigurations, and security findings across multiple AWS accounts for SecOps teams.",
          "Engineered Python-based automation using Azure Functions and Azure Blob Storage to archive Microsoft Sentinel logs and optimize long-term SIEM storage costs.",
          "Implemented Terraform and GitHub Actions to automate infrastructure deployment and management for Microsoft Sentinel log archival and cloud security workflows.",
          "Designed Logic App workflows to automate Microsoft Teams and email notifications for critical security findings, vulnerabilities, and proactive SecOps response.",
          "Implemented AWS WAF rules and Firewall Manager managed rules to strengthen application security and protect enterprise cloud workloads from malicious requests.",
          "Collaborated with Security Architecture, Cloud, DevOps, SIEM, SOAR, and Anti-Piracy teams to support incident response across enterprise cloud environments.",
          "Supported JA4 fingerprint scanning, ASN reputation filtering, and route-based traffic blocking to strengthen edge security and mitigate suspicious network activity.",
          "Participated in threat hunting, microservice security reviews, change request assessments, and security control validation to proactively identify cloud security risks."

      ],
      skills: [
        "AWS",
        "Azure",
        "Terraform",
        "Github Actions",
        "WIZ",
        "Coralogix",
        "Azure Sentinel & Defender",
        "Python",
        "Automations"
      ]
    },

      {
      title: "DevOps Engineer",
      company: "Kissht",
      period: "August 2023 - June 2026",
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
    title: "DAZN - Cloud Security, Wiz, SecOps Automation",
    description: [
      "Developed centralized Wiz dashboards across multiple AWS accounts to monitor cloud risks, vulnerabilities, misconfigurations, and compliance posture.",
      "Automated Microsoft Teams and email alerts for critical security findings, improving incident visibility and enabling proactive SecOps response.",
      "Supported threat hunting, microservice security reviews, change assessments, and security control validation to strengthen enterprise cloud security."
    ],
    skills: [
      "AWS",
      "Wiz Security",
      "Cloud Security",
      "Vulnerability Management",
      "Threat Hunting",
      "SecOps",
      "Microsoft Teams",
      "Security Automation"
    ]
  },

  {
    title: "DAZN - Microsoft Sentinel Log Cost Optimization",
    description: [
      "Built Python-based automation using Azure Functions and Azure Blob Storage to archive Microsoft Sentinel logs and optimize long-term SIEM retention.",
      "Implemented Terraform infrastructure and GitHub Actions pipelines to automate deployment, management, and repeatable execution of the archival workflow.",
      "Reduced long-term SIEM storage costs through automated log archival while improving operational efficiency and reducing manual security administration."
    ],
    skills: [
      "Microsoft Sentinel",
      "Azure Functions",
      "Azure Blob Storage",
      "Python",
      "Terraform",
      "GitHub Actions",
      "SIEM",
      "Cloud Cost Optimization"
    ]
  },

  {
    title: "DAZN - AWS WAF, Edge Security & Threat Protection",
    description: [
      "Implemented AWS WAF and Firewall Manager managed rules to strengthen application security and protect enterprise workloads from malicious requests.",
      "Supported JA4 fingerprint analysis, ASN reputation filtering, and route-based traffic blocking to identify suspicious activity and strengthen edge security.",
      "Collaborated with Security Architecture, Cloud, DevOps, SIEM, SOAR, and Anti-Piracy teams to investigate incidents and improve security controls."
    ],
    skills: [
      "AWS WAF",
      "AWS Firewall Manager",
      "JA4 Fingerprinting",
      "ASN Filtering",
      "Route-based Blocking",
      "Application Security",
      "SIEM",
      "SOAR"
    ]
  },
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
  "Cloud Security": {
    "Cloud Security": ["Wiz Security", "Microsoft Sentinel", "Microsoft Defender"],
    "Application Security": ["AWS WAF", "Firewall Manager", "IAM", "SonarQube"],
    "Network Security": ["JA4 Fingerprinting", "ASN Filtering", "Route-based Blocking"],
    "Security Monitoring": ["Vulnerability Management", "Security Findings", "Cloud Risk Monitoring"]
  },

  "Core DevOps": {
    Cloud: ["AWS", "Azure"],
    Orchestration: ["Kubernetes", "Docker", "EKS"],
    IaC: ["Terraform", "Ansible"],
    "CI/CD": ["Jenkins", "GitHub Actions", "AWS CodePipeline"],
    "GitOps": ["ArgoCD", "Helm"],
    "Observability": ["Prometheus", "Grafana", "New Relic", "Coralogix"],
    "FinOps": ["AWS Cost Explorer", "EC2 Rightsizing", "S3 Lifecycle", "Spot Adoption"]
  },

  "Coding / Platforms": {
    Scripting: ["Python", "Bash"],
    "Version Control": ["Git", "GitHub", "Bitbucket"],
    "Operating Systems": ["Linux", "Windows", "macOS"],
    "Databases": ["PostgreSQL", "MySQL", "Redis", "Elasticsearch"],
    Platforms: ["Snowflake", "AWS Lambda", "Azure Functions", "Azure Blob Storage"]
  },

  "Soft Skills": {
    Ownership: ["Production Ownership", "Accountability"],
    Reliability: ["Incident Response", "RCA", "Blameless Postmortems"],
    Collaboration: ["Stakeholder Communication", "Cross-functional Alignment"],
    Mindset: ["Automation First", "Continuous Improvement"],
    Decision: ["Risk-based Decision Making", "Operational Excellence"],
    Knowledge: ["Runbooks", "Technical Documentation", "Knowledge Sharing"]
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
          <TabsList className="grid w-full grid-cols-4">
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
      👋 I design and secure production-grade cloud environments across AWS and Azure, specializing in cloud security, risk visibility, vulnerability management, SIEM, WAF, and proactive security operations.
      <br /><br />
      ✨ I drive measurable security impact through Wiz, Microsoft Sentinel, Azure Functions, Terraform, and GitHub Actions, automating security workflows, optimizing SIEM storage costs, and strengthening cloud security posture.
      <br /><br />
      💡 I also specialize in DevOps and cloud infrastructure, leveraging Kubernetes, Terraform, CI/CD, GitOps, observability, and Python automation to build secure, scalable, reliable, and cost-efficient cloud platforms.
    </p>

        {Object.entries(skillsGrouped).map(([category, groups]) => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>

            {Object.entries(groups).map(([sub, items]) => (
            <div
              key={sub}
              className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3"
            >
              <span className="font-medium sm:min-w-[160px]">
                {sub} :
              </span>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
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
