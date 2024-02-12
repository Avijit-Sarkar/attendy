import { Outlet } from "react-router-dom";
import { Separator } from "./ui/Separator";

export default function ProfileLayout() {
  return (
    <section class="container -mt-8 md:-mt-16 max-w-screen-xl mx-auto px-4">
      <div className="space-y-6 md:p-10 pb-16 block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <div className="flex-1 lg:max-w-2xl">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
}
