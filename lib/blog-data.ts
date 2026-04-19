export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "como-traer-importacion-usa-argentina",
    title: "Cómo traer una importación de USA a Argentina en 2024",
    excerpt:
      "Guía completa para PYMES que quieren importar productos desde Estados Unidos. Proceso, documentación y consejos prácticos.",
    date: "2024-11-15",
    readTime: "8 min",
    category: "Guías",
    featured: true,
    content: `
## Importar desde USA a Argentina: lo que necesitás saber

Importar mercadería desde Estados Unidos hacia Argentina puede parecer complejo, pero con la orientación correcta es un proceso manejable. En esta guía te explicamos paso a paso cómo funciona.

### 1. Definí qué vas a importar

El primer paso es tener claro el tipo de mercadería, su valor comercial, peso y dimensiones. Esto determina el tratamiento aduanero y los costos del envío.

### 2. Elegí la modalidad de importación

Existen distintas vías para traer mercadería a Argentina:
- **Courier internacional**: ideal para envíos medianos, con proceso simplificado.
- **Importación formal (DGA)**: para volúmenes mayores o mercadería con regulaciones específicas.
- **Courier puerta a puerta**: conveniente para muestras o pedidos iniciales.

### 3. Documentación básica

Para la mayoría de los envíos vas a necesitar:
- Factura comercial del proveedor
- Packing list (lista de empaque)
- Datos del importador
- Descripción precisa de la mercadería

### 4. Costos a considerar

Al calcular el costo total de importar desde USA, tené en cuenta:
- Precio del producto en origen
- Flete internacional
- Seguro
- Derechos de importación (aranceles)
- Tasas de estadística
- IVA de importación
- Honorarios del despachante o courier

### 5. Tiempos estimados

Los tiempos varían según la modalidad y el destino final, pero en general podés esperar entre 7 y 21 días hábiles desde el punto de origen hasta destino en Argentina.

---

En Cargo Net te acompañamos en todo el proceso. Contactanos para una consulta sin cargo.
    `,
  },
  {
    slug: "que-tener-en-cuenta-importar-pyme",
    title: "Qué tener en cuenta para importar como PyME",
    excerpt:
      "Las PYMES argentinas tienen ventajas y desafíos únicos al importar. Te contamos qué factores considerar antes de dar el primer paso.",
    date: "2024-10-28",
    readTime: "6 min",
    category: "Para PyMEs",
    featured: true,
    content: `
## Importar como PyME: claves para no perderse en el proceso

Muchas pequeñas y medianas empresas argentinas importan productos del exterior para abastecer su operación, sin necesidad de ser grandes corporaciones. Acá te contamos qué tener en cuenta.

### Ventajas de importar como empresa

- Podés acceder a precios más competitivos que en el mercado local.
- Ampliás tu oferta de productos.
- Diferenciás tu propuesta de valor.
- En algunos casos, podés acceder a productos que no están disponibles en Argentina.

### Cosas clave a considerar

**1. Habilitación y CUIT**
Tu empresa necesita estar habilitada para operar con el comercio exterior. Consultar con un despachante o con nosotros es el primer paso.

**2. Restricciones de productos**
No todos los productos pueden importarse libremente. Algunos requieren licencias previas o tienen cupos. Es importante verificar antes de comprar.

**3. Planificación financiera**
Los costos de importación incluyen el flete, los aranceles y otros cargos. Calculá el costo total antes de tomar la decisión.

**4. Plazos**
Los tiempos de importación son variables. Planificá con anticipación para no quedarte sin stock.

**5. Soporte profesional**
Contar con un courier especializado como Cargo Net te simplifica enormemente el proceso.

---

¿Querés saber si podemos ayudarte? Escribinos por WhatsApp o completá nuestro formulario de cotización.
    `,
  },
  {
    slug: "courier-vs-importacion-formal-diferencias",
    title: "Courier internacional vs. importación formal: ¿cuál conviene?",
    excerpt:
      "Comparamos las dos principales formas de traer mercadería del exterior para que elijas la que mejor se adapta a tu negocio.",
    date: "2024-10-10",
    readTime: "5 min",
    category: "Guías",
    featured: false,
    content: `
## Courier vs. importación formal: ¿qué es mejor para tu negocio?

Cuando querés traer mercadería del exterior, básicamente tenés dos grandes caminos: usar un courier internacional o hacer una importación formal. Cada uno tiene ventajas y limitaciones.

### Courier internacional

**Ventajas:**
- Proceso más ágil y simple.
- Menor documentación requerida.
- Ideal para envíos medianos y frecuentes.
- El courier gestiona gran parte de los trámites.
- Costos más predecibles.

**Limitaciones:**
- Existen límites de peso y valor en algunos casos.
- Puede ser más caro por unidad en grandes volúmenes.

### Importación formal (DGA)

**Ventajas:**
- Sin límites de volumen.
- Puede ser más conveniente para grandes cantidades.
- Acceso a regímenes especiales de importación.

**Limitaciones:**
- Proceso más complejo y largo.
- Requiere despachante de aduana habilitado.
- Mayor cantidad de documentación.
- Tiempos más extendidos.

### ¿Cuál te conviene?

Para la mayoría de las PYMES que están empezando a importar o que hacen envíos medianos y frecuentes, el courier internacional es la opción más práctica.

Si tu operación crece y los volúmenes son importantes, puede tener sentido explorar la importación formal.

En Cargo Net podemos ayudarte a evaluar cuál es la mejor opción para tu caso específico.
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.featured);
}
