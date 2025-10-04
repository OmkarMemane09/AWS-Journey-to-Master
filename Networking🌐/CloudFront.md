# 🌐 Amazon CloudFront

Amazon **CloudFront** is a **Content Delivery Network (CDN)** service that speeds up the distribution of your **static and dynamic web content**, such as `.html`, `.css`, `.php`, images, and media files.

CloudFront delivers content via a **worldwide network of edge locations**, ensuring:
- **Low latency**
- **High transfer speed**
- **Improved load time**
- **Better global performance**

It works by caching copies of content closer to the end users at **Edge Locations**, reducing the load on your origin servers.

---

## 📈 Main Flow

> Below is a high-level overview of how CloudFront processes user requests and improves delivery:

<img width="446" height="431" alt="Main Flow" src="https://github.com/user-attachments/assets/197cea7c-0b26-42f9-a38f-0e334ee1cfd3" />

### 🔄 Additional Architecture Diagrams

<img width="981" height="600" alt="Flow 1" src="https://github.com/user-attachments/assets/c35f0aec-e4f8-4860-abd9-984fe74ff67d" />
<img width="973" height="489" alt="Flow 2" src="https://github.com/user-attachments/assets/7e9cee9e-29c9-4e82-b45a-6a8c7a0017c6" />
<img width="994" height="562" alt="Flow 3" src="https://github.com/user-attachments/assets/8ed07f16-3534-419a-87db-03df91f1ce23" />
<img width="974" height="503" alt="Flow 4" src="https://github.com/user-attachments/assets/8b584ba2-0648-424a-91cf-b970d22aaf19" />
<img width="978" height="524" alt="Flow 5" src="https://github.com/user-attachments/assets/3dbd95cf-19f0-403c-a5ee-20ad24d8b0a8" />

---

## ⚙️ CloudFront Features

<img width="998" height="689" alt="Features" src="https://github.com/user-attachments/assets/7af5ddfd-b7c4-48eb-964b-6ec8f74476c5" />

### ✨ Key Capabilities

- **Global Edge Network**: 300+ edge locations for worldwide reach
- **Static & Dynamic Content Delivery**: HTML, CSS, JS, APIs, video streams, and more
- **Origin Options**: Amazon S3, EC2, Elastic Load Balancers, and custom origins
- **HTTPS Support**: Secure communication using AWS Certificate Manager or custom certs
- **Access Control**: Signed URLs, signed cookies, geo-restrictions
- **Lambda@Edge / CloudFront Functions**: Execute custom code at edge locations
- **Real-time Metrics**: Integrated with Amazon CloudWatch
- **Field-Level Encryption**: Protect sensitive data before it hits your backend

---

## 🚀 Applications / Use Cases

| Use Case                     | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| Static Website Hosting      | Deliver static files (HTML, CSS, JS) quickly from S3 or custom origin       |
| Dynamic Content Delivery    | Accelerate APIs, dynamic HTML from origin servers                           |
| Video Streaming             | Stream video using HLS, DASH with minimal buffering                         |
| API Acceleration            | Reduce latency for RESTful/GraphQL APIs                                     |
| Software Distribution       | Efficient delivery of binaries, updates, patches                           |
| Global Website Optimization | Fast, secure access to web assets from any region                           |
| Private Content Delivery    | Control access using signed URLs or cookies                                 |
| DDoS Protection             | Protect apps with AWS Shield & WAF integrated with CloudFront               |

---

## 🔐 Security & Compliance

CloudFront is deeply integrated with AWS security services:

- **AWS Shield Standard**: Free DDoS protection
- **AWS WAF**: Protect apps from SQLi, XSS, etc.
- **ACM (AWS Certificate Manager)**: Free SSL/TLS certificate provisioning
- **Field-Level Encryption**: Encrypt sensitive form fields (e.g., credit card numbers)
- **Signed URLs/Cookies**: Restrict access to premium/private content
- **Geo Restriction**: Allow/deny content delivery by country

---

## 💡 Must Know 

- ✅ Use **versioned URLs** to manage content caching (`style.v1.css`, `script.v2.js`)
- ✅ Configure **cache policies** properly to avoid stale or over-requested data
- ✅ Use **CloudFront Functions** for lightweight header manipulation or redirects
- ✅ Set up **origin failover** between primary and secondary origins
- ✅ Enable **gzip/Brotli compression** for faster content delivery
- ✅ Monitor using **CloudWatch metrics** and access logs
- ✅ Secure your distributions with **HTTPS** and WAF rules

---

## 🧰 Common Integrations

| AWS Service       | Integration Purpose                                         |
|-------------------|-------------------------------------------------------------|
| Amazon S3         | Static website hosting / file delivery                      |
| EC2 / ALB / ECS   | Dynamic web apps as origin                                  |
| AWS Lambda@Edge   | Run serverless logic at edge (auth, redirects, headers)     |
| CloudFront Functions | Lightweight logic execution at the edge (cheaper/faster) |
| AWS WAF           | Web app firewall for Layer 7 protection                     |
| CloudWatch        | Logs, metrics, alarms                                       |
| ACM               | SSL/TLS management for HTTPS                                |

---


