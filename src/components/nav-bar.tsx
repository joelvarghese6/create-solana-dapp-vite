import { Coins, Link } from "lucide-react"
//import { WalletButton } from "./solana/solana-provider"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
const links = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Accounts',
        href: '/accounts',
    },
]
export const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-4 py-2 bg-white border-b">
            <div className="flex items-center gap-2">
                <Coins size={24} />
                <h1 className="text-2xl font-bold">Finance</h1>
            </div>
            <div className="flex items-center gap-2">
                {links.map((link) => (
                    <Link to={link.href} key={link.href}>
                        {link.label}
                    </Link>
                ))}
            </div>
            <div>
                <WalletMultiButton />
            </div>
        </div>
    )
}