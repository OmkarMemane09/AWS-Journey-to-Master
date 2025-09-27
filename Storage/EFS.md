# 📌 AWS EFS & NFS 

![AWS-efs](https://github.com/user-attachments/assets/e4c5a296-3872-4afc-9698-f59060d1ec67)  

## 🔹 What is NFS?
- **NFS = Network File System**
- It is a way for computers to **share files over a network**.
- Think of it like **Google Drive or OneDrive**, but for servers inside a network.
- With NFS, you can create one storage location and let **multiple computers (clients)** connect and use it as if it were their own local disk.

---

## 🔹 How does it work?
- Two main parts:
  1. **NFS Server** → The machine that has the actual storage and shares it.
  2. **NFS Clients** → Other machines that connect to the server and access files.

- Clients mount (attach) the shared folder and can **read/write files** just like a normal folder.

---

## 🔹 Real-life Example
- Imagine a company office:
  - The **NFS Server** is like the office filing cabinet.
  - Employees (clients) don't keep their own copies, they just **open the same cabinet drawer** and work on the same files.
  - If one person updates a document, everyone sees the update instantly.

---

## 🔹 Key Features of NFS
1. **Centralized Storage** – Files are stored in one place, not scattered across machines.
2. **Shared Access** – Multiple servers can access the same data.
3. **Scalability** – Add more clients without copying files everywhere.
4. **Transparency** – To the client, it looks like a normal folder/directory.
5. **Uses TCP/UDP Port 2049** – Default port for NFS communication.

---

## 🔹 Why do we need NFS?
- Without NFS: Every server would have its **own local files**, making it difficult to share or sync data.
- With NFS: All servers point to the **same storage**, making collaboration and scaling easier.

**Use Cases:**
- Hosting a website on multiple servers → all servers can use **same images, code, or logs** from NFS.
- In AWS → **EFS (Elastic File System)** is Amazon's managed NFS service.

---

## 🔹 Versions of NFS
- **NFSv2** – Old version, basic sharing.
- **NFSv3** – Supports large files, better performance.
- **NFSv4** – Latest, more secure (supports encryption, ACLs).
- AWS EFS uses **NFSv4.1** by default.

---

# 📌 AWS EFS (Elastic File System) 

## 🔹 EFS Overview
- **Fully managed** NFS file system for AWS Cloud and on-premises resources
- **Scalable performance** - grows and shrinks automatically as you add/remove files
- **Petabyte-scale** storage capacity without provisioning
- **Highly available and durable** - data stored across multiple AZs
- **Compatible** with all NFSv4.0 and NFSv4.1 clients

## 🔹 EFS Architecture Types

### 1. Regional Storage Classes
Standard Storage Classes:

Standard: Frequently accessed files

Infrequent Access (EFS-IA): Cost-effective for less accessed files

### 2. One Zone Storage Classes 
One Zone: Single AZ deployment (lower cost)

One Zone-IA: Infrequent access in single AZ

## 🔹 EFS Performance Modes

| Mode | Use Case | Max Throughput |
|------|----------|----------------|
| **General Purpose** | Web serving, CMS | Lower latency, most workloads |
| **Max I/O** | Big data, media processing | Higher throughput, scalable |

## 🔹 Throughput Modes

| Mode | Description | Billing |
|------|-------------|---------|
| **Bursting** | Baseline + burst credits | Storage + throughput |
| **Provisioned** | Set throughput independently | Storage + provisioned throughput |
| **Elastic** | Automatically scales | Storage + usage-based |

---

# 📌 NFS in AWS Context

### Is NFS Region-specific or AZ-specific?

- **NFS (general protocol)** → Not tied to region/AZ, depends only on network reachability.

- **Amazon EFS (managed NFS)**:
  - **Region-specific** → An EFS file system exists only in one AWS region.
  - **Multi-AZ** → Data is stored across multiple Availability Zones within that region.
  - Instances in different AZs of the same region can mount the same EFS file system.

---

## ✅ Quick Summary
- **NFS protocol** → Not tied to region/AZ, just needs network connectivity.
- **AWS EFS** →
  - Region-specific.
  - Multi-AZ within that region for high availability.

👉 In AWS terms:
**EFS is region-specific, but can be accessed from multiple AZs within that region.**

---

# 📌 Practical: Create and Mount Amazon EFS (NFS)

## 🔹 Step 1: Create EFS File System  
1. Open **Amazon EFS** in AWS Console.  
2. Click **Create file system**.  
3. Configure:  
   - **Name**: `my-efs`  
   - **VPC**: Select your VPC  
   - **AZs/Subnets**: Choose subnets (for high availability, select multiple AZs).  
4. **Security Groups**: Allow **NFS traffic (port 2049)**.  
5. Click **Create**.  

---

## 🔹 Step 2: Install NFS Utilities on EC2 Instances  

For **Amazon Linux**:  
```bash
sudo yum install -y amazon-efs-utils
```
# AWS EFS Practical Guide  

## 🔹 Step 1: Create an EFS File System  

1. Go to the **AWS Management Console → EFS**.  
2. Click **Create file system**.  
3. Select your **VPC** and Availability Zones (AZs).  
4. Attach **Mount Targets** in each AZ (linked to Subnets & Security Groups).  
5. Set **Performance mode** (General Purpose or Max I/O).  
6. Enable **Encryption** (recommended).  
7. Click **Create**.  

---

## 🔹 Step 2: Install NFS Utilities on EC2 Instances  

For **Ubuntu/Debian**:  
```bash
sudo apt-get update
sudo apt-get install -y nfs-common
```
**For Amazon Linux / RHEL / CentOS**
```sh
sudo yum install -y amazon-efs-utils
sudo yum install -y nfs-utils
```
**🔹 Step 3: Mount the EFS File System**

1.Get your EFS File System ID (e.g., fs-12345678) from the AWS console.
2.Create a mount point:
```sh
sudo mkdir -p /mnt/efs
```
**using NFS protocol**
```sh
sudo mount -t nfs4 -o nfsvers=4.1 fs-12345678.efs.us-east-1.amazonaws.com:/ /mnt/efs
```
**to mount**
```sh
systemctl daemon-reload
mount -a
```
**to verify**
```sh
df -h
```
