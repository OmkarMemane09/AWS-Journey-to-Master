<h1> AWS Identity and Access Management </h1>

AWS Identity and Access Management (IAM) is a web service for securely controlling access to AWS services. 

With IAM, you can centrally manage users, security credentials such as access keys, and permissions that control AWS resources . 

this is service thatcontrol securely access to your aws resources .

IAM allows you to create and manage AWS users and groups, and use permissions to allow or deny their access to AWS resources.

Follows principle of least privilege .

it controls authentication and authorization .

<h5>Diffrence Between Authentication and Authorization .</h5>
<img width="914" height="504" alt="Screenshot 2025-09-17 132549" src="https://github.com/user-attachments/assets/e5fd23f6-f8f6-4a3f-accd-a73d0c705b45" />

<h2> Privelages = Permissions + Rights </h2>
<h3> Features of IAM </h3>
<h4> IAM USER</h4>

Allow you create and manage user in aws account 

user having unique credintial from which they can authenticate and authorizes .

It include Secority Credintials like : 1. Password 2.Access key ID . 3.Secret Access key 

<h4>IAM Groups </h4>
Set of users who have assigned permission from group.

We gives permissions directly to group and by default the users present in the group get that permissions .
 For example, you could create a group called "Developers" and assign permissions to that group that allow members to access development resources. You can then add users to the "Developers" group as needed, and they will inherit the permissions assigned to that group 

<h5>Diffrence between user and group</h5>
# 👤 User vs 👥 Group in Linux

| Aspect              | User                                                                 | Group                                                                 |
|---------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|
| Definition          | An individual account that can log in and own resources.             | A collection of users grouped together to manage permissions easily. |
| Identity            | Identified by a **username** and a unique **UID (User ID)**.         | Identified by a **group name** and a unique **GID (Group ID)**.      |
| Ownership           | A user can own files, processes, and directories.                    | A group can own files and directories collectively.                  |
| Permissions         | Users have **read, write, execute** permissions on files they own.   | Groups can also be assigned permissions on files/directories.        |
| Scope               | Permissions apply to an individual.                                  | Permissions apply to all members of the group.                       |
| Example             | User: `omkar` with UID = 1001                                        | Group: `developers` with GID = 1002, members = {omkar, raj, ankit}   |

# Creating IAM Users in AWS

## 1. Log in to AWS Management Console
- Go to [AWS Console](https://aws.amazon.com/console/).
- Sign in with your **root account** or an IAM user with **AdministratorAccess**.

---

## 2. Navigate to IAM
- In the **search bar**, type **IAM**.
- Click on **IAM (Identity and Access Management)**.

---

## 3. Create a New User
1. On the left panel, click **Users** → **Add users**.
2. Enter a **User name** (e.g., `devops_user`).
3. Select **Access type**:
   - **Programmatic access** → for **API/CLI/SDK access**.
   - **AWS Management Console access** → for **console login**.
   - You can select both if required.

---

## 4. Set Permissions
Choose one of the following:

### Option A: Attach existing policies directly
- Select policies like **AdministratorAccess** or specific ones like **S3FullAccess**, **EC2FullAccess**.

### Option B: Add user to group
- Create a group with predefined policies.
- Add the user to that group for easier management.

### Option C: Copy permissions from existing user
- Useful if you want the new user to have the same permissions as an existing user.

### Option D: Attach custom policy
- Write a **JSON policy** with fine-grained permissions.

---

## 5. Optional: Set Tags
- Add **key-value tags** like:
  - `Department = DevOps`
  - `Project = CloudTraining`
- Tags help in **tracking and auditing**.

---

## 6. Review and Create User
- Verify **username, access type, and permissions**.
- Click **Create user**.

---

## 7. Save Credentials
- After creation, AWS will show:
  - **Access key ID & Secret access key** (for CLI/SDK)
  - **Console login URL** (for console access)
- **Important:** Download `.csv` file or copy credentials. **Secret key won’t be shown again**.

---

## 8. Best Practices
- Enable **MFA (Multi-Factor Authentication)** for console users.
- Assign **least privilege**: only grant necessary permissions.
- Rotate access keys regularly.
- Use **groups** instead of individual user policies for easier management.

---

# Assigning Console and Programmatic Access for IAM Users

## 1. Log in to AWS Management Console
- Go to [AWS Console](https://aws.amazon.com/console/).
- Sign in with a **root account** or IAM user with **AdministratorAccess**.

---

## 2. Navigate to IAM
- In the **search bar**, type **IAM**.
- Click **IAM (Identity and Access Management)**.

---

## 3. Add or Select a User
1. On the left panel, click **Users**.
2. Either **select an existing user** or click **Add users**.

---

## 4. Assign Access Type

### **Programmatic Access**
- Check **Programmatic access**.
- Provides an **Access Key ID** and **Secret Access Key**.
- Used for:
  - AWS CLI
  - AWS SDKs
  - API calls

### **AWS Management Console Access**
- Check **AWS Management Console access**.
- Set a **console password**:
  - **Autogenerated password** (recommended) or
  - **Custom password**
- Options:
  - Require user to **reset password on first login** (recommended).

### **Both Access Types**
- You can select both if the user needs **CLI/API access** and **console login**.

---

## 5. Set Permissions
- Attach **existing policies**, **add to a group**, **copy from another user**, or **attach a custom policy**.

---

## 6. Review and Create User
- Confirm **username, access type, and permissions**.
- Click **Create user**.

---

## 7. Save Credentials
- For **programmatic access**:
  - Copy **Access Key ID** and **Secret Access Key**.
  - Download `.csv` file.
- For **console access**:
  - Share the **console login URL** with the user.

---

## 8. Best Practices
- Enable **MFA** for console users.
- Assign **least privilege** policies.
- Rotate access keys regularly.
- Use **groups** for easier permission management.

---

# IAM Group Creation and Policy Attachment

## 1. Log in to AWS Management Console
- Go to [AWS Console](https://aws.amazon.com/console/).
- Sign in with a **root account** or IAM user with **AdministratorAccess**.

---

## 2. Navigate to IAM
- In the **search bar**, type **IAM**.
- Click **IAM (Identity and Access Management)**.

---

## 3. Create a New Group
1. On the left panel, click **User groups** → **Create group**.
2. Enter a **Group name** (e.g., `DevOpsTeam`).

---

## 4. Attach Policies to the Group
- AWS will show a list of **policies**.
- Choose one or multiple policies:
  - **AdministratorAccess** → Full access
  - **AmazonS3FullAccess** → S3-specific access
  - **AmazonEC2FullAccess** → EC2-specific access
- You can also:
  - **Create custom policy** in JSON format for fine-grained permissions.

---

## 5. Review and Create Group
- Verify the **group name** and **policies attached**.
- Click **Create group**.

---

## 6. Add Users to the Group
1. Select the group → **Add users**.
2. Choose one or multiple IAM users to add.
3. Click **Add users**.

---

## 7. Best Practices
- Use **groups** instead of attaching policies to individual users.
- Assign **least privilege** policies.
- Rotate access keys regularly for programmatic users.
- Enable **MFA** for console users in the group.

---
<h4>IAM Policy </h4>
Policies are JSON (Java Script Object Orientaion) documents which mention what an user or group can do on AWS recources
It defines the authorization paradigm for AWS resources

It contains 3 components at least (EAR)   
EFFECT : whether actions are allowed/denied on resources
ACTIONS : what actions are allowed and denied 
RESOURCES : AWS resources like ec2,s3,RDS
Policies can be attached to users or groups

There are 3 types of policies 
1.AWS managed policies

2.customer managed policies

3.inline policies

<h4>IAM Roles </h4>
Role is similar to an user/groups which has permissions/policies attached to it
Roles are temporary access given to anyone who needs to perform specific task mentioned in the role
permissions attached to the users are taken away till the time role is getting used 

<img width="644" height="358" alt="image" src="https://github.com/user-attachments/assets/ac61f4ec-b62c-4a37-94c5-aac76a76dd5e" />
## 4. Practical Demo: Creating and Using a Role

### Step 1: Create a Role
1. Navigate to **IAM → Roles → Create role**.
2. Select **Trusted entity type**:
   - **AWS service** → For EC2, Lambda, etc.
   - **Another AWS account** → Cross-account access
   - **Web identity** → For external providers
3. Click **Next: Permissions**.

### Step 2: Attach Policies
- Select an existing policy or custom policy (e.g., `S3FullAccess`).
- Click **Next: Tags** (optional) → Add tags for tracking.
- Click **Next: Review** → Give the role a **name** (e.g., `EC2S3AccessRole`) → **Create role**.

### Step 3: Assign Role to a Service
- For EC2:
  1. Navigate to **EC2 → Instances → Select instance → Actions → Security → Modify IAM role**.
  2. Attach the created role (e.g., `EC2S3AccessRole`).

### Step 4: Test the Role
- Log in to the EC2 instance.
- Try to access S3 using AWS CLI:
```bash
aws s3 ls
```

## 5. Best Practices for Roles
- Assign **least privilege**: only grant required permissions.  
- Use **temporary credentials** for applications.  
- Enable **CloudTrail logging** to monitor role usage.  
- Use **roles for services** instead of embedding access keys in applications.

---

## 6. Learning Outcome
- Understand different **types of IAM roles** and their use cases.  
- Learn to **create, attach, and test roles** in AWS.  
- Implement **secure and temporary access** for users and services.


