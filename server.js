const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = []; // in-memory for demo
const SECRET = 'SecretKey123';
const ADMIN_EMAIL = 'ecaterina.grebennicova@gmail.com';
const ADMIN_PASSWORD = 'Kate123';
let cartProducts = []; // In-memory cart

// Swagger setup
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'JWT Auth + Cart API',
        version: '1.0.0',
        description: 'Login, Register, and manage cart products (with JWT)',
    },
    servers: [{ url: 'http://localhost:4000' }],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    security: [{ bearerAuth: [] }],
};

const swaggerOptions = {
    swaggerDefinition,
    apis: ['./server.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered
 *       400:
 *         description: Cannot register as admin
 */
app.post('/register', (req, res) => {
    const { email, password } = req.body;

    if (email === ADMIN_EMAIL) {
        return res.status(400).json({ error: 'Cannot register as admin' });
    }

    users.push({ email, password });
    res.json({ success: true });
});

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login and receive a JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: JWT token
 *       401:
 *         description: Invalid credentials
 */

const ROLE_PERMISSIONS = {
    admin: ["READ", "WRITE", "DELETE"],
    user: ["READ"]
};

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    let role = 'user';

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        role = 'admin';
    } else if (!users.find(u => u.email === email && u.password === password)) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const permissions = ROLE_PERMISSIONS[role];

    const token = jwt.sign({ email, role, permissions }, SECRET, { expiresIn: '1m' });
    res.json({ token });
});

// Middleware to protect endpoints
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get paginated cart products
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of products
 */
app.get('/products', authenticateToken, (req, res) => {
    const limit = parseInt(req.query.limit) || cartProducts.length;
    const offset = parseInt(req.query.offset) || 0;
    res.status(200).json(cartProducts.slice(offset, offset + limit));
});

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Add a product to cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [id, name, quantity]
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 *               quantity:
 *                 type: integer
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Product added
 */

function requirePermission(requiredPermission) {
    return (req, res, next) => {
        const userPermissions = req.user.permissions || [];

        if (!userPermissions.includes(requiredPermission)) {
            return res.status(403).json({ error: 'Permission denied' });
        }

        next();
    };
}

app.post('/products', authenticateToken, requirePermission('WRITE'), (req, res) => {
    const { id, name, quantity } = req.body;
    if (!id || !name || quantity == null) {
        return res.status(400).json({ error: 'Missing product fields' });
    }
    cartProducts.push({ id, name, quantity });
    res.status(201).json({ message: 'Product added' });
});

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update product quantity
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [quantity]
 *             properties:
 *               quantity:
 *                 type: integer
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Product updated
 *       404:
 *         description: Product not found
 */
app.put('/products/:id', authenticateToken, (req, res) => {
    const product = cartProducts.find(p => p.id === req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    product.quantity = req.body.quantity;
    res.status(200).json({ message: 'Product updated' });
});

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete product from cart
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Product deleted
 *       404:
 *         description: Product not found
 */
app.delete('/products/:id', authenticateToken, requirePermission('DELETE'), (req, res) => {
    const index = cartProducts.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Product not found' });
    cartProducts.splice(index, 1);
    res.status(200).json({ message: 'Product deleted' });
});

app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
    console.log('Swagger docs available at http://localhost:4000/docs');
});