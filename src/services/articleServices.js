import Article from "../models/article.js";

export const createArticleService = async (data) => {
    const article = await Article(data)
    article.save()
    return article
}

export const getAllArticlesService = async () => {
    const articles = await Article.find()
    return articles
}

export const getOneArticleService = async (id) => {
    try {
        const article = await Article.findOne({ _id: id })
        if (!article) {
            return "article article not found"
        } else {
            return article
        }
    } catch (error) {
        return "article article not found"
    }

}

export const updateArticle = async (id, data) => {
    const article = await Article.findOne({ _id: id });
    if (!article) {
        return `Article with id: ${id} doesn't exist`
    } else {
        article.title = data.title ? data.title : article.title
        article.content = data.content ? data.content : article.content
        article.image = data.image ? data.image : article.image
        const updatedArticle = await article.save()
        return updatedArticle
    }
}

export const deleteArticle = async (id) => {
    try {
        const result = await Article.findByIdAndDelete(id)
        if (!result) {
            return "the article you are trying to delete does not exist"
        } else {
            return "Article deleted successfully"
        }
    } catch (error) {
        return "the article you are trying to delete does not exist"
    }

}