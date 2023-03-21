/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    CONFIRMATION_URL: process.env.CONFIRMATION_URL,
    SUBSCRIPTION_URL: process.env.SUBSCRIPTION_URL,
    UNSUBSCRIPTION_URL: process.env.UNSUBSCRIPTION_URL
  }
}
