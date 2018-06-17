### 生成私钥
openssl genrsa -out private_key.pem 1024

### 利用私钥生成公钥
openssl rsa -in private_key.pem -pubout -out public_key.pem

### 进行PKCS#8编码 （并不是必需使用）
openssl pkcs8 -topk8 -inform PEM -in private_key.pem -outform PEM -out pks8_private_key.pem

### 利用私钥生成数字证书 （有向导，帮助放入 个人或企业的信息），实际是用私钥生成的公钥，置入证书内部
openssl req -new -key private_key.pem -out csr.pem

### 利用私钥（一般使用CA的私钥），对数字证书进行签名(此时是自签名的365天的证书)
openssl x509 -req -days 365 -in csr.pem -signkey private_key.pem -out johnyu.crt

### 此时，我们有了私钥和自签名的证书，具备了提供HTTPS的条件



