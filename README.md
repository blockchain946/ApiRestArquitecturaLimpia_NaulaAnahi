COMANDOS PARA EJECUTAR EL PROGRAMA:
npm init -y
npm install express cors dotenv
npm install -D typescript ts-node nodemon @types/node @types/express
npm install @prisma/client
npm install -D prisma
//Cambiar cadena de conexion en .env de acuerdo a el gestor
npx prisma migrate dev --name init
npm run dev

