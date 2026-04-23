import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { nombre, telefono, email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email requerido" });
    }

    await resend.emails.send({
      from: "Go-Is Diagnóstico <diagnostico@go-is.es>",

      to: [email], // 👈 LEAD

      cc: [
        "antonio.justicia@go-is.es",   // cambiar a comercial
      ],

      bcc: [
        "antonio.justicia@go-is.es",
      ],

      subject: "Hemos recibido tu solicitud",

      html: `
        <h2>Hemos recibido tu solicitud</h2>

        <p>Hola ${nombre || ""},</p>

        <p>
          Hemos recibido tu solicitud de diagnóstico.
          En breve analizaremos tu caso y te contactaremos.
        </p>

        <hr>

        <p><strong>Resumen enviado:</strong></p>
        <p><strong>Nombre:</strong> ${nombre || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || "-"}</p>
      `,
    });

    return res.status(200).json({ ok: true });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error enviando email" });
  }
}