# Etapa 1: Construcción de la aplicación
FROM node:18-alpine AS builder

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos de dependencias y luego instalar
COPY package*.json ./
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación (compila TypeScript a JavaScript)
RUN npm run build

# Etapa 2: Crear la imagen de producción
FROM node:18-alpine

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos de producción desde la etapa de construcción
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/dist ./dist

# Instalar solo dependencias de producción
RUN npm install --only=production

# Exponer el puerto en el que la aplicación escuchará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "dist/main.js"]
