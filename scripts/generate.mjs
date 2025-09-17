import fs from 'fs';
import path from 'path';
import { parse } from 'svgson';
import _ from 'lodash';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const svgDirectory = 'C:\\Users\\Admin\\Downloads\\UIX Icons';
const outputDirectory = path.join(__dirname, '../src/icons');

const ordinalToWord = (name) => {
  const ordinalMap = {
    '1st': 'First',
    '2nd': 'Second',
    '3rd': 'Third',
    '3-d': 'ThreeD',
    '3d': 'ThreeD',
    '4-k': 'FourK',
    '4k': 'FourK',
  };
  return name.replace(/\b(1st|2nd|3rd|3-d|4-k|4k|3d)\b/g, (match) => ordinalMap[match] || match);
}

function convertFileNameToComponentName(fileName) {
  return _.upperFirst(_.camelCase(ordinalToWord(fileName))) + 'Icon';
}

async function convertSvgToJsObject(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      parse(data).then(json => {
        const elements = json.children.map((element, index) => {
          let attributes = Object.entries(element.attributes)
            // remove unwanted attributes (just keep important ones)
            .filter(([key]) => !['xmlns', 'xmlns:xlink', 'xml:space', 'stroke', 'fill', 'clip'].some(attr => key.startsWith(attr)))
            .map(([key, value]) => `${key}: "${value}"`)
            .join(', ');

          // check if attributes has fill or stroke (add as current color)
          if (element.attributes.fill) {
            attributes += `, fill: "currentColor"`;
          }

          if (element.attributes.stroke) {
            attributes += `, stroke: "currentColor"`;
          }

          // check if element has fill-rule attribute
          if (element.attributes['fill-rule']) {
            attributes += `, fillRule: "${element.attributes['fill-rule']}"`;
          }

          const keyAttr = `key: "k${index}"`;
          const finalAttributes = attributes ? `${attributes}, ${keyAttr}` : keyAttr;
          return `["${element.name}", { ${finalAttributes} }]`;
        });

        resolve(elements);
      });
    });
  });
}

function normalizeVariantName(fileName) {
  // the last 2 parts of the file name are the variant name and type ie. stroke-sharp & remove the file extension
  const parts = ordinalToWord(fileName).split('-');
  return parts.slice(-2).join('.').replace('.svg', '');
}

async function processDirectory(directory) {
  const icons = {};

  // create output directory if not exists
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  const files = fs.readdirSync(directory);
  for (const file of files) {
    // do first one to test
    // if (file !== '1st-bracket-circle-stroke-rounded.svg') {
    //   continue;
    // }

    // skip non-svg files
    if (!file.endsWith('.svg')) {
      continue;
    }

    // base icon name is the filename without extension
    const baseIconName = file.replace('.svg', '');
    const componentName = convertFileNameToComponentName(baseIconName);
    const variantName = 'default';

    if (!icons[componentName]) {
      icons[componentName] = {};
    }

    const filePath = path.join(directory, file);
    icons[componentName][variantName] = await convertSvgToJsObject(filePath);
  }

  // Generate output files
  const indexArray = [];
  for (const [componentName, variants] of Object.entries(icons)) {
    let output = `import createBravyIconsComponent from '../create-bravyicon-component';\n\n`;
    output += `/**
 * @component @name ${componentName}
 * @description Renders Bravyicons ${componentName} svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const ${componentName} = createBravyIconsComponent("${componentName}", [`;

    for (const [variantName, elements] of Object.entries(variants)) {
      output += `\n    ${elements.join(',\n    ')}\n`;
    }

    output += `]);\n\nexport default ${componentName};\n`;

    const fileName = _.snakeCase(componentName) + '.ts'; // Convert to kebab-case
    fs.writeFileSync(path.join(outputDirectory, fileName), output);
    console.log(`${fileName} has been saved.`);

    // Add to index file
    indexArray.push(`export { default as ${componentName} } from './${fileName.replace('.ts', '')}';`);
  }

  // Write index file
  fs.writeFileSync(path.join(outputDirectory, 'index.ts'), indexArray.join('\n'));
}

processDirectory(svgDirectory);
