1. Create VPC:
  1. Create VPC:

• Create VPC-A and VPC-B

• VPC-A having a PUBLIC and a PRIVATE subnet.

• VPC-B contain 4 subnets (public)

• CIDR:

➢ VPC-A → 192.168.1.0/24

➢ VPC-B → 172.100.10.0/24

• Public Subnets are residing in AZ-ap-south-1a for VPC-A

• Private Subnets are residing in AZ-ap-south-1b for VPC-A

• Subnets of VPC-B --> 2 subnets in AZ-ap-south-1a and Another 2 subnets in AZ-ap-south-1b
VPC-A
   
   <img width="1911" height="909" alt="image" src="https://github.com/user-attachments/assets/26cdc2bb-6a36-49a6-82fe-c4224bcaf7a8" />
   
Resource map for VPC-A

<img width="1907" height="873" alt="image" src="https://github.com/user-attachments/assets/66dcee54-e67b-40b3-b5f0-396726dd6fcd" />

VPC-B & Resource map of VPC-B

<img width="1890" height="894" alt="image" src="https://github.com/user-attachments/assets/c0b29ab2-efa1-445c-b6a5-77d40865fa80" />

2. Create VPC-Peering:

• Between VPC-A to VPC-B

(Create Route Tables and connect all subnets to each other)


<img width="1904" height="906" alt="image" src="https://github.com/user-attachments/assets/a4795cb4-1bd4-4aba-9fdc-ba8df77e03a9" />

3. Create an EC2 Instance in default VPC (public)

• Configure web server in ec2 instance

• Create snapshot from ec2 instance

• Create an AMI from this snapshot.

• Create Launch Template using custom AMI for VPC-B (Name→app-server)


<img width="1910" height="857" alt="image" src="https://github.com/user-attachments/assets/8308dfdc-d574-46b3-aaef-d39e82c7ed05" />

snapshot 

<img width="1896" height="855" alt="image" src="https://github.com/user-attachments/assets/505698eb-1226-4b86-b645-12991fec6f7f"
ERP 

<img width="1250" height="636" alt="image" src="https://github.com/user-attachments/assets/73ab0d22-752e-4d03-9c9e-c65dabafa7a4" />

<img width="1240" height="643" alt="image" src="https://github.com/user-attachments/assets/ee185c2d-981d-4080-b101-5bd45abd209f" />

