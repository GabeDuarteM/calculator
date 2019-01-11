const getValuesFromObject = (obj) => {
  const keys = Object.keys(obj)
  const values = keys.map((key) => obj[key])
  return values
}

export default getValuesFromObject
