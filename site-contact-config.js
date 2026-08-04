// Single local fallback for portal contact data. Firestore settings/contact overrides it.
window.MHR_SITE_CONTACT = Object.freeze({
  email: "HR@masataljud.com",
  phone: "+9647888110808"
});

window.MHR_APPLY_SITE_CONTACT = function applySiteContact(contact) {
  const source = contact && typeof contact === "object" ? contact : {};
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(source.email || "") ? source.email : window.MHR_SITE_CONTACT.email;
  const phone = /^\+[0-9]{8,20}$/.test(source.phone || "") ? source.phone : window.MHR_SITE_CONTACT.phone;
  document.querySelectorAll('[data-site-contact="email"]').forEach(node => { node.textContent = email; node.href = "mailto:" + email; node.dir = "ltr"; });
  document.querySelectorAll('[data-site-contact="phone"]').forEach(node => { node.textContent = phone; node.href = "tel:" + phone; node.dir = "ltr"; });
};

document.addEventListener("DOMContentLoaded", () => window.MHR_APPLY_SITE_CONTACT());
