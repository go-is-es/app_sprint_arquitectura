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

        <!-- BLOQUE PDF -->
        <div style="margin: 20px 0; padding:18px; border:1px solid #eee; border-radius:10px; background:#fafafa;">
        
        <p style="color:#444; line-height:1.6; margin-bottom:10px;">
            Además, puedes ver aquí algunos ejemplos reales de proyectos que hemos desarrollado:
        </p>

        <!-- CTA PDF -->
        <a href="https://gois-files.s3.eu-central-003.backblazeb2.com/media/proyectos_GoIs.pdf"
            style="display:inline-flex; align-items:center; gap:8px; padding:10px 16px; background:#3d8ccc; color:#fff; border-radius:6px; text-decoration:none; font-weight:600;">
           
            <span>📄</span>
            Ver ejemplos reales
        </a>
        <!-- CONTEXTO -->
        <p style="color:#444; line-height:1.6; margin-top:15px;">
            No son casos teóricos, sino situaciones muy similares a lo que vemos en muchas empresas:
            procesos manuales, sistemas poco conectados y oportunidades claras de mejora cuando se estructura bien.
        </p>
        <p style="color:#444; line-height:1.6;">
            Creo que te puede dar una idea bastante clara de cómo trabajamos y del tipo de soluciones que construimos.
        </p>
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
        <div style="margin: 35px 0; text-align:center;">       
        <p style="color:#444; margin-bottom:12px;">
            Si quieres ver cómo aplicar esto en tu caso:
        </p>
        <a href="https://calendly.com/antonio-justicia-go-is/30min"
            style="
            display:inline-block;
            padding:16px 26px;
            background:linear-gradient(135deg, #9bbe54, #7fa63f);
            color:#fff;
            text-decoration:none;
            border-radius:10px;
            font-weight:600;
            font-size:15px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
            ">            
            👉 Agendar reunión de 30 min
        </a>
        <p style="font-size:12px; color:#888; margin-top:10px;">
            Sin compromiso · Sin venta agresiva
        </p>
        </div>

        <!-- FIRMA -->
        <div style="margin-top:20px;">        
            <p style="color:#444; margin-bottom:5px;">
                Un saludo,
            </p>
            <p style="color:#444; margin:0;">
                <strong>Equipo Go-Is</strong><br>
                Arquitectura Operativa
            </p>
            <!-- LINKEDIN -->
            <div style="margin-top:12px;">
                <a href="https://www.linkedin.com/in/antonio-justicia-bigdata-datascience/"
                style="text-decoration:none; color:#0a66c2; font-size:13px;">            
                Ver perfil en LinkedIn →
                </a>
            </div>
            <p style="font-size:12px; color:#888; margin-top:6px;">
                Publicamos contenido sobre automatización y optimización operativa
            </p>
        </div>

        <!-- FOOTER -->
        <hr style="margin: 40px 0;">

        <p style="font-size:11px; color:#999; text-align:center; line-height:1.5;">
        Solicitud enviada por ${nombre || "-"} · ${email}
        ${telefono ? `· <a href="tel:${telefono}" style="color:#999;">${telefono}</a>` : ""}
        </p>

        <p style="font-size:12px; color:#999; text-align:center;">
          © ${anio} Go-Is · Todos los derechos reservados
        </p>

      </div>

    </body>
  </html>
  `;
}