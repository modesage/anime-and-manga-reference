# Step 1: Build the React app
# Use Node.js 20 LTS as the base image for building the application
FROM node:20 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
# This allows us to install dependencies before copying the entire app
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the entire application code into the working directory
COPY . .

# Build the Vite application, which outputs static files to the 'dist' directory
RUN npm run build

# Step 2: Serve the app with a static server
# Use Nginx as the base image for serving the built static files
FROM nginx:alpine

# Copy the built static files from the previous build stage to Nginx's public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the Nginx server to be accessible
EXPOSE 80

# Start Nginx in the foreground to keep the container running
CMD ["nginx", "-g", "daemon off;"]
