import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-neutral-800 gap-6">
      <h1 className="text-3xl">404 - Page Not Found</h1>
      <p className="text-sm">The page you are looking for does not exist</p>
      <Link
        href={"/"}
        className="text-sm bg-emerald-300 px-4 py-2 rounded-full hover:bg-emerald-200 hover:text-neutral-700 transition-colors duration-200"
      >
        Navigate to app
      </Link>
    </div>
  );
};

export default NotFoundPage;
