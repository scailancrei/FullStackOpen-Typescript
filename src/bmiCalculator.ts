const calculatebmi = (weight: number, height: number): number | string => {
  if (!weight) {
    throw new Error("Weight is required")
  }
  if (!height) {
    throw new Error("Height is required")
  }
  const bmi = weight / Math.pow(height, 2)
  if (bmi < 18.5) {
    console.log(`Underweight ${weight} kg, ${height} m`)
  } else if (bmi >= 18.5 && bmi < 25) {
    console.log(`Normal, healthy weight`)
  } else if (bmi >= 25 && bmi < 30) {
    console.log(`Overweight ${weight} kg, ${height} m`)
  } else {
    console.log(`Obese ${weight} kg, ${height} m`)
  }

  return bmi
}
const weight: number = Number(process.argv[2])
const height: number = Number(process.argv[3])
calculatebmi(weight, height)
