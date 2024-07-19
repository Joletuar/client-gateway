import 'dotenv/config';

import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  PRODUCT_MS_HOST: string;
  PRODUCT_MS_PORT: number;
  ORDER_MS_HOST: string;
  ORDER_MS_PORT: number;
  NATS_SERVER: Array<string>;
}

const envVarsSchema = joi
  .object({
    PORT: joi.number().required(),

    NATS_SERVER: joi.array<string>().required(),
  })
  .unknown(true);

const { error, value } = envVarsSchema.validate({
  ...process.env,
  NATS_SERVER: process.env.NATS_SERVER?.split(','),
});

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,

  NATS_SERVER: envVars.NATS_SERVER,
};
