const getAgeNoun = (number) => {
  let age = Math.abs(number)
  if (age === 1) {
    return 'год'
  }
  if (age > 1 && age < 5) {
    return 'года'
  }
  return 'лет'
}

export default getAgeNoun
