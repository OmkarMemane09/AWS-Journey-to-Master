# Amazon EBS Volume Types

## Overview
Amazon Elastic Block Store (Amazon EBS) provides block-level storage volumes for use with Amazon EC2 instances. EBS volumes behave like raw, unformatted block devices. You can mount these volumes as devices on your instances.

## EBS Volume Types

![ebstype](https://github.com/user-attachments/assets/3e7bda42-0fe1-40d6-bf42-183f4dcfcf24)

## Volume Type Overview

| Feature | gp3 (General Purpose SSD) | gp2 (General Purpose SSD) | io2 Block Express | io1/io2 (Provisioned IOPS SSD) | st1 (Throughput Optimized HDD) | sc1 (Cold HDD) |
|---------|---------------------------|---------------------------|-------------------|--------------------------------|--------------------------------|----------------|
| **Category** | SSD | SSD | SSD | SSD | HDD | HDD |
| **Best For** | Boot volumes, small-medium databases, dev environments | Boot volumes, small-medium databases (legacy) | Mission-critical apps, large databases | I/O-intensive databases (MySQL, PostgreSQL) | Big data, data warehouses, log processing | Cold data, infrequent access |
| **Max Volume Size** | 16 TiB | 16 TiB | 16 TiB | 16 TiB | 16 TiB | 16 TiB |
| **Max IOPS** | 16,000 (provisionable) | 16,000 (baseline) | 256,000 | 64,000 (io1)<br>256,000 (io2) | 500 | 250 |
| **Max Throughput** | 1,000 MiB/s | 250 MiB/s | 4,000 MiB/s | 1,000 MiB/s | 500 MiB/s | 250 MiB/s |
| **Latency** | Sub-millisecond | Sub-millisecond | Sub-millisecond | Sub-millisecond | Single-digit milliseconds | Higher latency |
| **Durability** | 99.8% - 99.9% | 99.8% - 99.9% | 99.999% | 99.9% (io1)<br>99.999% (io2) | 99.8% - 99.9% | 99.8% - 99.9% |
| **Boot Volume** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No | ❌ No |
| **Multi-Attach** | ✅ Yes (up to 16 instances) | ❌ No | ✅ Yes (up to 16 instances) | ✅ Yes (up to 16 instances) | ❌ No | ❌ No |

## Performance Characteristics

### SSD Volumes (Transactional Workloads)

| Volume Type | Baseline Performance | Performance Scaling | Cost Model |
|-------------|----------------------|---------------------|------------|
| **gp3** | 3,000 IOPS + 125 MiB/s (included) | Provision additional IOPS/throughput | Baseline included, pay for extra |
| **gp2** | 3 IOPS per GiB (min 100, max 16K) | Scales with volume size | Included with volume size |
| **io2 Block Express** | Provision what you need | Highest performance tier | Pay for provisioned IOPS |
| **io1/io2** | Provision what you need | Up to 1,000 IOPS per GiB ratio | Pay for provisioned IOPS |

### HDD Volumes (Throughput Workloads)

| Volume Type | Baseline Throughput | Burst Throughput | Burst Balance |
|-------------|---------------------|------------------|---------------|
| **st1** | 40 MiB/s per TiB | 250 MiB/s per TiB | Uses burst buckets |
| **sc1** | 12 MiB/s per TiB | 80 MiB/s per TiB | Uses burst buckets |

=======================================================================

# AWS EBS Volume Management Guide
## Attaching an EBS Volume to an EC2 Instance

### Step 1: Attach Volume via AWS Console
1. **Navigate to EC2 Dashboard**
   - Go to AWS Management Console
   - Select **Services → Compute → EC2**

2. **Access Volumes Section**
   - In left navigation menu: **Elastic Block Store → Volumes**

3. **Select and Attach Volume**
   - Select the target volume (status should be "available")
   - Click **Actions → Attach Volume**
   - Configure attachment settings:
     - **Instance**: Select your target EC2 instance from dropdown
     - **Device**: Use recommended name (e.g., `/dev/sdf`, `/dev/xvdf`)
   - Click **Attach**

### Step 2: Verify Volume Attachment

### SSH into your EC2 instance
```bash
ssh -i "your-key.pem" ec2-user@your-instance-ip
```
### List block devices to confirm volume attachment
```bash
lsblk
```
### Expected Output
```
NAME    MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
xvda    202:0    0   8G  0 disk 
└─xvda1 202:1    0   8G  0 part /
xvdf    202:80   0  20G  0 disk     # <- Your new volume
```


## Mounting the Volume

### Create Mount Directory
```bash
sudo mkdir /mnt/ebs-volume
```
### Mount the Volume
```bash
sudo mount /dev/xvdf1 /mnt/ebs-volume
```
### Verify the Volume is Mounted
```bash
df -h
```
### Persisting the Mount (Optional)
### To make the mount persistent across reboots:

### Open the fstab File
```bash
sudo nano /etc/fstab
```
### Add the Following Entry
```bash
/dev/xvdf1   /mnt/ebs-volume   ext4   defaults,nofail   0   2
```
### Save the File and Exit
  Press Ctrl + X
  Press Y to confirm save
  Press Enter to confirm filename

### Test the Configuration
sudo mount -a

# EBS Volume Backup Using Snapshots

## Manual Snapshot Creation

### Step 1: Navigate to EC2 Dashboard
- Go to AWS Management Console
- Select **Services → Compute → EC2**

### Step 2: Access Volumes Section
- In left navigation menu: **Elastic Block Store → Volumes**

### Step 3: Create Snapshot
- Select the volume you want to back up
- Click **Actions → Create Snapshot**
- Provide snapshot details:
  - **Description**: Enter meaningful description (e.g., "Daily Backup - Production DB")
  - **Tags**: Add tags for better organization (optional)

### Step 4: Create Snapshot
- Click **Create Snapshot**
- Snapshot creation will start immediately

### Step 5: View Snapshots
- Navigate to: **Elastic Block Store → Snapshots**
- Monitor snapshot progress (status will change from "pending" to "completed")

## Automating Snapshots Using Snapshot Policies

### Create a Snapshot Lifecycle Policy

#### Step 1: Access Data Lifecycle Manager
- Go to AWS Management Console
- Navigate to: **Services → EC2 → Elastic Block Store → Lifecycle Manager**

#### Step 2: Create Lifecycle Policy
- Click **Create lifecycle policy**
- Select **EBS Snapshot policy**
- Click **Next**

#### Step 3: Configure Policy Details
```yaml
Policy Type: EBS snapshot policy
Description: [Enter policy description]
Resource Type: Volume
Target resources: Add tags to identify volumes
  - Tag: Environment:Production
  - Tag: Backup:Daily
