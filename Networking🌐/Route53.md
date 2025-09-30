# 🌐 Amazon Route 53 Overview  

![aws-route53-fk4qtcwyolq0zlrfn93s8i](https://github.com/user-attachments/assets/35ce5d9f-7f3b-427d-81ce-8f775778acfb)


# 🌐 Amazon Route 53  

Amazon Route 53 is a **highly available and scalable Domain Name System (DNS) web service** provided by AWS.  
- ✅ **Highly available & scalable DNS** service by AWS.  
- 🌍 **Global service** (works across regions).  
- 📝 **Authoritative DNS** – customers can update DNS records.  
- 🌐 Also acts as a **domain registrar**.  
- 💯 The **only AWS service with a 100% availability SLA**.  
- ⚠️ **Affected by client DNS caching** – not suitable for blue/green deployments if clients cache DNS queries.  
- Recommended to use DNS names or URLs instead of IPs whenever possible.
**Amazon Route 53 = Domain Registration + DNS Routing + Health Checking + Advanced DNS Management**
---

## It supports **three main functions**:  
## 1️⃣ Domain Registration  
- Register a domain name (e.g., `example.com`).  
- Used as the identity of your website or application.  
---
## 2️⃣ DNS Routing  
- Direct internet traffic to your resources (website, app, or email).  
- Example: User enters `example.com` → Route 53 connects browser to your server.  
- Supports routing email to **Amazon WorkMail**.  
---
## 3️⃣ Health Checking  
- Monitors resources (e.g., web servers) for availability and functionality.  
- Can send alerts and reroute traffic away from unhealthy resources.  
---
# 🌐 Amazon Route 53 Terminologies  

Below are the key terms you need to understand when working with Route 53:  

---

## 🔑 Basic Terms  

### 1️⃣ **DNS (Domain Name System)**  
- Translates human-readable names (`www.example.com`) into IP addresses (`192.0.2.44`).  

### 2️⃣ **Domain Name**  
- A friendly name for your website/app (e.g., `example.com`).  
- Registered through Route 53 or other registrars.  

### 3️⃣ **Hosted Zone**  
- A container for DNS records for a domain.  
- Two types:  
  - **Public Hosted Zone** → Routes traffic on the internet.  
  - **Private Hosted Zone** → Routes traffic within one or more VPCs.  

### 4️⃣ **DNS Record (Resource Record Set)**  
- Defines how Route 53 responds to DNS queries.  
- Common types:  
  - **A record** → Maps domain to IPv4.  
  - **AAAA record** → Maps domain to IPv6.  
  - **CNAME** → Alias for another domain.  
  - **MX** → Mail server.  
  - **NS** → Name servers.  
  - **TXT** → Text info (e.g., verification, SPF).  

### 5️⃣ **TTL (Time to Live)**  
- Duration (in seconds) that DNS resolvers cache a record.  
- Example: TTL = 300s → Record is cached for 5 minutes.  
---
## 🔧 Advanced Terms  

### 6️⃣ **Health Check**  
- Route 53 monitors resources (e.g., EC2, S3, ELB) to ensure availability.  
- Can reroute traffic if a resource becomes unhealthy.  

### 7️⃣ **Routing Policy**  
Defines **how Route 53 responds to queries**:  
- **Simple Routing** → One record, one resource.  
- **Weighted Routing** → Traffic split by % across resources.  
- **Latency-based Routing** → Routes to the region with lowest latency.  
- **Failover Routing** → Active-passive setup (healthy resource only).  
- **Geolocation Routing** → Based on user’s location.  
- **Geoproximity Routing** → Routes based on geography + bias settings.  
- **Multivalue Answer Routing** → Returns multiple healthy IPs.  

### 8️⃣ **Alias Record**  
- Special Route 53 record type.  
- Routes traffic to AWS resources (ELB, CloudFront, S3, API Gateway).  
- Unlike CNAME, Alias works at **root domain level** (`example.com`).  

### 9️⃣ **Route 53 Resolver**  
- Provides **recursive DNS** for VPCs and hybrid (on-prem) networks.  
- Can forward queries to on-prem DNS or other private zones.  

### 🔟 **DNS Firewall**  
- Filters and blocks malicious outbound DNS queries.  
- Uses **domain lists + firewall rules**.  

---
# 🌐 Domain and Endpoint Mapping in Route 53  

In AWS, a **domain name** registered in Route 53 can be mapped to different **endpoints** where the actual application or website is hosted.  
An **endpoint** can be:  
- An **Amazon S3 bucket** (static website hosting)  
- An **Amazon EC2 instance** (web server with public IP/DNS)  
- An **Elastic Load Balancer (ALB/NLB/CLB)** distributing traffic  
- An **Amazon CloudFront distribution** (CDN endpoint)  
- An **API Gateway endpoint**  

---

## 🔧 How it Works  
1. You create a **DNS record (A, CNAME, or Alias)** in Route 53.  
2. That record maps the **domain name** (e.g., `www.example.com`) to the **endpoint** (IP or AWS service URL).  
3. When a user enters the domain name in the browser:  
   - Route 53 resolves the domain to the correct **endpoint IP/URL**.  
   - The request is sent to the endpoint (S3, EC2, ALB, etc.).  
   - The endpoint serves the website or application.  

---

## 📌 Example Scenarios  

### 1️⃣ S3 Bucket Website  
www.example.com
 → s3-website-us-east-1.amazonaws.com

Static website hosted in an **S3 bucket**.  

### 2️⃣ EC2 Instance  
www.example.com
 → 203.0.113.25
Domain points to the **public IP** of an EC2 instance running a web server.

---
### Domain Name Strucher

<img width="542" height="260" alt="image" src="https://github.com/user-attachments/assets/83671117-6864-41ec-b8e9-9a6d7344dd44" />

## 🔎 What is Content-Based Routing?  
Content-Based Routing (CBR) is a technique where requests are routed to different backend resources **based on the content of the request** (e.g., URL path, headers, query string, hostname).  
It ensures traffic is directed to the right resource depending on rules you define.  

## 🚀 AWS Service that Support Content-Based Routing

### 2️⃣ **Amazon Application Load Balancer (ALB)**  
- Supports **host-based** and **path-based routing**.  
- Example:  
  - `api.example.com` → Microservice A  
  - `app.example.com` → Microservice B  
  - `/images/*` → Image service  
--- 
# 🔧 Other Key Features  

### 📌 Route 53 Resolver  
- Recursive DNS for **VPCs, Outposts, and on-prem networks**.  
- Supports conditional forwarding rules and private hosted zones.  

### 📌 Route 53 on Outposts  
- Extends Resolver to **Outposts racks**.  
- Enables DNS resolution between on-prem resources and AWS.  

### 📌 Route 53 Resolver DNS Firewall  
- Protects recursive DNS queries.  
- Use domain lists and firewall rules to filter outbound DNS traffic.  

### 📌 Traffic Flow  
- Advanced traffic management.  
- Routes users based on **latency, geoproximity, health, etc.**  

### 📌 Route 53 Profiles  
- Apply and manage DNS configurations across **multiple VPCs and AWS accounts**.  

---

# 🌐 Amazon Route 53 – DNS Record Types Explained  

Amazon Route 53 supports multiple **DNS record types** that control how domain names map to resources.  
Below are the most commonly used records, explained with examples.  

---

## 1️⃣ A Record (Address Record)  
- Maps a **domain name** to an **IPv4 address**.  
- Most common record for pointing a domain to a web server.  

**Example:**  
example.com → 192.0.2.44
When users type `example.com`, they are directed to the server at `192.0.2.44.

---

## 2️⃣ AAAA Record  
- Similar to A record, but maps a **domain name** to an **IPv6 address**.
Example:  
example.com → 2001:0db8:85a3:0000:0000:8a2e:0370:7334
Useful for supporting IPv6-enabled devices and networks.  
---

## 3️⃣ CNAME (Canonical Name Record)  
- Creates an **alias** of another domain name.  
- Cannot be used for the **root domain** (`example.com`), only subdomains.  

**Example:**  
blog.example.com → www.example.com
When users visit `blog.example.com`, they are redirected to `www.example.com`.  

---

## 4️⃣ Alias Record (AWS Specific)  
- Works like CNAME but is unique to Route 53.  
- Can be used for **root domain** (`example.com`).  
- Supports mapping directly to **AWS resources** (ELB, CloudFront, S3, API Gateway).  

**Example:**  
example.com → myloadbalancer-1234567890.us-east-1.elb.amazonaws.com
This points `example.com` to an **Application Load Balancer (ALB)**.  

---

## 5️⃣ MX Record (Mail Exchange)  
- Directs **email traffic** to mail servers.  
- Each record has a **priority value**; lower numbers = higher priority.  

**Example:**  
example.com → 10 mail1.example.com
example.com → 20 mail2.example.com
Emails are first delivered to `mail1.example.com`; if unavailable, `mail2.example.com` is used.  

---

## 6️⃣ TXT Record (Text Record)  
- Stores text-based data.  
- Common uses: domain verification, SPF, DKIM, DMARC records for email.  

**Example:**  
example.com → "v=spf1 include:amazonses.com ~all"
This record allows Amazon SES to send emails on behalf of `example.com`.  

---

## 7️⃣ NS Record (Name Server)  
- Specifies the **authoritative name servers** for a domain.  
- Provided when you register a domain.  

**Example:**  
example.com → ns-123.awsdns-45.com
Tells the world that `ns-123.awsdns-45.com` is authoritative for `example.com`.  

---

## 8️⃣ PTR Record (Pointer Record)  
- Used for **reverse DNS lookups** (IP → Domain).  
- Opposite of an A record.  

**Example:**  
192.0.2.44 → example.com
Used in email servers to validate that IPs resolve back to a domain.  

---

## 9️⃣ SRV Record (Service Locator)  
- Specifies **services** available in the domain (e.g., SIP, XMPP, VoIP).  
- Defines port, protocol, priority, and weight.  

**Example:**  
_sip._tcp.example.com → 10 60 5060 sipserver.example.com
This means SIP service is available at `sipserver.example.com` on port 5060.  

---

## 🔟 SOA Record (Start of Authority)  
- Stores administrative information about the domain:  
  - Primary name server  
  - Responsible party (email)  
  - Domain serial number  
  - Refresh, retry, expire, and TTL values  

**Example:**  
example.com → ns-123.awsdns-45.com hostmaster.example.com 1 7200 900 1209600 86400

Indicates domain ownership and DNS refresh rules.  

----
### How Amazon Route 53 routes traffic for your domain

<img width="582" height="445" alt="how-route-53-routes-traffic" src="https://github.com/user-attachments/assets/79b77771-0803-4c9f-914b-d5655397e326" />

# 🌐 How Amazon Route 53 Resolves a DNS Query  

### Step-by-Step Flow  

1. **User Request**  
   - A user opens a browser, enters `www.example.com`, and presses **Enter**.  

2. **DNS Resolver (ISP)**  
   - The request goes to a **DNS resolver**, usually managed by the ISP (e.g., cable, DSL, corporate network).  

3. **Root Name Server**  
   - The resolver forwards the request to a **DNS root name server**.  

4. **TLD Name Server (.com)**  
   - The resolver queries a **TLD name server** for `.com`.  
   - The TLD server responds with the **Route 53 name servers** for `example.com`.  

5. **Caching of Name Servers**  
   - The resolver caches the Route 53 name servers (usually for **2 days**) to speed up future requests.  

6. **Route 53 Name Server**  
   - The resolver selects a Route 53 name server.  
   - Route 53 looks in the **hosted zone** for `www.example.com`.  
   - It finds the record and returns the **IP address** (e.g., `192.0.2.44`).  

7. **Caching of IP Address**  
   - The resolver caches the IP address for the configured **TTL (Time to Live)**.  

8. **Browser Request**  
   - The browser sends a request to the IP address (`192.0.2.44`).  

9. **Web Server Response**  
   - The web server (e.g., EC2, S3) responds with the web page.  
   - The browser displays the content for **www.example.com**.  

---
` Browser → DNS Resolver → Root Server → TLD Server → Route 53 → Web Server → Browser`

## How Cache works in System 

<img width="853" height="269" alt="image" src="https://github.com/user-attachments/assets/8d4f2eae-36d6-4fdf-9918-e3a3513a5da2" />

---
# Day2

## 🚦 AWS Route 53 Routing Policies  

Amazon Route 53 provides different **routing policies** to control how DNS queries are answered.  
Each policy defines **how Route 53 selects an endpoint (IP, S3, ALB, EC2, CloudFront, etc.)** when a user requests a domain.

---

### 1️⃣ Simple Routing Policy 

<img width="702" height="416" alt="image" src="https://github.com/user-attachments/assets/382197b5-f741-4518-b6c3-74856b96270a" />

Allows you to associate the single resourse record set with a route 53 domain name. This is useful when you have a single resource that performs a given function for your domain,such as your web server
- **Use Case:** When you want to route traffic to a **single resource**.  
- **Working:** One record with one value (IP or domain). No advanced logic.  
- **Example:**  
www.example.com → 203.0.113.25
Every request goes to **one EC2 instance**.

---

## 2️⃣ Weighted Routing Policy  

<img width="961" height="342" alt="image" src="https://github.com/user-attachments/assets/49ce7ef4-c070-42db-9b26-46e53650a24c" />
Allows you to associate multiple resource record set with a route 53 domain name and specify the weight for each record set. Route 53 uses the weight to determine how to distribute traffic among the record sets

- **Use Case:** When you want to distribute traffic across multiple resources with **custom percentages**.  
- **Working:** Assign a weight (number) to each record; Route 53 uses the weights to decide the probability of sending traffic.
-  
- **Example:**  
www.example.com → EC2-1 (Weight 70)
www.example.com → EC2-2 (Weight 30)
70% of traffic → EC2-1, 30% → EC2-2.  
- **Benefit:** Useful for **A/B testing, blue-green deployments**.

---

## 3️⃣ Latency Routing Policy  

<img width="870" height="221" alt="image" src="https://github.com/user-attachments/assets/6ca2a408-d0e3-40b6-a905-a193a249ae24" />

 Allows you to route traffic based on lowest network latency for your end user. You can create latency records for multiple resources and route 53 will route the traffic to the resources with the lowest latency fot the end user
 
- **Use Case:** When you want users to connect to the resource with the **lowest latency**.  
- **Working:** Route 53 looks at the user’s geographic location and routes to the AWS region with the fastest response.
-   
- **Example:**  
- User from India → routed to **Mumbai region EC2**.  
- User from US → routed to **Ohio region EC2**.  
- **Benefit:** Improves user experience with **low latency connections**.

---

## 4️⃣ Failover Routing Policy  

<img width="590" height="480" alt="image" src="https://github.com/user-attachments/assets/82201f1e-1468-4783-bb0b-aa850c98f9f0" />

Allows you to configure active-passive failover configuration. You can create a primary school record set that recieves all traffic under normal condition and secondary record set that recieves the traffic only when primary set is unhealthy  

- **Use Case:** For **high availability** and **disaster recovery**.  
- **Working:** You define a **Primary** resource and a **Secondary (backup)** resource.  
- Route 53 health checks monitor the primary.  
- If primary fails, traffic is routed to secondary.
- 
- **Example:**  
Primary → ALB in us-east-1
Secondary → S3 static website (backup)
If the ALB goes down, Route 53 sends traffic to S3.

---

## 5️⃣ Geolocation Routing Policy  
<img width="752" height="341" alt="image" src="https://github.com/user-attachments/assets/3029ae10-e9e4-4985-910b-740fd77f7a2b" />

Allows you to route traffic based on the geographic location of your users. You can create geolocation records for different geographic location and specify the resource to which traffic should be routed for each location

- **Use Case:** When you want to serve traffic **based on the geographic location of users**.  
- **Working:** DNS answers vary by user’s **country/continent/IP range**.
- 
- **Example:**  
- User from **US** → routed to US servers.  
- User from **Europe** → routed to EU servers.  
- **Benefit:**  
- Show localized content.  
- Meet compliance requirements.  

---
