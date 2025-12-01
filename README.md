# ☁️ My AWS Learning Journey

This repository documents my complete AWS learning journey — from the basics of cloud computing to advanced AWS services.  
It includes my notes, hands-on practice, and project experiments.

---

## 📖 Table of Contents
1. Cloud Computing Basics 
2. AWS Cloud Architecture
3. Storage Services
   - S3 (Simple Storage Service)  
   - EBS (Elastic Block Store)  
   - EFS (Elastic File System)  
4. Compute Services
   - EC2 (Elastic Compute Cloud)  
   - ELB (Elastic Load Balancing)  
   - Auto Scaling  
5. Networking
   - VPC (Virtual Private Cloud)  
   - Subnets, Route Tables, Internet Gateway  
   - NAT Gateway  
   - CDN (CloudFront)  
   - Route 53  
6. Monitoring & Logging 
   - CloudWatch
   - SNS
7. Serverless Computing
   - AWS Lambda  
8. [Databases](#databases)  
   - RDS (Relational Database Service)  
   - MongoDB on AWS  

---

## 🌐 Cloud Computing Basics
- Definition of cloud computing.  
- Service Models: **IaaS, PaaS, SaaS**.  
- Deployment Models: **Public, Private, Hybrid, Multi-Cloud**.  
- Benefits: Scalability, Pay-as-you-go, Reliability, Global Reach.  

---

## 🏗 AWS Cloud Architecture
- AWS Global Infrastructure: **Regions, Availability Zones, Edge Locations**.  
- Shared Responsibility Model.  
- High Availability, Fault Tolerance, Disaster Recovery.  
- Well-Architected Framework (5 Pillars).  

---

## 💾 Storage Services
### S3 (Simple Storage Service)
- Object storage with unlimited scalability.  
- Buckets, Objects, Storage Classes (Standard, IA, Glacier).  
- Versioning, Lifecycle policies.  
- Static website hosting.  

### EBS (Elastic Block Store)
- Block storage for EC2 instances.  
- Volumes, Snapshots, Types (gp3, io2, sc1, st1).  
- Attached to a single instance.  

### EFS (Elastic File System)
- Scalable file storage for multiple EC2 instances.  
- NFS protocol, Pay-per-use.  

---

## 🖥 Compute Services
### EC2 (Elastic Compute Cloud)
- Virtual servers in the cloud.  
- Instance types (General, Compute, Memory, GPU, Storage Optimized).  
- Key pairs, Security groups, AMIs.  
- Pricing models: On-Demand, Reserved, Spot, Savings Plans.  

### ELB (Elastic Load Balancing)
- Distributes traffic across multiple EC2 instances.  
- Types: Application LB, Network LB, Gateway LB.  

### Auto Scaling
- Automatically increase/decrease EC2 instances.  
- Scaling policies: Target Tracking, Step Scaling, Scheduled Scaling.  

---

## 🌐 Networking
### VPC (Virtual Private Cloud)
- Isolated cloud network.  
- Subnets (Public & Private), Route Tables, NACLs, Security Groups.  
- Internet Gateway (IGW) & NAT Gateway.  

### CDN (CloudFront)
- Content Delivery Network.  
- Low latency delivery via edge locations.  

### Route 53
- DNS service.  
- Domain registration, traffic routing policies (Simple, Weighted, Latency, Geolocation, Failover).  

---

## 📊 Monitoring & Logging
### CloudWatch
- Monitors AWS resources & applications.  
- Metrics, Dashboards, Alarms, Logs.  
- Event-driven automation.  

---

## ⚡ Serverless Computing
### AWS Lambda
- Run code without managing servers.  
- Event-driven: triggers from S3, API Gateway, DynamoDB, CloudWatch, etc.  
- Supported languages: Python, Node.js, Java, Go, etc.  

---

## 🗄 Databases
### RDS (Relational Database Service)
- Managed relational databases.  
- Engines: MySQL, PostgreSQL, Oracle, SQL Server, Aurora.  
- Automated backups, Multi-AZ, Read replicas.  

### MongoDB on AWS
- NoSQL database hosted on AWS.  
- Can use MongoDB Atlas or self-manage on EC2.  
- Flexible schema, horizontal scaling.  

---

## 🚀 Next Steps
- Hands-on labs for each service.  
- Build projects:  
  - Host a static website on S3 with CloudFront + Route53.  
  - Deploy a 3-tier web app with EC2 + RDS + ELB + Auto Scaling.  
  - Create a serverless app with Lambda + API Gateway + DynamoDB.  
- Prepare for AWS Certified Solutions Architect – Associate.  

---

## 📝 Notes
This repository will keep growing as I continue my AWS journey. Contributions, discussions, and feedback are welcome!  

---
