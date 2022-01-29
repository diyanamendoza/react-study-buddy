export const getHookData = async () => {
  try {
    const res = await fetch(
      'https://polar-everglades-28134.herokuapp.com/api/v1/hooks/'
    )
    return res.json()
  } catch (error) {
    console.error(error.message)
    return ''
  }
}
