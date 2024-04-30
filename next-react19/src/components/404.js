import Link from "next/link"


export default function NotFound() {
  return (<section data-cy="404-page">
    <p>Ooops! Unexistent link</p><span><Link href="/">Return to home</Link></span>
  </section >
  )
}