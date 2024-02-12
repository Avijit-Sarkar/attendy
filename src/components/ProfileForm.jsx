import { useForm } from "react-hook-form";
import { Button } from "./ui/Button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/Form";
import { Input } from "./ui/Input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";

export default function ProfileForm() {
  function handleformsubmit() {}
  const form = useForm();

  return (
    <Form {...form}>
      <form onSubmit={handleformsubmit()} className="space-y-8">
        <FormField
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Full Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="university-name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>University Name</FormLabel>
              <FormControl>
                <Input placeholder="University Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="university-name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Stream</FormLabel>
              <FormControl>
                <Select {...field}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Stream" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Stream</SelectLabel>
                      <SelectItem value="internet-of-things">
                        Internet of Things
                      </SelectItem>
                      <SelectItem value="computer-science">
                        Computer Science
                      </SelectItem>
                      <SelectItem value="blockchain-technology">
                        Blockchain Technology
                      </SelectItem>
                      <SelectItem value="cyber-security">
                        Cyber Security
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="admission-year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>University Name</FormLabel>
              <FormControl>
                <Input
                  id="admission-year"
                  placeholder="Admission Year"
                  type="number"
                  min={2000}
                  max={2024}
                  autoCapitalize="none"
                  autoCorrect="off"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Update profile
        </Button>
      </form>
    </Form>
  );
}
