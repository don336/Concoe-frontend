import Article from "../Models/Article";

class Controller {
  static async getArticles(req, res) {
    const articles = await Article.find();

    return res.status(200).json({
      message: "Articles Found",
      articles,
    });
  }

  static async getArticle(req, res) {
    try {
      const { id } = req.params;

      const article = await Article.findById({ _id: id });

      if (!article) {
        return res.status(400).json({
          message: "Article not found",
        });
      }

      return res.status(200).json({
        message: "article found",
        article,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  static async PostArticle(req, res) {
    try {
      const { title, description } = req.body;

      if (!title || !description) {
        return res.status(422).json({
          message: "All fields are required",
        });
      }

      const newArticle = await Article.create({
        title,
        description,
      });

      return res.status(201).json({
        message: "Article created",
        newArticle,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  static async updateArticle(req, res) {
    try {
      const { id } = req.params;
      const { title, description } = req.body;

      const updatedArticle = await Article.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            title,
            description,
          },
        }
      );

      return res.status(204).json({
        message: "Article updated!",
        updatedArticle,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  static async deleteArticle(req, res) {
    try {
      const { id } = req.params;

      await Article.findByIdAndDelete({ _id: id });

      return res.status(200).json({
        message: "Article Deleted",
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}

export default Controller;
