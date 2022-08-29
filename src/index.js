/**
 * Represents a todo
 * @constructor
 * @param {string} id - 아이디.
 * @param {string} content - 내용.
 * @param {boolean} isCompleted - 완료여부.
 * @param {string} category - 카테고리.
 * @param {string[]=} tags - 태그들.
 */
function Todo(id, content, isCompleted, category, tags) {}

/**
 * Creat a todo
 * @param {string} content - 내용.
 * @param {string} category - 카테고리.
 * @param {string[]=} tags- 태그들.
 * @param {boolean=} [isCompleted=false] - 완료여부.
 * @returns {Todo} - 생성된 todo를 반환.
 */
Todo.prototype.createTodo = function (content, isCompleted, category, tags) {};

/**
 * Read all todos
 * @returns {Todo[]} - 생성된 전체 todo를 반환.
 */
Todo.prototype.indexAllTodos = function () {};
/**
 * Read specific todo
 * @param {string} id - 아이디.
 * @returns {Todo[]} - 존재하는 모든 todo를 반환.
 */
Todo.prototype.indexTodo = function (id) {};

/**
 * Update specific todo
 * @param {string} id - 아이디.
 * @param {string} content - 내용.
 * @param {string} category - 카테고리.
 * @param {boolean} isCompleted - 완료여부.
 * @param {string[]} tags- 태그들.
 * @returns {Todo} - 생성된 todo를 반환.
 */
Todo.prototype.updateTodo = function (
  id,
  content,
  category,
  isCompleted,
  tags
) {};

/**
 * Delete all todos
 * @returns
 */
Todo.prototype.deleteAllTodos = function () {};
/**
 * Delete specific todo
 * @param {string} id - 아이디.
 * @returns
 */
Todo.prototype.deleteTodo = function (id) {};
