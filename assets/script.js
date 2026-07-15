/* GestorIA — script principal
   i18n con contenido estático predefinido (solo textContent, sin innerHTML). */
(function () {
  "use strict";

  var I18N = {
    es: {
      "nav.what": "Qué hacemos",
      "nav.how": "Cómo funciona",
      "nav.benefits": "Beneficios",
      "header.cta": "Contactar",

      "hero.badge": "Automatizá lo repetitivo",
      "hero.title": "Automatizá la atención, el contenido y las campañas de tu empresa con IA.",
      "hero.subtitle": "GestorIA centraliza agentes de inteligencia artificial para responder mensajes, generar contenido y asistir campañas publicitarias sin que tu equipo tenga que lidiar con prompts, herramientas ni procesos técnicos.",
      "hero.ctaWa": "Hablar por WhatsApp",
      "hero.ctaEmail": "Enviar email",
      "hero.micro": "Para PyMEs y empresas que quieren ahorrar tiempo, ordenar procesos y responder mejor.",

      "dash.title": "GestorIA — Panel central",
      "dash.messages": "Mensajes respondidos",
      "dash.messagesHint": "WhatsApp · Instagram · Messenger",
      "dash.pending": "Consultas pendientes",
      "dash.pendingHint": "Priorizadas por contexto",
      "dash.approval": "Aprobación humana",
      "dash.contentHint": "12 ideas de contenido listas para revisar",
      "dash.campaigns": "Campañas activas",
      "dash.chatIn": "Hola, ¿tienen envíos al interior?",
      "dash.chatOut": "¡Hola! Sí, hacemos envíos a todo el país…",

      "what.eyebrow": "Qué hacemos",
      "what.title": "Tres módulos. Un solo sistema.",
      "what.lead": "GestorIA concentra en un mismo lugar la atención al cliente, el contenido y las campañas, para que tu empresa trabaje con menos improvisación.",
      "what.p1Title": "Mensajería con IA",
      "what.p1Text": "Agentes conversacionales para WhatsApp, Instagram y Messenger que responden según la personalidad de cada marca y mantienen el contexto de cada conversación.",
      "what.p2Text": "Generación de carruseles, copies e ideas de contenido para redes sociales, con identidad de marca y flujo de aprobación antes de publicar.",
      "what.p3Title": "Ads asistidos con IA",
      "what.p3Text": "Asistencia para crear, ordenar y optimizar campañas publicitarias, con foco en mensajes claros, audiencias y mejora continua.",

      "how.eyebrow": "Cómo funciona",
      "how.title": "Del caos operativo al flujo inteligente, en cuatro pasos.",
      "how.s1": "Conectamos los canales y configuramos la marca.",
      "how.s2": "Definimos cómo debe responder, crear contenido y asistir tus procesos.",
      "how.s3": "La IA trabaja con contexto, reglas y aprobación humana.",
      "how.s4": "Medimos, ajustamos y mejoramos el sistema con el tiempo.",

      "who.eyebrow": "Para quién es",
      "who.title": "Pensado para empresas que ya atienden por WhatsApp y redes.",
      "who.lead": "GestorIA es para empresas que ya reciben consultas por WhatsApp o redes sociales y necesitan responder mejor sin sumar más carga operativa.",
      "who.b1": "PyMEs que atienden clientes por WhatsApp, Instagram o Messenger.",
      "who.b2": "Equipos comerciales que quieren ordenar consultas y seguimiento.",
      "who.b3": "Empresas que necesitan generar contenido y campañas con más constancia.",

      "ben.eyebrow": "Beneficios",
      "ben.title": "Menos tareas manuales. Más tiempo para crecer.",
      "ben.b1": "Respuestas más rápidas.",
      "ben.b2": "Procesos más ordenados.",
      "ben.b3": "Contenido más constante.",
      "ben.b4": "Campañas mejor estructuradas.",
      "ben.b5": "IA centralizada por empresa.",
      "ben.b6": "Aprobación humana antes de publicar.",

      "day.eyebrow": "Un día con GestorIA",
      "day.title": "Mientras tu equipo avanza, GestorIA ordena lo repetitivo.",
      "day.text": "Las consultas se responden con contexto, el contenido se prepara con identidad de marca y las campañas se organizan con asistencia de IA. Todo desde un sistema pensado para reducir carga operativa.",
      "day.t1": "Nuevas consultas clasificadas.",
      "day.t2": "Ideas de contenido listas para revisar.",
      "day.t3": "Campaña asistida por IA en preparación.",
      "day.t4": "Reporte de actividad listo para analizar.",

      "contact.title": "¿Querés ver qué procesos de tu empresa podríamos automatizar primero?",
      "contact.text": "Escribinos y revisamos tu caso.",
      "contact.wa": "Hablar por WhatsApp",
      "contact.email": "Enviar email",

      "footer.privacy": "Política de Privacidad",
      "footer.terms": "Términos de Uso",
      "footer.rights": "Todos los derechos reservados."
    },
    en: {
      "nav.what": "What we do",
      "nav.how": "How it works",
      "nav.benefits": "Benefits",
      "header.cta": "Contact us",

      "hero.badge": "Automate the repetitive",
      "hero.title": "Automate customer messaging, content and campaigns with AI.",
      "hero.subtitle": "GestorIA centralizes AI agents to answer messages, generate content and assist advertising campaigns without your team having to deal with prompts, tools or technical processes.",
      "hero.ctaWa": "Message us on WhatsApp",
      "hero.ctaEmail": "Send email",
      "hero.micro": "For SMBs and growing companies that want to save time, organize processes and respond faster.",

      "dash.title": "GestorIA — Central panel",
      "dash.messages": "Messages answered",
      "dash.messagesHint": "WhatsApp · Instagram · Messenger",
      "dash.pending": "Pending inquiries",
      "dash.pendingHint": "Prioritized by context",
      "dash.approval": "Human approval",
      "dash.contentHint": "12 content ideas ready to review",
      "dash.campaigns": "Active campaigns",
      "dash.chatIn": "Hi, do you ship nationwide?",
      "dash.chatOut": "Hi! Yes, we ship across the country…",

      "what.eyebrow": "What we do",
      "what.title": "Three modules. One system.",
      "what.lead": "GestorIA brings customer support, content and campaigns into one place, so your company works with less improvisation.",
      "what.p1Title": "AI Messaging",
      "what.p1Text": "Conversational agents for WhatsApp, Instagram and Messenger that respond according to each brand's personality and keep conversation context.",
      "what.p2Text": "Generation of carousels, captions and content ideas for social media, aligned with the brand and reviewed before publishing.",
      "what.p3Title": "AI-assisted Ads",
      "what.p3Text": "Assistance to create, organize and optimize ad campaigns with a focus on clear messaging, audiences and continuous improvement.",

      "how.eyebrow": "How it works",
      "how.title": "From operational chaos to intelligent flow, in four steps.",
      "how.s1": "We connect your channels and configure your brand.",
      "how.s2": "We define how the system should respond, create content and assist your processes.",
      "how.s3": "AI works with context, rules and human approval.",
      "how.s4": "We measure, adjust and improve the system over time.",

      "who.eyebrow": "Who it's for",
      "who.title": "Built for companies already handling WhatsApp and social media.",
      "who.lead": "GestorIA is for companies that already receive inquiries through WhatsApp or social media and need to respond faster without adding more operational workload.",
      "who.b1": "SMBs handling customer inquiries through WhatsApp, Instagram or Messenger.",
      "who.b2": "Sales teams that need to organize conversations and follow-ups.",
      "who.b3": "Companies that need more consistent content and campaign workflows.",

      "ben.eyebrow": "Benefits",
      "ben.title": "Less manual work. More time to grow.",
      "ben.b1": "Faster responses.",
      "ben.b2": "More organized processes.",
      "ben.b3": "More consistent content.",
      "ben.b4": "Better structured campaigns.",
      "ben.b5": "Centralized AI per company.",
      "ben.b6": "Human approval before publishing.",

      "day.eyebrow": "A day with GestorIA",
      "day.title": "While your team moves forward, GestorIA organizes repetitive work.",
      "day.text": "Inquiries are answered with context, content is prepared with brand identity and campaigns are organized with AI assistance. Everything from a system designed to reduce operational workload.",
      "day.t1": "New inquiries classified.",
      "day.t2": "Content ideas ready to review.",
      "day.t3": "AI-assisted campaign in progress.",
      "day.t4": "Activity report ready to analyze.",

      "contact.title": "Want to see which processes your company could automate first?",
      "contact.text": "Contact us and we'll review your case.",
      "contact.wa": "Message us on WhatsApp",
      "contact.email": "Send email",

      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Use",
      "footer.rights": "All rights reserved."
    }
  };

  var STORAGE_KEY = "gestoria-lang";

  function applyLang(lang) {
    var dict = I18N[lang];
    if (!dict) return;

    document.documentElement.lang = lang;

    // Textos estáticos predefinidos (siempre textContent, nunca innerHTML)
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        nodes[i].textContent = dict[key];
      }
    }

    // Links legales según idioma
    var links = document.querySelectorAll("[data-href-" + lang + "]");
    for (var j = 0; j < links.length; j++) {
      links[j].setAttribute("href", links[j].getAttribute("data-href-" + lang));
    }

    // Estado visual del selector
    var buttons = document.querySelectorAll(".lang-btn");
    for (var k = 0; k < buttons.length; k++) {
      var active = buttons[k].getAttribute("data-lang") === lang;
      buttons[k].classList.toggle("is-active", active);
      buttons[k].setAttribute("aria-pressed", active ? "true" : "false");
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* almacenamiento no disponible */ }
  }

  function initLang() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) { /* almacenamiento no disponible */ }

    if (saved === "en" || saved === "es") {
      if (saved !== "es") applyLang(saved);
    }

    var buttons = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        applyLang(this.getAttribute("data-lang"));
      });
    }
  }

  function initYear() {
    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      for (var i = 0; i < items.length; i++) items[i].classList.add("is-visible");
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      for (var j = 0; j < entries.length; j++) {
        if (entries[j].isIntersecting) {
          entries[j].target.classList.add("is-visible");
          observer.unobserve(entries[j].target);
        }
      }
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    for (var k = 0; k < items.length; k++) observer.observe(items[k]);
  }

  function init() {
    initLang();
    initYear();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
