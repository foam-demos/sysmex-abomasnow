# Order Service

Manages laboratory test orders, specimen tracking, and order lifecycle. Exposes GraphQL API for order queries and mutations. Built with Apollo Server, Node 18, PostgreSQL 14. Publishes order events to AWS SQS for downstream processing.

**Run locally:** `npm install && npm run start:dev`