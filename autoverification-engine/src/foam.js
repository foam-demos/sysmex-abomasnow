import * as foam from '@foam-ai/node-opentelemetry';
import { OTEL_FOAM_COLLECTOR_BEARER_TOKEN, isProductionEnvironment } from './lib/config';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import type { InstrumentationBase } from '@opentelemetry/instrumentation';

foam.init({
  serviceName: 'autoverification-engine',
  isProduction: isProductionEnvironment,
  apiKey: `Bearer ${OTEL_FOAM_COLLECTOR_BEARER_TOKEN}`,
  additionalInstrumentations: [
    new HttpInstrumentation({}) as unknown as InstrumentationBase,
  ],
});