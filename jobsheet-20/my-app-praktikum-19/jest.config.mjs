import nextJest from "next/jest.js";

const createJestConfig = nextJest({
    dir: './',
})

const config = {
    testEnvironment: "jsdom",
    modulePath: ['<rootDir>/src/'],
    collectCoverage: true,
    collectCoverageFrom: [
        // '**/*.{ts,tsx}',
        '**/*.d.ts',
        'src/pages/auth/**/*.{ts,tsx}',
        'src/pages/produk/**/*.{ts,tsx}',
        'src/pages/about/**/*.{ts,tsx}',
        'src/components/layouts/**/*.{ts,tsx}',
        // '!**/jest.config.mjs',
        // '!**/next.config.mjs',
        '!src/pages/produk/server.tsx',
        // '!src/pages/produk/static.tsx',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!**/.next/**',
        '!**/coverage/**',
        '!**/types/**',
        '!**/views/**',
        '!**/pages/api/**'
    ],
}

export  default createJestConfig(config)