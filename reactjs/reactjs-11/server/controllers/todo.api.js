let TODO = [];

const addTodo = (req, res) => {
  if (!req.body) {
    return res
      .status('400')
      .json({ success: false, message: 'Ошибка при добавлении' });
  }
  const { title, checked, id } = req.body;
  const newTodo = {
    title,
    id,
    checked,
  };
  TODO.push(newTodo);
  res.status(201).json({
    success: true,
    message: 'Запись успешно добавлена',
    data: newTodo,
  });
};

const getTodo = (req, res) => {
  res.json({ success: true, data: TODO, message: 'Ок' });
};

const deleteTodo = (req, res) => {
  console.log('req.params - ', req.params);
  TODO = TODO.filter((t) => t.id + '' !== req.params.id + '');
  res.json({ success: true, message: 'Запись удалена', id: req.params.id });
};
const updateTodo = (req, res) => {
  const idx = TODO.findIndex((t) => t.id + '' === req.params.id + '');
  TODO[idx] = req.body;
  // TODO[idx].checked = !TODO[idx].checked;
  res.json({ success: true, data: TODO[idx], message: 'Запись обновлена' });
};
module.exports = {
  addTodo,
  getTodo,
  deleteTodo,
  updateTodo,
};
