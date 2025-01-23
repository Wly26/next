"use client"

export default function webpagesLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        {children}
      </div>
    );
  }