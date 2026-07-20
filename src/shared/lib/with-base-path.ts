const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Adds the deployment subpath to a local public asset URL. */
export function withBasePath(path: string): string {
    if (!path.startsWith('/') || path.startsWith('//')) {
        return path;
    }

    return `${basePath}${path}`;
}
