import * as foam from '@foam-ai/node-opentelemetry';
import { OTEL_FOAM_COLLECTOR_BEARER_TOKEN, isProductionEnvironment } from './config/keys';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import type { InstrumentationBase } from '@opentelemetry/instrumentation';

foam.init({
  serviceName: 'caresphere-api',
  isProduction: isProductionEnvironment,
  apiKey: `Bearer ${OTEL_FOAM_COLLECTOR_BEARER_TOKEN}`,
  additionalInstrumentations: [
    new ExpressInstrumentation({}) as unknown as InstrumentationBase,
    new HttpInstrumentation({}) as unknown as InstrumentationBase,
  ],
});