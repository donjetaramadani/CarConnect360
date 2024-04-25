import { DataTypes, Model } from 'sequelize';
import { sequelize } from './database.js';



class Article extends Model {}

Article.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Article',
  }
);

(async () => {
  try {
    await sequelize.sync();
    console.log('Article model synchronized with database.');
  } catch (error) {
    console.error('Error synchronizing Article model:', error);
  }
})();

export default Article;
