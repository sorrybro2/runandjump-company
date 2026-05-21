import { COMPANY } from "@/lib/data";

export function CTASection() {
  return (
    <section className="py-24 bg-cream-deep">
      <div className="container-rj">
        <div className="max-w-4xl mx-auto text-center">
          <div className="eyebrow mb-6">— Get In Touch</div>
          <h2 className="section-title mb-8">
            첫 걸음은
            <br />
            <span className="italic text-accent-red">한 통의 전화</span>로
          </h2>
          <p className="body-text text-lg mb-10 max-w-2xl mx-auto">
            어떤 사업이든 부담 없이 문의주세요.
            <br />
            노력맨이 직접 답변드립니다.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">
              📞 {COMPANY.phone}
            </a>
            <a href={`sms:${COMPANY.phone}`} className="btn-secondary">
              💬 문자 보내기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
