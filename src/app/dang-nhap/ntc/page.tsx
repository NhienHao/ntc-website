import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description:
    "Đăng nhập Hệ thống quản lý văn bản — Tập đoàn Công nghiệp Cao su Việt Nam.",
};

export default function Page() {
  return (
    <div className="fixed inset-0 overflow-auto bg-[radial-gradient(ellipse_at_center,#3876bb_0%,#0c498d_100%)]">
      <div className="mx-auto flex min-h-full w-full max-w-[1000px] items-center px-4 py-10">
        <div className="grid w-full items-center gap-8 md:grid-cols-2">
          <div className="text-center">
            <Image
              src="/assets/img/dang-nhap/logo-ntc.png"
              alt="Vietnam Rubber Group"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-5 text-xl font-bold uppercase leading-tight text-[#fdfa00]">
              Hệ thống quản lý văn bản
              <span className="mt-1 block text-base font-normal text-white">
                TẬP ĐOÀN CÔNG NGHIỆP CAO SU VIỆT NAM
              </span>
            </p>
            <p className="mt-3 text-sm text-white">
              Số điện thoại hỗ trợ kỹ thuật: {site.ntcSupportPhone}
            </p>
          </div>
          <section className="rounded bg-white p-7 shadow-lg md:p-8">
            <h1 className="mb-6 text-center text-3xl font-normal text-[#333]">
              Đăng nhập
            </h1>
            <form method="post" action={site.ntcLoginAction} className="space-y-4">
              <div>
                <label htmlFor="_58_login" className="mb-1 block text-[15px]">
                  Tên hiển thị
                </label>
                <input
                  className="w-full rounded-md border border-[#ccc] p-2 text-sm"
                  id="_58_login"
                  name="_58_login"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="_58_password" className="mb-1 block text-[15px]">
                  Mật khẩu
                </label>
                <input
                  className="w-full rounded-md border border-[#ccc] p-2 text-sm"
                  id="_58_password"
                  name="_58_password"
                  type="password"
                />
              </div>
              <label className="flex items-center gap-2 text-sm" htmlFor="_58_rememberMeCheckbox">
                <input id="_58_rememberMeCheckbox" name="_58_rememberMe" type="checkbox" />
                Ghi nhớ tôi
              </label>
              <button
                type="submit"
                className="rounded border border-black/10 bg-gradient-to-b from-[#54aaff] to-[#4a96e8] px-4 py-2 text-sm text-white"
              >
                Đăng nhập
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
