# AWS CloudWatch

![CloudWatch Logo](https://github.com/user-attachments/assets/83c732aa-dae7-4d00-9f1e-15b5d8edd2bc)

AWS CloudWatch is a **serverless performance monitoring service** that monitors your AWS resources and the applications you run on AWS in real time. It offers tools to give you system-wide observability of your application performance, operational health, and resource utilization. CloudWatch integrates with **AWS IAM** for secure access control.

---

## Key Features

- **Monitoring & Logs:** Collect and track metrics, monitor logs, and check system/application behavior.
- **Alarms:** Automatically initiate actions based on metric thresholds.
- **Serverless Performance Monitoring:** Works without managing servers.
- **Integration:** Can integrate with AWS IAM for permissions and security.

---

## Metrics

- Metrics are **data about the performance** of your systems.
- By default, AWS services provide **free metrics** for resources like EC2, EBS, and RDS.
- Metrics represent a **time-ordered set of data points**.
- Each metric can have up to **30 dimensions** (attributes).
- Metrics exist **within a region**.
- Metrics **cannot be deleted** but automatically expire after **15 months**.

**Examples of Metrics:**
- CPU utilization
- Disk storage
- Memory usage
- Network I/O

---

## Dashboards

- Dashboards provide **visualization of monitoring data**.
- CloudWatch includes **automatic pre-built dashboards** and also allows creating **custom dashboards**.
- Dashboards help monitor resources across **different regions**.
- Useful for creating **customized views** of telemetry data for AWS resources.

![CloudWatch Dashboard](https://github.com/user-attachments/assets/2beefd28-81fa-4dc3-97c0-0720d22d4c50)

---

## Alarms

- Automatically initiate actions on your behalf (e.g., Auto Scaling when metrics suddenly change).
- Can include **anomaly detection** for sudden spikes or changes.
- Can trigger actions like:
  - Sending SNS notifications
  - Auto Scaling policies
  - Lambda functions

---

![cloudprice](https://github.com/user-attachments/assets/8e1004da-f538-41c2-afc3-063098945ade)  

--- 
CloudWatch is an essential tool for monitoring and logging in AWS, offering a robust set of features to ensure the health and performance of your applications and infrastructure.



```
 wget https://amazoncloudwatch-agent.s3.amazonaws.com/amazon_linux/amd64/latest/amazon-cloudwatch-agent.rpm
   
 sudo rpm -U ./amazon-cloudwatch-agent.rpm
 sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-config-wizard
 sudo amazon-cloudwatch-agent-ctl -a start -c file:/opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.json -s

 ```


## Steps to Set Up AWS CloudWatch

### Step 1: Sign in to AWS Console
- Go to the **AWS Management Console**.
- Navigate to **CloudWatch** under “Management & Governance.”

### Step 2: View Metrics
- Click on **Metrics** in the left menu.
- Choose a **namespace** (like EC2, RDS, Lambda, etc.).
- Select the resource(s) to monitor.
- View graphs of metrics like **CPU utilization, memory, disk I/O, request count, latency**, etc.

### Step 3: Set Up Alarms
- Go to **Alarms → Create Alarm**.
- Select the metric to monitor.
- Define **thresholds** (e.g., CPU > 80%).
- Configure **actions** (SNS notification, Auto Scaling, etc.).
- Give a name and create the alarm.

### Step 4: Create Dashboards (Optional)
- Go to **Dashboards → Create Dashboard**.
- Give a dashboard name.
- Add **widgets** for metrics, text, or alarms.
- Customize to view all key metrics in one place.

### Step 5: Monitor Logs
- Navigate to **Logs → Log Groups**.
- Select a log group (EC2, Lambda, or API Gateway logs).
- View real-time logs or create **metric filters** for specific patterns/errors.
- Trigger alarms based on log events if needed.

### Step 6: Enable CloudWatch Agent (Optional)
- For **detailed monitoring** (like memory, disk usage) on EC2:
  1. Install the **CloudWatch Agent** on your EC2 instance.
  2. Configure via the wizard or JSON file.
  3. Start the agent to send custom metrics to CloudWatch.

### Step 7: Review and Optimize
- Regularly check **dashboards and alarms**.
- Adjust thresholds based on **usage patterns**.
- Archive old logs or metrics to **save costs**.

---
# To See Logs Of EC2 Application 
we can make custom metric by using agent 
Agent - gather info and give it to cloudwatch 
![aws clodwatch](https://github.com/user-attachments/assets/aba850dd-d6fc-463f-b5ca-add509ae46e4)



