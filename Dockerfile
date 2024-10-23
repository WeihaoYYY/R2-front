# Step 1: Build the React app
FROM node:20 AS builder

WORKDIR /web

# Copy dependency files
COPY package.json package-lock.json /web/

# Install dependencies
RUN npm install

# Copy all files and build the app
COPY . /web/
RUN npm run build

# Step 2: Use Nginx to serve the built app
FROM nginx:alpine

# Copy custom nginx configuration from within the build context
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy the built files to Nginx's default HTML directory
COPY --from=builder /web/build /usr/share/nginx/html

# Expose port 80 to access the application
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

