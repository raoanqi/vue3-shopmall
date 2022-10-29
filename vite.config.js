import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        // 设置路径别名
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    // 配置请求代理
    server: {
        proxy: {
            '/api': {
                target: 'http://backend-api-02.newbee.ltd/manage-api/v1',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    }
})
