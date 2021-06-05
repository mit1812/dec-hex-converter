import express from 'express';
import decimalToHexConverter from './controllers/conversionController.js';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const swaggerDocument = YAML.load('./swagger.yml');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/', (req, res) => res.send('Welcome! visit /api-docs'));
app.get('/api/convert/:value', decimalToHexConverter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

export default app;
