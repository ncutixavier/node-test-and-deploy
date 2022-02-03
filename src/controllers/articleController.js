import { createArticleService, deleteArticle, getAllArticlesService, getOneArticleService, updateArticle } from "../services/articleServices.js"
import { uploadFile } from "../helpers/fileUpload.js"
export class ArticleController {

    async createArticle(req, res, next) {
        try {
            req.body.image = await uploadFile(req)
            const data = {
                title: req.body.title,
                content: req.body.content,
                image: req.body.image,
                create_at: new Date()
            }
            const article = await createArticleService(data)
            res.status(200).json({ status: 200, message: "Article created successfully", data: article })
        } catch (error) {
            console.log(error)
        }
    }

    async getAllArticles(req, res, next) {
        try {
            const articles = await getAllArticlesService()
            res.status(200).json({ status: 200, message: "These are all the articles", data: articles })
        } catch (error) {
            console.log(error)
        }
    }

    async getArticle(req, res, next) {
        try {
            const article = await getOneArticleService(req.params.id)
            if (typeof article !== "string") {
                res.status(200).json({ status: 200, message: "article retieved successfully", data: article })
            } else {
                res.status(404).json({ status: 404, message: article })
            }

        } catch (error) {
            console.log(error)
        }
    }

    async updateArticle(req, res, next) {
        try {
            if (req.file) {
                req.body.image = await uploadFile(req)
            }
            const article = await updateArticle(req.params.id, req.body)
            res.status(200).json({ status: 200, message: "article updated successfully", data: article })
        } catch (error) {
            console.log(error)
        }
    }

    async deleteArticle(req, res, next) {
        try {
            const result = await deleteArticle(req.params.id)
            res.status(200).json({ status: 200, message: result })
        } catch (error) {
            console.log(error)
        }
    }
}
