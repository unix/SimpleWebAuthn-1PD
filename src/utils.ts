export const createCredential = async () => {
  return fetch('http://localhost:3001/registration', {
    credentials: 'omit',
    mode: 'cors',
  }).then(res => res.json())
}
