import { TeaAssessmentExperience } from "@/components/TeaAssessmentExperience";

export const metadata = {
  title: "Tea Assessment"
};

export default function TeaAssessmentPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return <TeaAssessmentExperience basePath={basePath} />;
}
