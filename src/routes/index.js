import express from 'express'
import welcomeRoutes from "./api/welcomeRoutes.js"
import articleRoutes from "./api/articleRoutes.js"
import commentRoutes from "./api/commentRoutes"
import queriesRoutes from "./api/queriesRoutes.js"
import userRoutes from "./api/userRoutes.js"

const routes = express.Router()

routes.use('/', welcomeRoutes)
routes.use('/articles', articleRoutes)
routes.use('/comments', commentRoutes)
routes.use('/queries', queriesRoutes)
routes.use('/users', userRoutes)

export default routes