import express, { Request, Response } from "express"
import morgan from "morgan"

const app = express()

app.use(morgan("dev"))
app.get("/", (_req, res) => {
  res.send("Hello World")
})

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!")
})

app.get("/bmi/:height/:weight", (_req: Request, res: Response) => {
  const { weight, height } = _req.params
  const weightParam: number = Number(weight)
  const heightParam: number = Number(height)

  res.send(console.log("Data: ", weightParam, heightParam))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Server is running on port 3000")
})
