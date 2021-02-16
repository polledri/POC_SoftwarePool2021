import { get } from 'env-var'

// export interface ProcessEnv {
//     [key: string]: string | undefined
// }

// export const hello = process.env["HELLO_MESSAGE"];
// export const port = process.env["SERVER_PORT"];

const env = (name: string, required = true) => get(name).required(required);

export const PORT = env('SERVER_PORT', false).default(8000).asPortNumber();
export const HOST = env('HOST', false).default('localhost').asString();
export const HELLO_MESSAGE = env('HELLO_MESSAGE').asString();