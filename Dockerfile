FROM node:18

WORKDIR /app

# Copiamos archivos de dependencias
COPY package.json package-lock.json ./

# Instalamos TODAS las dependencias (no solo producción)
RUN npm install

# Copiamos el resto del código fuente
COPY . .

# Exponemos el puerto de Vite
EXPOSE 5173

# Comando para desarrollo
CMD ["npm", "run", "dev"]
