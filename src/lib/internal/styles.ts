const baseColorNames = [
    'dark',
    'gray',
    'red',
    'pink',
    'grape',
    'violet',
    'indigo',
    'blue',
    'cyan',
    'teal',
    'green',
    'lime',
    'yellow',
    'orange',
];

const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

// Builds all color-shade variations for the given color
// function colorVariables(color: string): string[] {
//     if (baseColorNames.indexOf(color) === -1) {
//         return [`--color: var(--${color})`];
//     }

//     const colorVars = [`--color: ${color}`];
//     for (const scale of scales) {
//         colorVars.push(`--color-${scale}: var(--${color}${scale})`);
//     }
//     return colorVars;
// }

/**
 * Taken from https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
 * 
 * @param color The string possibly containing a color
 * @returns If the given string is an hexadecimal color value
 */
function isHexColor(color: string): boolean {
    return /^#[0-9A-F]{6}[0-9a-f]{0,2}$/i.test(color);
}

export function getColor(color: string) {
    if (isHexColor(color)) {
        return color;
    }

    if (color === 'white' || color === 'black') {
        return `var(--${color})`
    }

    const [_color, shade] = color.split('.');
    if (shade === undefined || shades.indexOf(shade) === -1) {
        return color;
    }
    return `var(--${_color}${shade})`;
}

export function toGradient(gradient: { to: string, from: string, deg: number} | undefined): string {
    const values = {
        from: getColor(gradient?.from || 'indigo'),
        to: getColor(gradient?.to || 'cyan'),
        deg: gradient?.deg || 0,
    };

    // @TODO: better defaults (from theme?)

    return `linear-gradient(${values.deg}deg, ${values.from} 0%, ${values.to} 100%)`;
}

export function mapSizeVariable(size: number | string, prefix?: string): string {
    if (typeof size === 'number') {
        return `${size}px`; // @TODO: convert to rem later
    }

    return `var(--${prefix}-${size})`;
}

export function variantVariables(variant: string, color: string, gradient?: { to: string, from: string, deg: number}) {
    // @TODO: handle case where the color passed is not a base color, ex: red800
    switch(variant) {
        case 'light':
            return [
                `--variant-background: var(--${color}-light)`,
                `--variant-color: var(--${color}-light-color)`,
                `--variant-border: 1px solid transparent`, // @TODO: change this to rem in the future
                `--color-variant-hover: var(--${color}-light-hover)`,
            ]
        case 'filled':
            return [
                `--variant-background: var(--${color}-filled)`,
                `--variant-color: var(--white)`,
                `--variant-border: 1px solid transparent`,
                `--variant-hover: var(--${color}-filled-hover)`,
            ]
        case 'outline':
            return [
                `--variant-background: transparent`,
                `--variant-color: var(--${color}-outline)`,
                `--variant-border: 1px solid var(--${color}-outline)`,
                `--variant-hover: var(--${color}-outline-hover)`,
            ]
        case 'subtle':
            return [
                `--variant-background: transparent`,
                `--variant-color: var(--${color}-light-color)`,
                `--variant-border: 1px solid transparent`,
                `--variant-hover: var(--${color}-light-hover)`,
            ]
        case 'transparent':
            return [
                `--variant-background: transparent`,
                `--variant-color: var(--${color}-light-color)`,
                `--variant-border: 1px solid transparent`,
                `--variant-hover: transparent`,
            ]
        case 'white':
            return [
                `--variant-background: var(--white)`,
                `--variant-color: var(--${color}-filled)`,
                `--variant-border: 1px solid transparent`,
                `--variant-hover: var(--dark-white-01)`,
            ]
        case 'default':
            return [
                `--variant-background: var(--default)`,
                `--variant-color: var(--default-color)`,
                `--variant-border: 1px solid var(--default-border)`,
                `--variant-hover: var(--default-hover)`,
            ];
        case 'gradient':
            return [
                `--variant-background: ${toGradient(gradient)}`,
                `--variant-color: var(--white)`,
                `--variant-border: none`,
                `--variant-hover: ${toGradient(gradient)}`,
            ]
        default:
            return [];
    }
}

export function createStyles(properties: { [key: string]: string }): string {
    const array: string[] = ['display: contents'];
    for (const property in properties) {
        switch(property) {
            // case 'color':
            // case 'backgroundColor':
            //     array.push(...colorVariables(properties[property]));
            //     break;
            case 'variant':
                array.push(...variantVariables(properties[property], properties['color']));
                break;
            default:
                array.push(`--${property}: var(--${property}-${properties[property]})`);
                break;
        }
    }

    return array.join(';');
}