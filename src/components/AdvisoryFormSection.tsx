"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  Clock,
  MessageCircle,
  Send,
  AlertCircle,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { buildMailtoUrl, buildWhatsAppUrl, siteConfig } from "@/config/site";
import { SERVICE_FORM_OPTIONS } from "@/data/content";
import { RevealOnScroll } from "./RevealOnScroll";

export interface AdvisoryFormState {
  fullName: string;
  email: string;
  whatsapp: string;
  country: string;
  service: string;
  destination: string;
  description: string;
  acceptPrivacy: boolean;
}

interface AdvisoryFormSectionProps {
  form: AdvisoryFormState;
  onChangeForm: <K extends keyof AdvisoryFormState>(
    field: K,
    value: AdvisoryFormState[K]
  ) => void;
}

type FormErrors = Partial<Record<keyof AdvisoryFormState, string>>;

export function AdvisoryFormSection({
  form,
  onChangeForm,
}: AdvisoryFormSectionProps) {
  const [errors, setErrors] = useState<FormErrors>({});
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (form.fullName.trim().length < 3) {
      nextErrors.fullName = "Ingresa tu nombre completo (mínimo 3 caracteres).";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = "Ingresa un correo electrónico válido.";
    }

    const digits = form.whatsapp.replace(/\D/g, "");
    if (digits.length < 8 || digits.length > 15) {
      nextErrors.whatsapp =
        "Ingresa un número de WhatsApp válido con código de área o país (8 a 15 dígitos).";
    }

    if (form.country.trim().length < 2) {
      nextErrors.country = "Indica tu país de residencia actual.";
    }

    if (!form.service.trim()) {
      nextErrors.service = "Selecciona el servicio de tu interés.";
    }

    if (form.destination.trim().length < 2) {
      nextErrors.destination = "Indica el destino de tu viaje o trámite.";
    }

    if (form.description.trim().length < 15) {
      nextErrors.description =
        "Describe brevemente tu solicitud (mínimo 15 caracteres).";
    }

    if (!form.acceptPrivacy) {
      nextErrors.acceptPrivacy =
        "Debes aceptar el tratamiento de datos y la política de privacidad para continuar.";
    }

    return nextErrors;
  };

  const buildStructuredMessage = (): string => {
    return [
      "Hola, equipo de Traveldom Soluciones. Solicito asesoría con los siguientes datos:",
      "",
      `• Nombre completo: ${form.fullName.trim()}`,
      `• Correo electrónico: ${form.email.trim()}`,
      `• WhatsApp de contacto: ${form.whatsapp.trim()}`,
      `• País de residencia: ${form.country.trim()}`,
      `• Servicio de interés: ${form.service}`,
      `• Destino: ${form.destination.trim()}`,
      `• Descripción de la solicitud: ${form.description.trim()}`,
    ].join("\n");
  };

  const handleFieldChange = <K extends keyof AdvisoryFormState>(
    field: K,
    value: AdvisoryFormState[K]
  ) => {
    onChangeForm(field, value);
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
    if (statusMessage) {
      setStatusMessage(null);
    }
  };

  const handleDispatch = (channel: "whatsapp" | "email") => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatusMessage(
        "Por favor corrige los campos señalados antes de abrir el canal de envío."
      );
      return;
    }

    setErrors({});
    const message = buildStructuredMessage();

    if (channel === "whatsapp") {
      const whatsappUrl = buildWhatsAppUrl(message);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setStatusMessage(
        "Se ha abierto WhatsApp con tu solicitud prellenada. Confirma el envío directamente en el chat para que un asesor te atienda."
      );
      return;
    }

    const mailtoUrl = buildMailtoUrl(
      `Solicitud de asesoría: ${form.service} — ${form.fullName.trim()}`,
      message
    );
    window.location.href = mailtoUrl;
    setStatusMessage(
      "Se ha preparado el borrador en tu cliente de correo electrónico. Envía el mensaje para completar tu solicitud."
    );
  };

  return (
    <section id="contacto" className="bg-white py-20 lg:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1D5B91]">
            Atención personalizada
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-poppins)] text-3xl font-bold tracking-tight text-[#102D52] sm:text-4xl">
            Solicita asesoría o cotiza tu viaje
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-[#C9A66B]" />
          <p className="mt-4 text-base text-slate-600">
            Completa tus datos para enviar tu consulta directamente por WhatsApp o
            correo electrónico a nuestros asesores.
          </p>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Columna de información directa */}
          <RevealOnScroll className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200/80 bg-[#F4F6F8] p-6 sm:p-8">
              <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-[#102D52]">
                Canales de contacto
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Estamos disponibles para orientarte sobre visas de turista,
                trámites consulares, traducción de documentos, seguros y
                planificación de viajes.
              </p>

              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#1D5B91] shadow-xs">
                    <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Correo electrónico
                    </dt>
                    <dd className="mt-0.5 font-medium text-[#102D52]">
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="hover:text-[#1D5B91] underline-offset-4 hover:underline"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#1D5B91] shadow-xs">
                    <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Teléfono / WhatsApp
                    </dt>
                    <dd className="mt-0.5 font-medium text-[#102D52]">
                      <a
                        href={buildWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#1D5B91] underline-offset-4 hover:underline"
                      >
                        {siteConfig.contact.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#1D5B91] shadow-xs">
                    <Clock className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Horario de atención
                    </dt>
                    <dd className="mt-0.5 text-slate-700">
                      {siteConfig.contact.hours}
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-7 border-t border-slate-200 pt-6">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#1D5B91] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#102D52]"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  <span>Conversar por WhatsApp ahora</span>
                  <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-[#C9A66B]/40 bg-[#EAF4FC]/60 p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#102D52]"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <div className="text-xs leading-relaxed text-[#102D52]">
                  <p className="font-semibold">Compromiso de transparencia</p>
                  <p className="mt-1 text-slate-700">{siteConfig.legalDisclaimer}</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Formulario de solicitud de asesoría */}
          <RevealOnScroll className="lg:col-span-7" delayMs={80}>
            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                handleDispatch("whatsapp");
              }}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_10px_35px_rgba(16,45,82,0.06)] sm:p-8"
            >
              <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-[#102D52]">
                Formulario de solicitud de asesoría
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Todos los campos marcados con <span className="text-red-600">*</span>{" "}
                son obligatorios. Al enviar se abrirá WhatsApp o tu correo con la
                información lista para remitir.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Nombre completo */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-[#102D52]"
                  >
                    Nombre completo <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={form.fullName}
                    onChange={(e) => handleFieldChange("fullName", e.target.value)}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? "error-fullName" : undefined}
                    placeholder="Ej. María Pérez"
                    className={`mt-1.5 block w-full rounded-md border px-3.5 py-2.5 text-sm text-[#1a2433] shadow-2xs transition-colors ${
                      errors.fullName
                        ? "border-red-500 bg-red-50/40"
                        : "border-slate-300 bg-white focus:border-[#1D5B91]"
                    }`}
                  />
                  {errors.fullName && (
                    <p
                      id="error-fullName"
                      className="mt-1.5 flex items-center gap-1 text-xs text-red-600"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Correo electrónico */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#102D52]"
                  >
                    Correo electrónico <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => handleFieldChange("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "error-email" : undefined}
                    placeholder="correo@ejemplo.com"
                    className={`mt-1.5 block w-full rounded-md border px-3.5 py-2.5 text-sm text-[#1a2433] shadow-2xs transition-colors ${
                      errors.email
                        ? "border-red-500 bg-red-50/40"
                        : "border-slate-300 bg-white focus:border-[#1D5B91]"
                    }`}
                  />
                  {errors.email && (
                    <p
                      id="error-email"
                      className="mt-1.5 flex items-center gap-1 text-xs text-red-600"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Número de WhatsApp */}
                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-sm font-medium text-[#102D52]"
                  >
                    Número de WhatsApp <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    autoComplete="tel"
                    value={form.whatsapp}
                    onChange={(e) => handleFieldChange("whatsapp", e.target.value)}
                    aria-invalid={Boolean(errors.whatsapp)}
                    aria-describedby={errors.whatsapp ? "error-whatsapp" : undefined}
                    placeholder="Ej. +1 809 555 0100"
                    className={`mt-1.5 block w-full rounded-md border px-3.5 py-2.5 text-sm text-[#1a2433] shadow-2xs transition-colors ${
                      errors.whatsapp
                        ? "border-red-500 bg-red-50/40"
                        : "border-slate-300 bg-white focus:border-[#1D5B91]"
                    }`}
                  />
                  {errors.whatsapp && (
                    <p
                      id="error-whatsapp"
                      className="mt-1.5 flex items-center gap-1 text-xs text-red-600"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.whatsapp}</span>
                    </p>
                  )}
                </div>

                {/* País de residencia */}
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-[#102D52]"
                  >
                    País de residencia <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    autoComplete="country-name"
                    value={form.country}
                    onChange={(e) => handleFieldChange("country", e.target.value)}
                    aria-invalid={Boolean(errors.country)}
                    aria-describedby={errors.country ? "error-country" : undefined}
                    placeholder="Ej. República Dominicana"
                    className={`mt-1.5 block w-full rounded-md border px-3.5 py-2.5 text-sm text-[#1a2433] shadow-2xs transition-colors ${
                      errors.country
                        ? "border-red-500 bg-red-50/40"
                        : "border-slate-300 bg-white focus:border-[#1D5B91]"
                    }`}
                  />
                  {errors.country && (
                    <p
                      id="error-country"
                      className="mt-1.5 flex items-center gap-1 text-xs text-red-600"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.country}</span>
                    </p>
                  )}
                </div>

                {/* Servicio de interés */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-[#102D52]"
                  >
                    Servicio de interés <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={(e) => handleFieldChange("service", e.target.value)}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={errors.service ? "error-service" : undefined}
                    className={`mt-1.5 block w-full rounded-md border px-3.5 py-2.5 text-sm text-[#1a2433] shadow-2xs transition-colors ${
                      errors.service
                        ? "border-red-500 bg-red-50/40"
                        : "border-slate-300 bg-white focus:border-[#1D5B91]"
                    }`}
                  >
                    {SERVICE_FORM_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p
                      id="error-service"
                      className="mt-1.5 flex items-center gap-1 text-xs text-red-600"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.service}</span>
                    </p>
                  )}
                </div>

                {/* Destino */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="destination"
                    className="block text-sm font-medium text-[#102D52]"
                  >
                    Destino <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="destination"
                    name="destination"
                    type="text"
                    value={form.destination}
                    onChange={(e) => handleFieldChange("destination", e.target.value)}
                    aria-invalid={Boolean(errors.destination)}
                    aria-describedby={errors.destination ? "error-destination" : undefined}
                    placeholder="Ej. Punta Cana, Estados Unidos, España"
                    className={`mt-1.5 block w-full rounded-md border px-3.5 py-2.5 text-sm text-[#1a2433] shadow-2xs transition-colors ${
                      errors.destination
                        ? "border-red-500 bg-red-50/40"
                        : "border-slate-300 bg-white focus:border-[#1D5B91]"
                    }`}
                  />
                  {errors.destination && (
                    <p
                      id="error-destination"
                      className="mt-1.5 flex items-center gap-1 text-xs text-red-600"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.destination}</span>
                    </p>
                  )}
                </div>

                {/* Descripción de la solicitud */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-[#102D52]"
                  >
                    Descripción de la solicitud <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={form.description}
                    onChange={(e) => handleFieldChange("description", e.target.value)}
                    aria-invalid={Boolean(errors.description)}
                    aria-describedby={errors.description ? "error-description" : undefined}
                    placeholder="Cuéntanos fechas estimadas, cantidad de personas o el tipo de orientación que necesitas..."
                    className={`mt-1.5 block w-full rounded-md border px-3.5 py-2.5 text-sm text-[#1a2433] shadow-2xs transition-colors ${
                      errors.description
                        ? "border-red-500 bg-red-50/40"
                        : "border-slate-300 bg-white focus:border-[#1D5B91]"
                    }`}
                  />
                  {errors.description && (
                    <p
                      id="error-description"
                      className="mt-1.5 flex items-center gap-1 text-xs text-red-600"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.description}</span>
                    </p>
                  )}
                </div>

                {/* Aceptación de tratamiento de datos */}
                <div className="sm:col-span-2">
                  <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                    <input
                      id="acceptPrivacy"
                      type="checkbox"
                      checked={form.acceptPrivacy}
                      onChange={(e) =>
                        handleFieldChange("acceptPrivacy", e.target.checked)
                      }
                      aria-invalid={Boolean(errors.acceptPrivacy)}
                      aria-describedby={
                        errors.acceptPrivacy ? "error-acceptPrivacy" : undefined
                      }
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#102D52]"
                    />
                    <span>
                      He leído y acepto la{" "}
                      <Link
                        href="/politica-privacidad"
                        className="font-semibold text-[#1D5B91] underline underline-offset-2 hover:text-[#102D52]"
                      >
                        Política de privacidad
                      </Link>{" "}
                      y la política de{" "}
                      <Link
                        href="/tratamiento-datos"
                        className="font-semibold text-[#1D5B91] underline underline-offset-2 hover:text-[#102D52]"
                      >
                        Tratamiento de datos
                      </Link>
                      . <span className="text-red-600">*</span>
                    </span>
                  </label>
                  {errors.acceptPrivacy && (
                    <p
                      id="error-acceptPrivacy"
                      className="mt-1.5 flex items-center gap-1 text-xs text-red-600"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.acceptPrivacy}</span>
                    </p>
                  )}
                </div>
              </div>

              {statusMessage && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`mt-5 rounded-lg border px-4 py-3 text-xs leading-relaxed ${
                    Object.keys(errors).length > 0
                      ? "border-red-200 bg-red-50 text-red-800"
                      : "border-[#1D5B91]/30 bg-[#EAF4FC] text-[#102D52]"
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-[#102D52] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1D5B91]"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  <span>Enviar por WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleDispatch("email")}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[#1D5B91] bg-white px-5 py-3.5 text-sm font-semibold text-[#102D52] transition-colors hover:bg-[#EAF4FC]"
                >
                  <Send className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  <span>Enviar por correo</span>
                </button>
              </div>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
