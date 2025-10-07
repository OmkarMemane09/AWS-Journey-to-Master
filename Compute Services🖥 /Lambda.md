# ☁️ AWS Lambda 

<img width="66" height="74" alt="image" src="https://github.com/user-attachments/assets/d9d79c70-2c4a-4e12-8fac-a189944b97f6" />

---

## 🧩 1. Introduction to AWS Lambda

**AWS Lambda** is a **serverless compute service** that lets you **run code without provisioning or managing servers**.  
You pay only for the compute time your code consumes (billed per millisecond).

With Lambda, your applications are composed of **functions triggered by events** — such as uploading a file to S3, updating a DynamoDB table, or making an HTTP request via API Gateway.

> ⚙️ Even though Lambda is "serverless," your code still runs on servers — but AWS handles all the infrastructure, scaling, and availability.

---
<img width="1082" height="299" alt="image" src="https://github.com/user-attachments/assets/037367fa-6afa-4b26-a560-6c32604e15e0" />

### 🚀 Key Features

| Feature | Description |
|----------|--------------|
| **Serverless Execution** | No need to manage or provision servers — AWS handles it. |
| **Event-Driven** | Triggered by AWS services like S3, DynamoDB, CloudWatch, API Gateway, etc. |
| **Auto Scaling & High Availability** | Automatically scales up/down with incoming traffic while maintaining high availability. |
| **Pay-Per-Use Pricing** | Pay only for the time your code executes and the number of requests. |
| **Supports Multiple Languages** | Python, Node.js, Java, Go, Ruby, .NET, and more. |
| **Integration with AWS Services** | Works seamlessly with S3, DynamoDB, API Gateway, SNS, SQS, Step Functions, etc. |
| **Versioning and Deployment** | Supports multiple versions and aliases for safe deployment and rollback. |
| **Security and IAM Integration** | Uses AWS Identity and Access Management (IAM) for secure access control. |

---

## ⚙️ 2. How AWS Lambda Works

1. **Upload your code** to AWS Lambda.
2. **Configure triggers** from AWS services, HTTP endpoints, or other events.
3. **Lambda runs your code** automatically when triggered.
4. **AWS provisions and manages** the compute resources dynamically.
5. You are **billed only for execution time** — not for idle time.

---

## 🧠 3. Step-by-Step Demo: Create and Run a Lambda Function

### ✅ Step 1: Create the Function
1. Go to **AWS Console → Lambda → Create Function**.
2. Choose **Author from scratch**.
   - Function name: `HelloLambda`
   - Runtime: `Python 3.x` (or Node.js)
   - Execution role: Create a new role with **basic Lambda permissions**
3. Click **Create function**.

---

### 📝 Step 2: Add Function Code
Example (Python):
```python
def lambda_handler(event, context):
    return {
        'statusCode': 200,
        'body': 'Hello from Lambda!'
    }
```
## ▶️ Step 3: Test the Function

1. In the **Lambda Console**, click **Test**.  
2. Create a **Test Event** (use the default template).  
3. Run the test → Expected Output:

```json
{
  "statusCode": 200,
  "body": "Hello from Lambda!"
}
```
# ⚡ AWS Lambda - Advanced Concepts

---

## ⚙️ Step 4: Add an Event Trigger

AWS Lambda functions can be triggered by various AWS services.  
These triggers allow your function to execute automatically when specific events occur.

### 🔹 Common Triggers
- **S3** → Run the function when a file is uploaded.
- **API Gateway** → Run the function on an HTTP request.
- **CloudWatch Events** → Schedule execution using CRON expressions.
- **DynamoDB Streams** → Trigger the function on database changes.

### 🧠 Example:
1. Create an **S3 Bucket**.  
2. Add an **S3 trigger** to the Lambda function for a **PUT event**.  
3. Whenever a file is uploaded to the bucket, the Lambda function executes automatically.

---

## 💡 4. AWS Lambda Layers

**Lambda Layers** are `.zip` archives containing libraries, dependencies, or custom runtimes.  
They allow code reuse and reduce duplication across multiple Lambda functions.

### 🔸 Key Points
- A function can use **up to 5 layers** at once.  
- Layers are extracted to the **/opt** directory in the function execution environment.  
- Helps you avoid bundling large dependencies in each function deployment.

### 🧩 Example Use
Add external Python libraries like **`requests`** or **`pandas`** as a layer instead of packaging them with your code.

---

## 🪄 5. Lambda Handler

The **handler** is the entry point of your Lambda function.  
It defines **where execution starts** whenever the function is triggered.

### 🧠 Example (Python)
```python
def lambda_handler(event, context):
    # Your logic here
    return "Hello World"
```
## 🌍 6. Lambda@Edge

**Lambda@Edge** allows you to run your AWS Lambda functions **globally** at AWS **edge locations**,  
improving performance and reducing latency by executing code closer to the users.

It integrates with **Amazon CloudFront** to let you customize how content is delivered.

### 🔹 Key Features
- Runs functions in response to **CloudFront events**.  
- Improves **performance** and **reduces latency**.  
- Supports **Node.js** and **Python** runtimes.  
- No need to manage or provision servers.  
- Enables **custom logic** at the edge without changing the origin server.

---

### 🕹️ Lambda@Edge Triggers

| **Trigger Type** | **Description** |
|------------------|-----------------|
| **Viewer Request** | Triggered **before** CloudFront forwards the request to the origin. |
| **Origin Request** | Triggered **before** sending the request to the backend/origin server. |
| **Origin Response** | Triggered **after** receiving the response from the origin. |
| **Viewer Response** | Triggered **before** sending the response back to the viewer. |

---

### 💡 Example Use Case
Redirect users based on their **country**,  
modify **HTTP headers**, or customize the **response cache behavior** dynamically.

---

### 🧠 Common Use Scenarios
- **A/B testing** different versions of content.  
- **Access control** and authentication at the edge.  
- **URL rewrites or redirects** before reaching the origin.  
- **Header manipulation** to enhance security or performance.

---

## 📏 7. AWS Lambda Limits

| **Parameter** | **Limit** |
|----------------|-----------|
| Memory Allocation | 128 MB – 10,240 MB (in 1 MB increments) |
| /tmp Storage (Ephemeral Disk) | 512 MB |
| Environment Variables | 4 KB |
| File Descriptors | 1024 |
| Max Execution Time | 900 seconds (15 minutes) |
| Deployment Package Size | 50 MB (zipped), 250 MB (unzipped) |

---

## 🧮 8. AWS Lambda Pricing

AWS Lambda pricing depends on three main factors:

| **Metric** | **Description** |
|-------------|----------------|
| **Number of Requests** | The number of times your function is invoked. |
| **Duration** | Time your code executes (billed per millisecond). |
| **Memory Allocation** | The amount of RAM assigned to your function. |

### 💰 Free Tier
- **1 million** free requests per month  
- **400,000 GB-seconds** of compute time per month  

---

## 💼 9. Common Use Cases

| **Use Case** | **Description** |
|---------------|----------------|
| **File Processing** | Trigger Lambda when a file is uploaded to S3 for processing. |
| **Web Applications** | Combine Lambda with API Gateway for scalable, serverless web apps. |
| **IoT Applications** | Process and analyze IoT device data in real time. |
| **Stream Processing** | Integrate with Kinesis or DynamoDB Streams for event-driven data processing. |
| **Automation Tasks** | Perform cleanup, backups, or notifications automatically. |
| **Scheduled Jobs** | Use CloudWatch Events to trigger functions on a CRON schedule. |

---

