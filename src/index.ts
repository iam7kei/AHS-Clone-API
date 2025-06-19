import express from 'express'
import authRoutes from "./routes/auth"
import cors from "cors"
const app = express()
const port = 3001
app.use(express.json())
app.use(cors())
app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
})
app.use('/auth', authRoutes)

app.listen(port, () => {
  console.log("App is listing to port ", port)
})
