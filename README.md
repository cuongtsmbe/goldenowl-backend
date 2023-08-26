# Hướng dẫn Chạy Ứng dụng bằng Docker Compose

## Bước 1: Sao chép mã nguồn
```bash
git clone https://github.com/cuongtsmbe/goldenowl-backend/
```
sau đó di chuyển là thư mục có chứa ./deploy-up.sh (hay package.json)
## Bước 2: cấp quyền cho script và chạy script để build docker
```bash
chmod +x deploy-up.sh
./deploy-up.sh
```

## Bước 3: Dùng postman để test tại http://localhost:3000
```bash
  GET /api/v1/products: Get all products 
  GET /api/v1/products/:id: Get a product by id 
  POST /api/v1/products: Create a new product 
  PUT /api/v1/products/:id: Update a product by id 
  DELETE /api/v1/products/:id: Delete a product by id 
```
