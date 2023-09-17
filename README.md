## Example for SimpleWebAuthn + 1PD

A issue reproduction repo for [SimpleWebAuthn#438](https://github.com/MasterKale/SimpleWebAuthn/issues/438).

### Guide

1. Install 1Password;
2. Install project dependencies: `pnpm install`;
3. Run serve: `pnpm serve`;
4. Run web: `pnpm dev`;

Switch HTTP/HTTPS in file `/vite.config.ts`.

### HTTP

Under the http domain name, although the work can be completed with 1pd, there is still an error.

### HTTPS

Under the http domain name, can not complete the work.
