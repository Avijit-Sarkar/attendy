import { useForm } from "react-hook-form";
import { Button } from "./ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/Form";
import { Input } from "./ui/Input";

export default function ProfileForm() {
  function handleformsubmit() {}
  const form = useForm();

  return (
    <Form {...form}>
      <form onSubmit={handleformsubmit()} className="space-y-8">
        <FormField
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="button" variant="outline" className="mt-2">
          Add URL
        </Button>
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  );
}
