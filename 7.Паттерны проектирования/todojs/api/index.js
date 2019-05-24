var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const tasks = [
  {
    id: 1,
    title: 'learn JS',
    completed: true,
  },
  {
    id: 2,
    title: 'MVC learn completed',
    completed: false,
  },
  {
    id: 3,
    title: 'Data binding',
    completed: false,
  }
]

function getTask(id) {
  return tasks.find(item => item.id == id);
}

app.get('/tasks', function (req, res) {
  return res.status(200).json([{ flag: true, message: 'all tasks', payload: tasks }]);
});

app.post('/tasks', function (req, res) {
  tasks.push(req.body);
  return res.status(201).json([{ flag: true, message: 'created' }]);
});

app.put('/tasks', function (req, res) {
  const id = req.body.id;
  const data = req.body.data;
  const task = getTask(id);
  Object.keys(data).forEach(prop => task[prop] = data[prop]);
  return res.status(200).json([{ flag: true, message: 'task changed' }]);
});

app.delete('/tasks/:id', function (req, res) {
  const { id } = req.params;
  const index = tasks.findIndex( item => item.id == id);
  if (index > -1) {
    tasks.splice(index, 1);
  }
  return res.status(200).json([{ flag: true, message: 'task deleted' }]);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});