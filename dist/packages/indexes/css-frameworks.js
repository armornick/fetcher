"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
function default_1(projects) {
    projects.define((0, util_1.ContainerProject)('css-frameworks', [
        (0, util_1.BasicProject)('bootstrap_', ['bootstrap']),
        (0, util_1.BasicProject)('bulma_', ['bulma']),
        (0, util_1.BasicProject)('codyhouse-framework_', ['codyhouse-framework']),
        (0, util_1.BasicProject)('material-tailwind_', ['tailwindcss', '@material-tailwind/html']),
        (0, util_1.BasicProject)('niui_', ['niui-npm']),
        (0, util_1.BasicProject)('normalize_', ['normalize.css']),
        (0, util_1.BasicProject)('modern-css-reset_', ['modern-css-reset']),
        (0, util_1.BasicProject)('minireset_', ['minireset.css']),
        (0, util_1.BasicProject)('classless', ['water.css', 'sakura.css', 'awsm.css', 'axist', 'bamboo.css', 'holiday.css', 'markdown-air', 'marx-css', 'simpledotcss', 'picnic']),
        (0, util_1.DegitProject)('classlesscss_', 'github:emareg/classlesscss', false),
        (0, util_1.DegitProject)('skeleton_', 'github:dhg/Skeleton', false),
        (0, util_1.BasicProject)('purecss_', ['purecss']),
        (0, util_1.BasicProject)('foundation_', ['foundation-sites']),
        (0, util_1.BasicProject)('primer_', ['@primer/css']),
        (0, util_1.BasicProject)('material-components_', ['material-components-web']),
    ]));
    projects.define((0, util_1.ContainerProject)('css-frameworks-2', [
        (0, util_1.BasicProject)('react-bootstrap_', ['react-bootstrap', 'bootstrap', 'react', 'react-dom']),
        (0, util_1.BasicProject)('bootstrap-vue_', ['bootstrap-vue', 'bootstrap', 'vue']),
        (0, util_1.BasicProject)('bootstrap-vue_4_', ['bootstrap-vue', 'bootstrap@4', 'vue']),
        (0, util_1.BasicProject)('react-bulma-components_', ['react-bulma-components', 'react', 'react-dom']),
        (0, util_1.BasicProject)('buefy_', ['buefy', 'vue']),
        (0, util_1.BasicProject)('sveltestrap_', ['sveltestrap', 'bootstrap', 'svelte']),
        (0, util_1.BasicProject)('sveltestrap_4_', ['sveltestrap@4', 'bootstrap@4', 'svelte']),
        (0, util_1.BasicProject)('preact-material-components_', ['preact-material-components', 'preact']),
        (0, util_1.BasicProject)('smelte_', ['smelte', 'tailwindcss', 'svelte']),
        (0, util_1.BasicProject)('flowbite_', ['flowbite', "tailwindcss", 'postcss', 'autoprefixer']),
        (0, util_1.BasicProject)('flowbite-react_', ['flowbite-react', 'flowbite', "tailwindcss", 'postcss', 'autoprefixer']),
        (0, util_1.BasicProject)('flowbite-svelte_', ['svelte', 'tailwindcss', 'postcss', 'autoprefixer', 'flowbite-svelte']),
        (0, util_1.BasicProject)('mui-material_', ['@mui/material', '@emotion/react', '@emotion/styled', 'react', 'react-dom']),
        (0, util_1.BasicProject)('mui-joy_', ['@mui/joy', '@emotion/react', '@emotion/styled', 'react', 'react-dom']),
        // BasicProject('agnostic-react_', ['agnostic-react','uuid','react','react-dom']),
        (0, util_1.BasicProject)('agnostic-vue_', ['agnostic-vue', 'vue']),
        (0, util_1.BasicProject)('agnostic-svelte_', ['agnostic-svelte', 'svelte']),
    ]));
    projects.define((0, util_1.ContainerProject)('bootstrap-bundle', [
        (0, util_1.BasicProject)('bootstrap_', ['bootstrap@5.2.1', '@popperjs/core']),
        (0, util_1.BasicProject)('bootswatch_', ['bootswatch']),
        (0, util_1.BasicProject)('bootstrap-4_', ['bootstrap@4', 'bootstrap-vue']),
        (0, util_1.BasicProject)('material-kit_', ['material-kit']),
        (0, util_1.BasicProject)('mdbootstrap', ['mdb-ui-kit', 'mdb-react-ui-kit', 'mdb-vue-ui-kit'])
    ]));
    projects.define((0, util_1.BasicProject)('preact-bundle', [
        'preact', 'preact-router', 'preact-portal', 'preact-richtextarea', 'preact-token-input',
        'preact-virtual-list', 'preact-layout', 'preact-helmet', 'preact-custom-scrollbars',
    ]));
    projects.define((0, util_1.BasicProject)('twind-bundle', [
        'twind', '@twind/aspect-ratio', '@twind/content', '@twind/forms', '@twind/line-clamp', '@twind/typography',
        '@twind/preact', '@twind/wmr', 'construct-style-sheets-polyfill',
    ]));
    // ----------------------------------------------------------------------------------------
    projects.define((0, util_1.BasicProject)('postcss-bundle', [
        'postcss', 'autoprefixer', 'atcss', 'cssnano', 'precss', 'rucksack-css', 'postcss-utilities',
        'postcss-cli', 'postcss-layout', 'precss', 'postcss-preset-env',
        'postcss-advanced-variables', 'postcss-bem', 'postcss-conditionals', 'postcss-each',
        'postcss-for', 'postcss-import', 'postcss-nested', 'postcss-sassy-mixins', 'postcss-simple-vars'
    ]));
    projects.define((0, util_1.BasicProject)('sass-bundle', [
        'sass',
        'cirrus-ui', 'iotacss', 'sierra-library', 'susy', 'open-color', 'shevy', 'typi', 'gerillass',
        'bulma', 'bootstrap@5.2.1', 'bootswatch', 'foundation-sites', 'gorko',
    ]));
    projects.define((0, util_1.ContainerProject)('css-in-js-bundle', [
        (0, util_1.BasicProject)('emotion-bundle', ['@emotion/css', '@emotion/react', '@emotion/styled', '@emotion/babel-plugin']),
        (0, util_1.BasicProject)('jss-bundle', [
            'jss', 'jss-preset-default', 'color', 'react-jss', 'styled-jss',
            'aphrodite-jss', 'vue-jss', 'jss-simple', 'jss-sheet-loader', 'jss-css', 'babel-plugin-jss-css',
            'prejss', 'babel-plugin-transform-prejss', 'postjss', 'prejss-cli', 'prejss-styles-loader', 'postcss-js',
        ]),
        (0, util_1.BasicProject)('styled-components-bundle', ['styled-components', 'styled-theming', 'babel-plugin-styled-components']),
        (0, util_1.BasicProject)('cssx-bundle', ['cssx', 'cssx-transpiler', 'cssx-cli', 'rollup-plugin-cssx']),
        (0, util_1.BasicProject)('stitches-bundle', ['@stitches/core', '@stitches/react']),
        (0, util_1.BasicProject)('twin-macro_', ['twin.macro']),
        (0, util_1.BasicProject)('goober_', ['goober']),
        (0, util_1.AppProject)('absurd-app', 'absurd'),
        (0, util_1.BasicProject)('tailwind-components_', ['babel-plugin-macros', 'tailwind.macro', 'babel-plugin-tailwind-components']),
    ]));
    projects.define((0, util_1.ContainerProject)('atomic-css-tools-small', [
        (0, util_1.BasicProject)('tailwind_', ['tailwindcss']),
        (0, util_1.BasicProject)('tailwind-postcss_', ['tailwindcss', 'postcss', 'autoprefixer']),
        (0, util_1.BasicProject)('tailwind-plugins', ['@tailwindcss/typography', '@tailwindcss/forms', '@tailwindcss/line-clamp', 'tailwind-color-vars']),
        (0, util_1.BasicProject)('css-variables', ['open-props', 'dashvar', 'pollen-css']),
        'twind-bundle',
    ]));
    projects.define((0, util_1.ContainerProject)('atomic-css-tools', [
        'atomic-css-tools-small',
        (0, util_1.BasicProject)('windicss-cli_', ['windicss']),
        (0, util_1.BasicProject)('windicss-vite_', ['vite-plugin-windicss', 'windicss']),
        (0, util_1.BasicProject)('windicss-svelte_', ['svelte-windicss-preprocess']),
        (0, util_1.BasicProject)('unocss-bundle', [
            'unocss', '@unocss/preset-mini', '@unocss/preset-wind', '@unocss/preset-attributify', '@unocss/preset-icons', '@unocss/preset-web-fonts',
            '@unocss/preset-typography', '@unocss/vite',
        ]),
        (0, util_1.BasicProject)('unocss-preset-chroma_', ['unocss-preset-chroma']),
        (0, util_1.BasicProject)('twin-macro_', ['twin.macro']),
        (0, util_1.BasicProject)('goober_', ['goober']),
        (0, util_1.BasicProject)('otion_', ['otion']),
        (0, util_1.BasicProject)('csstag_', ['csstag', 'babel-plugin-csstag']),
        // tachyons technically counts but is old now
        (0, util_1.BasicProject)('tachyons_', ['tachyons@4.12.0']),
    ]));
    projects.define((0, util_1.ContainerProject)('tailwind-pkg', [
        (0, util_1.BasicProject)('tailwind_', ['tailwindcss']),
        (0, util_1.BasicProject)('tailwind-postcss_', ['tailwindcss', 'postcss', 'autoprefixer']),
        (0, util_1.BasicProject)('tailwind-plugins', ['@tailwindcss/typography', '@tailwindcss/forms', '@tailwindcss/line-clamp', 'tailwind-color-vars']),
        (0, util_1.BasicProject)('windstrap_', ['windstrap']),
        (0, util_1.BasicProject)('flowbite_', ['flowbite']),
        (0, util_1.BasicProject)('kutty_', ['kutty']),
        (0, util_1.BasicProject)('sailui_', ['sailui']),
        (0, util_1.BasicProject)('daisyui_', ['daisyui']),
        (0, util_1.BasicProject)('a17t_', ['a17t']),
        (0, util_1.BasicProject)('tw-elements_', ['tw-elements']),
        (0, util_1.BasicProject)('vue-tailwind_', ['vue-tailwind']),
    ]));
    projects.define((0, util_1.ContainerProject)('tailwind-ui-kits', [
        (0, util_1.DegitProject)('merakiui-local', 'github:merakiui/merakiui'),
        (0, util_1.DegitProject)('tailwindlayout-local', 'github:lalokalabs/tailwindlayout'),
        (0, util_1.DegitProject)('hyperui-local', 'github:markmead/hyperui'),
        (0, util_1.DegitProject)('tailmin-local', 'github:otezz/tailmin'),
    ]));
}
exports.default = default_1;
