import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  theme:{
    extend:{
      colors:{
        lightHover:"#fcf4ff",
        darkHover:"#2a004a",
        darkTheme:"#11001F",
      },
    }
  }
})
