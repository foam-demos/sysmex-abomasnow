import * as foam from '@foam-ai/node-opentelemetry';
import { OTEL_FOAM_COLLECTOR_BEARER_TOKEN, isProductionEnvironment } from './config/env';
import { GraphQLInstrumentation } from '@opentelemetry/instrumentation-graphql';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import type { InstrumentationBase } from '@opentelemetry/instrumentation';

foam.init({
  serviceName: 'order-service',
  isProduction: isProductionEnvironment,
  apiKey: `Bearer ${OTEL_FOAM_COLLECTOR_BEARER_TOKEN}`,
  additionalInstrumentations: [
    new GraphQLInstrumentation({}) as unknown as InstrumentationBase,
    new HttpInstrumentation({}) as unknown as InstrumentationBase,
  ],
});