import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'products',
  exposes: {
    './Routes': 'products/products/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
