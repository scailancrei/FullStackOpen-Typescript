interface Result {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  average: number
}

let exercises: Array<number> = [3, 0, 2, 4.5, 0, 3, 1]

const calculateExercises = (exercises: number[], target: number): Result => {
  if (!target) {
    throw new Error("Target is required")
  }

  const result: Result = {
    periodLength: 0,
    trainingDays: 0,
    success: false,
    rating: 0,
    ratingDescription: "",
    target: 0,
    average: 0,
  }
  result.periodLength = exercises.length
  result.target = target
  //training days are the number of days with exercises greater than 0
  exercises.forEach((exercise) => {
    if (exercise > 0) {
      result.trainingDays += 1
    }
  })
  result.average = exercises.reduce((a, b) => a + b, 0) / exercises.length
  if (result.average >= target) {
    result.success = true
    result.rating = 3
    result.ratingDescription = "Excellent"
  } else if (result.average >= target - 1) {
    result.success = false
    result.rating = 2
    result.ratingDescription = "Good"
  } else if (result.average < target - 1) {
    result.success = false
    result.rating = 1
    result.ratingDescription = "not good you need to work harder"
  }
  return result
}
const target: number = Number(process.argv[2])

console.log(calculateExercises(exercises, target))
