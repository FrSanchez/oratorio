const fs = require('fs');
const path = require('path');

const timestamp = Date.now();
const configs = {
    es: {
        title: "Apostolado del Oratorio de Nuestra Señora de Fátima",
        description: "Reza el Santo Rosario con las oraciones en español y los misterios de cada día.",
        lang: "es",
        outputPath: "dist/index.html",
        assetPath: "" 
    },
    en: {
        title: "Oratory apostolate of Our Lady of Fatima",
        description: "Pray the Holy Rosary with prayers in English and the mysteries of each day.",
        lang: "en",
        outputPath: "dist/en/index.html",
        assetPath: "../" 
    }
};

function copyFolderSync(from, to) {
    if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
    fs.readdirSync(from).forEach(element => {
        if (fs.lstatSync(path.join(from, element)).isDirectory()) {
            copyFolderSync(path.join(from, element), path.join(to, element));
        } else {
            fs.copyFileSync(path.join(from, element), path.join(to, element));
        }
    });
}

function build() {
    const distDir = 'dist';
    
    // 1. Clean and create dist directory
    if (fs.existsSync(distDir)) {
        fs.rmSync(distDir, { recursive: true, force: true });
    }
    fs.mkdirSync(distDir);

    // 2. Copy Assets
    console.log('🚚 Copying assets...');
    copyFolderSync('css', path.join(distDir, 'css'));
    copyFolderSync('js', path.join(distDir, 'js'));
    copyFolderSync('vendor', path.join(distDir, 'vendor'));
    copyFolderSync('images', path.join(distDir, 'images'));
    
    if (fs.existsSync('favicon.png')) {
        fs.copyFileSync('favicon.png', path.join(distDir, 'favicon.png'));
    }

    // 3. Generate HTML files from template
    const templatePath = path.join(__dirname, '..', 'index.template.html');
    const template = fs.readFileSync(templatePath, 'utf8');

    Object.entries(configs).forEach(([lang, config]) => {
        let output = template
            .replace(/{{LANG}}/g, config.lang)
            .replace(/{{TITLE}}/g, config.title)
            .replace(/{{DESCRIPTION}}/g, config.description)
            .replace(/{{TIMESTAMP}}/g, timestamp)
            .replace(/{{ASSET_PATH}}/g, config.assetPath);

        const outputDir = path.dirname(config.outputPath);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        fs.writeFileSync(config.outputPath, output);
        console.log(`✅ Built ${config.outputPath}`);
    });

    console.log('\n🚀 Build complete! Files are in the /dist folder.');
}

build();
