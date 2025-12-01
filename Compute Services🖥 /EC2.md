# AWS EC2

## Introduction to EC2 Service

Amazon Elastic Compute Cloud (EC2) is a core service from Amazon Web Services (AWS) that provides scalable, on-demand computing capacity in the cloud. EC2 allows users to launch and manage virtual servers—known as "instances"—which can run a wide range of operating systems and applications.

### Key Features
- **Scalability**: Easily scale instances up or down based on demand
- **Customizable Instances**: Choose instance types based on CPU, memory, and storage needs
- **Secure Access**: Use SSH keys and security groups for secure connections
- **Flexible Pricing**: Multiple purchasing options to optimize costs

### Use Cases
- Hosting web applications
- Running batch jobs or machine learning models
- Building development and testing environments
- High-performance computing workloads

---

![aws ec2](https://github.com/user-attachments/assets/18f46ae0-18c0-4f08-beb4-d3f4d0970f28)


## AWS Instace Types

# AWS EC2 Instance Types Complete Reference Table

| Instance Family | Optimization Type | Key Features | Ideal Workloads | Example Instances | vCPU Range | Memory Range (GiB) | Storage Options | Network Performance | Special Features |
|-----------------|-------------------|--------------|-----------------|-------------------|------------|-------------------|------------------|-------------------|-----------------|
| **General Purpose** | Balanced compute, memory, networking | Balanced resources, cost-effective, burstable performance | Web servers, small databases, development environments, microservices | t4g.nano, m6i.large, m5.xlarge | 2-192 | 0.5-768 | EBS-only, SSD | Up to 100 Gbps | ARM/Graviton processors, burst credits |
| **Compute Optimized** | High-performance processors | Highest CPU performance, optimized for compute-intensive tasks | Batch processing, gaming servers, scientific modeling, ML inference | c7g.2xlarge, c6i.8xlarge, c5.4xlarge | 2-128 | 4-256 | EBS-only, NVMe SSD | Up to 100 Gbps | AWS Graviton3, Intel Xeon Scalable |
| **Memory Optimized** | Large memory capacity | High memory-to-vCPU ratio, fast memory access | In-memory databases, real-time big data analytics, enterprise apps | r7g.4xlarge, x2idn.16xlarge, r6i.12xlarge | 2-128 | 16-8192 | EBS-only, NVMe SSD | Up to 100 Gbps | Intel Xeon, up to 8TB memory |
| **Storage Optimized** | High-speed storage | High sequential/random I/O, high throughput | NoSQL databases, data warehousing, distributed file systems, log processing | i4i.8xlarge, d3.4xlarge, h1.2xlarge | 2-128 | 16-1024 | NVMe SSD, HDD | Up to 100 Gbps | Up to 60 TB storage, high IOPS |
| **Accelerated Computing** | Hardware accelerators (GPUs/FPGAs) | GPU/FPGA processors for parallel processing | Machine learning, graphics rendering, video encoding, scientific simulations | p4d.24xlarge, g5.16xlarge, inf1.6xlarge | 8-128 | 61-1152 | NVMe SSD, EBS | Up to 400 Gbps | NVIDIA GPUs, AWS Inferentia |
| **HPC Optimized** | High-performance computing | Lowest latency, highest throughput networking | Computational finance, fluid dynamics, weather forecasting, molecular dynamics | hpc6a.48xlarge, hpc7g.16xlarge | 16-96 | 128-384 | EBS-only | Up to 200 Gbps | Elastic Fabric Adapter (EFA) |


## AWS Dashboard and EC2 Overview

### AWS Management Console
The AWS Management Console is the primary interface for managing AWS resources. It is a web application that allows you to:
- Access and manage services like EC2, S3, RDS, and Lambda
- Monitor your usage and billing
- Set up security configurations and permissions

#### Key Components of the Dashboard
1. **Navigation Bar**: Displays your logged-in account, active region, and access to global services
2. **Service Search Bar**: Helps you quickly locate AWS services by name
3. **Resource Groups**: Allows grouping and managing related resources
4. **Recent Services**: List of services you used recently for quick access
5. **Build a Solution**: Quick links to common tasks

#### Best Practices
- Always verify the active region to avoid deploying resources in unintended locations
- Use the Billing Dashboard to track costs and identify unusual usage patterns

### Region vs Availability Zone (AZ)
AWS resources are deployed in Regions and Availability Zones to ensure high availability, fault tolerance, and low latency.

#### Region
- A geographical location, such as **US East (N. Virginia)** or **Asia Pacific (Mumbai)**
- Each region is independent and contains multiple Availability Zones
- Choose a region based on proximity to users, compliance requirements, and cost

#### Availability Zone (AZ)
- A physically distinct data center within a region
- Each AZ is isolated but connected to other AZs in the same region via low-latency links
- Example: **Asia Pacific (Mumbai)** has three AZs: ap-south-1a, ap-south-1b, ap-south-1c

#### Why Regions and AZs Matter
- **High Availability**: Deploy resources across multiple AZs to ensure uptime during failures
- **Low Latency**: Choose regions close to your users to minimize network delays
- **Cost Optimization**: Some regions have lower costs for the same services

---

## Security Groups and Remote Access

### Security Groups
Security Groups act as virtual firewalls that control inbound and outbound traffic for your AWS instances.

#### Key Concepts
- **Inbound Rules**: Define the traffic allowed to reach your instance
- **Outbound Rules**: Define the traffic allowed to leave your instance
- Rules specify protocol, port range, and source

#### Common Ports
- **SSH (Port 22)**: Used for secure remote access to Linux instances
- **RDP (Port 3389)**: Used for remote access to Windows instances

#### Security Group Configuration for SSH and RDP

| Type | Protocol | Port Range | Source (Recommended) | Purpose |
|------|----------|------------|-----------------------|---------|
| SSH  | TCP      | 22         | YOUR_PUBLIC_IP/32     | Linux   |
| RDP  | TCP      | 3389       | YOUR_PUBLIC_IP/32     | Windows |

#### Steps to Configure Security Groups
1. Go to "Security Groups" in the EC2 Console
2. Select your security group or create a new one
3. Under "Inbound rules," click "Edit inbound rules"
4. Add rules for SSH (port 22) and RDP (port 3389)
5. Set Source to your IP address or trusted range
6. Save the rules

## Interview Question 
#### Difference between Security Group and NACL 

| Feature | Security Groups | Network ACLs (NACLs) |
|---------|-----------------|---------------------|
| **Layer** | Instance level (Layer 4) | Subnet level (Layer 4) |
| **State** | **Stateful** - Return traffic is automatically allowed | **Stateless** - Return traffic must be explicitly allowed |
| **Rule Evaluation** | All rules are evaluated before deciding | Rules are evaluated in order (lowest to highest) |
| **Rule Actions** | Allow rules only | Allow AND Deny rules |
| **Number of Rules** | Up to 60 inbound, 60 outbound per security group | Up to 20 rules (numbered 1-32766) per NACL |
| **Scope** | Applied to instances | Applied to entire subnet |
| **Default Behavior** | **Deny all inbound**, Allow all outbound | **Deny all inbound AND outbound** |

---
#### Best Practices
- Restrict access to specific IP ranges for security
- Use custom security groups for different applications or roles
- Regularly review and update security group rules

### SSH Service: Secure Shell Basics

#### What is SSH?
SSH (Secure Shell) is a cryptographic network protocol that provides a secure way to access remote servers and systems.

#### Key Features of SSH
- **Secure Communication**: Uses encryption to secure the connection
- **Authentication**: Supports password-based or key-based authentication
- **Port Forwarding**: Allows secure tunneling of other protocols
- **File Transfers**: Includes tools like `scp` and `rsync`

#### SSH in AWS
**Default Settings for AWS EC2:**
- **Port**: 22 (must be open in the security group)
- **Authentication**: Key-pair (`.pem` file) generated during instance creation

#### Setting Up SSH for Remote Access
1. **Install SSH Client** (usually pre-installed on Linux/Mac, use PowerShell or PuTTY on Windows)
2. **Set File Permissions**:
   ```bash
   # chmod 400 /path/to/key.pem
   Troubleshooting SSH Connection Issues
   Verify that the instance is running
   Check the public IP and ensure it matches the instance
   Ensure your IP is allowed in the security group
   Verify key file permissions

# Creating Your First EC2 Instance

## Ubuntu Instance

### Steps to Launch an Ubuntu EC2 Instance

1. **Navigate to EC2 Service**
   - Log in to AWS Management Console
   - Search for "EC2" and select it

2. **Launch Instance**
   - Click "Launch Instance"

3. **Choose Amazon Machine Image (AMI)**
   - Select **Ubuntu Server 20.04 LTS** or newer version

4. **Select Instance Type**
   - Choose **t2.micro** for free tier eligibility (1 vCPU, 1 GB RAM)

5. **Configure Instance Details**
   - Leave default settings
   - Enable Auto-Assign Public IP for internet access

6. **Add Storage**
   - Keep default storage (8 GB) or modify as needed

7. **Add Tags**
   - Create identifying tag (e.g., `Key: Name, Value: MyFirstInstance`)

8. **Configure Security Group**
   - Create new security group
   - Add inbound rule for SSH (port 22) from your IP

9. **Review and Launch**
   - Verify settings and click "Launch"
   - Select or create key pair for SSH access

10. **Access Your Instance**
    ```bash
    ssh -i /path/to/key.pem ubuntu@<Public-IP-Address>
    ```

## Windows Instance
### Steps to Launch a Windows Instance

1. **Navigate to EC2** and click "Launch Instance"

2. **Choose AMI**: Select Windows Server AMI (e.g., Windows Server 2019)

3. **Choose Instance Type**: Select **t2.micro** (free tier eligible)

4. **Configure Instance Details**: Leave defaults

5. **Add Storage**: Adjust as needed

6. **Configure Security Group**: Add RDP (port 3389) rule

7. **Launch** and download key pair

8. **Retrieve Password**: Use "Get Windows Password" in instance details

9. **Connect via RDP** using public IP, Administrator username, and decrypted password

## Must Ensure
- Always restrict SSH/RDP access to specific IP addresses
- Use Elastic IPs for instances requiring static public IP
- Regularly update and patch your instances
- Implement proper backup strategies
- Use descriptive tags for better resource management
- Monitor instance performance and costs regularly
- Implement security groups with least privilege principle
- 
# Web Server Deployment

## Deploy Web Server Using NGINX

NGINX is a lightweight, high-performance web server and reverse proxy server.

### Installation Steps

1. **Update Package Manager:**
```bash
sudo apt update
Verify: Access via public IP in web browser

Install NGINX:
sudo apt install nginx -y

Start and Enable Service:
sudo systemctl start nginx
sudo systemctl enable nginx

Configure Firewall:
sudo ufw allow 'Nginx Full'
sudo ufw status

Host Custom Website:
sudo nano /var/www/html/index.html
Add your HTML content and save

Restart NGINX:
sudo systemctl restart nginx
Verify: Access via public IP in web browser

````
# Deploy Web Server Using HTTPD (Apache)
 ### HTTPD (Apache HTTP Server) is a widely-used open-source web server known for its flexibility and robustness.
 
````bash

Installation Steps
Update Package Manager:
sudo yum update -y

Install HTTPD:
sudo yum install httpd -y

Start and Enable Service:
sudo systemctl start httpd
sudo systemctl enable httpd

Configure Firewall:
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload

Host Custom Website:
cd /var/www/html
sudo nano index.html
Add your HTML content and save

Restart HTTPD:
sudo systemctl restart httpd
Verify: Access via public IP in web browser

````
# EC2 Purchasing Options

## Overview
Amazon EC2 offers multiple purchasing options to optimize costs based on workload requirements and budget constraints.

## Available Options

### 🟢 On-Demand Instances
- **Pricing**: Pay for what you use (per second/hour)
- **Commitment**: No upfront payment, no long-term commitment
- **Cost**: Highest hourly rate
- **Best For**: Short-term, unpredictable workloads, auto-scaling
- **Billing**: 
  - Linux/Windows: Per second after first minute
  - Other OS: Per hour

### 🔵 Reserved Instances
- **Discount**: Up to 72% vs On-Demand
- **Term**: 1 year (+discount) or 3 years (+++discount)
- **Payment**: No upfront/Partial upfront/All upfront
- **Scope**: Regional or Zonal
- **Best For**: Steady-state applications (databases, long-running services)

#### Convertible Reserved Instances
- **Flexibility**: Change instance type, family, OS, scope, tenancy
- **Discount**: Up to 66% vs On-Demand

### 🟡 Spot Instances
- **Discount**: Up to 90% vs On-Demand
- **Risk**: Can be terminated if spot price > your max price
- **Best For**: Fault-tolerant workloads (batch jobs, data processing)
- **Avoid For**: Critical applications, databases

### 🔴 Dedicated Hosts
- **Type**: Physical server dedicated to you
- **Control**: Full control over instance placement
- **Cost**: Most expensive option
- **Best For**: Server-bound licenses, regulatory compliance
- **Billing**: Per host

### 🟠 Dedicated Instances
- **Type**: Virtual instances on dedicated hardware
- **Isolation**: Single-tenant hardware
- **Cost**: Additional $2/hour per region
- **Visibility**: Less control than dedicated hosts

### 🟣 Capacity Reservations
- **Purpose**: Reserve capacity in specific AZ
- **Commitment**: No term, cancel anytime
- **Discount**: None (pay On-Demand rates)
- **Best For**: Short-term, AZ-specific critical workloads

## Selection Guide

### 🏨 Resort Analogy
| Option | Resort Equivalent |
|--------|------------------|
| On-Demand | Pay full price, stay anytime |
| Reserved | Book long stay, get discount |
| Spot | Bid for empty rooms, risk eviction |
| Dedicated Host | Rent entire building |
| Capacity Reservation | Reserve room, pay even if empty |

### 📊 Selection Strategy
1. **Analyze Workload Patterns**
   - Steady vs variable usage
   - Predictable vs unpredictable demand

2. **Consider Budget**
   - Upfront vs ongoing costs
   - Total cost of ownership

3. **Evaluate Flexibility Needs**
   - Instance type changes
   - Scaling requirements

4. **Assess Compliance**
   - Licensing requirements
   - Regulatory constraints

5. **Mix & Match**
   - Combine options for optimal cost-performance
   - Example: Reserved for baseline + Spot for peaks

## Quick Reference Table

| Option | Discount | Commitment | Best Use Case |
|--------|----------|------------|---------------|
| On-Demand | 0% | None | Unpredictable workloads |
| Reserved | Up to 72% | 1-3 years | Steady-state apps |
| Spot | Up to 90% | None | Fault-tolerant jobs |
| Dedicated Host | 0% | Optional | Compliance/licensing |
| Capacity Reserve | 0% | None | Critical AZ workloads |
