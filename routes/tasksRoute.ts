import express, { Router } from 'express';
import confirmAccessToken from '../middlewares/confirmAccessToken';
import TasksRequest from '../requests/tasksRequest';

const router: Router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: API для управления задачами
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Получить список задач
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Список задач успешно получен
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Уникальный идентификатор задачи
 *                   title:
 *                     type: string
 *                     description: Название задачи
 *                   completed:
 *                     type: boolean
 *                     description: Статус выполнения задачи
 *       401:
 *         description: Пользователь не авторизован
 */
router.get('/', confirmAccessToken, TasksRequest.getTasks);

/**
 * @swagger
 * /:
 *   post:
 *     summary: Добавить новую задачу
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Название задачи
 *                 example: "Купить продукты"
 *     responses:
 *       201:
 *         description: Задача успешно добавлена
 *       400:
 *         description: Ошибка валидации
 *       401:
 *         description: Пользователь не авторизован
 */
router.post('/', confirmAccessToken, TasksRequest.addTask);

/**
 * @swagger
 * /:
 *   put:
 *     summary: Обновить задачу
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: ID задачи для обновления
 *               title:
 *                 type: string
 *                 description: Новое название задачи
 *               completed:
 *                 type: boolean
 *                 description: Новый статус выполнения задачи
 *     responses:
 *       200:
 *         description: Задача успешно обновлена
 *       400:
 *         description: Ошибка валидации
 *       401:
 *         description: Пользователь не авторизован
 */
router.put('/', confirmAccessToken, TasksRequest.updateTask);

/**
 * @swagger
 * /:
 *   delete:
 *     summary: Удалить одну или несколько задач
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ids:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 description: Список ID задач для удаления
 *                 example: [1, 2, 3]
 *     responses:
 *       200:
 *         description: Задача(и) успешно удалена(ы)
 *       400:
 *         description: Ошибка валидации
 *       401:
 *         description: Пользователь не авторизован
 */
router.delete('/', confirmAccessToken, TasksRequest.deleteTaskOrTasks);

export default router;
