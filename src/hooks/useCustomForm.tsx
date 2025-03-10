import { DefaultValues, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema, infer as InferZodType } from "zod";

interface UseCustomFormProps<T extends Record<string, any>> {
  defaultValues: DefaultValues<T>;
  validationSchema: ZodSchema<T>;
}
const useCustomForm = <T extends ZodSchema>({
  defaultValues,
  validationSchema,
}: UseCustomFormProps<InferZodType<T>>) => {
  const formMethods = useForm<InferZodType<T>>({
    defaultValues,
    resolver: zodResolver(validationSchema),
  });

  return { ...formMethods };
};

export default useCustomForm;
