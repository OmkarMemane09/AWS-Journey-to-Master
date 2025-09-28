# AWS Networking & Compute Fundamentals

![hero](https://github.com/user-attachments/assets/c5329936-e00b-4c1c-9f8d-8b652c19e848)

## Region vs Availability Zone (AZ)

### Comparison Table

| Feature | AWS Region | AWS Availability Zone (AZ) |
|---------|------------|----------------------------|
| **Geographic Scope** | Broad geographic area (e.g., country/region) | Distinct locations within a Region |
| **Number** | Multiple worldwide | Multiple per Region (typically 3+) |
| **Purpose** | Geographic distribution for latency/compliance | Fault isolation & high availability |
| **Isolation** | Fully isolated from other Regions | Isolated but connected via low-latency links |
| **Use Case** | Global app distribution, data residency | High availability, fault tolerance |

### Why It Matters
- **Use Regions** for global distribution, latency reduction, compliance
- **Use AZs** for fault tolerance, high availability, disaster recovery

---

## CIDR (Classless Inter-Domain Routing)

### What is CIDR?
Method for efficient IP address allocation using format: `IP Address/Prefix Length`

### Key Formulas
- **Hosts per subnet** = 2^(32 - prefix) - 2
- **Subnet Mask** = Determined by prefix length

### Example Calculations

| CIDR | Subnet Mask | Hosts/Subnet | Network ID | Usable Range | Broadcast |
|------|-------------|--------------|------------|--------------|-----------|
| `/24` | 255.255.255.0 | 254 | 192.168.1.0 | 192.168.1.1-254 | 192.168.1.255 |
| `/20` | 255.255.240.0 | 4,094 | 172.16.0.0 | 172.16.0.1-15.254 | 172.16.15.255 |
| `/16` | 255.255.0.0 | 65,534 | 10.0.0.0 | 10.0.0.1-255.254 | 10.0.255.255 |

### Quick Reference Table

| CIDR | Subnet Mask | Hosts/Subnet |
|------|-------------|--------------|
| /30 | 255.255.255.252 | 2 |
| /29 | 255.255.255.248 | 6 |
| /28 | 255.255.255.240 | 14 |
| /27 | 255.255.255.224 | 30 |
| /26 | 255.255.255.192 | 62 |
| /24 | 255.255.255.0 | 254 |
| /20 | 255.255.240.0 | 4,094 |
| /16 | 255.255.0.0 | 65,534 |

---

## VPC (Virtual Private Cloud) Fundamentals

### What is VPC?
Logically isolated network where you can launch AWS resources with complete control.

### VPC Types
1. **Default VPC**: Auto-created per region with public subnets
2. **Custom VPC**: Manual creation for specific requirements

### Reserved IPs in AWS Subnets
- **.0**: Network address
- **.1**: VPC router
- **.2**: Amazon DNS
- **.3**: Future use
- **Last IP**: Broadcast address

### Creating VPC & Subnets

#### Steps:
1. **VPC Dashboard** → Create VPC
2. Provide: Name, IPv4 CIDR (e.g., `10.0.0.0/16`)
3. **Subnets** → Create Subnet
4. Select VPC, AZ, CIDR (e.g., `10.0.0.0/24`)

---

## Internet Gateway (IGW) & Routing

### What is IGW?
Horizontally scaled component enabling VPC-internet communication.

### Steps to Create IGW:
1. **VPC Console** → Internet Gateways → Create
2. **Attach to VPC** → Select your VPC
3. **Route Tables** → Edit routes → Add:
   - Destination: `0.0.0.0/0`
   - Target: IGW
4. **Associate** with public subnet

### Public vs Private Instances
- **Public**: Auto-assign public IP, route to IGW
- **Private**: No public IP, route to NAT Gateway

---

## NAT Gateway

### What is NAT Gateway?
Enables private subnet instances to access internet (outbound only).

### Steps to Create NAT Gateway:
1. **Allocate Elastic IP**
2. **NAT Gateways** → Create
3. Select public subnet, assign EIP
4. **Private Route Table** → Edit routes:
   - Destination: `0.0.0.0/0`
   - Target: NAT Gateway

### IGW vs NAT Gateway Comparison

| Feature | IGW | NAT Gateway |
|---------|-----|-------------|
| **Subnet** | Public | Private |
| **Traffic** | Inbound & Outbound | Outbound only |
| **Security** | Direct internet access | No inbound traffic |
| **EIP Required** | No | Yes |

---

## VPC Peering

![vpc-peering-aws-accounts-diagram](https://github.com/user-attachments/assets/2634f58b-923d-45ec-ad8d-48ab2089b69d)


### What is VPC Peering?
Connection between two VPCs enabling private communication.

### Steps:
## 🔹 Steps to Create VPC Peering

### **Step 1: Create VPC Peering Connection**
1. Open **VPC Console → Peering Connections → Create Peering Connection**.  
2. Enter:  
   - **Requester VPC ID** (your VPC).  
   - **Accepter VPC ID** (peer VPC, same/different account).  
3. Click **Create Peering Connection**.  

---

### **Step 2: Accept Peering Request**
1. Go to **Peering Connections** in the **Accepter VPC** account.  
2. Select the request → **Accept Request**.  

---

### **Step 3: Update Route Tables**
1. Go to **Route Tables** of both VPCs.  
2. Add route:  
   - **Destination:** CIDR block of the peer VPC.  
   - **Target:** VPC Peering Connection.  
3. Save.  

---

### **Step 4: Update Security Groups (if needed)**
- Allow inbound/outbound traffic from the **peer VPC CIDR** in Security Groups.  

---

## ✅ Result
- Instances in both VPCs can now **communicate privately** using their private IPs.  

---

## 📊 Limitations of VPC Peering
- No **transitive peering** (VPC-A ↔ VPC-B, VPC-B ↔ VPC-C does **not** mean VPC-A ↔ VPC
- No transitive peering
- One-to-one relationships only

---

## Network Components

### NIC (ENI) vs Elastic IP (EIP)

| Feature | NIC (ENI) | Elastic IP (EIP) |
|---------|-----------|------------------|
| **Definition** | Virtual network interface | Static public IPv4 address |
| **Scope** | Private networking | Public internet access |
| **Usage** | EC2 network connectivity | Fixed public IP assignment |
| **IP Type** | Private + optional public | Public only |
| **Analogy** | Network card in laptop | Static broadband IP |

### ENI Management:
1. **EC2 Dashboard** → Network Interfaces
2. Create/attach ENI with VPC, subnet, security groups

### EIP Management:
1. **EC2 Dashboard** → Elastic IPs
2. Allocate and associate with instances/NAT Gateway

---

## Placement Groups

### Types & Use Cases

| Type | Strategy | Performance | Fault Tolerance | Best For |
|------|----------|-------------|-----------------|----------|
| **Cluster** | Close together (1 AZ) | ✅ High | ❌ Low | HPC, Big Data |
| **Spread** | Across racks | ❌ Lower | ✅ Very High | Critical small apps |
| **Partition** | Logical partitions | ⚖️ Medium | ✅ High | Distributed systems |

### Creation Steps:
1. **EC2 Dashboard** → Placement Groups
2. Choose type and associate instances

---

## Security: NACL vs Security Groups

### Comparison Table

| Feature | NACL | Security Group |
|---------|------|----------------|
| **Level** | Subnet | Instance |
| **State** | Stateless | Stateful |
| **Rules** | Allow + Deny | Allow only |
| **Default** | Allow all | Deny all inbound |
| **Evaluation** | Rule number order | All rules evaluated |

### NACL Configuration:
1. **VPC Dashboard** → Network ACLs
2. Create rules with numbers (e.g., 100, 200, 300)
3. Associate with subnets

### Security Group Configuration:
1. **EC2 Dashboard** → Security Groups
2. Create inbound/outbound rules
3. Attach to instances

---

## Networking Protocols & Basics

### Key Components:
- **IP Address**: Unique device identifier (IPv4/IPv6)
- **Subnet Mask**: Defines network/host portions
- **Gateway**: Routes traffic between networks
- **DNS**: Domain to IP translation
- **MAC Address**: Hardware identifier

### Network Types:
- **LAN**: Local Area Network
- **WAN**: Wide Area Network  
- **VLAN**: Virtual LAN segmentation

### Common Protocols:
- **TCP/IP**: Core internet communication
- **HTTP/HTTPS**: Web traffic
- **FTP**: File transfer
- **SSH**: Secure remote access

---

## Practical Implementation Flow

### Complete Setup Example:
1. **Create VPC** with CIDR `10.0.0.0/16`
2. **Create Subnets**: Public (`10.0.1.0/24`), Private (`10.0.2.0/24`)
3. **Create IGW** and attach to VPC
4. **Configure Route Tables** for public/private subnets
5. **Create NAT Gateway** in public subnet
6. **Launch Instances** in appropriate subnets
7. **Configure Security Groups & NACLs**
8. **Test Connectivity**

### Verification Commands:
```bash
# Test internet connectivity
ping 8.8.8.8

# Check routing
traceroute google.com

# DNS resolution
nslookup example.com

```

# VPC Endpoints - 
Private endpoints within your VPC that allows AWS services to privately connect resources within your VPC without traversing the public internet 
Powered by AWS PrivateLink
Route table is updated automatically 
Bound to a region (do not support inter-region communication 

### Two types - 
Interface Endpoints - 
Provisions an ENI as an entry point per subnet
Need to attach a SG to to the interface endpoint to control access
Supports most AWS services

Gateway Endpoint - 
Provisions a gateway
Must be used as a target in a route table 
Supports only S3 and DynamoDB

<img width="1600" height="763" alt="image" src="https://github.com/user-attachments/assets/0502d4ff-1d9b-4ce4-b805-e18433b0bfc4" />

