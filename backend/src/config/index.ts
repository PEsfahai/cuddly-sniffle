import dotenv from 'dotenv';

dotenv.config();

interface Config {
  env: string;
  port: number;
  apiVersion: string;
  database: {
    url: string;
  };
  jwt: {
    secret: string;
    refreshSecret: string;
    expiresIn: string;
    refreshExpiresIn: string;
  };
  redis: {
    host: string;
    port: number;
    password?: string;
  };
  aws: {
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
    s3Bucket: string;
  };
  openai: {
    apiKey: string;
  };
  googleCloud: {
    projectId: string;
    visionKey: string;
  };
  apns: {
    keyId: string;
    teamId: string;
    keyPath: string;
    production: boolean;
  };
  externalApis: {
    openFoodFacts: string;
  };
  rateLimit: {
    windowMs: number;
    maxRequests: number;
  };
  logging: {
    level: string;
  };
  cors: {
    origin: string[];
  };
  sentry: {
    dsn: string;
  };
}

const config: Config = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000', 10),
  apiVersion: process.env.API_VERSION || 'v1',
  database: {
    url: process.env.DATABASE_URL || '',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'default-secret',
    refreshSecret: process.env.JWT_REFRESH_SECRET || 'default-refresh-secret',
    expiresIn: process.env.JWT_EXPIRES_IN || '15m',
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
    password: process.env.REDIS_PASSWORD,
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    region: process.env.AWS_REGION || 'eu-west-2',
    s3Bucket: process.env.AWS_S3_BUCKET || '',
  },
  openai: {
    apiKey: process.env.OPENAI_API_KEY || '',
  },
  googleCloud: {
    projectId: process.env.GOOGLE_CLOUD_PROJECT_ID || '',
    visionKey: process.env.GOOGLE_CLOUD_VISION_KEY || '',
  },
  apns: {
    keyId: process.env.APNS_KEY_ID || '',
    teamId: process.env.APNS_TEAM_ID || '',
    keyPath: process.env.APNS_KEY_PATH || './certs/apns-key.p8',
    production: process.env.APNS_PRODUCTION === 'true',
  },
  externalApis: {
    openFoodFacts: process.env.OPENFOODFACTS_API_URL || 'https://world.openfoodfacts.org/api/v2',
  },
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10),
    maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100', 10),
  },
  logging: {
    level: process.env.LOG_LEVEL || 'info',
  },
  cors: {
    origin: (process.env.CORS_ORIGIN || 'http://localhost:19006').split(','),
  },
  sentry: {
    dsn: process.env.SENTRY_DSN || '',
  },
};

export default config;
