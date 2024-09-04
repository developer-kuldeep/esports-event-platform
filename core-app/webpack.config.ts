import * as path from 'path';
import { Configuration } from 'webpack';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin';

const config: Configuration = {
  output: {
    publicPath: 'http://localhost:4200/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'core',
      remotes: {
        user: 'user@http://localhost:4201/remoteEntry.js',
        admin: 'admin@http://localhost:4202/remoteEntry.js',
      },
    }),
  ],
};

export default config;
