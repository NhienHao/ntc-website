"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

export default function Page() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMessage(
      "Chức năng đăng nhập doanh nghiệp sẽ được kết nối hệ thống. Vui lòng liên hệ quản trị viên.",
    );
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">
      <div
        className="absolute inset-0 bg-[var(--green)] bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/img/dang-nhap/bg-dn.jpg)" }}
        aria-hidden
      />
      <div className="relative z-[1] w-full max-w-[440px] rounded-2xl bg-white p-6 shadow-2xl md:p-8">
        <Link
          href="/"
          className="mb-4 inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--green-dark)]"
        >
          <ArrowLeft size={14} /> Về trang chủ
        </Link>
        <div className="mb-6 flex justify-center">
          <Image
            src="/assets/img/dang-nhap/logo-dn.png"
            alt="Công ty Cổ phần Khu công nghiệp Nam Tân Uyên"
            width={148}
            height={160}
            className="h-auto w-[148px]"
          />
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="UserName" className="mb-2 block text-sm font-semibold">
              Tên đăng nhập
            </label>
            <input
              id="UserName"
              name="UserName"
              required
              autoComplete="username"
              placeholder="Nhập MST doanh nghiệp"
              className="w-full rounded-lg border border-[var(--line)] px-3 py-3 text-sm"
            />
          </div>
          <div>
            <label htmlFor="Password" className="mb-2 block text-sm font-semibold">
              Mật khẩu
            </label>
            <div className="flex items-center rounded-lg border border-[var(--line)]">
              <input
                id="Password"
                name="Password"
                type={show ? "text" : "password"}
                required
                autoComplete="current-password"
                placeholder="Nhập mã bảo mật"
                className="w-full rounded-lg px-3 py-3 text-sm outline-none"
              />
              <button
                type="button"
                className="px-3 text-[var(--muted)]"
                aria-label={show ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                onClick={() => setShow((v) => !v)}
              >
                {show ? <Eye size={16} /> : <EyeOff size={16} />}
              </button>
            </div>
          </div>
          <label className="flex items-center gap-2 text-sm text-[var(--muted)]">
            <input type="checkbox" id="remember" name="remember" />
            Ghi nhớ đăng nhập
          </label>
          {message ? (
            <p className="text-sm text-[var(--green-dark)]" role="status">
              {message}
            </p>
          ) : null}
          <button type="submit" className="btn-primary w-full justify-center !rounded-lg">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}
