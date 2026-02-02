const menu = document.getElementById("menu-list");
const content = document.getElementById("content");

const semanas = [
  {
    titulo: "Fundamentos de la Arquitectura de Software",
    texto: `
    La arquitectura de software constituye la base estructural de cualquier sistema.
    Define cómo se organizan los componentes, cómo interactúan entre sí y qué principios
    guían su evolución. En esta semana se analizan los conceptos fundamentales y su impacto
    en la eficiencia, calidad y sostenibilidad del software.
    `
  },
  {
    titulo: "Estándares Internacionales de Arquitectura",
    texto: `
    Los estándares internacionales permiten unificar criterios de diseño y documentación.
    Se estudian normas como ISO/IEC 42010 e IEEE, comprendiendo su aplicación en contextos
    reales y su importancia en proyectos de gran escala.
    `
  },
  {
    titulo: "Diseño de Propuestas Arquitectónicas",
    texto: `
    El diseño arquitectónico traduce los requerimientos en soluciones técnicas.
    Se aplican principios, patrones y buenas prácticas para construir arquitecturas
    robustas, flexibles y alineadas con los objetivos del negocio.
    `
  },
  {
    titulo: "Evaluación de Arquitectura de Software",
    texto: `
    Evaluar una arquitectura permite anticipar problemas futuros.
    Se utilizan criterios de escalabilidad, mantenibilidad y seguridad para
    medir la calidad de una solución arquitectónica.
    `
  },
  {
    titulo: "Principios de Programación Orientada a Objetos",
    texto: `
    La POO proporciona fundamentos sólidos para el diseño arquitectónico.
    Encapsulación, herencia, polimorfismo y abstracción son analizados como
    pilares de sistemas bien estructurados.
    `
  },
  {
    titulo: "Modelado de Arquitectura con UML",
    texto: `
    UML facilita la representación visual de la arquitectura.
    Se emplean diagramas para describir la estructura y el comportamiento
    del sistema, mejorando la comunicación entre los involucrados.
    `
  },
  {
    titulo: "Implementación de Componentes Arquitectónicos",
    texto: `
    La implementación convierte el diseño en código funcional.
    Se desarrollan componentes reutilizables usando POO y se valida
    su correcta integración en el sistema.
    `
  },
  {
    titulo: "Evaluación de la Arquitectura Implementada",
    texto: `
    La arquitectura implementada es evaluada considerando reutilización,
    mantenibilidad y escalabilidad, garantizando la calidad del sistema final.
    `
  }
];

semanas.forEach((semana, i) => {
  menu.innerHTML += `<li><a href="#week${i+1}">Semana ${i+1}</a></li>`;

  content.innerHTML += `
    <section class="week" id="week${i+1}">
      <div class="week-images">
        <img src="https://source.unsplash.com/800x600/?software,code&sig=${i}1">
        <img src="https://source.unsplash.com/800x600/?technology,architecture&sig=${i}2">
        <img src="https://source.unsplash.com/800x600/?programming,developer&sig=${i}3">
      </div>
      <div class="week-content">
        <h2>Semana ${i+1}: ${semana.titulo}</h2>
        <p>${semana.texto}</p>
        <a href="https://www.ibm.com/topics/software-architecture" target="_blank">
          Recurso académico
        </a>
      </div>
    </section>
  `;
});
