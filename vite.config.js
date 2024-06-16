import react from '@vitejs/plugin-react'
import { transformWithEsbuild } from 'vite'

export default {
    root: 'src/',
    publicDir: '../public/',
    base: './',
    plugins:
    [
        // React support
        react(),

        // .js file support as if it was JSX
        {
            name: 'load+transform-js-files-as-jsx',
            async transform(code, id)
            {
                if (!id.match(/src\/.*\.js$/))
                    return null

                return transformWithEsbuild(code, id, {
                    loader: 'jsx',
                    jsx: 'automatic',
                });
            },
        },
    ],
    server:
    {
        host: true, // Open to local network and display URL
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env) // Open if it's not a CodeSandbox
    },
    build:
    {
        outDir: '../dist2', // Output in the dist/ folder
        emptyOutDir: true, // Empty the folder first
        sourcemap: true // Add sourcemap
    },

    //LibraryBuild
    // build: {
    //     outDir: '../dist', // Output in the dist/ folder
    //     emptyOutDir: true, // Empty the folder first
    //     sourcemap: true, // Add sourcemap
    //     lib: {
    //       entry: 'component/Game.tsx', // Use Game.jsx as the entry point
    //       name: 'CDGame',
    //       formats: ['es'],
    //       fileName: (format) => `cd-game.${format}.js`,
    //     },
    //     rollupOptions: {
    //       external: ['react', 'react-dom'],
    //       output: {
    //         globals: {
    //           react: 'React',
    //           'react-dom': 'ReactDOM',
    //         },
    //       },
    //     },
    //   },
}