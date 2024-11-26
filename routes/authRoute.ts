import express, { Router } from 'express';
import authorizationRequest from '../requests/authorizationRequest';

const router: Router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authorization
 *   description: API для регистрации и авторизации
 */

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Регистрация пользователя
 *     tags: [Authorization]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Имя пользователя
 *               password:
 *                 type: string
 *                 description: Пароль пользователя
 *             required:
 *               - username
 *               - password
 *     responses:
 *       201:
 *         description: Пользователь успешно зарегистрирован
 *       400:
 *         description: Ошибка валидации или данные не корректны
 */
router.post('/signup', authorizationRequest.registration);

/**
 * @swagger
 * /signin:
 *   post:
 *     summary: Авторизация пользователя
 *     tags: [Authorization]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Имя пользователя
 *               password:
 *                 type: string
 *                 description: Пароль пользователя
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Авторизация успешна
 *       401:
 *         description: Неверные учетные данные
 */
router.post('/signin', authorizationRequest.authorization);

export default router;
