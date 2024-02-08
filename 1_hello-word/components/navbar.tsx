import Link from "next/link"
export default function Navbar(){
    return(
        <ul className="navbar">
        <li>
            <Link href="/">
                Home
            </Link>
        </li>
              
        <li>
          <Link href="/products">
            Products
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            Sobre
          </Link>
        </li>                 
      </ul>
    )
}