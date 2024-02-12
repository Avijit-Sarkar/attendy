import { cn } from "lib/utils";
import { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Icons } from "./Icons";
import { Label } from "./ui/Label";
import { RadioGroup, RadioGroupItem } from "./ui/RadioGroup";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";
import { Switch } from "./ui/Switch";

export function UserRegisterForm({ className, ...props }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isStudent, setIsStudent] = useState(false);

  const handleCheckboxChange = () => {
    setIsStudent(!isStudent);
  };

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <div className="flex items-center justify-center space-x-2">
              <Switch
                id="check"
                checked={isStudent}
                onCheckedChange={handleCheckboxChange}
              />
              <Label htmlFor="check">
                Create as {isStudent ? "Teacher" : "Student"}
              </Label>
            </div>
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="Full Name"
              type="name"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="Gender">
              Gender
            </Label>
            <RadioGroup
              defaultValue="comfortable"
              className="flex flex-wrap px-2 justify-between"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Others</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="university-name">
              University Name
            </Label>
            <Input
              id="university-name"
              placeholder="University Name"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="select-stream">
              Select Stream
            </Label>
            <Select>
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
                  <SelectItem value="cyber-security">Cyber Security</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {!isStudent ? (
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="admission-year">
                Admission Year
              </Label>
              <Input
                id="admission-year"
                placeholder="Admission Year"
                type="number"
                min={2000}
                max={2024}
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
          ) : null}
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="confirm-password">
              Confirm Password
            </Label>
            <Input
              id="confirm-password"
              placeholder="Confirm Password"
              type="confirm-password"
              autoCapitalize="none"
              autoComplete="confirm-password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  );
}
