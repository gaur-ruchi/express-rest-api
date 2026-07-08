# Secure Containerized Express REST API

A secure, containerized Node.js REST API deployed on AWS EC2 using Docker Compose, Nginx Reverse Proxy, and GitHub Actions for automated CI/CD deployment.

Docker Compose orchestrates a multi-container environment where Nginx acts as a reverse proxy in front of the Express application. The backend container is not directly exposed to the public internet, while HTTPS is automatically managed using Let's Encrypt and Certbot.

---

## ✨ Features

* Dockerized Node.js REST API
* Multi-container architecture with Docker Compose
* Nginx Reverse Proxy
* Automated HTTPS using Let's Encrypt
* Automatic SSL certificate renewal with Certbot
* GitHub Actions CI/CD pipeline
* Secure deployment using GitHub Secrets and SSH
* Backend container isolated from direct public access

---

## 🏗️ Architecture Overview

```text
                  Git Push
                     │
                     ▼
             GitHub Actions
                     │
              SSH Deployment
                     │
                     ▼
                AWS EC2 Server
                     │
        ┌────────────┴────────────┐
        │                         │
        ▼                         ▼
     Nginx                    Certbot
 (Reverse Proxy)          (SSL Renewal)
        │
        ▼
 Express API Container
```

---

## 🔐 Security & Infrastructure Highlights

* **Backend Isolation:** Public access to the backend on port `8080` is restricted using AWS Security Groups and Docker Compose networking (`expose` instead of `ports`), preventing direct public access to the application container.
* **SSL Termination:** Nginx serves as the secure entry point, handling HTTPS termination before forwarding requests to the internal Express application.
* **Automatic Certificate Renewal:** Certbot automatically renews Let's Encrypt SSL certificates without manual intervention or service downtime.

---

## 🛠️ Technology Stack

| Component             | Technology              |
| --------------------- | ----------------------- |
| Runtime Environment   | Node.js (v24)           |
| Application Framework | Express.js              |
| Containerization      | Docker                  |
| Orchestration         | Docker Compose          |
| Reverse Proxy         | Nginx (Alpine)          |
| CI/CD                 | GitHub Actions          |
| Cloud Platform        | AWS EC2 (Ubuntu Linux)  |
| SSL Certificates      | Let's Encrypt + Certbot |

---

## ⚙️ CI/CD Pipeline Workflow

The project implements a **Continuous Integration and Continuous Deployment (CI/CD)** workflow using `.github/workflows/deploy.yaml`.

### Workflow Steps

1. A developer pushes code changes to the `main` branch.
2. GitHub Actions starts a workflow on a GitHub-hosted runner.
3. The repository is checked out using `actions/checkout@v4`.
4. An SSH connection is established securely to the AWS EC2 server using credentials stored in GitHub Repository Secrets.
5. The deployment script:

   * Navigates to the project directory.
   * Pulls the latest code from the `main` branch.
   * Rebuilds and restarts the application using:

```bash
docker compose up -d --build
```

This enables fully automated deployments with every push to the `main` branch.

---

## 📚 DevOps Concepts Demonstrated

* Containerization with Docker
* Multi-container orchestration using Docker Compose
* Reverse proxy configuration with Nginx
* HTTPS termination using Let's Encrypt
* Automatic SSL certificate renewal
* CI/CD pipeline using GitHub Actions
* Secure secret management with GitHub Secrets
* Remote deployment over SSH
* AWS EC2 server administration
* Infrastructure security through backend isolation

---

## 📁 Repository Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yaml        # GitHub Actions CI/CD workflow
├── Dockerfile                 # Builds the Express application image
├── docker-compose.yaml        # Multi-container service definitions
├── nginx.conf                 # Nginx reverse proxy configuration
├── index.js                   # Express application entry point
├── package.json               # Project metadata and dependencies
└── README.md                  # Project documentation
```

---
