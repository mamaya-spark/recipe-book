const modelPath = '../models/Note';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const Note = queryInterface.sequelize.import(modelPath);

    return Note.sync();
  },
  down: (queryInterface, Sequelize) => {
    const Note = queryInterface.sequelize.import(modelPath);

    return Note.drop();
  }
}
