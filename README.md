# app_sprint_arquitectura

# SUBIR 
git branch # ver la rama en la que estoy
git add . # subir todos los cabmios
git commit -m "xxxxxxx" # crear el commit
git push origin main #subir a github

Entrar en vercel y confirmar que los cambios se han subido

Probar la aplicación:
https://diagnostico.go-is.es/
https://diagnostico.go-is.es/diagnostico.html


# 
# 🚀 Landing Diagnóstico Go-Is

## 🧩 Objetivo

Landing estática con formulario que:

* recoge datos del lead
* envía email automático al usuario
* envía copia interna al equipo

---

## 🌐 1. Deploy en Vercel

### Crear cuenta

* https://vercel.com
* Login con GitHub

---

### Crear proyecto

1. Importar repo de GitHub
2. Framework → **None (static)**
3. Deploy automático

---

### Estructura usada

```id="s0bb9v"
/ (root)
  ├── index.html
  ├── diagnostico.html
  ├── /api
  │     └── send-email.js
        └── send-utils_email.js
```

---

### Cómo funciona

* Vercel sirve HTML estático
* `/api/send-email` actúa como backend serverless
* El formulario hace `POST` a esa API

---

## 📩 2. Envío de Email con Resend

### Crear cuenta

* https://resend.com

---

### Configurar dominio

1. Añadir dominio:

```id="yqmkx3"
go-is.es
```

2. Configurar DNS en Hostinger:

* DKIM
* SPF

3. Esperar verificación

---

### API Key

1. Generar API Key en Resend
2. Añadir en Vercel:

```id="cs6w5t"
RESEND_API_KEY=xxxx
```

(Vercel → Settings → Environment Variables)

---

## ⚙️ 3. Backend (API Vercel)

Archivo:

```id="8zj3r0"
/api/send-email.js
```

---


## 🧾 4. Plantilla Email

Archivo:

```id="ajy8e3"
utils_email.js
```

---

### Incluye

* Logo
* CTA vídeo
* CTA PDF
* CTA Calendly
* Firma corporativa
* LinkedIn
* Footer limpio

---

## 🔁 5. Flujo completo

1. Usuario entra en landing
2. Rellena formulario
3. JS hace `POST` a `/api/send-email`
4. Vercel ejecuta función
5. Resend envía email:

   * al lead
   * copia interna (bcc)

---

## 🌍 6. Dominio

* Landing principal:

```id="5x9d0n"
https://diagnostico.go-is.es/
```

* Antigua landing:

```id="0z0bnn"
landing-leads.go-is.es → redirección
```

---

## ⚠️ Notas importantes

* Vercel = serverless (sin base de datos)
* No subir `.env` a GitHub
* Variables en Vercel
* Resend requiere dominio verificado
* Usar siempre emails del dominio (`@go-is.es`)

---

## ✅ Estado actual

✔ Landing desplegada
✔ Email funcionando
✔ Dominio conectado
✔ Redirecciones activas

---

