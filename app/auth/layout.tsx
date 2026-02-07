import AuthLayout from "@/features/auth/components/auth-layout"
import Footer from "@/features/footer/components/footer"

export default function AuthPageLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="flex min-h-screen bg-background">
      <main className="flex-1 overflow-auto">
        <AuthLayout title="Customer Relationship Management" description="Manager your Deals, Save you contact, and Capture notes">
          {children}
        </AuthLayout>
        <Footer />
      </main>
    </div>
  )
}
