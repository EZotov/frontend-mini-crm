import fs from 'fs/promises';
import openapiTS, {astToString} from 'openapi-typescript';
import path from 'path';

const schemaUrl = 'http://localhost:3001/api-docs-yaml';
const outputPath = path.resolve('./src/api/services/main/openapi-schema.ts');

(async function generateTypes() {
    console.log('⏳ Генерация TypeScript типов из OpenAPI...');

    try {
        // Генерируем типы в виде строки
        const output = await openapiTS(schemaUrl);
        const contents = astToString(output);

        await fs.mkdir(path.dirname(outputPath), {recursive: true});
        await fs.writeFile(outputPath, contents);

        console.log('✅ Типы успешно сгенерированы и сохранены в:', outputPath);
    } catch (error) {
        console.error('❌ Ошибка при генерации типов:', error);
        process.exit(1);
    }
})();
