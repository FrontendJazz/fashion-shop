import mongoose from 'mongoose'

export const connectionDB = () => {
  mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});
  mongoose.connection.on('connected', () => {
    console.log('DB is connected')
  })
}
