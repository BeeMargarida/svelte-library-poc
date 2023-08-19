// Utils
type Primitive = null | undefined | string | number | boolean | symbol | bigint;

type LiteralUnion<LiteralType, BaseType extends Primitive> =
	| LiteralType
	| (BaseType & Record<never, never>);

// Colors
type LibColor = LiteralUnion<
	| 'dark'
	| 'gray'
	| 'red'
	| 'pink'
	| 'grape'
	| 'violet'
	| 'indigo'
	| 'blue'
	| 'cyan'
	| 'teal'
	| 'green'
	| 'lime'
	| 'yellow'
	| 'orange',
	string
>;

type Scale = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

type ValidColor = `${LibColor}${Scale}`;

export type Color = ValidColor | 'primary' | 'white' | 'black';

// Sizes

type LibSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Size = LiteralUnion<LibSize, number>;