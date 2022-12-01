import { connect } from "mongoose"

export const Connection = async () => {
  await connect('mongodb://localhost:27017', {
    dbName: 'games',
    auth: {
      password: 'oberom_pass',
      username: 'oberom_admim'
    }
  })
}
