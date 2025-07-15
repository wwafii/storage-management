import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h1 style={{ fontSize: 80, color: "#e02424", marginBottom: 16 }}>404</h1>
      <p style={{ fontSize: 24, marginBottom: 24 }}>Halaman yang kamu cari tidak ditemukan.</p>
      <Link href="/">
        <button style={{ padding: "12px 24px", fontSize: 18, backgroundColor: "#2563eb", color: "#fff", borderRadius: 8, border: "none", cursor: "pointer" }}>
          Kembali ke Beranda
        </button>
      </Link>
    </div>
  );
}
