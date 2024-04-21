const express=require("express")
const app=express();

app.use(express.json())

const ContactRoutes=require("./routes/Contact")
const CourseRoutes=require("./routes/Course")
const PaymentRoutes=require("./routes/Payments")  
const ProfileRoutes=require("./routes/Profile")
const UserRoutes=require("./routes/User")
const database=require("./config/database")
const cookieParser=require("cookie-parser")
const {cloudinaryConnect}=require("./config/cloudinary")

const fileUpload=require("express-fileupload")


const dotenv=require("dotenv")
const cors=require("cors")
dotenv.config();

const PORT=process.env.PORT || 4000
database.connect();
app.use(cookieParser())
app.use(
	cors({
		origin:"http://localhost:3000"
	})
)

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp"
}))

cloudinaryConnect();


app.use("/api/v1/auth",UserRoutes)
app.use("/api/v1/profile",ProfileRoutes)
app.use("/api/v1/Payment",PaymentRoutes)
app.use("/api/v1/Course",CourseRoutes)
app.use("/api/v1/reach",ContactRoutes)

const otpTemplate = require('./mail/templates/emailVerificationTemplate'); 
app.post('/api/v1/auth/sendotp', (req, res) => {
   
    const htmlContent = otpTemplate(otp);
    res.setHeader('Content-Type', 'text/html');
    res.send(htmlContent);
});

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})


