import Link from "next/link"
import Image from "next/image"

const LogoLightSrc = "/assets/images/icon/1024x1024/1024X1024_white.png"
const LogoDarkSrc = "/assets/images/icon/1024x1024/1024X1024_black.png"
export function Footer() {
    const isDarkTheme = true
  return (
    <footer className="bg-muted py-6 md:py-12 w-full">
      <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image src={isDarkTheme? LogoDarkSrc:LogoLightSrc} width={64} height={64} alt="Props Lab Logo" />
          <span className="text-lg font-semibold">Props Lab</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link href="/team" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About the Team
          </Link>
          <Link href="/join" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Join
          </Link>
        </nav>
        <p className="text-xs text-muted-foreground">&copy; 2024 Props Lab. All rights reserved.</p>
      </div>
    </footer>
  )
}
