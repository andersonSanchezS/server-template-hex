/* eslint-disable max-statements-per-line */
import cors from 'cors'
import express from 'express'
import { join } from 'path'
import 'module-alias/register'
// Environment variables
import { REST_PORT } from './envs'

// Rest Api Routes
import router from '@rest/index'
// Express middlewares
const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use('/', express.static(join(__dirname, '../public')))
app.use('/api/', router)

// eslint-disable-next-line no-console
app.listen(REST_PORT(), () => { console.log(`rest server started at port ${REST_PORT()}`) })