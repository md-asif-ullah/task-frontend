import SingUpForm from "@/components/forms/SingUpForm";
import Image from "next/image";

const SingUp = () => {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
      <div className="hidden lg:block relative xl:mr-32">
        <Image
          src="/auth/singup.png"
          alt="sign up image"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className=""
          priority
        />
      </div>

      {/* Right side (Form) */}
      <section className="flex items-center justify-center px-6 py-12 xl:mr-10">
        <div className="w-full max-w-xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">Sign Up</h2>
            <p className="text-[#667085] mt-2">
              To Create Account, Please Fill in the From Below.
            </p>
          </div>
          <SingUpForm />
        </div>
      </section>
    </main>
  );
};

export default SingUp;
