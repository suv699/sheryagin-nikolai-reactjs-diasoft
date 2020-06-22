const bcrypt = require('bcryptjs');
const { v4 } = require('uuid');

let USERS = [
  {
    id: '1',
    login: 'admin',
    password: 'admin',
  },
];

const auth = async (req, res) => {
  const { login, password } = req.body;
  const idx = USERS.findIndex((usr) => usr.login === login);
  if (idx === -1) {
    return res.status(400).json({ message: 'Пользователь не найден' });
  }
  const user = USERS[idx];
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res
      .status(400)
      .json({ message: 'Неверные данные, попробуйте снова' });
  }
  const { name, lastName, id: userId } = user;
  res.status(200).json({
    name,
    lastName,
    userId,
  });
};

const register = async (req, res) => {
  const { login, password, email, name, lastName } = req.body;
  const idx = USERS.findIndex((usr) => usr.login === login);
  if (idx !== -1) {
    return res
      .status(400)
      .json({ message: 'Пользователь с таким логином уже существует' });
  }
  const hashedPass = await bcrypt.hash(password, 12);
  const id = v4();
  USERS.push({
    id,
    name,
    lastName,
    login,
    password: hashedPass,
    email,
  });

  res.status(201).json({ message: 'Пользователь успешно создан', id });
};

module.exports = { auth, register };
