import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "simpsonzzappi@gmail.com",
        pass: "btwkqccpvpykghiy"
    },
    from: "simpsonzzappi@gmail.com"
})



export const sendEmail =async (to:string, code: string):Promise<void> => {
    try{
       
        const mailOptions={
            from: '"Simpsonzzapi" simpsonzzappi@gmail.com',
            to,
            subject: "Código de verificación para tu cuenta",
            text: `
                Llegó tu código para Simpsonzzapi.
                El código para verificarte es : ${code}
            `
        }
        
        await transporter.sendMail(mailOptions)
        console.log("Correo electrónico enviado")
    }catch(error){
        console.error("Error al enviar el correo electrónico", error)
    }
}