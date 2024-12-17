# Use Node.js image
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Build the React application
RUN npm run build

# Serve the application using an Nginx server
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html



# Expose port 80 for Render
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
