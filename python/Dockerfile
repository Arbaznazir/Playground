# 1️⃣ Base image
FROM python:3.12-alpine

# 2️⃣ Set working directory
WORKDIR /app

# 3️⃣ Copy only dependency file first (to use Docker cache)
COPY requirements.txt ./

# 4️⃣ Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# 5️⃣ Copy rest of your project
COPY . .

# 6️⃣ Expose app port
EXPOSE 3000

# 7️⃣ Run your app
CMD ["python", "app.py"]
