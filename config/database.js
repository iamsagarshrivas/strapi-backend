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


// uri: env('SRV_URL', "mongodb+srv://amz-offer-be:obgwTKC329RSK58h@sagar-project-1.gklti.mongodb.net/offers")

