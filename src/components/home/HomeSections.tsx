import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IndustryChart } from "@/components/home/IndustryChart";
import { Reveal } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { OrganicDecor } from "@/components/ui/OrganicDecor";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { irHub } from "@/content/about";
import { newsItems, videoItems } from "@/content/media";
import { financeStats, site } from "@/content/site";

const sustainCards = [
  "Giảm sử dụng năng lượng và phát thải khí nhà kính",
  "Quản lý nguồn nước, Bảo tồn tài nguyên và Giảm thiểu rác thải",
  "Quan tâm đến cộng đồng dân cư xung quanh",
  "Kiểm soát các hóa chất",
  "Phát triển đa dạng sinh học",
  "Không phá rừng",
];

const orientations = [
  "Phát triển bền vững",
  "Hợp tác",
  "Minh bạch",
  "Đầu tư an sinh xã hội",
  "Hoạt động có trách nhiệm",
];

export function HomeSections() {
  return (
    <>
      <section className="section-shell py-16 md:py-20">
        <OrganicDecor />
        <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <p className="eyebrow">Lĩnh vực hoạt động</p>
            <SplitHeading className="mt-2 text-3xl text-[var(--green-deep)] md:text-4xl">
              Lĩnh vực hoạt động
            </SplitHeading>
            <p className="mt-4 text-[var(--muted)]">
              Công ty Cổ phần Khu công nghiệp Nam Tân Uyên tự hào là đơn vị tiên phong trong việc cung cấp hệ sinh thái hạ tầng công nghiệp toàn diện. Chúng tôi không chỉ mang đến mặt bằng sản xuất mà còn đồng hành cùng doanh nghiệp trên hành trình đầu tư và tăng trưởng bền vững.
            </p>
            <Link href="/tu-van-dau-tu" className="btn-primary mt-6">
              Xem tất cả <ArrowRight size={16} />
            </Link>
          </Reveal>

          {/* Bento media */}
          <div className="bento-grid">
            <Reveal className="bento-main">
              <Link
                href="/tu-van-dau-tu"
                className="group relative block h-full min-h-[280px] overflow-hidden rounded-[1.4rem] shadow-[var(--shadow)] md:min-h-full"
              >
                <Image
                  src="/assets/img/home/field-1.jpg"
                  alt="ĐẤT CÔNG NGHIỆP"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-sm font-bold tracking-wide text-white">
                  ĐẤT CÔNG NGHIỆP
                </span>
              </Link>
            </Reveal>
            <Reveal delay={0.08}>
              <Link
                href="/tu-van-dau-tu"
                className="group relative block aspect-[4/3] overflow-hidden rounded-[1.4rem] shadow-[var(--shadow)]"
              >
                <Image
                  src="/assets/img/home/field-2.jpg"
                  alt="NHÀ XƯỞNG CHO THUÊ"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-sm font-bold tracking-wide text-white">
                  NHÀ XƯỞNG CHO THUÊ
                </span>
              </Link>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="surface-panel flex h-full min-h-[140px] flex-col justify-center p-5">
                <p className="section-title text-2xl text-[var(--green-deep)]">996,36 Ha</p>
                <p className="mt-1 text-sm text-[var(--muted)]">Tổng diện tích hệ thống dự án</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <WaveDivider variant="leaf" from="transparent" to="var(--surface)" />

      <section className="section-shell bg-[var(--surface)] py-16 md:py-20">
        <OrganicDecor />
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SplitHeading className="text-2xl uppercase text-[var(--green-deep)] md:text-3xl">
              {site.name}
            </SplitHeading>
            <p className="mt-4">
              <strong className="text-[var(--orange)]">{site.name}</strong> là đơn vị thành viên của {site.parent}.
            </p>
            <p className="mt-3 text-[var(--muted)]">
              KCN NAM TÂN UYÊN chuyên đầu tư xây dựng và kinh doanh kết cấu hạ tầng kỹ thuật Khu công nghiệp; Đầu tư, xây dựng và kinh doanh nhà ở, cho thuê văn phòng, nhà xưởng, nhà kho, bến bãi; Thi công xây dựng công trình công nghiệp, dân dụng; Xây dựng công trình giao thông, cầu đường; Xây dựng công trình điện, thủy lợi; San lắp mặt bằng; Đầu tư tài chính; Thu gom và xử lý rác thải không độc hại; Xử lý nước thải.
            </p>
            <p className="mt-3 text-sm">
              <strong>Trụ sở chính:</strong> {site.addressShort}
              <br />
              <strong>Điện thoại:</strong> 0274.3652 330
              <br />
              <strong>Email:</strong> {site.emailInfo}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[1.5rem] shadow-[var(--shadow)] ring-1 ring-[rgba(8,95,43,0.08)]">
              <video
                controls
                preload="metadata"
                poster={site.videoPoster}
                className="aspect-video w-full bg-black"
              >
                <source src={site.videoUrl} type="video/mp4" />
                Trình duyệt không hỗ trợ video.
              </video>
            </div>
          </Reveal>
        </div>

        {/* Overlap image + vision stack */}
        <div className="wrap mt-16 grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="overlap-stack">
              <div className="overlap-back overflow-hidden rounded-[1.4rem]">
                <Image
                  src="/assets/img/gioi-thieu-2-6b6516c2fa.jpg"
                  alt="Nam Tân Uyên"
                  width={720}
                  height={560}
                  className="aspect-[5/4] w-full object-cover"
                />
              </div>
              <div className="overlap-front overflow-hidden rounded-[1.2rem] border-4 border-[var(--surface)]">
                <Image
                  src="/assets/img/home/about.jpg"
                  alt="Không gian Nam Tân Uyên"
                  width={480}
                  height={320}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
          <div className="space-y-4">
            {[
              {
                title: "Tầm nhìn",
                text: "Phấn đấu không ngừng để trở thành một trong những đơn vị đầu tư hạ tầng khu công nghiệp và dịch vụ số một tại Việt Nam. Xây dựng các khu công nghiệp phát triển cao, hài hòa gắn kết với hệ sinh thái bền vững.",
              },
              {
                title: "Sứ mệnh",
                text: "Đáp ứng nhu cầu phát triển của xã hội và nhà đầu tư trong ngoài nước với địa điểm đầu tư đầy đủ công năng, giúp doanh nghiệp phát triển bền vững và lâu dài.",
              },
              {
                title: "Giá trị cốt lõi",
                text: "Phát triển bền vững · Đổi mới & Hiệu quả · Minh bạch & trách nhiệm · Hợp tác & Hội nhập · Con người là trung tâm.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="surface-panel p-5 transition hover:-translate-y-0.5">
                  <h3 className="section-title text-xl text-[var(--green-dark)]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip from="var(--green-deep)" to="var(--green-deep)" />

      <section className="relative overflow-hidden bg-[var(--green-deep)] py-16 text-white md:py-20">
        <OrganicDecor className="opacity-40" />
        <div className="wrap relative z-[1]">
          <Reveal>
            <SplitHeading className="text-center text-3xl !text-white">
              Định hướng phát triển
            </SplitHeading>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {orientations.map((o, i) => (
              <Reveal key={o} delay={i * 0.05}>
                <div
                  className={`rounded-2xl border border-white/15 bg-white/5 p-5 text-center backdrop-blur ${
                    i % 2 ? "lg:mt-8" : "lg:mb-8"
                  }`}
                >
                  <div className="text-sm font-semibold">{o}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from="var(--green-deep)" />

      <section className="section-shell py-16 md:py-20">
        <OrganicDecor />
        <div className="wrap relative z-[1]">
          <Reveal>
            <SplitHeading className="text-center text-3xl text-[var(--green-deep)]">
              Chính sách phát triển bền vững
            </SplitHeading>
            <p className="mx-auto mt-4 max-w-3xl text-center text-[var(--muted)]">
              Trong quá trình hoạt động, Công ty luôn xác định bảo vệ môi trường, tăng trưởng xanh là một trong những trụ cột quan trọng trong chiến lược phát triển bền vững. Công ty đã ban hành chiến lược Tăng trưởng xanh và Phát triển bền vững giai đoạn 2023 – 2030, tầm nhìn đến năm 2050.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sustainCards.map((c, i) => (
              <Reveal key={c} delay={i * 0.04}>
                <div
                  className={`surface-panel p-5 text-sm font-medium ${
                    i === 0 || i === 5 ? "lg:col-span-1" : ""
                  } ${i % 3 === 1 ? "lg:translate-y-3" : ""}`}
                >
                  {c}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#064820_0%,#0a7a3a_55%,#0bb14b_100%)] py-16 text-white md:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-2">
          <Reveal>
            <Image
              src={site.logo}
              alt="Nam Tân Uyên"
              width={96}
              height={120}
              className="brightness-0 invert"
            />
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[financeStats.charterCapital, financeStats.revenue, financeStats.profit].map(
                (s) => (
                  <div key={s.label} className="rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
                    <div className="section-title text-3xl md:text-4xl">{s.value}</div>
                    <div className="text-xs uppercase tracking-wide text-white/80">{s.unit}</div>
                    <div className="mt-1 text-sm">{s.label}</div>
                  </div>
                ),
              )}
            </div>
            <p className="mt-4 text-sm text-white/80">
              (Cập nhật ngày {financeStats.updatedAt})
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center justify-between gap-3">
              <h2 className="section-title text-2xl">Tỷ lệ ngành nghề</h2>
              <span className="text-xs text-white/75">
                (Cập nhật ngày {financeStats.updatedAt})
              </span>
            </div>
            <div className="mt-4">
              <IndustryChart />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <OrganicDecor />
        <div className="wrap relative z-[1]">
          <Reveal>
            <SplitHeading className="mb-8 text-center text-3xl text-[var(--green-deep)]">
              Quan hệ cổ đông
            </SplitHeading>
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
            <Reveal>
              <div className="overflow-hidden rounded-[1.5rem] shadow-[var(--shadow)]">
                <Image
                  src="/assets/img/home/shareholder.jpg"
                  alt="Quan hệ cổ đông"
                  width={900}
                  height={640}
                  className="h-full min-h-[280px] object-cover"
                />
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {irHub.map((item, i) => (
                <Reveal key={item.href} delay={i * 0.05}>
                  <Link
                    href={item.href}
                    className={`group relative block overflow-hidden rounded-2xl ${
                      i === 0 ? "sm:col-span-2 aspect-[21/9]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 30vw"
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-black/65 p-3 text-xs font-bold uppercase tracking-wide text-white">
                      {item.label}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WaveDivider variant="leaf" />

      <section className="bg-[var(--surface)] py-16 md:py-20">
        <div className="wrap">
          <Reveal>
            <SplitHeading className="mb-8 text-center text-3xl text-[var(--green-deep)]">
              Thư viện đa phương tiện
            </SplitHeading>
          </Reveal>
          <div className="masonry-news">
            {newsItems.slice(0, 4).map((n, i) => (
              <Reveal key={n.href} delay={i * 0.05}>
                <a
                  href={n.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-panel block overflow-hidden transition hover:-translate-y-1"
                >
                  <Image
                    src={n.image}
                    alt={n.title}
                    width={480}
                    height={i % 2 === 0 ? 300 : 360}
                    className={`w-full object-cover ${i % 2 === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}`}
                  />
                  <div className="p-4">
                    <span className="text-xs font-bold uppercase text-[var(--green-dark)]">
                      TIN TỨC
                    </span>
                    <h3 className="mt-2 line-clamp-3 text-sm font-semibold">{n.title}</h3>
                    <div className="mt-3 flex justify-between text-xs text-[var(--muted)]">
                      <time>{n.date}</time>
                      <span>Xem thêm</span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          {videoItems[0] ? (
            <div className="mt-8 text-center">
              <Link href="/thu-vien/tin-video" className="btn-ghost">
                Xem tin video
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      <section className="overflow-hidden border-y border-[var(--line)] bg-[var(--bg-warm)] py-12">
        <div className="wrap">
          <h2 className="section-title mb-6 text-center text-2xl text-[var(--green-deep)]">
            Các công ty trong KCN Nam Tân Uyên
          </h2>
          <div className="flex flex-wrap justify-center gap-3" aria-hidden>
            {["NTC", "VRG", "ASIA", "TENANTS", "PARTNERS", "INVESTORS"].map((p) => (
              <div
                key={p}
                className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-2 text-sm font-semibold text-[var(--muted)]"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
