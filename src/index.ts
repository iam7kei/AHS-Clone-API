import express from 'express'
const app = express()
import authRoutes from "./routes/auth"

const port = 3001
app.use(express.json())
app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
})
app.use('/auth', authRoutes)

app.listen(port, () => {
  console.log("App is listing to port ", port)
})