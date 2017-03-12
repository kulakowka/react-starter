const WebApi = {
  login: (email, password) => Promise.resolve({ token: '123' }),
  logout: () => Promise.resolve()
}

export default WebApi
