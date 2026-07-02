import { site } from "@/lib/site";

export const inquiryTypes = [
  "Personal gift",
  "Real estate settlement",
  "Corporate gifting",
  "Partnership conversation",
  "Tea recommendation",
  "Other"
] as const;

export type InquiryType = (typeof inquiryTypes)[number];

export type InquiryPayload = {
  name: string;
  email: string;
  company: string;
  type: InquiryType;
  quantity: string;
  timing: string;
  message: string;
  source?: string;
};

type InquiryPathOptions = {
  basePath?: string;
  type?: InquiryType;
  message?: string;
  source?: string;
};

export function buildInquiryPath({ basePath = "", type, message, source }: InquiryPathOptions = {}) {
  const params = new URLSearchParams();

  if (type) params.set("type", type);
  if (message) params.set("message", message);
  if (source) params.set("source", source);

  const query = params.toString();

  return `${basePath}/contact/${query ? `?${query}` : ""}#inquiry-form`;
}

export function buildInquiryEmailBody(payload: InquiryPayload) {
  return [
    "New Chazen inquiry",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || "Not provided"}`,
    `Inquiry type: ${payload.type}`,
    `Approximate quantity: ${payload.quantity || "Not provided"}`,
    `Preferred timing: ${payload.timing || "Not provided"}`,
    payload.source ? `Source: ${payload.source}` : null,
    "",
    "Message:",
    payload.message
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildInquiryMailto(payload: InquiryPayload) {
  const subject = `Chazen inquiry: ${payload.type}`;
  const body = buildInquiryEmailBody(payload);

  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
