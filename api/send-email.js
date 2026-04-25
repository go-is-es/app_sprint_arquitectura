import { generarEmailDiagnosticoHTML } from "./utils_emails.js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { nombre, telefono, email, origen } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email requerido" });
    }

    const origenNormalizado = (origen || "").toLowerCase();

    let cc = [];
    let bcc = ["antonio.justicia@go-is.es"];

    if (origenNormalizado === "comercial") {
      cc = ["comercial@go-is.es"]; // 👈 equipo comercialç
    }

    await resend.emails.send({
      from: "Go-Is Diagnóstico <diagnostico@go-is.es>",

      to: [email], // 👈 LEAD

      cc: cc,
      bcc: bcc,

      subject: "Hemos recibido tu solicitud",

      html: generarEmailDiagnosticoHTML({ nombre, email, telefono, origen }),

    attachments: [
      {
        filename: "casos_reales.pdf",
        path: "https://gois-files.s3.eu-central-003.backblazeb2.com/media/proyectos_GoIs.pdf", // o base64 si lo generas
      },
    ],
  });
  
    return res.status(200).json({ ok: true });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error enviando email" });
  }
}