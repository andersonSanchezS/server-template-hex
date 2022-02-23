import { Dialect } from 'sequelize/types'

/**
 * Returns development
 * @return {string} state
 */
// Export const STAGE = () => process.env.NODE_ENV !== 'production'

/**
 * Returns the name of the database
 * @return {string} name database
 */
export const DB_NAME = () => process.env.DB_NAME || 'prueba'

/**
 * Returns the database user
 * @return {string} user database
 */
export const DB_USER = () => process.env.DB_USER || 'root'

/**
 * Returns the database password
 * @return {string} password database
 */
export const DB_PASS = () => process.env.DB_PASS || '123123'

/**
 * Returns the database server
 * @return {string} server database
 */
export const DB_HOST = () => process.env.DB_HOST || 'localhost'

/**
 * Returns the dialect of the database
 * @return {Dialect | undefined} dialect database
 */
export const DB_DIALECT = (): Dialect => (process.env.DB_DIALECT || 'mysql') as Dialect

/**
 * Returns the dialect of the database
 * @return {Dialect | undefined} dialect database
 */
export const DB_PORT = (): number => Number(process.env.DB_PORT || 3306)

/**
 * Returns API version
 * @return {string} state
 */
// Export const API_VERSION = () => process.env.API_VERSION || '1'


/**
 * Secret key for jwt
 * @return {string} secret key
 */
export const JWT_AUTH_SECRET = () => process.env.JWT_AUTH_SECRET || 'PRUEBA'

/**
 * Time jwt
 * @return {number} secret key
 */
export const JWT_EXPIRED_IN = () => process.env.JWT_EXPIRED_IN || 9000 * 9000

/**
 * Graphql port
 * @return {string} por
 */
export const GRAPHQL_PORT = () => process.env.PORT || '4000'

/**
 * Graphql port
 * @return {string} por
 */
export const REST_PORT = () => process.env.PORT || '3000'