const mysql = require("mysql2");
const logger = require("./logger");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    logger.error("데이터베이스 연결 오류:", err);
    // 여기서 적절한 에러 핸들링을 수행할 수 있습니다.
  } else {
    logger.info("데이터베이스에 연결되었습니다.");
  }
});

module.exports = db;
