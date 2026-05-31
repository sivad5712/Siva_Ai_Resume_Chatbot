/**
 * Siva's Structured Resume Knowledge Base
 * 
 * This file serves as the main source of truth for the chatbot API route.
 * It contains comprehensive, granular, grounded details about Siva's experience,
 * work authorization, preferred rates, project challenges, engineering outcomes,
 * and exact Mermaid.js diagram templates.
 */

export interface CompanyDetails {
  name: string;
  role: string;
  duration: string;
  location: string;
  project: string;
  domain: string;
  businessPurpose: string;
  whyHired: string;
  responsibilities: string[];
  challenge: string;
  outcome: string;
  metrics: string[];
  environment: string[];
  diagram: string;
}

export const resumeKnowledge = {
  personalInfo: {
    name: "Siva D",
    title: "Senior Software Engineer",
    phone: "+1 (614) 664-9498",
    email: "Sivad5712@gmail.com",
    deliveryEmail: "sivad5712@gmail.com",
    github: "https://github.com/sivad5712",
    linkedin: "https://www.linkedin.com/in/sivad571/",
    portfolio: "https://sivad.abacusai.app",
    location: "Alpharetta, GA",
    education: {
      degree: "Master’s in Computer Science",
      school: "Kent State University",
      year: ""
    }
  },

  professionalSummary: 
    "Siva D is a Senior Software Engineer with around 8 years of experience designing, optimizing, and deploying scalable enterprise applications across financial services, healthcare, IoT, and cloud modernization programs. He specializes in Java, Spring Boot, microservices, React, Angular, REST/GraphQL APIs, Kafka, cloud platforms, Kubernetes, CI/CD, and distributed system modernization. He has worked on mission-critical platforms involving core banking modernization, healthcare data exchange, CAD visualization, fleet analytics, fraud monitoring, and clinical intelligence systems. His experience spans backend engineering, frontend development, cloud-native architecture, real-time data pipelines, API integrations, database optimization, secure authentication, observability, and Agile/Scrum delivery.",

  workAuthorization: {
    currentStatus: "F1 OPT-EAD",
    category: "Post-Completion OPT",
    currentWorkAuthorization: "Authorized to work in the United States",
    sponsorship: "No initial sponsorship required to start",
    extensionPath: "Eligible/planning to apply for STEM OPT extension",
    expectedExtension: "Work authorization can extend through 2028 after STEM OPT extension approval",
    openTo: "C2C, W2, 1099, C2H, contract, and full-time roles",
    availability: "Open for remote, hybrid, and onsite roles across the U.S.",
    relocation: "Willing to relocate anywhere in the U.S. for the right opportunity",
    publicStatement: "Siva has immediate U.S. work authorization through F1 OPT-EAD and does not require initial sponsorship to begin employment. He is also eligible/planning to apply for STEM OPT extension, which can extend work authorization through 2028 after approval."
  },

  rateExpectations: {
    preferredBaseRate: "$65/hr – $70/hr",
    flexibility: "Flexible depending on role, client, contract type, location, and project scope. Open to discussing the offered rate and submission details.",
    negotiationStatement: "Yes, my rate is negotiable depending on the role, client, responsibilities, contract type, and location. My preferred base range is $65/hr to $70/hr, but I'm flexible for the right opportunity. Please call me at +1 (614) 664-9498 to discuss.",
    w2Statement: "For W2 roles, I'm flexible depending on benefits, duration, location, and client requirements. My expected range is generally around $65/hr to $70/hr, but I'm open to discussing the offered rate. Please call me at +1 (614) 664-9498 so we can review it.",
    c2cStatement: "For C2C roles, my preferred base rate is around $65/hr to $70/hr, depending on the client, project scope, location, and duration. I'm open to discussing it further. You can reach me directly at +1 (614) 664-9498.",
    generalStatement: "My preferred base rate is around $65/hr to $70/hr, depending on the role, contract type, location, and overall responsibilities. I'm flexible for the right opportunity. Please feel free to call me at +1 (614) 664-9498 so we can discuss the rate and role details directly.",
    lowRateResponse: "Yes, I'm definitely open to discussing that rate depending on the role, client, location, contract type, and long-term opportunity. Please call me at +1 (614) 664-9498 so we can talk through the details and move forward if it's a good fit.",
    salaryFTExpectation: "For full-time roles, I'm flexible depending on total compensation, benefits, location, role scope, and growth opportunity. I'm happy to discuss expectations directly. Please call me at +1 (614) 664-9498 so we can talk through the details."
  },

  employerAndReferences: {
    employer: "My employer contact is Phani M from Skyveon Tech LLC. Email: Hr@skyveon.ai. Phone: 304-840-1407.",
    references: [
      { name: "G Sahiti", role: "Manager", company: "Credit Union of Atlanta", email: "gsahiti@cuatlanta.org", phone: "470-781-6073" },
      { name: "Akhil M", role: "Team Lead", company: "Centene", email: "akhilm@centene.com", phone: "209-317-5229" },
      { name: "Ravi G", role: "Manager", company: "Conmet", email: "ravig@conmet.com", phone: "603-943-6712" }
    ]
  },

  privacyStatement: "For privacy and security reasons, I don't share sensitive identity or immigration document numbers (such as SSN, passport number, driver license number, EAD number, E-Verify numbers, or date of birth) through this website. Siva can provide required documentation directly during official onboarding or background verification.",

  certifications: [
    "Oracle Java SE 11 Developer",
    "Oracle Java SE 8 Programmer",
    "AWS Certified Developer",
    "Microsoft Certified Azure Fundamentals",
    "Oracle Cloud Infrastructure 2025 Certified Developer Professional",
    "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    "Microsoft Solution Architecture",
    "Software Engineering Job Simulation by JPMorgan Chase & Co."
  ],

  skills: {
    frontend: ["React.js", "Angular", "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Sass", "Bootstrap", "AJAX", "jQuery", "RxJS"],
    backend: ["Java", "Scala", "Spring Boot", "Spring MVC", "Spring Security", "Hibernate", "Node.js", "Express.js", "Django", "Flask", "PHP", "Laravel"],
    apisAndSecurity: ["REST APIs", "GraphQL", "SOAP", "FHIR", "OAuth 2.0", "JWT", "API Gateway", "Multi-Factor Authentication", "JSON", "Swagger", "JAX-RS"],
    microservicesAndMessaging: ["Spring Boot Microservices", "Kafka", "Kafka Streams", "RabbitMQ", "ActiveMQ", "event-driven architecture"],
    databases: ["PostgreSQL", "MySQL", "Oracle", "DB2", "MongoDB", "DynamoDB", "Cassandra", "SQLite", "PL/SQL"],
    cloudAndDevOps: ["AWS EC2", "S3", "Lambda", "RDS", "DynamoDB", "IAM", "CloudWatch", "AWS EKS", "Azure AKS", "Azure Functions", "Azure SQL", "Blob Storage", "Key Vault", "Azure API Management", "GCP", "GKE", "Docker", "Kubernetes", "Terraform", "CloudFormation", "Helm"],
    ciCdAndVersionControl: ["Jenkins", "GitHub Actions", "Git", "GitLab", "Bitbucket", "Maven", "CI/CD pipelines"],
    testingAndMonitoring: ["JUnit", "Mockito", "Jest", "Cypress", "Postman", "Cucumber", "Prometheus", "Grafana", "ELK Stack", "Splunk", "SonarQube", "OWASP"],
    agileAndProjectManagement: ["Scrum", "Kanban", "SAFe", "Jira", "Confluence", "sprint planning", "backlog refinement", "demos", "retrospectives", "documentation"]
  },

  companies: {
    creditUnionOfAtlanta: {
      name: "Credit Union of Atlanta",
      role: "Sr. Software Engineer",
      duration: "Dec 2024 – Present",
      location: "Atlanta, GA",
      project: "Core Transformation & Cloud Modernization",
      domain: "Banking / Credit Union Modernization",
      businessPurpose: "Credit Union of Atlanta was modernizing legacy core banking systems into a cloud-native architecture to improve scalability, reliability, security, deployment speed, observability, and maintainability for digital banking and internal banking operations.",
      whyHired: "Siva was brought in as a Senior Software Engineer to support enterprise banking modernization using Java, Spring Boot, Angular, AWS/Azure, Kubernetes, CI/CD, observability, and secure API development. His role was to help convert legacy systems into modern microservices, improve member-facing digital banking interfaces, and support cloud migration.",
      responsibilities: [
        "Designed and developed Angular/TypeScript front-end interfaces for member-facing digital banking platforms.",
        "Built Spring Boot REST APIs for core banking services.",
        "Supported integration between legacy banking systems and modern microservices.",
        "Migrated services to AWS/Azure cloud-native environments using Kubernetes and Docker.",
        "Deployed backend services on AWS EC2 and AWS EKS.",
        "Built AWS Lambda functions triggered by S3 uploads, API Gateway events, and DynamoDB streams.",
        "Managed S3 buckets for logs, static assets, and ETL workflows.",
        "Optimized PostgreSQL schemas and improved query performance by 35%.",
        "Built CI/CD pipelines using Jenkins and Docker.",
        "Created dashboards to visualize member data and operational trends.",
        "Used Prometheus and Grafana for monitoring and helped reduce downtime by 40%.",
        "Applied SonarQube and OWASP scans for audit readiness and security compliance.",
        "Documented APIs and architecture in Confluence.",
        "Participated in SAFe Agile ceremonies, sprint planning, demos, and team collaboration.",
        "Mentored junior developers on Angular, Spring Boot, and Agile practices."
      ],
      challenge: "The main challenge was modernizing legacy banking systems without disrupting core banking operations. The system needed secure APIs, cloud scalability, reliable deployments, monitoring, and compliance-friendly engineering practices.",
      outcome: "Siva helped improve scalability, deployment reliability, query performance, monitoring, and cloud readiness. The modernization work supported faster delivery, better observability, stronger security, and smoother integration between legacy and modern banking services.",
      metrics: [
        "Improved PostgreSQL query performance by 35%.",
        "Helped reduce system downtime by 40% through Prometheus/Grafana monitoring."
      ],
      environment: ["Angular 17", "TypeScript", "Java", "Spring Boot", "REST APIs", "AWS EKS", "AWS EC2", "AWS Lambda", "S3", "DynamoDB", "API Gateway", "Kubernetes", "Docker", "PostgreSQL", "Jenkins", "Prometheus", "Grafana", "SonarQube", "OWASP", "Confluence", "SAFe Agile"],
      diagram: `
flowchart TD
    A[Member Digital Banking UI - Angular] --> B[API Gateway]
    B --> C[Spring Boot Core Banking APIs]
    C --> D[Legacy Banking Systems]
    C --> E[Kafka Event Pipelines]
    E --> F[AWS Lambda / Event Workflows]
    C --> G[PostgreSQL / DynamoDB]
    C --> H[AWS EKS / Kubernetes]
    H --> I[Jenkins CI/CD + Docker]
    H --> J[Prometheus + Grafana Monitoring]
    J --> K[Reduced Downtime by 40%]
    G --> L[35% Query Performance Improvement]
`
    },
    centene: {
      name: "Centene Corporation",
      role: "Sr. Software Engineer",
      duration: "Feb 2024 – Nov 2024",
      location: "St. Louis, MO",
      project: "Intelligent Health Data Exchange & Care-Insights Platform",
      domain: "Healthcare / Health Data Exchange / Care Insights",
      businessPurpose: "The platform helped care teams access unified member data, identify high-risk members, support care coordination, and improve healthcare data visibility across claims, eligibility, enrollment, and clinical systems.",
      whyHired: "Siva was hired to build multi-tenant healthcare APIs, care coordination React panels, support large-scale EHR/FHIR integrations, and implement secure cloud configurations compliant with HIPAA regulations.",
      responsibilities: [
        "Built multi-tenant Spring Boot REST APIs following healthcare API governance.",
        "Developed React modules for care coordination and high-risk member workflows.",
        "Built dashboards for enrollment, claims, and utilization trends, improving data accessibility by 30%.",
        "Integrated FHIR R4/R5 endpoints and HL7-based data flows.",
        "Optimized Spring Boot APIs and reduced latency by 25%.",
        "Designed PostgreSQL and MongoDB schemas for 5TB+ health and claims data.",
        "Improved query performance by 40% over large-scale healthcare datasets.",
        "Implemented OAuth2 and OpenID Connect with Okta for HIPAA/SOC2 compliance.",
        "Created JUnit/Mockito tests with 85% code coverage.",
        "Maintained Jenkins pipelines for Dockerized microservices on AWS EKS.",
        "Used Terraform and CloudFormation to automate infrastructure and reduce manual deployment errors by 80%.",
        "Used Prometheus and Grafana to reduce MTTR by 50%.",
        "Participated in SAFe Agile and mentored junior engineers."
      ],
      challenge: "The major challenge was integrating multiple healthcare data sources while maintaining security, compliance, performance, and reliability. The system had to normalize large-scale FHIR/HL7, claims, lab, wearable, and EHR data and make it available through secure APIs and dashboards.",
      outcome: "Siva helped improve API reliability, dashboard usability, healthcare data visibility, deployment automation, and production observability.",
      metrics: [
        "Improved dashboard data accessibility by 30%.",
        "Reduced API latency by 25%.",
        "Improved query performance by 40% over 5TB+ data.",
        "Achieved 85% code coverage.",
        "Reduced MTTR by 50%.",
        "Reduced manual deployment errors by 80%."
      ],
      environment: ["Java", "Spring Boot", "Spring MVC", "Spring Security", "Hibernate", "React", "jQuery", "JavaScript", "TypeScript", "HTML5", "CSS3", "Sass", "REST APIs", "FHIR R4/R5", "Docker", "Kubernetes", "Jenkins", "SonarQube", "Apache Tomcat", "JBoss EAP", "Git", "Windows/Linux", "SAFe Agile", "AWS EKS", "Terraform", "CloudFormation", "Prometheus", "Grafana"],
      diagram: `
flowchart TD
    A[React Care Insights Portal] --> B[API Gateway]
    B --> C[Spring Boot REST APIs]
    B --> D[GraphQL Layer]
    C --> E[FHIR R4/R5 + HL7 Integration]
    E --> F[EHR / Claims / Lab / Wearable Data]
    C --> G[Kafka Data Pipelines]
    G --> H[PostgreSQL + MongoDB]
    C --> I[AWS EKS Kubernetes]
    I --> J[Jenkins + Terraform + Helm]
    I --> K[Prometheus + Grafana]
    K --> L[50% MTTR Reduction]
`
    },
    conmet: {
      name: "Conmet",
      role: "Senior Software Engineer",
      duration: "Sep 2023 – Feb 2024",
      location: "Vancouver, WA",
      project: "Deep Zoom CAD Visualization & Fleet Insights Platform",
      domain: "IoT / Manufacturing / CAD Visualization / Fleet Analytics",
      businessPurpose: "The project helped engineering and fleet teams visualize complex CAD assets and analyze fleet telemetry events in near real time.",
      whyHired: "Siva was hired to pioneer React-based 3D visualizers using WebGL/Three.js, design sub-100ms real-time event analytics using Kafka event pipelines, and deploy secure Docker services on AWS EKS.",
      responsibilities: [
        "Built React/TypeScript modules for 3D CAD visualization, rendering, and annotation.",
        "Developed Spring Boot 3 microservices with REST and GraphQL APIs.",
        "Designed MongoDB and Cassandra models for CAD file hierarchies and fleet time-series data.",
        "Integrated Kafka event streams for real-time fleet telemetry.",
        "Built OAuth2/JWT role-based access and MFA.",
        "Created Node.js/Express geofencing and rule-engine services.",
        "Containerized services with Docker and deployed on AWS EKS.",
        "Used AWS S3, Lambda, Glue, and data lake workflows.",
        "Built real-time ETL pipelines using Lambda.",
        "Created GitHub Actions CI/CD workflows.",
        "Used Redis for low-latency caching of CAD thumbnails and fleet KPI snapshots.",
        "Used Prometheus, Grafana, ELK, and Splunk for monitoring.",
        "Migrated RabbitMQ to Kafka for high-throughput telemetry ingestion.",
        "Coordinated Agile Scrum ceremonies in Jira."
      ],
      challenge: "The challenge was handling large CAD files, real-time fleet telemetry, secure user access, and scalable cloud deployment while keeping the application responsive and reliable.",
      outcome: "Siva helped deliver interactive CAD visualization, real-time fleet analytics, scalable event streaming, low-latency caching, and improved observability.",
      metrics: [
        "Delivered deep zoom WebGL rendering for detailed CAD visualization.",
        "Migrated IoT ingestion to Kafka event pipelines for high throughput."
      ],
      environment: ["React", "TypeScript", "WebGL", "Three.js", "Spring Boot", "Node.js", "Express.js", "REST", "GraphQL", "MongoDB", "Cassandra", "MySQL", "Kafka Streams", "OAuth2", "JWT", "Docker", "Kubernetes", "AWS EKS", "Terraform", "CloudFormation", "GitHub Actions", "JUnit", "Mockito", "Cypress", "Redis", "Prometheus", "Grafana", "ELK", "Splunk", "GitLab", "Jira", "Agile Scrum"],
      diagram: `
flowchart TD
    A[React / TypeScript CAD Portal] --> B[WebGL / Three.js Viewer]
    A --> C[Spring Boot APIs]
    C --> D[GraphQL + REST Services]
    D --> E[CAD Repositories]
    D --> F[MongoDB + Cassandra]
    C --> G[Kafka Fleet Telemetry Streams]
    G --> H[IoT Devices / Fleet Events]
    C --> I[Redis Cache]
    C --> J[AWS EKS Kubernetes]
    J --> K[Terraform + GitHub Actions]
    J --> L[Prometheus + Grafana + ELK + Splunk]
`
    },
    hdfc: {
      name: "HDFC Bank",
      role: "Software Engineer",
      duration: "Jul 2019 – Aug 2023",
      location: "Mumbai, India",
      project: "Real-Time Transaction Fraud Monitoring Platform",
      domain: "Banking / Fraud Detection / Real-Time Transaction Monitoring",
      businessPurpose: "The project helped detect suspicious transactions in real time, support fraud analysts, and integrate with payment gateways, partner banks, and core banking systems.",
      whyHired: "Siva was hired to build real-time monitoring React dashboards with WebSockets, construct high-throughput transaction handlers using Kafka Streams and Spring Boot microservices, and configure Azure AKS environments.",
      responsibilities: [
        "Built React 18 dashboards for real-time fraud monitoring using WebSocket and Server-Sent Events.",
        "Developed Spring Boot 3 microservices with REST and GraphQL APIs.",
        "Used Kafka for exactly-once event streaming into fraud/risk engines.",
        "Designed Cassandra schemas for high-throughput transaction lineage.",
        "Secured systems with OAuth2, JWT, MFA, and PCI DSS-aligned controls.",
        "Used Redis caching for risk models and customer profiles.",
        "Deployed microservices on Azure AKS with Docker and Terraform.",
        "Built Jenkins CI/CD pipelines with JUnit, Mockito, Postman, and Cypress.",
        "Used Prometheus, Grafana, ELK, and Splunk for monitoring.",
        "Managed Oracle on Azure and MongoDB/Cosmos-style logging.",
        "Built webhook callbacks for partner banks and payment networks.",
        "Created Node.js/Express API Gateway with rate limiting and schema validation.",
        "Used Azure Functions and API Management to reduce operational cost and improve scalability."
      ],
      challenge: "The challenge was processing live transaction events with low latency, detecting fraud patterns quickly, securing sensitive financial data, and maintaining high availability.",
      outcome: "Siva helped build a scalable, secure, real-time fraud monitoring platform with modern APIs, dashboards, streaming pipelines, cloud deployment, and monitoring.",
      metrics: [
        "Reduced operational cost by 40%.",
        "Improved scalability by 60%."
      ],
      environment: ["Java 11", "Spring Boot", "Node.js", "Express.js", "PHP Laravel", "REST APIs", "Azure Functions", "API Management", "SQLite", "MySQL", "JavaScript", "Sass", "jQuery", "Docker", "Kubernetes", "Azure AKS", "Jenkins", "ELK", "Prometheus", "Grafana", "Postman", "Cypress", "JUnit", "Agile Scrum"],
      diagram: `
flowchart TD
    A[React Fraud Monitoring Dashboard] --> B[Node.js / API Gateway]
    B --> C[Spring Boot Fraud APIs]
    C --> D[Kafka Streams]
    D --> E[Real-Time Transaction Events]
    D --> F[Risk Scoring Engine]
    F --> G[Rule-Based + ML-Assisted Fraud Detection]
    C --> H[Cassandra / Oracle / Redis]
    C --> I[Azure AKS Kubernetes]
    I --> J[Jenkins CI/CD]
    I --> K[Prometheus + Grafana + ELK + Splunk]
`
    },
    apollo: {
      name: "Apollo Hospitals Enterprise Limited",
      role: "Associate Software Engineer",
      duration: "Jan 2017 – Jun 2019",
      location: "Chennai, India",
      project: "Clinical Intelligence Engine & Connected Care Platform",
      domain: "Healthcare / Clinical Intelligence / Connected Care",
      businessPurpose: "The platform helped clinicians monitor patient vitals, receive alerts, access EHR-driven insights, and support connected-care workflows.",
      whyHired: "Siva joined as an Associate Software Engineer to support development of clinician React views, implement Spring Boot endpoints for patient records, and support Docker build releases on GCP GKE.",
      responsibilities: [
        "Built React components for clinician-facing workflows.",
        "Designed Spring Boot REST APIs for patient data retrieval and updates.",
        "Participated in Agile two-week sprint planning with product owners and UX designers.",
        "Deployed microservices to Google Kubernetes Engine using Docker, Helm, and Terraform.",
        "Modeled Cassandra keyspaces for time-series vitals data.",
        "Used Redis caching to reduce backend load.",
        "Wrote JUnit and Mockito tests in GitHub Actions pipelines.",
        "Built Prometheus metrics and Grafana dashboards.",
        "Implemented Spring Security RBAC/ABAC to protect PHI.",
        "Used Kafka Streams for real-time vitals and alert event processing.",
        "Troubleshot production incidents and created root-cause analysis.",
        "Authored API specs and documentation in Confluence and Swagger."
      ],
      challenge: "The challenge was securely processing real-time patient vitals and EHR data while protecting PHI and keeping clinician-facing systems reliable.",
      outcome: "Siva helped deliver reliable clinician dashboards, real-time patient alerting, secure APIs, cloud deployment, and production monitoring.",
      metrics: [
        "Delivered secure RBAC/ABAC protection for all patient health data (PHI).",
        "Wrote high-performance Kafka streams to map live vital signals."
      ],
      environment: ["React", "Java", "Spring Boot", "Spring Security", "REST APIs", "Docker", "Helm", "Terraform", "GCP GKE", "Cassandra", "Redis", "Kafka Streams", "JUnit", "Mockito", "Cypress", "Prometheus", "Grafana", "Confluence", "Swagger"],
      diagram: `
flowchart TD
    A[React Clinician Dashboard] --> B[GraphQL / REST API Gateway]
    B --> C[Spring Boot Healthcare Services]
    C --> D[Epic FHIR + SOAP Integrations]
    C --> E[Kafka Streams Vitals Processing]
    E --> F[Real-Time Patient Vitals]
    C --> G[Cassandra + Redis]
    C --> H[GCP GKE Kubernetes]
    H --> I[Terraform + Helm]
    H --> J[Prometheus + Grafana Monitoring]
    C --> K[RBAC / ABAC PHI Security]
`
    }
  }
};
