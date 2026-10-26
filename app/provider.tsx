import Header from "@/app/components/header";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}