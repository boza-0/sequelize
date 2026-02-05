docker exec -it sequelize-mysql mysql -u root -proot

show databases;
u api_rest_db;
SHOW TABLES;

Empty set


//Generar el modelo

npx sequelize-auto -h localhost -d api_rest_db -u root -p 3306 -x root -e mysql -o "./models" -l esm

node autocrud

npm run dev


curl -X POST http://localhost:3000/api/log5 -H "Content-Type: application/json" -d "{\"description\":\"Primer log de prueba\"}"


C:\Users\DAM2\images\sequelize>curl http://localhost:3000/api/log5 
[{"id":1,"description":"holAAAAAAAAA"},{"id":2,"description":"Primer log de prueba"},{"id":3,"description":"Primer log de prueba"},{"id":4,"description":"Primer log de prueba"},{"id":5,"description":"Primer log de prueba"},{"id":6,"description":"Primer log de prueba"}]
C:\Users\DAM2\images\sequelize>
