export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      home 根目录页面
      {children}
    </div>
  );
}
