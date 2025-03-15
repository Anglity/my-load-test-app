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
```

📌 **Más información en [`docs/installation.md`](./docs/installation.md)**.

---

## 📌 **Contribución 🤝**
Si quieres contribuir, revisa [`CONTRIBUTING.md`](./CONTRIBUTING.md).

---

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
```

## 🔹 3. Construir la Imagen Docker
```bash
docker build -t your-docker-hub-username/my-load-test-app:latest .
docker push your-docker-hub-username/my-load-test-app:latest
```

## 🔹 4. Configurar Kubernetes en Digital Ocean
```bash
doctl auth init
doctl kubernetes cluster list
doctl kubernetes cluster kubeconfig save <nombre-del-cluster>
kubectl get nodes
```

---

# 🚀 Despliegue en Kubernetes (Digital Ocean)

## 📌 Aplicar los Archivos de Kubernetes
```bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
kubectl apply -f k8s/pdb.yaml
kubectl apply -f k8s/hpa.yaml
```

## 📌 Verificar el Despliegue
```bash
kubectl get pods -n my-load-test-app
kubectl get services -n my-load-test-app
kubectl get ingress -n my-load-test-app
kubectl get hpa -n my-load-test-app
```

---

# 📈 Escalabilidad y Autoescalado en Kubernetes

## ✅ Autoescalado con HPA
```bash
kubectl autoscale deployment my-load-test-app --cpu-percent=50 --min=2 --max=10 -n my-load-test-app
```

## ✅ Escalar Manualmente
```bash
kubectl scale deployment my-load-test-app --replicas=5 -n my-load-test-app
kubectl get pods -n my-load-test-app
```

---

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

---

# 🛠️ Solución de Problemas en Kubernetes

## ❌ Mi aplicación no responde (404 Not Found)
📌 **Solución:**  
1. Verifica que el servicio tiene una IP pública:
   ```bash
   kubectl get services -n my-load-test-app
   ```
2. Si `EXTERNAL-IP` aparece como `<pending>`, espera unos minutos.

## ❌ El tráfico no se distribuye correctamente
📌 **Solución:**  
1. Verifica los logs del servicio:
   ```bash
   kubectl logs -f deployment/my-load-test-app -n my-load-test-app
   ```
2. Si hay errores de timeout, prueba aumentar las réplicas:
   ```bash
   kubectl scale deployment my-load-test-app --replicas=5 -n my-load-test-app
   ```
