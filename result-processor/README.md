# Result Processor

Asynchronous worker service for validating, transforming, and routing analyzer results. Consumes SQS messages from analyzers, applies business rules, enriches with QC data, and writes to PostgreSQL. Built with Node 18, BullMQ for job queues.

**Run locally:** `npm install && npm run worker`