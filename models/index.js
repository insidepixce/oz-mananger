import Sequelize from "sequelize";
import StatusFocus from "./status_focus.js";
import StatusVoice from "./status_voice.js";
import TotalFocus from "./total_focus.js";
import TotalVoice from "./total_voice.js";
import configFile from "../config/config.js";

const config = configFile.database;
const db = {};

// Sequelize를 JawsDB의 URL로 초기화
const sequelize = new Sequelize(config.url, {
    dialect: config.dialect,  // mysql로 설정됨
});

db.sequelize = sequelize;

db.StatusFocus = StatusFocus;
db.StatusVoice = StatusVoice;
db.TotalFocus = TotalFocus;
db.TotalVoice = TotalVoice;

// 각 모델을 초기화
StatusFocus.init(sequelize);
StatusVoice.init(sequelize);
TotalFocus.init(sequelize);
TotalVoice.init(sequelize);

// 각 모델 간의 관계 설정 (associate 메서드가 존재해야 함)
if (StatusFocus.associate) StatusFocus.associate(db);
if (StatusVoice.associate) StatusVoice.associate(db);
if (TotalFocus.associate) TotalFocus.associate(db);
if (TotalVoice.associate) TotalVoice.associate(db);

export { db, sequelize };
