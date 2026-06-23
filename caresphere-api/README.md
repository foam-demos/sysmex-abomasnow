# CareSphere API Gateway

Primary REST API gateway for CareSphere LWS. Handles laboratory test orders, specimen tracking, result ingestion, and integration with hospital LIS systems. Built with Express.js, runs on Node 18, deployed to AWS EKS. PostgreSQL 14 for transactional data, Redis for session/cache.

**Run locally:** `npm install && npm run dev` (requires .env with DB credentials).