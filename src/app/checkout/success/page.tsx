import Link from "next/link";
import {
  ChazenContentSection,
  ChazenSubpageHero
} from "@/components/ChazenSubpage";

export const metadata = {
  title: "Order Received | Chazen"
};

export default function CheckoutSuccessPage() {
  return (
    <main className="chazen-subpage">
      <ChazenSubpageHero
        eyebrow="Checkout complete"
        eyebrowZh="結帳完成"
        title="謝謝你讓茶走進日常"
        english="Thank You for Your Order"
        copy="你的安全結帳已完成。Stripe 將把付款收據發送到你在結帳時提供的電郵地址。"
        copyEn="Your secure checkout is complete. Stripe will send the payment receipt to the email address supplied at checkout."
        media={{
          asset: "chazen-gift-box-v1.jpg",
          alt: "A Chazen cultural tea gift box arranged with tea ware and story cards.",
          type: "image"
        }}
      />

      <ChazenContentSection
        eyebrow="What happens next"
        eyebrowZh="下一步"
        title="我們會準備你的茶盒"
        english="We’ll Prepare Your Tea Box"
        copy="如需更改配送資料，請儘快與 Chazen 聯絡。"
        copyEn="If you need to change your delivery details, please contact Chazen as soon as possible."
        tone="paper"
      >
        <div className="chazen-subpage-actions">
          <Link href="/tea-boxes" className="chazen-subpage-button chazen-subpage-button-primary">
            Return to Tea Boxes
          </Link>
          <Link href="/contact" className="chazen-subpage-button">
            Contact Chazen
          </Link>
        </div>
      </ChazenContentSection>
    </main>
  );
}
