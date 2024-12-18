// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// next.config.js
module.exports = {
    env: {
      RESEND_API_KEY: process.env.RESEND_API_KEY,
    },
  };
  
  // Your Component or API Route
  import Resend from 'resend';
  
  const resend = new Resend(process.env.RESEND_API_KEY);