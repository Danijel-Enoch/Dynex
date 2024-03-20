import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: (props) => ({
        body: {
            bg: mode('#07091a', '#07091a')(props),
            color: '#fff'
        },
    }),
};

const colors = {
    brand: {
        100: '#1C1C24',
        200: '#074CDE',
        300: '#FF8901',
        400: '#424249',
        500: '#CECED0',
        600: '#F5F5F5',
        700: '#68686D',
        800: '#002B79',
        900: '#84848A',
        50: '#ADADB1',
    },
};

const fonts = {
    // heading: `Montserrat, ${base.fonts.heading}`,
    body: `'Figtree Variable', sans-serif`
};

const components = {
    Button: {

    },
};

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, colors, fonts, components });
export default theme;
