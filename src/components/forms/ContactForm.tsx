"use client";

import { FormEvent, useState } from "react";
import { RefreshCw } from "lucide-react";

function randomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 6; i += 1) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

export function ContactForm() {
  const [code, setCode] = useState("WS3K4N");
  const [message, setMessage] = useState<string | null>(null);

  const refresh = () => {
    setCode(randomCode());
    setMessage(null);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const captcha = String(data.get("Captcha") || "").trim().toUpperCase();
    if (captcha !== code.toUpperCase()) {
      setMessage("Mã xác thực không đúng.");
      setCode(randomCode());
      return;
    }
    setMessage("Cảm ơn bạn đã gửi phản ánh. Chúng tôi sẽ liên hệ lại sớm.");
    e.currentTarget.reset();
    setCode(randomCode());
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <h3 className="text-center text-lg font-bold uppercase text-[var(--ink)]">
        Gửi phản ánh, góp ý
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Họ và tên" name="Name" required placeholder="Nhập họ và tên" />
        <Field
          label="Số điện thoại"
          name="PhoneNumber"
          required
          placeholder="Nhập số điện thoại"
        />
      </div>
      <Field label="Email" name="Email" type="email" required placeholder="Nhập email" />
      <Field label="Địa chỉ" name="Address" placeholder="Nhập địa chỉ" />
      <Field label="Tiêu đề" name="Title" required placeholder="Nhập tiêu đề" />
      <div>
        <label htmlFor="description" className="mb-1 block text-sm font-medium">
          Nội dung<span className="text-red-600">(*)</span>
        </label>
        <textarea
          id="description"
          name="Description"
          required
          rows={4}
          placeholder="Nhập nội dung"
          className="w-full rounded-lg border border-[var(--line)] px-3 py-2 text-sm"
        />
      </div>
      <div>
        <label htmlFor="captcha" className="mb-1 block text-sm font-medium">
          Mã xác thực<span className="text-red-600">(*)</span>
        </label>
        <div className="flex flex-wrap items-center gap-3">
          <input
            id="captcha"
            name="Captcha"
            required
            autoComplete="off"
            placeholder="Nhập mã xác thực"
            className="min-w-[140px] flex-1 rounded-lg border border-[var(--line)] px-3 py-2 text-sm"
          />
          <div className="flex items-center gap-2 rounded-lg border border-[var(--line)] bg-white px-3 py-2">
            <span className="min-w-[90px] text-center text-lg font-bold tracking-[0.2em]" aria-live="polite">
              {code}
            </span>
            <button
              type="button"
              onClick={refresh}
              aria-label="Làm mới mã xác thực"
              className="text-[var(--green-dark)]"
            >
              <RefreshCw size={16} />
            </button>
          </div>
        </div>
      </div>
      {message ? (
        <p className="text-sm font-medium text-[var(--green-dark)]" role="status">
          {message}
        </p>
      ) : null}
      <button type="submit" className="btn-primary">
        Gửi
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  required,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) {
  const id = name.toLowerCase();
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium">
        {label}
        {required ? <span className="text-red-600">(*)</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[var(--line)] px-3 py-2 text-sm"
      />
    </div>
  );
}
