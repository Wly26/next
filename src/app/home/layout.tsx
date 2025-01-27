export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      layout-home根目录页面
      {children}
    </div>
  );
}
