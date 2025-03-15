
📂 Estructura de la Documentación
Aquí tienes los archivos principales que debes incluir en tu repositorio para una documentación completa:

perl
Copiar
Editar
my-load-test-app/
│── 📁 docs/                # Documentación en archivos separados
│   │── installation.md      # Instalación y Configuración
│   │── deployment.md        # Despliegue en Kubernetes
│   │── scaling.md           # Escalabilidad y Autoescalado
│   │── load-testing.md      # Pruebas de Carga con JMeter
│   │── troubleshooting.md   # Solución de Problemas
│── README.md               # Resumen General
│── LICENSE                 # Licencia del Proyecto
│── CONTRIBUTING.md         # Guía de Contribución
│── CODE_OF_CONDUCT.md      # Código de Conducta
│── SECURITY.md             # Guía de Seguridad
│── CHANGELOG.md            # Historial de Cambios
📄 README.md (Resumen del Proyecto)
Este es el README principal que estará en el repositorio de GitHub.

📌 📁 Archivo: README.md
md
Copiar
Editar
# 🚀 My Load Test App - Kubernetes Deployment

![Kubernetes](https://img.shields.io/badge/Kubernetes-✔️-blue)
![Docker](https://img.shields.io/badge/Docker-✔️-blue)
![DigitalOcean](https://img.shields.io/badge/DigitalOcean-✔️-blue)
![JMeter](https://img.shields.io/badge/JMeter-✔️-orange)
![NestJS](https://img.shields.io/badge/NestJS-✔️-red)

Bienvenido a **My Load Test App** 🚀, una aplicación **NestJS** diseñada para pruebas de carga, desplegada en **Kubernetes en Digital Ocean (DOKS)**.

✅ **Dockerización** con `Dockerfile`  
✅ **Despliegue en Kubernetes** con `Deployment`, `Service`, `Ingress`  
✅ **Autoescalado (HPA)** basado en el uso de CPU  
✅ **Pruebas de carga** con **Apache JMeter**  
✅ **Balanceo de carga con NGINX Ingress Controller**  

📌 **Documentación Completa** en la carpeta [`docs/`](./docs/).

📌 **Guía rápida de instalación y despliegue:** [`docs/installation.md`](./docs/installation.md)

---

## 📌 **Instalación Rápida**
```bash
git clone https://github.com/tu-usuario/my-load-test-app.git
cd my-load-test-app
📌 Más información en docs/installation.md.

📌 Contribución 🤝
Si quieres contribuir, revisa CONTRIBUTING.md.

yaml
Copiar
Editar

---

## 📄 **Guía de Instalación y Configuración**
### 📌 **📁 Archivo: `docs/installation.md`**
```md
# 📦 Instalación y Configuración

## 🔹 1. Requisitos Previos
Antes de comenzar, asegúrate de tener instalado:

- Docker 🐳 → [Instalar](https://www.docker.com/get-started)
- Kubernetes (`kubectl`) ⛵ → [Instalar](https://kubernetes.io/docs/tasks/tools/)
- DigitalOcean CLI (`doctl`) 🌐 → [Instalar](https://docs.digitalocean.com/reference/doctl/how-to/install/)
- Apache JMeter 🏗️ → [Descargar](https://jmeter.apache.org/download_jmeter.cgi)

## 🔹 2. Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/my-load-test-app.git
cd my-load-test-app
🔹 3. Construir la Imagen Docker
bash
Copiar
Editar
docker build -t your-docker-hub-username/my-load-test-app:latest .
docker push your-docker-hub-username/my-load-test-app:latest
🔹 4. Configurar Kubernetes en Digital Ocean
bash
Copiar
Editar
doctl auth init
doctl kubernetes cluster list
doctl kubernetes cluster kubeconfig save <nombre-del-cluster>
kubectl get nodes
yaml
Copiar
Editar

---

## 📄 **Guía de Despliegue en Kubernetes**
### 📌 **📁 Archivo: `docs/deployment.md`**
```md
# 🚀 Despliegue en Kubernetes (Digital Ocean)

## 📌 Aplicar los Archivos de Kubernetes
```bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
kubectl apply -f k8s/pdb.yaml
kubectl apply -f k8s/hpa.yaml
📌 Verificar el Despliegue
bash
Copiar
Editar
kubectl get pods -n my-load-test-app
kubectl get services -n my-load-test-app
kubectl get ingress -n my-load-test-app
kubectl get hpa -n my-load-test-app
yaml
Copiar
Editar

---

## 📄 **Escalabilidad y Autoescalado**
### 📌 **📁 Archivo: `docs/scaling.md`**
```md
# 📈 Escalabilidad y Autoescalado en Kubernetes

## ✅ Autoescalado con HPA
```bash
kubectl autoscale deployment my-load-test-app --cpu-percent=50 --min=2 --max=10 -n my-load-test-app
✅ Escalar Manualmente
bash
Copiar
Editar
kubectl scale deployment my-load-test-app --replicas=5 -n my-load-test-app
kubectl get pods -n my-load-test-app
yaml
Copiar
Editar

---

## 📄 **Pruebas de Carga con JMeter**
### 📌 **📁 Archivo: `docs/load-testing.md`**
```md
# 🔥 Pruebas de Carga con JMeter

## ✅ Configuración en JMeter
1. Abrir **Apache JMeter**.
2. Crear un **Test Plan** con un **Thread Group** configurado así:
   - **Usuarios Concurrentes:** `100`
   - **Ramp-Up:** `10s`
   - **Loop Count:** `100` (Total 10,000 requests)
3. Agregar un **HTTP Request** con:
   - **URL:** `http://157.230.77.46/api/load-test`
   - **Método:** `GET`
4. Agregar **View Results Tree** y **Summary Report**.
5. Presionar **RUN (▶️)** y analizar los resultados.
📄 Solución de Problemas
📌 📁 Archivo: docs/troubleshooting.md
md
Copiar
Editar
# 🛠️ Solución de Problemas en Kubernetes

## ❌ Mi aplicación no responde (404 Not Found)
📌 **Solución:**  
1. Verifica que el servicio tiene una IP pública:
   ```bash
   kubectl get services -n my-load-test-app
Si EXTERNAL-IP aparece como <pending>, espera unos minutos.
❌ El tráfico no se distribuye correctamente
📌 Solución:

Verifica los logs del servicio:
bash
Copiar
Editar
kubectl logs -f deployment/my-load-test-app -n my-load-test-app
Si hay errores de timeout, prueba aumentar las réplicas:
bash
Copiar
Editar
kubectl scale deployment my-load-test-app --replicas=5 -n my-load-test-app
