import FormInput from "@/components/custom/FormInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useCustomForm from "@/hooks/useCustomForm";
import { loginSchema } from "@/lib/validation";
import { LoginFormValues } from "@/types";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Divider from "@/components/custom/Divider";

const Login = () => {
  const formMethods = useCustomForm({
    defaultValues: { email: "", password: "" },
    validationSchema: loginSchema,
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Login Data--->", data);
  };

  return (
    <div className="w-full p-6 ">
      <div className=" mb-6">
        <div className="text-left mb-6">
          <h2 className="text-2xl font-semibold mb-2 dark:text-amber-800">
            Login to your account
          </h2>
          <p>
            <span className="text-gray-400">Don't have an account?</span> Sign
            up
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Button variant="outline" className="w-1/2 flex items-center justify-center">
            <FcGoogle />
            Sign in with Google
          </Button>
          <Button variant="outline" className="w-1/2 flex">
            <BsFacebook />
            Sign in with Facebook
          </Button>
        </div>
        <Divider text="OR" />
      </div>
      <div>
        <Form {...formMethods}>
          <form
            onSubmit={formMethods.handleSubmit(onSubmit)}
            className="space-y-4 text-left"
          >
            <FormInput
              control={formMethods.control}
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your username"
              description="This is your Official mail id."
            />
            <FormInput
              control={formMethods.control}
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <Button type="submit" className="w-full mt-2">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
