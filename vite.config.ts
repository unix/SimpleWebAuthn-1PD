import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

/**
 * Open the comments below and use HTTP to test.
 */
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})

/**
 * Open the comments below and use HTTPS to test.
 *
 * Don't forget set host file:
 *   sudo sh -c "echo '\\n127.0.0.1 example.site\\n' >> /etc/hosts"
 *
 */

// export default defineConfig({
//   plugins: [
//     react(),
//     mkcert({
//       hosts: ['example.site'],
//     }),
//   ],
//   server: {
//     host: 'example.site',
//     port: 3000,
//     https: true,
//   },
// })
