# 🎮 FusionPlus

FusionPlus es un juego de fusión de elementos inspirado en juegos populares como Little Alchemy. Combina elementos básicos para descubrir nuevas combinaciones y desbloquear elementos más complejos. ¡Experimenta con diferentes combinaciones y descubre todos los elementos posibles!

## ✨ Demostración

[Aquí puedes agregar un GIF o imagen del juego en acción]

## 🚀 Características

- **Sistema Drag & Drop**: Interfaz intuitiva de arrastrar y soltar elementos
- **Animaciones Fluidas**: Efectos visuales atractivos durante las fusiones
- **Efectos de Sonido**: Retroalimentación auditiva para cada acción
- **Diseño Responsivo**: Jugable en dispositivos móviles y escritorio
- **Estilo Retro**: Interfaz con fuente "Press Start 2P" para una experiencia nostálgica
- **Sistema de Fusión**: API inteligente para gestionar combinaciones

## 🛠️ Stack Tecnológico

### Frontend
- React 19.0.0
- TypeScript 4.9.5
- React DnD (Sistema de Drag & Drop)
- CSS Modular
- Gestión de Estados Reactiva

### Backend
- API REST para combinaciones de elementos
- Sistema de persistencia de datos
- Lógica de fusión inteligente

## 📋 Prerrequisitos

```bash
node >= 16.x
npm >= 8.x
```

## 🔧 Instalación y Uso

1. **Clona el repositorio**
```bash
git clone https://github.com/Rediaj04/2daw-m06-projects.git
```

2. **Configura el Frontend**
```bash
cd cd Proyectos/FusionAPI/Frontend
npm install
```

3. **Inicia el desarrollo**
```bash
npm start
```

4. **Accede a la aplicación** 
```bash
Abre http://localhost:3000 en tu navegador 
```


5. **Ejecuta el servidor**
```bash
cd Proyectos/FusionAPI/M06-UF4-ConsultaApi-develop/  
```

6. **Inicia el desarrollo**
```bash
mvn spring-boot:run
```  

## 🎮 Guía de Juego

### Elementos Básicos
- 🔥 **Fuego**: Elemento básico inicial
- 💧 **Agua**: Elemento básico inicial
- Y más por descubrir...

### Cómo Jugar
1. Comienza con los elementos básicos de los generadores
2. Arrastra un elemento sobre otro para intentar una fusión
3. Si la combinación es válida, ¡descubrirás un nuevo elemento!
4. Experimenta con diferentes combinaciones
5. Desbloquea elementos más complejos

## 🔌 Sistema de Fusión

El juego utiliza una API REST para gestionar las fusiones:

### Proceso de Fusión
1. Selecciona dos elementos para combinar
2. La API procesa la combinación
3. Recibe el resultado de la fusión
4. Visualiza el nuevo elemento o mensaje de error

### Ejemplo de Interacción
```http
POST /api/fusion
{
    "elemento1": "🔥",
    "elemento2": "💧"
}
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Sigue estos pasos:

1. Fork del proyecto
2. Crea tu rama (`git checkout -b feature/NuevaCaracteristica`)
3. Commit (`git commit -m 'Añade nueva característica'`)
4. Push (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

### Guía de Contribución
- Mantén el código limpio y comentado
- Sigue las convenciones de estilo existentes
- Añade tests para nuevas características
- Actualiza la documentación según sea necesario

## 👥 Equipo

* **Rediaj04** - *Desarrollador Principal* - [Rediaj04](https://github.com/Rediaj04)
* **Law44** - *Creador de la API* - [Law44](https://github.com/Law44)
* **cerkine** - *Creador de la API* - [cerkine](https://github.com/cerkine)

---
<div align="center">
  <a href="https://github.com/Rediaj04">
    <img src="https://github.com/Rediaj04.png" width="100" height="100" style="border-radius: 50%;">
    <br>
    <sub>@Rediaj04</sub>
  </a>
  <br>
  Desarrollado con ❤️
</div>
