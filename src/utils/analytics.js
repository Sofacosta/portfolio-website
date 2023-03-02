import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';

/* Initialize analytics & load plugins */
export const analytics = Analytics({
  app: 'coast2c.me',
  plugins: [
    googleAnalytics({
      name: 'coast2c.me - GA4',
      measurementIds: ['G-TH1P2L5QLV'],
    }),
  ],
});
