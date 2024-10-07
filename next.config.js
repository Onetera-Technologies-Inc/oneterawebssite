module.exports = {
    async redirects() {
      return [
        {
          source: '/',       // Root URL
          destination: '/home', // The path where your homepage lives (can be '/home' or any other uid)
          permanent: true,   // 301 redirect
        },
      ];
    },
  };
  