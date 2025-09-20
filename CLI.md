# 🚀 AWS CLI (Command Line Interface) Notes

The **AWS Command Line Interface (CLI)** is a unified tool to manage AWS services directly from the terminal.  
It helps developers, DevOps engineers, and administrators automate tasks, integrate with scripts, and manage resources efficiently.  

---

## 🔑 Generating Access Key ID and Secret Key
Before using AWS CLI, you need **Access Keys**.

Steps:
1. Tap on your **AWS account name/ID** in the AWS Console.  
2. Go to **Security Credentials**.  
3. Navigate to **Access Keys**.  
4. Generate it and **download the `.csv` file** (the **Secret Key** is visible only once).  

⚠️ Always store Access Keys securely and never share them.

---

## ⚙️ Setting up the AWS CLI Environment

### Install AWS CLI
```bash
sudo apt update
sudo snap install aws-cli --classic

aws configure
You will be prompted for:
Access Key ID
Secret Access Key
Default region name (example: ap-south-1 for Mumbai)
Default output format (example: json)
After this, your CLI is ready to use.

🗄️ Amazon S3 (Simple Storage Service)

Amazon S3 is an object storage service that provides industry-leading scalability, data availability, and security.
It stores data as objects (files + metadata) inside buckets.

✅ Make an S3 Bucket
aws s3 mb s3://bucket_name

✅ Add a Specific File into Bucket
touch Demo.txt
aws s3 cp Demo.txt s3://bucket_name

✅ Download File from Bucket
aws s3 cp s3://bucket_name/Demo1.txt .

✅ List All Buckets
aws s3 ls



💻 Amazon EC2 (Elastic Compute Cloud)

Amazon EC2 provides resizable compute capacity in the cloud.
It allows you to launch virtual servers (instances) and run applications.

✅ Launch an EC2 Instance
aws ec2 run-instances \
  --image-id ami-02d26659fd82cf299 \
  --instance-type t2.micro \
  --key-name mumbai \
  --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=MyInstance}]' \
  --region ap-south-1


Here --tag-specifications adds a Name tag to the instance so it appears with a friendly name in the AWS Console.

✅ Describe Running EC2 Instances
aws ec2 describe-instances --region ap-south-1

✅ Terminate an EC2 Instance
aws ec2 terminate-instances --instance-ids <instance_id>

👤 IAM (Identity and Access Management)

IAM lets you securely control access to AWS services and resources.
You can create users, groups, roles, and assign policies for permissions.

✅ Create a New IAM User
aws iam create-user --user-name MyUser


Example output:

{
    "User": {
        "Path": "/",
        "UserName": "MyUser",
        "UserId": "AIDAU5H6KKSA7GUSWOMRV",
        "Arn": "arn:aws:iam::337688286337:user/MyUser",
        "CreateDate": "2025-09-20T08:11:48+00:00"
    }
}

✅ Attach Policy to IAM User
aws iam attach-user-policy \
  --user-name MyUser \
  --policy-arn arn:aws:iam::aws:policy/AmazonEC2FullAccess

✅ Create Access Key for IAM User (for CLI/API access)
aws iam create-access-key --user-name MyUser


This outputs:

{
  "AccessKey": {
    "UserName": "MyUser",
    "AccessKeyId": "AKIAxxxxxxxxxxxxx",
    "SecretAccessKey": "xxxxxxxxxxxxxxxxxxxx"
  }
}


⚠️ Save this information securely — the SecretAccessKey is shown only once.

✅ Delete an IAM User
aws iam delete-user --user-name MyUser

