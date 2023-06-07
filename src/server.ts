import { connect } from 'mongoose'
import app from './app'
import config from './config/index'

async function boostrap() {
  try {
    await connect(config.database_url as string)
    console.log(` Database is connect successfully`)

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    console.log(`Failed to connect database`, err)
  }
}

boostrap()
