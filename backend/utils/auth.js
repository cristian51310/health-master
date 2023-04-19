import jwt from 'jsonwebtoken'

export const createJWT = (user) => {
  return jwt.sign({ user }, 'secretkey', { expiresIn: '1d' })
}
