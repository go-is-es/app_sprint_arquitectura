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
      from: "Diagnóstico <onboarding@resend.dev>",
      to: ["antonio.justicia@go-is.es"], // TU EMAIL DE RESEND
      subject: "Nuevo lead recibido",
      html: `
        <h2>Nuevo lead</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    return res.status(200).json({ ok: true });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error enviando email" });
  }
}