# Amazon Relational Database Service (Amazon RDS)

Amazon RDS is a web service that makes it easier to set up, operate, and scale a relational database in the AWS Cloud. It provides cost-efficient, resizable capacity for an industry-standard relational database and manages common database administration tasks.

---

| Term           | Meaning                                                   | Example                          |
|----------------|-----------------------------------------------------------|----------------------------------|
| **Data**       | Raw facts or figures without context.                     | `25, 30, 28` (ages of students) |
| **Information**| Processed or organized data that is meaningful and useful.| `Average age of students is 27.6` |

**Short:** Data → raw input; Information → meaningful output.

---

## Advantages of AWS RDS
- Supports familiar database engines: IBM Db2, MariaDB, SQL Server, MySQL, Oracle, PostgreSQL.  
- Automated backups and manual snapshots for easy restoration.  
- High availability: primary DB + synchronous secondary for failover; read replicas for read scaling.  
- Security: IAM for access control, plus deployment in a VPC.  
- Managed by AWS RDS: handles backups, patching, failure detection, and recovery.  

---

## Connecting to RDS

> It is essential to allow the SQL port (3306) in your security group.

```bash
# Install MySQL client (to connect to RDS)
sudo apt install mysql-client -y

# Connect to RDS
mysql -h  -u root -p


# SQL Example: Create Database, Table, and Insert Data
-- 1. Create a new database
CREATE DATABASE SampleDB;

-- 2. Select the database to use
USE SampleDB;

-- 3. Create a table named Persons
CREATE TABLE Persons (
    PersonID INT PRIMARY KEY,
    LastName VARCHAR(255),
    FirstName VARCHAR(255),
    Address VARCHAR(255),
    City VARCHAR(255)
);

-- 4. Insert sample data into the table
INSERT INTO Persons (PersonID, LastName, FirstName, Address, City)
VALUES
(1, 'Smith', 'John', '123 Main St', 'New York'),
(2, 'Doe', 'Jane', '456 Elm St', 'Los Angeles'),
(3, 'Brown', 'Mike', '789 Oak St', 'Chicago');

-- 5. Verify the data
SELECT * FROM Persons;
