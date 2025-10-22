# Use a small, efficient Node image
FROM node:22-alpine

# Set working directory inside container
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of your project files
COPY . .

# Expose port (optional if app listens on 3000)
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]
