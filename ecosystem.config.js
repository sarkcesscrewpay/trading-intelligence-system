module.exports = {
  apps: [
    {
      name: "trading-intelligence",

      script: "./src/server.js",

      instances: 1,

      exec_mode: "fork",

      autorestart: true,

      watch: false,

      max_memory_restart: "1G",

      restart_delay: 5000,

      max_restarts: 20,

      min_uptime: "10s",

      env: {
        NODE_ENV: "development"
      },

      env_production: {
        NODE_ENV: "production"
      },

      error_file: "./logs/errors.log",

      out_file: "./logs/app.log",

      log_file: "./logs/combined.log",

      time: true,

      merge_logs: true
    }
  ]
};