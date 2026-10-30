import mongoose from 'mongoose'

const MONGODB_URI = 'mongodb+srv://ivanpetersv_db_user:P9ra2e8bP3hFWJEy@cluster0test.p9rvvqn.mongodb.net/version_2'

export const conectar = async () => {
  await mongoose.connect(MONGODB_URI)
  console.log('🍃 conectada a MongoDB')
}