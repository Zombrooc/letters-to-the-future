"use client";

import signInAction from "../_actions/signInAction";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { signInSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function SigninForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async ({ email }) => {
    try {
      await signInAction(email);

      toast({
        title: "Magic Link Sent",
        description: "Check your email for the magic link to login",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john-doe@email.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-muted-foreground">
                {errors.email.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
