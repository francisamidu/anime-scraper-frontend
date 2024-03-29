/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    CONFIRMATION_URL: process.env.NEXT_PUBLIC_CONFIRMATION_URL,
    SUBSCRIPTION_URL: process.env.NEXT_PUBLIC_SUBSCRIPTION_URL,
    UNSUBSCRIPTION_URL: process.env.NEXT_PUBLIC_UNSUBSCRIPTION_URL
  }
}
