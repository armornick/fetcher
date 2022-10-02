import { AppProject, BasicProject, CommandProject, ContainerProject, DegitProject, ProjectList, SuperProject } from "../util";

export default function (projects:ProjectList) {

    projects.define(
        ContainerProject('css-frameworks', [
            BasicProject('bootstrap_', ['bootstrap']),
            BasicProject('bulma_', ['bulma']),
            BasicProject('codyhouse-framework_', ['codyhouse-framework']),
            BasicProject('material-tailwind_', ['tailwindcss', '@material-tailwind/html']),
            BasicProject('niui_', ['niui-npm']),
            BasicProject('normalize_', ['normalize.css']),
            BasicProject('modern-css-reset_', ['modern-css-reset']),
            BasicProject('minireset_', ['minireset.css']),
            BasicProject('classless', 
                ['water.css','sakura.css','awsm.css','axist','bamboo.css','holiday.css','markdown-air','marx-css','simpledotcss','picnic']),
            DegitProject('classlesscss_', 'github:emareg/classlesscss', false),
            DegitProject('skeleton_', 'github:dhg/Skeleton', false),
            BasicProject('purecss_', ['purecss']),
            BasicProject('foundation_', ['foundation-sites']),
            BasicProject('primer_', ['@primer/css']),
            BasicProject('material-components_', ['material-components-web']),
        ])
    )
    
    projects.define(
        ContainerProject('css-frameworks-2', [
            BasicProject('react-bootstrap_', ['react-bootstrap','bootstrap','react','react-dom']),
            BasicProject('bootstrap-vue_', ['bootstrap-vue','bootstrap','vue']),
            BasicProject('bootstrap-vue_4_', ['bootstrap-vue','bootstrap@4','vue']),
            BasicProject('react-bulma-components_', ['react-bulma-components','react','react-dom']),
            BasicProject('buefy_', ['buefy','vue']),
            BasicProject('sveltestrap_', ['sveltestrap','bootstrap','svelte']),
            BasicProject('sveltestrap_4_', ['sveltestrap@4','bootstrap@4','svelte']),
            BasicProject('preact-material-components_', ['preact-material-components','preact']),
            BasicProject('smelte_', ['smelte','tailwindcss','svelte']),
            BasicProject('flowbite_', ['flowbite',"tailwindcss",'postcss','autoprefixer']),
            BasicProject('flowbite-react_', ['flowbite-react','flowbite',"tailwindcss",'postcss','autoprefixer']),
            BasicProject('flowbite-svelte_', ['svelte','tailwindcss','postcss','autoprefixer','flowbite-svelte']),
            BasicProject('mui-material_', ['@mui/material','@emotion/react','@emotion/styled','react','react-dom']),
            BasicProject('mui-joy_', ['@mui/joy','@emotion/react','@emotion/styled','react','react-dom']),
            // BasicProject('agnostic-react_', ['agnostic-react','uuid','react','react-dom']),
            BasicProject('agnostic-vue_', ['agnostic-vue','vue']),
            BasicProject('agnostic-svelte_', ['agnostic-svelte','svelte']),
        ])
    )
    
    projects.define(
        ContainerProject('bootstrap-bundle', [
            BasicProject('bootstrap_', ['bootstrap@5.2.0-beta1','@popperjs/core']),
            BasicProject('bootswatch_', ['bootswatch']),
            BasicProject('bootstrap-4_', ['bootstrap@4','bootstrap-vue']),
            BasicProject('material-kit_', ['material-kit']),
            BasicProject('mdbootstrap', ['mdb-ui-kit','mdb-react-ui-kit','mdb-vue-ui-kit'])
        ])
    )
    
    projects.define(
        BasicProject('preact-bundle', [
            'preact','preact-router','preact-portal','preact-richtextarea','preact-token-input',
            'preact-virtual-list','preact-layout','preact-helmet','preact-custom-scrollbars',
        ])
    )
    
    projects.define(
        BasicProject('twind-bundle', [
            'twind','@twind/aspect-ratio','@twind/content','@twind/forms','@twind/line-clamp','@twind/typography',
            '@twind/preact','@twind/wmr','construct-style-sheets-polyfill',
        ])
    )
    
    // ----------------------------------------------------------------------------------------
    
    projects.define(
        BasicProject('postcss-bundle', [
            'postcss','autoprefixer','atcss','cssnano','precss','rucksack-css','postcss-utilities',
            'postcss-cli','postcss-layout','precss','postcss-preset-env',
            'postcss-advanced-variables','postcss-bem','postcss-conditionals','postcss-each',
            'postcss-for','postcss-import','postcss-nested','postcss-sassy-mixins','postcss-simple-vars'
        ])
    )
    
    projects.define(
        BasicProject('sass-bundle', [
            'sass',
            'cirrus-ui','iotacss','sierra-library','susy','open-color','shevy','typi','gerillass',
            'bulma','bootstrap@5.2.0-beta1','bootswatch','foundation-sites','gorko',
        ])
    )
    
    projects.define(
        ContainerProject('css-in-js-bundle', [
            BasicProject('emotion-bundle', ['@emotion/css','@emotion/react','@emotion/styled','@emotion/babel-plugin']),
            BasicProject('jss-bundle', [
                'jss','jss-preset-default','color','react-jss','styled-jss',
                'aphrodite-jss','vue-jss','jss-simple','jss-sheet-loader','jss-css','babel-plugin-jss-css',
                'prejss','babel-plugin-transform-prejss','postjss','prejss-cli','prejss-styles-loader','postcss-js',
            ]),
            BasicProject('styled-components-bundle', ['styled-components','styled-theming','babel-plugin-styled-components']),
            BasicProject('cssx-bundle', ['cssx','cssx-transpiler','cssx-cli','rollup-plugin-cssx']),
            BasicProject('stitches-bundle', ['@stitches/core','@stitches/react']),
            BasicProject('twin-macro_', ['twin.macro']),
            BasicProject('goober_', ['goober']),
            AppProject('absurd-app', 'absurd'),
            BasicProject('tailwind-components_', ['babel-plugin-macros','tailwind.macro','babel-plugin-tailwind-components']),
        ])
    )
    
    projects.define(
        ContainerProject('atomic-css-tools', [
            BasicProject('tailwind_', ['tailwindcss']),
            BasicProject('tailwind-postcss_', ['tailwindcss','postcss','autoprefixer']),
            BasicProject('tailwind-plugins', ['@tailwindcss/typography','@tailwindcss/forms','@tailwindcss/line-clamp','tailwind-color-vars']),
            BasicProject('css-variables', ['open-props','dashvar','pollen-css']),
            BasicProject('windicss-cli_', ['windicss']),
            BasicProject('windicss-vite_', ['vite-plugin-windicss','windicss']),
            BasicProject('windicss-svelte_', ['svelte-windicss-preprocess']),
            BasicProject('unocss-bundle', [
                'unocss','@unocss/preset-mini','@unocss/preset-wind','@unocss/preset-attributify','@unocss/preset-icons','@unocss/preset-web-fonts',
                '@unocss/preset-typography','@unocss/vite',
            ]),
            BasicProject('unocss-preset-chroma_', ['unocss-preset-chroma']),
            'twind-bundle',
            BasicProject('twin-macro_', ['twin.macro']),
            BasicProject('goober_', ['goober']),
            BasicProject('otion_', ['otion']),
            BasicProject('csstag_', ['csstag','babel-plugin-csstag']),
            // tachyons technically counts but is old now
            BasicProject('tachyons_', ['tachyons@4.12.0']),
        ])
    )
    
    projects.define(
        ContainerProject('tailwind-pkg', [
            BasicProject('tailwind_', ['tailwindcss']),
            BasicProject('tailwind-postcss_', ['tailwindcss','postcss','autoprefixer']),
            BasicProject('tailwind-plugins', ['@tailwindcss/typography','@tailwindcss/forms','@tailwindcss/line-clamp','tailwind-color-vars']),
            BasicProject('windstrap_', ['windstrap']),
            BasicProject('flowbite_', ['flowbite']),
            BasicProject('kutty_', ['kutty']),
            BasicProject('sailui_', ['sailui']),
            BasicProject('daisyui_', ['daisyui']),
            BasicProject('a17t_', ['a17t']),
            BasicProject('tw-elements_', ['tw-elements']),
        ])
    )
    
    projects.define(
        ContainerProject('tailwind-ui-kits', [
            DegitProject('merakiui-local', 'github:merakiui/merakiui'),
            DegitProject('tailwindlayout-local', 'github:lalokalabs/tailwindlayout'),
            DegitProject('hyperui-local', 'github:markmead/hyperui'),
            DegitProject('tailmin-local', 'github:otezz/tailmin'),
        ])
    )

}
