module.exports = {
  reactStrictMode: true,
}
module.exports = {
  domains: ['localhost:3000'],
}
module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
}
module.exports = {
  images: {
    formats: ['image/png','image/jpeg'],
  },
}
module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}