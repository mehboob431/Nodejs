import dotenv from "dotenv";
import connectDB from "./db/index.js";
// import router from "./route/s/user.routers.js";

dotenv.config({
  path: "./.env",
});
import { app } from "./app.js";
connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server is running : $ {process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGO DB Connection failed ", error);
  });
/*
const app = express()
    (
        async () => {
            try {
                await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
                app.on("error",(error) => {
                   console.log("ERROR:", error );
                    throw error
                })
                app.listen(process.env.PORT, () => {
                    console.log(`App is listening on port ${process.env.PORT}`);
                })
            } catch (error) {
                console.error("ERROR:", error);
                throw error
            }
    }
)

import dotenv from "dotenv";
import connectDB from "./db";

dotenv.config({
    path:'./env'
})

connectDB()  
*/
