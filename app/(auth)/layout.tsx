const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-h-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">{children}</div>
  );
};

export default AuthLayout;
