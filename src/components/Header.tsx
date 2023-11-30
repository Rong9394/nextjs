import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center py-4 px-7">
            <Link href="/"> Home Page</Link>
            <Link href="/posts">Blocks</Link>
        </header>
    );
}