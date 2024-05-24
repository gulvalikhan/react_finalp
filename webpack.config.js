const path = require('path');

module.exports = {
    entry: './src/index.js', // Входной файл вашего приложения
    output: {
        path: path.resolve(__dirname, 'dist'), // Папка, куда будет сохранен собранный файл
        filename: 'bundle.js', // Имя собранного файла
    },
    devServer: {
        contentBase: './dist', // Папка для dev-сервера
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Расширения файлов, которые обрабатываются loader'ом
                exclude: /node_modules/, // Исключаем папку node_modules из обработки
                use: {
                    loader: 'babel-loader', // Используем babel-loader для обработки JavaScript
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Подключаем пресеты для Babel (ES6+ и JSX)
                    },
                },
            },
            // Добавьте другие правила по мере необходимости
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Расширения файлов, которые могут быть импортированы без указания расширения
    },
};
