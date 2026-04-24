export function generarEmailDiagnosticoHTML({ nombre, email, telefono }) {
  const anio = new Date().getFullYear();

  return `
  <html>
    <body style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">
      
      <div style="background-color: white; padding: 30px; border-radius: 12px; max-width: 600px; margin: auto;">
        
        <!-- LOGO -->
        <img 
          src="https://gois-files.s3.eu-central-003.backblazeb2.com/media/logo_gois.png" 
          alt="Go-Is" 
          style="width:140px; margin-bottom: 20px;"
        />

        <!-- TITULO -->
        <h2 style="color:#2d3748;">
          Hola ${nombre || ""},
        </h2>

        <!-- INTRO -->
        <p style="color:#444; line-height:1.6;">
          Te dejo un breve vídeo donde te explico cómo estamos ayudando a otras empresas 
          a optimizar sus sistemas y procesos:
        </p>

        <!-- VIDEO CTA -->
        <div style="margin: 20px 0;">
          <a href="https://gois-files.s3.eu-central-003.backblazeb2.com/media/Go-Is-Optimizacion_Sistemas.mp4"
             style="display:inline-block; padding:12px 20px; background:#3d8ccc; color:#fff; text-decoration:none; border-radius:8px;">
             ▶ Ver vídeo
          </a>
        </div>

        <!-- TEXTO -->
        <p style="color:#444; line-height:1.6;">
          Además, te adjunto algunos ejemplos reales de proyectos que hemos desarrollado recientemente.
        </p>

        <p style="color:#444; line-height:1.6;">
          No son casos teóricos, sino situaciones muy similares a lo que vemos en muchas empresas:
          procesos manuales, sistemas poco conectados y oportunidades claras de mejora cuando se estructura bien.
        </p>

        <p style="color:#444; line-height:1.6;">
          Creo que te puede dar una idea bastante clara de cómo trabajamos y del tipo de soluciones que construimos.
        </p>

        <!-- CTA CALENDLY -->
        <div style="margin: 25px 0;">
          <a href="https://calendly.com/antonio-justicia-go-is/30min"
             style="display:inline-block; padding:14px 22px; background:#9bbe54; color:#fff; text-decoration:none; border-radius:8px; font-weight:600;">
             Agendar reunión
          </a>
        </div>

        <!-- FIRMA -->
        <p style="color:#444;">
          Un saludo,<br>
          <strong>Antonio Justicia</strong><br>
          Go-Is · Arquitectura Operativa
        </p>

        <!-- FOOTER -->
        <hr style="margin: 40px 0;">

        <div style="font-size:11px; color:#888; margin-top:30px;">
  
            <strong>Datos del lead</strong><br><br>

            Nombre: ${nombre || "-"}<br>
            Email: ${email}<br>

            Teléfono: 
            <a href="tel:${telefono}" style="color:#888;">
                ${telefono || "-"}
            </a>

        </div>

        <p style="font-size:12px; color:#999; text-align:center;">
          © ${anio} Go-Is · Todos los derechos reservados
        </p>

      </div>

    </body>
  </html>
  `;
}