const connection = require('./connection');

const getNewAuthor = ({ id, firstName, lastName, middleName }) => {
  const fullName = [firstName, middleName, lastName].filter(name => name).join(' ');
  return {
    id,
    firstName,
    lastName,
    middleName,
    fullName,
  }
}

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    lastName: authorData.last_name,
    middleName: authorData.middle_name
  }
}

const getAll = async () => {
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
  return authors.map(serialize).map(getNewAuthor);
}

module.exports = {
  getAll,
}