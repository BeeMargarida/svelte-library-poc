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

const scales = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

// Builds all color-shade variantions for the given color
function colorVariables(color: string): string[] {
    if (baseColorNames.indexOf(color) === -1) {
        return [`--color: var(--${color})`];
    }

    const colorVars = [`--color: ${color}`];
    for (const scale of scales) {
        colorVars.push(`--color-${scale}: var(--${color}${scale})`);
    }
    return colorVars;
}

export function createStyles(properties: { [key: string]: string }): string {
    const array: string[] = ['display: contents'];
    for (const property in properties) {
        if (properties[property] === undefined) continue;

        if (property === 'color' || property === 'backgroundColor') {
            array.push(...colorVariables(properties[property]));
        } else {
            array.push(`--${property}: var(--${property}-${properties[property]})`);
        }
    }

    return array.join(';');
}