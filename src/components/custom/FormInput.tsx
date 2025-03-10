import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control } from "react-hook-form";

interface FormInputProps {
  control: Control<any>;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  description?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  control,
  name,
  label,
  type = "text",
  placeholder,
  description,
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input type={type} placeholder={placeholder} {...field} />
        </FormControl>
        {description && <FormDescription className="text-xs">{description}</FormDescription>}
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormInput;
