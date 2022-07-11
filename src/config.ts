export const config = () => ({
  port: Number(process.env.PORT),
  user: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
  cluster: process.env.MONGO_CLUSTERNAME,
  db_name: process.env.MONGO_DBNAME,

  get uri() {
    return `mongodb+srv://${this.user}:${this.password}@cluster0.ri80gla.mongodb.net/sample_guides?retryWrites=true&w=majority`;
  },
});
