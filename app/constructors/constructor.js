const sql = require("./database-connection");


// -------------------------------- Constructor ------------------------------
const Article = function(article) {
  this.article = article.article;
  this.mksa = article.mksa;
//  this.score1 = article.score1;
//  this.score2 = article.score2;
//  this.score3 = article.score3;
};

//---------------------------------- POST Constructor -----------------------

Article.create = (newArticle, result) => {
  sql.query("INSERT INTO articles2 SET ?", newArticle, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created article: ", { id: res.insertId, ...newArticle });
    result(null, { id: res.insertId, ...newArticle });
  });
};

//---------------------------------- GET Constructor -------------------------

Article.getAll = (score1, result) => {
  let query = "SELECT * FROM articles2";
  if (score1) {
    query += ` WHERE score1 > '%${score1}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("articles: ", res);
    result(null, res);
  });
};

//--------------------------------------------------------

Article.findById = (id, result) => {
  sql.query(`SELECT * FROM articles2 WHERE articleid = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found article: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

//-----------------------------------------------------------

Article.getTheLatest = result => {
  sql.query("SELECT article, mksa FROM articles2 WHERE created_at = (SELECT MAX(created_at) FROM articles2)", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("articles: ", res);
    result(null, res);
  });
};

//---------------------------------- PUT Constructor -------------------------

Article.updateById = (id, article, result) => {
  sql.query(
    "UPDATE articles2 SET article = ?, mksa = ? WHERE articleid = ?",
    [article.content, article.mksa,   id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Article with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated tutorial: ", { id: id, ...article });
      result(null, { id: id, ...article });
    }
  );
};

//---------------------------------- DELETE Constructor -------------------------

Article.remove = (id, result) => {
  sql.query("DELETE FROM articles2 WHERE articleid = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Article with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted article with id: ", id);
    result(null, res);
  });
};


Article.removeAll = result => {
  sql.query("DELETE FROM articles2", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} articles`);
    result(null, res);
  });
};


module.exports = Article;

Article.removeAll = result => {
  sql.query("DELETE FROM articles2", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} articles`);
    result(null, res);
  });
};


module.exports = Article;
