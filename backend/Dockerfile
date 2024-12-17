# Use Node.js image
FROM node:18-alpine




# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

ENV REACT_APP_SUPABASE_URL=https://qdtllskaulbxacxobmeh.supabase.co;
ENV REACT_APP_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkdGxsc2thdWxieGFjeG9ibWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1Mzk5MzYsImV4cCI6MjA0OTExNTkzNn0.x-vF181aJNhjHsUfzOrQD58L-GdmmaGXvezWRmCnpv8
# Expose port 8080 (or the port your backend runs on)
EXPOSE 8080

# Start the Node.js server
CMD ["node", "server.js"]
