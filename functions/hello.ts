import { KVNamespace, PagesFunction } from '@cloudflare/workers-types';

interface Env {
    KV: KVNamespace;
}

export const onRequest: PagesFunction<Env> = async (context) => {
    const value = await context.env.KV.get('example');
    return new Response("Hello");
}