export const notEmpty = <T = any>( value: any ) => Array.isArray( value ) ? !!value.length : !!value;
