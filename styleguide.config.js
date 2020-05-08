const path = require('path')
const { resolve } = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
	title: 'Aurora UI Toolkit',
	components: 'src/components/**/[A-Z]*.vue',
	pagePerSection: true,
	usageMode: 'expand',
	sections: [
		{
			name: 'Introducción',
			description: 'Introducción a Aurora UI Toolkit',
			content: 'styleguide/sections/introduction/doc.md'
		},
		{
			name: 'Componentes',
			sectionDepth: 1,
			sections: [
				{
					name: 'General',
					components: 'src/components/general/[A-Z]*.vue'
                },
                {
					name: 'Visualización',
					components: 'src/components/data_display/[A-Z]*.vue'
				}
			]
		}
	],
	webpackConfig: {
        resolve: {
            alias: {
                '~': resolve(__dirname, 'src'),
                '@': resolve(__dirname, 'src')
            }
        },
        module: {
            rules: [
                {
					test: /\.vue$/,
                    exclude: /node_modules/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: ['vue-style-loader', 'css-loader']
                },
                {
                    test: /\.svg$/,
                    exclude: /node_modules/,
                    use: ['babel-loader', 'vue-svg-loader']
                },
                {
					test: /\.png$/,
					use: ['url-loader']
				}
            ]
        },
        plugins: [new VueLoaderPlugin()]
    }
}
