module.exports = {
    //if you dont use these then the dis directory will be generated and used.
    outputDir: process.env.OUTPUT_DIR,
    //assetsDir is relative to outputDir
    assetsDir: process.env.ASSETS_DIR,

    // filenameHashing: false,
    // setting filename hashing to false allows for
    // generated html templates from a web server to more easily access js
    // but leaving it off allows multiple page applications to not step on each others toes for assets

    pages: {
        'index': {
            // entry for the page
            entry: './src/index/main.js',
            // the source template (doesnt seem to work)
            //template: './src/apps/index/assets/template/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
        },
        'app1': {
            // entry for the page
            entry: './src/app1/main.js',
            // the source template (doesnt seem to work)
            //template: './src/apps/app1/assets/template/index.html',
            // output as dist/index.html
            filename: 'app1/index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'app1',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'app1'],
        },
        'app2': {
            // entry for the page
            entry: './src/app2/main.js',
            // the source template (doesnt seem to work)
            //template: './src/apps/app2/assets/template/index.html',
            // output as dist/index.html
            filename: 'app2/index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'app2',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'app2'],
        }

        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        //subpage: 'src/subpage/main.js'
    }
};