module.exports = ({ env }) => {
  console.log(env('DATABASE_URI'));
  return ({
    defaultConnection: "default",
    connections: {
      default: {
        connector: "mongoose",
        settings: {
          client: "mongo",
          uri: env('DATABASE_URI', '')
        },
        options: {
          ssl: true
        }
      }
    }
  }
  );
}
