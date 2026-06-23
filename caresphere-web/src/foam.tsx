import * as foam from '@foam-ai/browser-opentelemetry';
import { OTEL_FOAM_COLLECTOR_BEARER_TOKEN, isProductionEnvironment } from './config/constants';

foam.init({
  serviceName: 'caresphere-web',
  isProduction: isProductionEnvironment,
  apiKey: `Bearer ${OTEL_FOAM_COLLECTOR_BEARER_TOKEN}`,
  enableUserInteractionTracking: true,
  enableResourceTimings: true,
});