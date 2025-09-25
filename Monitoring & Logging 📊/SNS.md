# Amazon SNS and CloudWatch Integration
 
![sns aws](https://github.com/user-attachments/assets/709ce4c4-0cbd-4d82-81c6-6277f7cb1c96)

## 1. What is Amazon SNS?
**Amazon Simple Notification Service (SNS)** is a fully managed **pub/sub messaging service** that enables communication between distributed systems, microservices, and end-users.  

It allows you to send **notifications from CloudWatch Alarms, Events, or applications** to multiple subscribers.  

### **Supported Subscribers**
- Email
- SMS
- AWS Lambda
- SQS Queue
- HTTPS Endpoints

---

## 2. Key Features of SNS
- **Fan-out Architecture**: Send a single message to multiple endpoints simultaneously.  
- **Highly Scalable**: Handles millions of messages reliably.  
- **Flexible Protocols**: Supports email, SMS, HTTP/S, Lambda, and SQS.  
- **Integration with CloudWatch**: Commonly used to send alarm notifications or event-driven alerts.  
- **Message Durability**: Messages are stored redundantly across multiple Availability Zones.  
- **Security & Access Control**: Integrates with AWS IAM and supports encryption with AWS KMS.  

---

## 3. Creating an SNS Topic

1. Open the **Amazon SNS Console**.  
2. Click **Create Topic** → Choose **Standard** or **FIFO**.  
3. Provide a **Topic Name** and optional **Display Name**.  
4. Create **subscriptions** for the topic (e.g., email, SMS, Lambda, or SQS).  
5. Confirm subscriptions (via email/SMS confirmation).  

### Example: Create and Subscribe
- Topic Name: `HighCPUAlerts`  
- Subscription: `team@example.com` (email)  
- Confirm the subscription via the link sent to the email.  

---

## 4. Publishing Messages to SNS

You can **publish messages manually** or programmatically.

### Manual Publishing (SNS Console)
1. Select your SNS Topic.  
2. Click **Publish message**.  
3. Add **Subject** and **Message Body**.  
4. Click **Publish** → all subscribers will receive the message.  

### Programmatic Publishing (AWS CLI Example)
aws sns publish \
    --topic-arn <SNS_TOPIC_ARN> \
    --message "CPU usage exceeded 80%" \
    --subject "High CPU Alert"


---
## 5. Linking SNS Topic with CloudWatch Alarm
Open the CloudWatch Console → Navigate to Alarms.
Click Create Alarm → Select the metric (e.g., EC2 CPU Utilization).
Set the threshold (e.g., CPU > 80%).
Under Alarm actions, select Send notification to an SNS Topic.
Choose the previously created SNS Topic.
When the alarm state changes, the SNS topic automatically sends notifications to all subscribers.

## 6. Automating Notifications
SNS can be integrated with AWS Lambda, CloudWatch Events, Step Functions, or SQS to create automated workflows.
Useful for incident response, alerting, and event-driven architectures.
