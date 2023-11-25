import app from "./app"
import mongoose from 'mongoose'

mongoose.set('strictQuery', false)

app.listen(process.env.PORT || 4000, () => console.log('Hola EXPRESS corriendo en el puerto: 4000'))
mongoose.connect('mongodb://localhost:27017/mongo')
    .then(() => console.log('Conexion a MONGO_DB establecida'))
    .catch(() => console.log('Error en la conexion a MONGO'))