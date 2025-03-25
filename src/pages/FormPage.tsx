import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from '../../node_modules/@hookform/resolvers/zod/src/zod'
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"

// Define validation schema
const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    terms: z.boolean().refine((value) => value === true, { message: "You must accept the terms" }),
    dateOfBirth: z.date({ required_error: "Please select a date" }),
  });
  
  export default function FormPage() {
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: { name: "", terms: false, dateOfBirth: undefined },
    });
  
    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
    }
  
    return (
      <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Basic Form</h2>
  
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Checkbox Field */}
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-sm">Accept Terms & Conditions</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Date Picker Field */}
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant="outline" className="w-full">
                        {field.value ? format(field.value, "PPP") : "Pick a date"}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

  
            {/* Submit Button */}
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </Form>
      </div>
    )
  }
  