export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  code?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  tags: string[];
  sections: BlogSection[];
};

// Add new posts to this array. The blog automatically sorts them by publishedAt.
// Set featured: true to include a post in the Top Posts section.
export const blogPosts: BlogPost[] = [
  {
    slug: 'kubernetes-pod-running-but-unavailable',
    title: 'Kubernetes Pod Is Running but the Application Is Unavailable',
    excerpt: 'A practical troubleshooting flow for checking readiness, Services, endpoints, ingress, networking, and application health without guessing.',
    category: 'Kubernetes',
    publishedAt: '2026-10-24',
    readTime: '6 min read',
    tags: ['Kubernetes', 'SRE', 'Troubleshooting'],
    sections: [
      { heading: 'Start with the symptom', paragraphs: ['A Pod in Running state does not guarantee that users can reach the application. Kubernetes may have started the container while the application is not ready, the Service selector may not match, or traffic may fail farther up the path.'] },
      { heading: 'Follow the request path', paragraphs: ['Troubleshoot from the workload outward. Check the container, readiness probe, Service selector, EndpointSlices, ingress or load balancer, and network controls in that order.'] , bullets: ['kubectl get pods -o wide', 'kubectl describe pod <pod-name>', 'kubectl get svc', 'kubectl get endpointslices', 'kubectl get ingress'] },
      { heading: 'Check readiness and logs', paragraphs: ['A failing readiness probe removes a Pod from normal Service traffic while leaving the container running. Inspect Events and application logs before changing probes or restarting workloads.'], code: 'kubectl describe pod <pod-name>\nkubectl logs <pod-name> --all-containers=true\nkubectl get pod <pod-name> -o yaml' },
      { heading: 'Validate the Service selector', paragraphs: ['Compare the Service selector with the labels on the Pods. If the selector does not match, the Service can have no usable endpoints even when Pods are healthy. Test connectivity from inside the cluster before moving to ingress or external load-balancer configuration.'] },
      { heading: 'SRE takeaway', paragraphs: ['Use a repeatable request-path checklist and change one thing at a time. Record the symptom, evidence, root cause, mitigation, and follow-up action so the same incident becomes easier to diagnose next time.'] }
    ]
  },
  {
    slug: 'terraform-infrastructure-changes-safely',
    title: 'A Safer Workflow for Terraform Infrastructure Changes',
    excerpt: 'A practical workflow for reviewing plans, isolating environments, protecting state, and making infrastructure changes repeatable in CI/CD.',
    category: 'Terraform',
    publishedAt: '2026-10-21',
    readTime: '5 min read',
    tags: ['Terraform', 'AWS', 'CI/CD'],
    sections: [
      { heading: 'Treat infrastructure changes like application changes', paragraphs: ['Terraform makes infrastructure repeatable, but a successful command is not proof that a change is safe. Use version control, peer review, a plan review, and a controlled apply process.'] },
      { heading: 'A simple workflow', paragraphs: ['Keep reusable modules separate from environment-specific configuration and avoid sharing state between unrelated environments.'], bullets: ['Format and validate the configuration.', 'Run a plan against the intended workspace or backend.', 'Review creates, updates, replacements, and deletions.', 'Apply only an approved plan using controlled credentials.', 'Verify the deployed resources and record the outcome.'], code: 'terraform fmt -check\nterraform init\nterraform validate\nterraform plan -out=tfplan' },
      { heading: 'Protect state and credentials', paragraphs: ['Use a remote backend with access controls, encryption, and state locking where supported. Never commit state files, credentials, or sensitive plan output to a public repository. Prefer short-lived workload identity or role-based credentials in CI/CD.'] },
      { heading: 'SRE takeaway', paragraphs: ['A good infrastructure pipeline makes changes reviewable, reversible where possible, and observable after deployment. Treat destructive replacements as explicit risk decisions rather than routine plan output.'] }
    ]
  },
  {
    slug: 'sre-monitoring-alerts-that-matter',
    title: 'SRE Monitoring: Build Alerts That Lead to Action',
    excerpt: 'Use service symptoms, actionable thresholds, and clear runbooks to reduce noisy alerts and help responders find the next step.',
    category: 'SRE & Observability',
    publishedAt: '2026-10-18',
    readTime: '5 min read',
    tags: ['SRE', 'Prometheus', 'Grafana'],
    sections: [
      { heading: 'Monitor user impact first', paragraphs: ['CPU and memory are useful diagnostic signals, but they do not always tell you whether users are experiencing an outage. Start with latency, traffic, errors, and saturation, then add resource metrics to explain the symptoms.'] },
      { heading: 'Make every page actionable', paragraphs: ['An alert should identify the affected service, explain the condition, link to a dashboard or runbook, and clarify when a human needs to respond. Alerts that merely report normal fluctuations create fatigue.'] , bullets: ['Alert on sustained user-visible errors or latency.', 'Add context such as service, environment, and region.', 'Use sensible evaluation windows to avoid transient spikes.', 'Review alert quality after incidents and remove noisy rules.'] },
      { heading: 'Connect metrics to a response', paragraphs: ['Use dashboards to investigate trends and correlations. Document the first checks, safe mitigations, escalation path, and verification steps in the runbook.'] },
      { heading: 'SRE takeaway', paragraphs: ['The goal is not to create more alerts. It is to detect meaningful user impact early and help the on-call engineer make a safe decision quickly.'] }
    ]
  },
  {
    slug: 'aws-cloud-cost-optimization-basics',
    title: 'AWS Cost Optimization Without Guesswork',
    excerpt: 'A practical checklist for finding idle resources, right-sizing compute, reviewing storage lifecycle policies, and validating savings.',
    category: 'Cloud & FinOps',
    publishedAt: '2026-10-12',
    readTime: '4 min read',
    featured: true,
    tags: ['AWS', 'FinOps', 'Cloud'],
    sections: [
      { heading: 'Start with evidence', paragraphs: ['Use billing data and resource utilization together. A low-usage resource is a candidate for review, not an automatic deletion target; check ownership, peak periods, resilience requirements, and dependencies first.'] },
      { heading: 'A repeatable review', bullets: ['Identify idle or oversized compute resources.', 'Review autoscaling policies and non-production schedules.', 'Check unattached volumes, old snapshots, and stale addresses.', 'Apply S3 lifecycle policies based on retention requirements.', 'Compare costs before and after the change.'], paragraphs: ['Assign an owner and document the expected impact for each optimization.'] },
      { heading: 'Protect reliability', paragraphs: ['Cost changes should not silently reduce availability, backup coverage, or performance. Make changes gradually and monitor service health after deployment.'] },
      { heading: 'Takeaway', paragraphs: ['The best savings are measurable, repeatable, and safe. Track realized savings rather than relying only on estimates from a recommendation tool.'] }
    ]
  },
  {
    slug: 'designing-a-reliable-cicd-pipeline',
    title: 'Designing a More Reliable CI/CD Pipeline',
    excerpt: 'Small pipeline practices that make releases more predictable: validation, artifact consistency, safe deployments, and post-release checks.',
    category: 'DevOps & CI/CD',
    publishedAt: '2026-10-08',
    readTime: '4 min read',
    tags: ['CI/CD', 'DevOps', 'Release Engineering'],
    sections: [
      { heading: 'Make failures visible early', paragraphs: ['Run fast checks before expensive integration or deployment stages. Linting, unit tests, dependency checks, and configuration validation can catch common problems before they reach shared environments.'] },
      { heading: 'Promote the same artifact', paragraphs: ['Build an immutable artifact once and promote it between environments instead of rebuilding different outputs for staging and production. This reduces drift and makes rollback decisions easier to reason about.'] },
      { heading: 'Deploy safely and verify', bullets: ['Require review for production changes.', 'Use health checks and progressive rollout strategies where appropriate.', 'Run post-deployment smoke tests.', 'Keep rollback steps documented and tested.', 'Track deployment failures and recovery time over time.'], paragraphs: ['A green pipeline means the defined checks passed; it does not replace production monitoring.'] },
      { heading: 'Takeaway', paragraphs: ['Reliable delivery comes from repeatable processes, clear ownership, observable outcomes, and safe recovery—not simply from adding more pipeline stages.'] }
    ]
  }
];

export const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
export const getPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
export const formatDate = (date: string) => new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
